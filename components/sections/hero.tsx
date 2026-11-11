"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { ArrowDownRight, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="relative isolate py-12 md:py-20">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl gap-12 px-4">
        
        {/* POSISI KIRI: FOTO (Tanpa Border Pink & Tanpa Frame Lingkaran) */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="w-72 md:w-96 max-w-full">
            <img
              src="/images/foto-profil-nila.png"
              alt="Foto Nila Wati"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* POSISI KANAN: TEKS */}
        <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-pretty text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-foreground">
            {cvData.name}
          </h1>
          <p className="mt-3 text-lg text-primary font-semibold">{cvData.role}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            {cvData.summary}
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                Lihat Proyek <ArrowDownRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={cvData.contacts.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}