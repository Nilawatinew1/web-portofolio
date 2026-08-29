import { cvData } from "@/lib/cv-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Pendidikan</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {cvData.education.map((e, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-lg">{e.degree}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{e.school}</p>
              {(e.start || e.end) && (
                <p className="font-mono">
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
