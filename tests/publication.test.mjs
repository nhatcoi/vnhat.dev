import { test } from "node:test";
import assert from "node:assert/strict";
import { isPublished } from "../lib/publication.ts";
const time = "2026-10-02T06:00:00+07:00";
test("scheduled article appears at 06:00 Vietnam, never before", () => {
  const post = { status: "scheduled", publishedAt: time };
  assert.equal(isPublished(post, new Date("2026-10-01T22:59:59Z")), false);
  assert.equal(isPublished(post, new Date("2026-10-01T23:00:00Z")), true);
});
test("drafts and invalid dates stay private", () => {
  assert.equal(
    isPublished({ status: "draft", publishedAt: time }, new Date("2027-01-01")),
    false,
  );
  assert.equal(
    isPublished({ status: "published", publishedAt: "invalid" }),
    false,
  );
});
test("future timestamps cannot bypass the gate through published status", () => {
  assert.equal(
    isPublished(
      { status: "published", publishedAt: time },
      new Date("2026-10-01"),
    ),
    false,
  );
});
