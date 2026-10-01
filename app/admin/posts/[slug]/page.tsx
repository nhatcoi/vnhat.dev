import Link from "next/link";
import { notFound } from "next/navigation";
import { PostEditor } from "../PostEditor";
import { removePost, setStatus } from "../../actions";
import { Article } from "@/components/studio/Article";
import { requireAdmin } from "@/lib/admin-auth";
import { getDbEntry } from "@/lib/db";
import { getDict } from "@/lib/dict";
import { localize } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  await requireAdmin();
  const { slug } = await params;
  const e = getDbEntry(slug);
  if (!e) notFound();
  const { saved } = await searchParams;
  const live = e.status === "published";
  return (
    <main className="admin-wrap">
      <header className="admin-head">
        <Link href="/admin">← Admin</Link>
        <div className="admin-actions">
          {live && <Link href={`/en/writing/${e.slug}`}>Xem bài ↗</Link>}
          <form action={setStatus}>
            <input type="hidden" name="slug" value={e.slug} />
            <input type="hidden" name="to" value={live ? "draft" : "published"} />
            <button className="admin-btn">{live ? "Gỡ về nháp" : "Đăng ngay"}</button>
          </form>
          <form action={removePost}>
            <input type="hidden" name="slug" value={e.slug} />
            <button className="admin-btn danger">Xóa</button>
          </form>
        </div>
      </header>
      {saved && <p className="admin-ok">Đã lưu.</p>}
      {e.warnings.length > 0 && (
        <div className="admin-warn">
          <b>Agent kiểm tra thông tin phát hiện:</b>
          <ul>
            {e.warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      )}
      <PostEditor e={e} />
      <h2>Xem trước</h2>
      <div className="admin-preview">
        <Article post={localize(e, "en")} lang="en" t={getDict("en").writing} home={false} />
      </div>
      {e.vi && (
        <div className="admin-preview">
          <Article post={localize(e, "vi")} lang="vi" t={getDict("vi").writing} home={false} />
        </div>
      )}
    </main>
  );
}
