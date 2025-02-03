import { createClient } from "@supabase/supabase-js"

export type Post = {
  id: string
  title: string
  slug: string
  content: string
  views: number
  created_at: string
}

// Create Supabase client
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

