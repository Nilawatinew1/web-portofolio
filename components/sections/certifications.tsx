import { cvData } from "@/lib/cv-data"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CertificationsSection() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Sertifikasi & Pelatihan</h2>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cvData.certifications.map((c: any, i: number) => (
          <Card key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex-1 min-w-0">
            <p className="text-pretty font-medium">{c.title}</p>
              {c.worksheetLink && c.worksheetLink !== "#" && (
                <div className="mt-2">
                  <Button asChild variant="outline" size="sm" className="h-7 text-xs px-2 gap-1">
                    <Link href={c.worksheetLink} target="_blank">
                      Lihat Worksheet
                    </Link>
                  </Button>
                </div>
              )}
            </div>
            <Badge variant="secondary" className="rounded-md shrink-0 w-fit self-start sm:self-center">
              {c.date}
            </Badge>
          </Card>
        ))}
      </div>
    </section>
    )
}