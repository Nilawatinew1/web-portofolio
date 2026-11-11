"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { ArrowDownRight, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="relative isolate">
      <div className="mx-auto flex flex-col items-center lg:flex-row max-w-6xl gap-8 px-4 py-12 md:py-16">
        <div className="order-2 lg:order-1 flex-1 text-center lg:text-left">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl">{cvData.name}</h1>
          <p className="mt-2 text-balance text-primary font-medium">{cvData.role}</p>
          <p className="mt-4 max-w-2xl leading-relaxed">{cvData.summary}</p>
          
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-3">
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
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center w-full lg:w-auto">
          <div className="size-56 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 md:size-64">
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