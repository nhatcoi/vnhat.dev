import { redirect } from "next/navigation";
import { adminConfigured, isAdmin } from "@/lib/admin-auth";
import { LoginForm } from "./LoginForm";

export default async function Page() {
  if (await isAdmin()) redirect("/admin");
  return (
    <main className="admin-narrow">
      <h1>Admin</h1>
      {!adminConfigured() && (
        <p className="admin-warn">Chưa đặt ADMIN_PASSWORD (≥ 8 ký tự) trong môi trường.</p>
      )}
      <LoginForm />
    </main>
  );
}
