"use client"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

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
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#top" className="font-semibold tracking-tight text-pretty text-xl">
          <span className="text-primary">Nila</span> Wati
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              aria-label={`Lompat ke ${n.label}`}
            >
              {n.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" variant="outline">
            <a href="#contact">Hubungi</a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
