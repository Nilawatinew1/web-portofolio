"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { MoreVertical, X } from "lucide-react"

const nav = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keterampilan" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#projects", label: "Proyek" },
  { href: "#education", label: "Pendidikan" },
  { href: "#certs", label: "Sertifikasi" },
  { href: "#achievements", label: "Pencapaian" },
  { href: "#contact", label: "Kontak" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      {/* Nama / Logo */}
      <Link href="/" className="font-bold text-xl text-primary transition-colors">
        Nila Wati
      </Link>

      <div className="flex items-center gap-2">
        {/* NAVIGASI: hidden di HP (kecuali isOpen), flex di Laptop (md:flex) */}
        <nav className={cn(
          "absolute left-0 top-16 w-full flex-col border-b bg-background p-4 gap-4 transition-all md:static md:flex md:w-auto md:flex-row md:border-none md:p-0 md:opacity-100",
          isOpen ? "flex opacity-100" : "hidden opacity-0"
        )}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}e
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border border-border bg-background text-muted-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />

        {/* Tombol Titik Tiga (Hanya muncul di HP) */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-5" /> : <MoreVertical className="size-5" />}
        </Button>
      </div>
    </div>
  </header>
)
}
