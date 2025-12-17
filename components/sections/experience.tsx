import { cvData } from "@/lib/cv-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
     <h2 className="text-2xl font-semibold mb-6">Pengalaman Kerja</h2>
      <div className="space-y-4 mb-12">
        {(cvData as any).Workexperience?.map((exp: any, idx: number) => (
          <Card key={idx} className="p-4 border-l-4 border-blue-500">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-medium">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <p className="text-sm font-mono">{exp.start} — {exp.end}</p>
            </div>
            <Accordion type="single" collapsible className="mt-1">
              <AccordionItem value="details" className="border-none">
                <AccordionTrigger className="text-sm">Rincian Tanggung Jawab</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 leading-relaxed text-sm">
                    {exp.bullets.map((b: string, i: number) => (
                      <li key={i} className="mb-1">{b}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>

      {/* SEKSI PENGALAMAN ORGANISASI */}
      <h2 className="text-2xl font-semibold mb-6">Pengalaman Organisasi</h2>
      <div className="space-y-4">
        {(cvData as any).Organizationexperience?.map((exp: any, idx: number) => (
          <Card key={idx} className="p-4 border-l-4 border-green-500">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-medium">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <p className="text-sm font-mono">{exp.start} — {exp.end}</p>
            </div>
            <Accordion type="single" collapsible className="mt-1">
              <AccordionItem value="details" className="border-none">
                <AccordionTrigger className="text-sm">Rincian Tanggung Jawab</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 leading-relaxed text-sm">
                    {exp.bullets.map((b: string, i: number) => (
                      <li key={i} className="mb-1">{b}</li>
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
