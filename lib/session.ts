import { createHmac, createHash, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "admin_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 12;

function key(password: string, secret?: string) {
  return createHash("sha256")
    .update(`admin-session:${secret || password}`)
    .digest();
}

function mac(exp: string, password: string, secret?: string) {
  return createHmac("sha256", key(password, secret)).update(exp).digest("hex");
}

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function checkPassword(input: string, password: string) {
  // Hash first so the comparison is constant-length regardless of input.
  const h = (s: string) => createHash("sha256").update(s).digest("hex");
  return password.length > 0 && safeEqual(h(input), h(password));
}

export function createToken(password: string, secret?: string, now = Date.now()) {
  const exp = String(Math.floor(now / 1000) + SESSION_TTL_SECONDS);
  return `${exp}.${mac(exp, password, secret)}`;
}

export function verifyToken(
  token: string | undefined,
  password: string,
  secret?: string,
  now = Date.now(),
) {
  if (!token || !password) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp)) return false;
  if (Number(exp) * 1000 < now) return false;
  return safeEqual(sig, mac(exp, password, secret));
}
