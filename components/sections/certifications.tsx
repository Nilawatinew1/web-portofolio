import { cvData } from "@/lib/cv-data"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function CertificationsSection() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Sertifikasi & Pelatihan</h2>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cvData.certifications.map((c, i) => (
          <Card key={i} className="flex items-center justify-between gap-3 p-4">
            <p className="text-pretty">{c.title}</p>
            <Badge variant="secondary" className="rounded-md">
              {c.date}
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  )
}
