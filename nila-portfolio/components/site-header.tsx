import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/45 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 h-16">
        
        {/* POJOK KIRI ATAS: Logo / Nama Nila Wati */}
        <Link href="#about" className="flex items-center gap-2">
          <img 
            src="/images/logo-nila.png" 
            alt="Logo Nila Wati" 
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* MENU NAVIGASI DI KANAN */}
        <nav className="flex items-center gap-1 sm:gap-6 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-primary px-2 py-1">
            Tentang
          </a>
          <a href="#projects" className="transition-colors hover:text-primary px-2 py-1">
            Proyek
          </a>
          <a href="#certifications" className="transition-colors hover:text-primary px-2 py-1">
            Sertifikasi
          </a>
          <a href="#achievements" className="transition-colors hover:text-primary px-2 py-1">
            Pencapaian
          </a>
          <a href="#contact" className="transition-colors hover:text-primary px-2 py-1">
            Kontak
          </a>
        </nav>

      </div>
    </header>
  )
}