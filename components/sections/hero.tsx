"use client"
import { cvData } from "@/lib/cv-data"
import { useEffect, useState } from "react"
import { ArrowDownRight, Linkedin } from "lucide-react"

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
  const typed = useTypewriter([
    "Administrasi Perusahaan",
    "Manajemen Transaksi",
    "Menyusun Laporan Keuangan",
    "Pengarsipan Digital",
    "Konsultasi Produk",
  ])

  return (
    <section id="about" className="relative isolate py-12 md:py-20">
      <div className="mx-auto flex flex-col items-center lg:flex-row max-w-6xl gap-12 px-4">
        
        {/* POSISI KIRI: FOTO PROFIL BULAT BERGRADASI */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="size-64 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 md:size-80 shadow-lg">
            <div className="size-full overflow-hidden rounded-full bg-background">
              <img
                src="/images/foto-profil-nila.png"
                alt="Foto Nila Wati"
                className="size-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </div>

        {/* POSISI KANAN: TEKS, ROLE, DESKRIPSI & TYPEWRITER */}
        <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl text-foreground">
            {cvData.name}
          </h1>
          <p className="mt-2 text-balance text-primary font-medium text-lg">
            {cvData.role}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-base md:text-lg">
            {cvData.summary}
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Fokus: <span className="font-medium text-foreground">{typed}</span>
          </p>
        </div>

      </div>
    </section>
  )
}