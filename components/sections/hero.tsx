"use client"
import { cvData } from "@/lib/cv-data"

export function HeroSection() {
  return (
    <section id="about" className="relative isolate py-12 md:py-20">
      <div className="mx-auto flex flex-col items-center lg:flex-row max-w-6xl gap-12 px-4">
        
        {/* POSISI KIRI: FOTO PROFIL TANPA BORDER LINGKARAN */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="size-64 overflow-hidden rounded-full md:size-80">
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

        {/* POSISI KANAN: TEKS, ROLE & DESKRIPSI (Tanpa tulisan Fokus) */}
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
        </div>

      </div>
    </section>
  )
}