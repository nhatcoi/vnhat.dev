import Link from "next/link";
import { GenerateForm } from "./GenerateForm";
import { logout } from "./actions";
import { llmConfigured } from "@/lib/agent/llm";
import { requireAdmin } from "@/lib/admin-auth";
import { allEntries, formatDate } from "@/lib/posts";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export default async function Page() {
  await requireAdmin();
  const entries = allEntries().sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  return (
    <main className="admin-wrap">
      <header className="admin-head">
        <h1>Admin</h1>
        <form action={logout}>
          <button className="admin-link">Đăng xuất</button>
        </form>
      </header>
      <section>
        <h2>Vibe post</h2>
        <GenerateForm ready={llmConfigured()} />
      </section>
      <section>
        <h2>Bài viết</h2>
        <table className="admin-table">
          <tbody>
            {entries.map((e) => (
              <tr key={e.slug}>
                <td>
                  {e.origin === "db" ? (
                    <Link href={`/admin/posts/${e.slug}`}>{e.en.title}</Link>
                  ) : (
                    e.en.title
                  )}
                  {e.warnings.length > 0 && <span className="admin-flag"> ⚠ {e.warnings.length}</span>}
                </td>
                <td>{e.category}</td>
                <td>{e.status}</td>
                <td>{formatDate(e.publishedAt)}</td>
                <td>{e.origin === "static" ? "file" : "db"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
