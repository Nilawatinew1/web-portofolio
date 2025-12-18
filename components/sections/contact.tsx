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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      {/* CARD UTAMA YANG BESAR */}
      <Card className="bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
          Mari Bekerja Sama!
        </h2>
        
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto relative z-10">
          Siap mendukung operasional dan analisis data perusahaan Anda. 
          Hubungi saya langsung untuk diskusi lebih lanjut.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
          {/* TOMBOL WHATSAPP RAKSASA */}
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white px-12 py-8 text-2xl rounded-2xl transition-all hover:scale-105 shadow-xl border-none w-full md:w-auto">
            <a href={waUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-3 size-8" /> Chat WhatsApp
            </a>
          </Button>

          {/* TOMBOL EMAIL BESAR */}
          <Button asChild size="lg" variant="secondary" className="px-12 py-8 text-2xl rounded-2xl transition-all hover:scale-105 shadow-lg w-full md:w-auto">
            <a href={`mailto:${email}?subject=Halo%20Nila%20Wati`}>
              <Mail className="mr-3 size-8" /> Email Me
            </a>
          </Button>
        </div>

        {/* SOSIAL MEDIA DI BAWAH (MINIMALIS) */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 pt-8 border-t border-primary-foreground/20">
          <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:scale-110 transition-transform opacity-90">
            <Linkedin size={28} />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:scale-110 transition-transform opacity-90">
            <Instagram size={28} />
          </a>
          <a href={WordPress} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:scale-110 transition-transform opacity-90">
            <PenSquare size={28} />
          </a>
        </div>
      </Card>
    </section>
  )
}
