import { cvData } from "@/lib/cv-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Pendidikan</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {cvData.education.map((e: any, i: number) => (
          <Card key={i} className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{e.degree}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div className="mb-2">
                <Link 
                  href={e.mapLink || "#"} 
                  target="_blank" 
                  className="hover:text-primary hover:underline transition-colors cursor-pointer inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  {e.school} 📍
                </Link>
              </div>
              {(e.start || e.end) && (
                <p>
                  {e.start} — {e.end}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}