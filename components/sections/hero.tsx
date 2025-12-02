"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ArrowDownRight, Download, Linkedin } from "lucide-react"

function useTypewriter(words: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1)
          setText(next)
          if (next === word) setTimeout(() => setDeleting(true), pause)
        } else {
          const next = word.slice(0, text.length - 1)
          setText(next)
          if (next.length === 0) {
            setDeleting(false)
            setIndex((i) => (i + 1) % words.length)
          }
        }
      },
      deleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, index])

  return text + (deleting ? "" : "|")
}

export function HeroSection() {
  const typed = useTypewriter(["Administrasi Data", "Manajemen Inventaris", "Excel Enthusiast", "Tech-Driven"])

  return (
    <section id="about" className="relative isolate">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[2fr_1fr] md:items-center md:py-16">
        <div className="order-2 md:order-1">
          <p className="text-base text-muted-foreground">Halo, saya</p>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl">{cvData.name}</h1>
          <p className="mt-2 text-balance text-primary font-medium">{cvData.role}</p>
          <p className="mt-4 max-w-2xl leading-relaxed">{cvData.summary}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#projects">
                Lihat Proyek <ArrowDownRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/cv-nila-wati.pdf" download>
                <Download className="mr-2 size-4" />
                Download CV
              </a>
            </Button>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Fokus: <span className="font-medium text-foreground">{typed}</span>
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="ml-auto mr-0 size-56 overflow-hidden rounded-full bg-gradient-to-br from-[#00ACAC] to-teal-600 p-1 md:size-64 md:ml-8">
            <div className="size-full overflow-hidden rounded-full">
              <img
                src="/images/foto-profil-nila.png"
                alt="Foto Nila Wati"
                className="size-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
