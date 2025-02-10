import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Metadata } from "next";

// Types for our post data
type Post = {
  id: number;
  title: string;
  content: string;
  views: number;
  created_at: string;
  slug: string;
};

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
  return `${formattedDate} (${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago)`;
}

async function getPost(slug: string): Promise<Post | null> {
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

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.'
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} by DaviDemarqui`,
    openGraph: {
      title: post.title,
      description: `Read ${post.title} by DaviDemarqui`,
      type: 'article',
      authors: ['DaviDemarqui'],
    },
  };
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
    <article className="prose prose-zinc dark:prose-invert max-w-none py-5">
      <h1 className="text-2xl mb-0">{post.title}</h1>
      <div className="my-5 grid grid-cols-2 w-full">
        <span className="text-xs text-zinc-500">
          @DaviDemarqui | {formatDate(post.created_at)}
        </span>
        <span className="text-xs text-zinc-500 text-right">
          {post.views.toLocaleString()} views
        </span>
      </div>
      <MarkdownRenderer content={post.content} />
    </article>
  );
}