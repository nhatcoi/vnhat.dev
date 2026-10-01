"use client";
import { useActionState } from "react";
import { savePost } from "../actions";
import type { Entry } from "@/lib/entries";
import { TOPICS } from "@/lib/topics";
import { serializeSections } from "@/lib/sections";

const local = (iso: string) => new Date(Date.parse(iso) + 7 * 3600_000).toISOString().slice(0, 16);

export function PostEditor({ e }: { e: Entry }) {
  const [state, action, pending] = useActionState(savePost, undefined);
  const copy = (p: "en" | "vi", c = e[p]) => (
    <fieldset>
      <legend>{p === "en" ? "English" : "Tiếng Việt"}</legend>
      <input name={`${p}_title`} defaultValue={c?.title} placeholder="Tiêu đề" />
      <textarea name={`${p}_excerpt`} rows={2} defaultValue={c?.excerpt} placeholder="Tóm tắt" />
      <textarea name={`${p}_sections`} rows={16} defaultValue={c ? serializeSections(c.sections) : ""} placeholder={"## Tiêu đề mục\nNội dung… (đoạn cách nhau bằng dòng trống)"} />
    </fieldset>
  );
  return (
    <form action={action} className="admin-form">
      <input type="hidden" name="slug" value={e.slug} />
      <div className="admin-row">
        <select name="category" defaultValue={e.category}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select name="status" defaultValue={e.status}>
          <option value="draft">draft</option>
          <option value="scheduled">scheduled</option>
          <option value="published">published</option>
        </select>
        <input name="publishedAt" type="datetime-local" defaultValue={local(e.publishedAt)} title="Giờ Việt Nam (UTC+7)" />
        <input name="visual" defaultValue={e.visual} maxLength={14} title="Chữ trên thẻ" />
      </div>
      <input name="tags" defaultValue={e.tags.join(", ")} placeholder="thẻ, phân cách bằng dấu phẩy" />
      {copy("en")}
      {copy("vi")}
      <fieldset>
        <legend>Nguồn (mỗi dòng: url | nhãn EN | nhãn VI)</legend>
        <textarea name="sources" rows={3} defaultValue={e.sources.map((s) => `${s.url} | ${s.label.en} | ${s.label.vi}`).join("\n")} />
      </fieldset>
      <button className="admin-btn" disabled={pending}>
        {pending ? "Đang lưu…" : "Lưu thay đổi"}
      </button>
      {state?.error && <p className="admin-error">{state.error}</p>}
    </form>
  );
}
