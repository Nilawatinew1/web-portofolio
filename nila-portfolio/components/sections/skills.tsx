"use client"
import { useMemo, useState } from "react"
import { cvData } from "@/lib/cv-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = ["Semua", ...cvData.skills.map((s) => s.category)]

export function SkillsSection() {
  const [cat, setCat] = useState<string>("Semua")

  const items = useMemo(() => {
    if (cat === "Semua") return cvData.skills.flatMap((s) => s.items.map((i) => ({ category: s.category, item: i })))
    const found = cvData.skills.find((s) => s.category === cat)
    return (found?.items || []).map((i) => ({ category: cat, item: i }))
  }, [cat])

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-pretty">Keterampilan</h2>
      </header>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-3 py-1 text-sm transition
            ${c === cat ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground"}`}
            aria-pressed={c === cat}
            aria-label={`Filter kategori ${c}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ category, item }) => (
          <Card key={category + item} className="transition hover:shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{item}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="rounded-md">
                {category}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
