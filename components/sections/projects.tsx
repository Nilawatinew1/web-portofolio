"use client"
import { cvData } from "@/lib/cv-data"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function TiltCard(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      onMouseMove={(e) => {
        const t = e.currentTarget
        const rect = t.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        t.style.setProperty("--rx", `${(y / rect.height - 0.5) * 6}deg`)
        t.style.setProperty("--ry", `${(x / rect.width - 0.5) * -6}deg`)
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget
        t.style.setProperty("--rx", "0deg")
        t.style.setProperty("--ry", "0deg")
      }}
      className="transform-gpu transition-transform"
      style={{
        transform: "perspective(800px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))",
      }}
    />
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Proyek & Studi Kasus</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Contoh karya dan inisiatif yang merepresentasikan keahlian administrasi dan operasional.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cvData.projects.map((p, i) => (
          <TiltCard key={i}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="leading-relaxed">{p.summary}</p>
                <p className="text-sm text-muted-foreground">Dampak: {p.impact}</p>
                <img
                  src={`/placeholder.svg?height=140&width=480&query=diagram%20excel%20atau%20inventaris`}
                  alt=""
                  className="mt-2 w-full rounded-md border"
                />
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
