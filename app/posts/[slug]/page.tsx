import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  // Format to "Month Day, Year"
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate years since the date
  const yearsAgo = now.getFullYear() - date.getFullYear();

  return `${formattedDate} ( ${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago )`;
}


async function getPost(slug: string) {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    return null;
  }

  // Increment view count
  await supabase
    .from("posts")
    .update({ views: post.views + 1 })
    .eq("id", post.id);

  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-2xl mb-0">{post.title}</h1>
      <div className="grid grid-cols-2 w-full">
        <span className="text-xs text-zinc-500">
          @DaviDemarqui | {formatDate(post.created_at)}
        </span>
        <span className="text-xs text-zinc-500 text-right">{post.views} views</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
