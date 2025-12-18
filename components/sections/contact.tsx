"use client"

import { cvData } from "@/lib/cv-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, Linkedin, Instagram, PenSquare, MessageCircle } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const { email, phone, linkedin, instagram, WordPress } = cvData.contacts

  // Logika untuk WhatsApp: Menghilangkan karakter non-angka dan menyiapkan pesan otomatis
  const waMessage = "Halo Nila Wati, saya melihat portofolio Anda dan ingin berdiskusi lebih lanjut."
  const waUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waMessage)}`

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <Card className="bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Dekorasi Background Bulat (Opsional, agar lebih cantik) */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
          Mari Bekerja Sama!
        </h2>
        
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed">
          Saya siap mendukung kebutuhan administrasi operasional atau analisis data perusahaan Anda. 
          Hubungi saya secara langsung untuk mendiskusikan peluang kolaborasi.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
          {/* TOMBOL WHATSAPP UTAMA */}
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white px-10 py-8 text-xl md:text-2xl rounded-2xl transition-all hover:scale-105 shadow-xl border-none w-full md:w-auto">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 size-7 md:size-8" /> 
              Chat via WhatsApp
            </a>
          </Button>

          {/* TOMBOL EMAIL */}
          <Button asChild size="lg" variant="secondary" className="px-10 py-8 text-xl md:text-2xl rounded-2xl transition-all hover:scale-105 shadow-lg w-full md:w-auto font-semibold">
            <a href={`mailto:${email}?subject=Halo%20Nila%20Wati`}>
              <Mail className="mr-3 size-7 md:size-8" /> 
              Kirim Email
            </a>
          </Button>
        </div>

        {/* SOSIAL MEDIA MINIMALIS DI BAWAH */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 pt-8 border-t border-primary-foreground/20 relative z-10">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="transition-transform hover:scale-125 opacity-80 hover:opacity-100">
            <Linkedin size={32} />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="transition-transform hover:scale-125 opacity-80 hover:opacity-100">
            <Instagram size={32} />
          </a>
          <a href={WordPress} target="_blank" rel="noopener noreferrer" title="WordPress" className="transition-transform hover:scale-125 opacity-80 hover:opacity-100">
            <PenSquare size={32} />
          </a>
        </div>
      </Card>
    </section>
  )
}