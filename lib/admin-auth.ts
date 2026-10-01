import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifyToken } from "./session";

export const adminPassword = () => process.env.ADMIN_PASSWORD ?? "";
export const adminSecret = () => process.env.ADMIN_SESSION_SECRET || undefined;
export const adminConfigured = () => adminPassword().length >= 8;

export async function isAdmin() {
  if (!adminConfigured()) return false;
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return verifyToken(token, adminPassword(), adminSecret());
}

/** Gate for admin pages AND server actions (actions are public endpoints). */
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login");
}
