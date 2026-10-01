import type { Project } from "./projects";

/** Vietnamese taglines keyed by project slug. Projects without an entry fall back to English. */
export const projectsVi: Record<string, Pick<Project, "tagline">> = {
  necom: { tagline: "Vận hành cả cửa hàng từ một backend" },
  openpka: { tagline: "Chương trình, con người và tài chính trong một hệ thống" },
  jkauto: { tagline: "IDE kiểm thử tự động biết suy nghĩ cùng bạn" },
  procman: { tagline: "Một tệp. Mọi tiến trình dev." },
  jink: { tagline: "Gõ ở bất cứ đâu. Trau chuốt bằng AI. Chèn." },
  "aegis-flow": { tagline: "Chứng minh luồng thanh toán trước khi phát hành" },
  nozie: { tagline: "Khám phá, lưu và xem phim" },
  "thesis-hub": { tagline: "Khóa luận tốt nghiệp, từ đầu đến cuối" },
  kb: { tagline: "Ghi chú của bạn, được lập chỉ mục và trả lời được" },
};
