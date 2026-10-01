import { test } from "node:test";
import assert from "node:assert/strict";
import { parseSections, serializeSections, paragraphs } from "../lib/sections.ts";
import { createToken, verifyToken, checkPassword } from "../lib/session.ts";
import { isPrivateAddress, assertPublicUrl } from "../lib/agent/net.ts";
import { htmlToText, extractTitle } from "../lib/agent/html.ts";

test("sections round-trip and drop empty ones", () => {
  const text = "## One\nfirst\n\nsecond\n\n## Two\nbody\n\n## Empty\n";
  const s = parseSections(text);
  assert.deepEqual(s, [
    { heading: "One", body: "first\n\nsecond" },
    { heading: "Two", body: "body" },
  ]);
  assert.deepEqual(parseSections(serializeSections(s)), s);
  assert.deepEqual(paragraphs("a\n\n b \n\n\nc"), ["a", "b", "c"]);
});

test("session tokens verify, expire and reject tampering", () => {
  const t = createToken("hunter2-long", undefined, 1_000_000);
  assert.equal(verifyToken(t, "hunter2-long", undefined, 1_000_000), true);
  assert.equal(verifyToken(t, "other-password", undefined, 1_000_000), false);
  assert.equal(verifyToken(t, "hunter2-long", undefined, 1_000_000 + 13 * 3600_000), false);
  const [exp, sig] = t.split(".");
  assert.equal(verifyToken(`${Number(exp) + 99999}.${sig}`, "hunter2-long", undefined, 1_000_000), false);
  assert.equal(verifyToken(undefined, "hunter2-long"), false);
  assert.equal(verifyToken(t, "", undefined, 1_000_000), false);
});

test("password check", () => {
  assert.equal(checkPassword("abc12345", "abc12345"), true);
  assert.equal(checkPassword("abc12346", "abc12345"), false);
  assert.equal(checkPassword("", ""), false);
});

test("private and loopback addresses are blocked", async () => {
  for (const ip of ["127.0.0.1", "10.1.2.3", "192.168.0.5", "172.16.0.1", "169.254.169.254", "::1", "fd00::1", "::ffff:127.0.0.1", "0.0.0.0"])
    assert.equal(isPrivateAddress(ip), true, ip);
  for (const ip of ["8.8.8.8", "1.1.1.1", "172.32.0.1", "2606:4700::1111"])
    assert.equal(isPrivateAddress(ip), false, ip);
  await assert.rejects(assertPublicUrl("http://127.0.0.1:3000/x"));
  await assert.rejects(assertPublicUrl("http://[::1]/"));
  await assert.rejects(assertPublicUrl("file:///etc/passwd"));
});

test("html extraction keeps the article and drops chrome", () => {
  const html = `<html><head><title>My &amp; Title</title><script>evil()</script></head>
    <body><nav>menu</nav><article><h1>Head</h1><p>One &lt;two&gt;</p><p>Three</p></article><footer>f</footer></body></html>`;
  assert.equal(extractTitle(html), "My & Title");
  const text = htmlToText(html);
  assert.match(text, /Head\nOne <two>\nThree/);
  assert.doesNotMatch(text, /menu|evil|footer/);
});
