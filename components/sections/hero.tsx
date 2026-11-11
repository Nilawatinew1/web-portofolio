"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { ArrowDownRight, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="relative isolate py-12 md:py-20">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl gap-12 px-4">
        
        {/* POSISI KIRI: FOTO (Mirip web sebelah) */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="size-64 md:size-80 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/40 p-1.5 shadow-lg">
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

        {/* POSISI KANAN: TEKS UTAMA & DESKRIPSI */}
        <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-pretty text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-foreground">
            {cvData.name}
          </h1>
          <p className="mt-3 text-lg text-primary font-semibold">{cvData.role}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            {cvData.summary}
          </p>
        </div>

      </div>
    </section>
  )
}