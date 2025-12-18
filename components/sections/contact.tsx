"use client"
import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Linkedin, Instagram, PenSquare } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const { email, phone, linkedin, instagram, WordPress } = cvData.contacts

  function copy(text: string, label: string) {
    navigator.clipboard.writeText(text)
    toast({ title: `${label} disalin`, description: text })
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">Kontak</h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Silakan hubungi saya melalui platform di bawah ini.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* Tombol Email - Lebih Besar */}
        <Button asChild size="lg" className="h-14 px-8 text-lg shadow-md">
          <a href={`mailto:${email}?subject=Halo%20Nila%20Wati`}>
            <Mail className="mr-3 size-5" /> Email
          </a>
        </Button>

        {/* Tombol WA - Lebih Besar & Warna Khusus */}
        <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg shadow-md bg-slate-100 hover:bg-slate-200 border-none">
          <a href={waUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="mr-3 size-6 text-[#25D366]" /> Telepon/WA
          </a>
        </Button>

        {/* Tombol LinkedIn - Lebih Besar */}
        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 hover:bg-slate-50">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="mr-3 size-5 text-[#0077B5]" /> LinkedIn
          </a>
        </Button>

        {/* Tombol Instagram - Lebih Besar */}
        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 hover:bg-slate-50">
          <a href={instagram} target="_blank" rel="noreferrer">
            <Instagram className="mr-3 size-5 text-[#E4405F]" /> Instagram
          </a>
        </Button>

        {/* Tombol WordPress - Lebih Besar */}
        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 hover:bg-slate-50">
          <a href={WordPress} target="_blank" rel="noreferrer">
            <PenSquare className="mr-3 size-5 text-[#21759B]" /> WordPress
          </a>
        </Button>
      </div>
    </section>
  )
}
