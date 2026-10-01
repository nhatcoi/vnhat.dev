"use client";
import { useActionState } from "react";
import { login } from "../actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="admin-form">
      <input name="password" type="password" placeholder="Mật khẩu" autoComplete="current-password" required autoFocus />
      <button className="admin-btn" disabled={pending}>
        {pending ? "Đang kiểm tra…" : "Đăng nhập"}
      </button>
      {state?.error && <p className="admin-error">{state.error}</p>}
    </form>
  );
}
