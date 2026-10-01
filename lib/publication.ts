export type Publication = {
  status: "published" | "scheduled" | "draft";
  publishedAt: string;
};
/** A single predicate keeps listings, direct links and feeds consistent. */
export function isPublished(
  post: Publication,
  now: Date = new Date(),
): boolean {
  const date = Date.parse(post.publishedAt);
  return (
    post.status !== "draft" && Number.isFinite(date) && date <= now.getTime()
  );
}
