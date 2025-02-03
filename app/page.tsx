"use client"
import { PostList } from "@/components/post-list"
import { supabase, type Post } from "@/lib/supabase"
import { useEffect, useState } from "react"

async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching posts:", error)
    return []
  }

  return data
}

// Home should not be async if it's a Client Component
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return <PostList posts={posts} />
}
