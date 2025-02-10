"use client"

import { Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "./theme-provider"

export function Header() {
  const { toggleTheme } = useTheme()

  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="text-2xl font-bold">
        David Demarqui
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
          About
        </Link>
        <a
          href="https://x.com/DavidDemarqui"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300"
        >
          Follow me
        </a>
        <button onClick={toggleTheme} className="p-2 hover:text-gray-700 dark:hover:text-gray-400 rounded-full">
          <Sun className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}

