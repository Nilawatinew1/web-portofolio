"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Linkedin, Video } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const { email, linkedin, tiktok } = cvData.contacts

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

        {/* LINKEDIN */}
        <Button asChild variant="outline" className="h-12 px-8 text-base border-2">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="mr-2 size-5" /> LinkedIn
          </a>
        </Button>
        
        {/* TIKTOK */}
        <Button asChild variant="outline" className="h-12 px-8 text-base border-2">
          <a href={tiktok} target="_blank" rel="noreferrer">
            <Video className="mr-2 size-5" /> TikTok
          </a>
        </Button>
      </div>
    </section>
  )
}