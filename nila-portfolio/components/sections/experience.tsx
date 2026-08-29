import { cvData } from "@/lib/cv-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Pengalaman</h2>
      <div className="mt-6 space-y-4">
        {cvData.experience.map((exp, idx) => (
          <Card key={idx} className="p-4">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-medium">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <p className="text-sm font-mono">
                {exp.start} — {exp.end}
              </p>
            </div>

            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="details">
                <AccordionTrigger className="text-sm">Ringkasan Tanggung Jawab</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="mb-1">
                        {b}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>
    </section>
  )
}
