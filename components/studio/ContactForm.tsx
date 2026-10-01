"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { MESSENGER, TELEGRAM } from "@/lib/contact";

const icon = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "currentColor" };

export function ContactForm({
  placeholder,
  send,
}: {
  placeholder: string;
  send: string;
}) {
  const [text, setText] = useState("");
  // Telegram deep links accept prefilled text; Messenger links cannot.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    window.open(
      `https://t.me/${TELEGRAM}?text=${encodeURIComponent(text.trim())}`,
      "_blank",
      "noopener",
    );
  };
  return (
    <div className="contact-box">
      <form onSubmit={submit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <button type="submit" aria-label={send}>
          <Send size={18} />
        </button>
      </form>
      <a href={`https://m.me/${MESSENGER}`} aria-label="Messenger">
        <svg {...icon} aria-hidden="true">
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.16.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.98-.88c.17-.07.35-.09.53-.04.91.25 1.88.38 2.9.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2Zm6 7.46-2.93 4.65a1.5 1.5 0 0 1-2.17.4l-2.33-1.75a.6.6 0 0 0-.72 0l-3.15 2.39c-.42.32-.97-.19-.69-.64l2.93-4.65a1.5 1.5 0 0 1 2.17-.4l2.33 1.75a.6.6 0 0 0 .72 0l3.15-2.39c.42-.32.97.19.69.64Z" />
        </svg>
      </a>
      <a href={`https://t.me/${TELEGRAM}`} aria-label="Telegram">
        <svg {...icon} aria-hidden="true">
          <path d="M21.94 4.66a1.2 1.2 0 0 0-1.64-1.1L2.9 10.3c-1.1.43-1.08 1.99.03 2.39l4.4 1.58 1.7 5.4c.24.78 1.22 1.02 1.8.45l2.45-2.4 4.5 3.3c.75.55 1.82.14 2.01-.77l2.65-14.6ZM9.1 13.6l8.2-5.05c.15-.09.3.12.17.24l-6.8 6.1a.9.9 0 0 0-.28.55l-.25 2.3a.15.15 0 0 1-.29.02l-.75-4.16Z" />
        </svg>
      </a>
    </div>
  );
}
