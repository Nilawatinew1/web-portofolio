"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { ArrowDownRight, FileText, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="relative isolate">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16">
        <div className="order-2 md:order-1">
          <p className="text-sm text-muted-foreground">Halo, saya</p>
          <h1 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl">{cvData.name}</h1>
          <p className="mt-2 text-balance text-primary font-medium">{cvData.role}</p>
          <p className="mt-4 max-w-2xl leading-relaxed">{cvData.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#projects">
                Lihat Proyek <ArrowDownRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={cvData.contacts.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 size-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact">
                <FileText className="mr-2 size-4" />
                Hubungi Saya
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="mx-auto size-40 overflow-hidden rounded-xl border md:size-48">
            <img
              src="/images/nila-wati-cv.jpg"
              alt="Foto Nila Wati (cropped from CV)"
              className="size-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}