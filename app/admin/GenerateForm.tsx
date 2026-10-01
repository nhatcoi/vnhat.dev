"use client";
import { useActionState } from "react";
import { generate } from "./actions";

export function GenerateForm({ ready }: { ready: boolean }) {
  const [state, action, pending] = useActionState(generate, undefined);
  return (
    <form action={action} className="admin-form">
      <textarea
        name="input"
        rows={6}
        required
        placeholder="Dán một hoặc nhiều link (tối đa 5) và/hoặc văn bản thô. Agent sẽ tự lấy nội dung, trích xuất ý chính, chọn danh mục và thẻ, dựng mục lục, viết bản EN + VI rồi tự kiểm tra thông tin."
      />
      <input name="hint" placeholder="Gợi ý góc nhìn / giọng văn (không bắt buộc)" />
      <label className="admin-check">
        <input type="checkbox" name="auto" /> Tự đăng nếu qua bước kiểm tra (nếu không, lưu bản nháp)
      </label>
      <button className="admin-btn" disabled={pending || !ready}>
        {pending ? "Agent đang làm việc… (30–120 giây)" : "Tạo bài"}
      </button>
      {!ready && <p className="admin-warn">Chưa cấu hình OPENAI_API_KEY / OPENAI_MODEL.</p>}
      {state?.error && <p className="admin-error">{state.error}</p>}
    </form>
  );
}
