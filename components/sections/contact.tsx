"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Linkedin, Instagram, PenSquare } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const { email, phone, linkedin, instagram, WordPress } = cvData.contacts

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Kontak</h2>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* EMAIL */}
        <Button asChild variant="outline" className="h-12 px-8 text-base border-2">
          <a href="mailto:nilawatinew786@gmail.com">
            <Mail className="mr-2 size-5" /> Email
          </a>
        </Button>

        {/* WHATSAPP/PHONE */}
        <Button asChild variant="outline" className="h-12 px-8 text-base border-2">
          <a href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">
            <Phone className="mr-2 size-5" /> Telepon/WA
          </a>
        </Button>

        {/* LINKEDIN */}
        <Button asChild variant="outline" className="h-12 px-8 text-base border-2">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="mr-2 size-5" /> LinkedIn
          </a>
        </Button>

        {/* INSTAGRAM */}
        <Button asChild variant="outline" className="h-12 px-8 text-base border-2">
          <a href={instagram} target="_blank" rel="noreferrer">
            <Instagram className="mr-2 size-5" /> Instagram
          </a>
        </Button>
      </div>
    </section>
  )
}