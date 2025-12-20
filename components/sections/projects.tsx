"use client"
import { cvData } from "@/lib/cv-data"
import type React from "react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

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
      {/* 1. SEKSI PROYEK ADMINISTRASI */}
      <h2 className="text-2xl font-semibold mb-6">Proyek Administrasi</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-12">
        {(cvData as any).adminprojects?.map((p: any, i: number) => (
          <TiltCard key={i}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-md border mt-auto">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.alt || p.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {p.link && (
                  <Link href={p.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Lihat Proyek
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>

      {/* 2. SEKSI PROYEK ANALISIS DATA */}
      <h2 className="text-2xl font-semibold mb-6">Proyek Analisa Data</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-12">
        {(cvData as any).dataprojects?.map((p: any, i: number) => (
          <TiltCard key={i}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-md border mt-auto">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.alt || p.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {p.link && (
                  <Link href={p.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Lihat Proyek
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>

      {/* 3. SEKSI VISUALISASI INFORMASI */}
      <h2 className="text-2xl font-semibold mb-6">Proyek Visualisasi Informasi</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {(cvData as any).visualisasiprojects?.map((p: any, i: number) => (
          <TiltCard key={i}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-md border mt-auto">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.alt || p.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {p.link && (
                  <Link href={p.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Lihat Proyek
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
