"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Send } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const { email, phone, linkedin } = cvData.contacts

  function copy(text: string, label: string) {
    navigator.clipboard.writeText(text)
    toast({ title: `${label} disalin`, description: text })
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Kontak</h2>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
        Siap berkontribusi pada tim dan proses bisnis Anda. Silakan hubungi saya melalui pilihan di bawah.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${email}?subject=Halo%20Nila%20Wati`}>
            <Mail className="mr-2 size-4" /> Email
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>
            <Phone className="mr-2 size-4" /> Telepon/WA
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Send className="mr-2 size-4" /> LinkedIn
          </a>
        </Button>
      </div>
    </section>
  )
}
