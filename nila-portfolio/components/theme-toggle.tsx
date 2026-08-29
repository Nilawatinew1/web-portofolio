"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches
    const initialDark = stored ? stored === "dark" : prefersDark
    setIsDark(initialDark)
    if (initialDark) document.documentElement.classList.add("dark")
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <Button variant="ghost" aria-label="Toggle theme" onClick={toggle} className="h-9 w-9 p-0">
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
