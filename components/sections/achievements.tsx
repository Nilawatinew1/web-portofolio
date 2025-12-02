// sections/achievements.tsx

"use client"
import { cvData } from "@/lib/cv-data" // Untuk mengambil data dari cv-data.ts
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Untuk tampilan kartu

export function AchievementsSection() {
  // Asumsi: Data achievements berada di cvData.achievements
  const achievements = cvData.achievements || [] 

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-12">
      
      {/* JUDUL SECTION */}
      <h2 className="text-3xl font-semibold text-pretty mb-8">
        Pencapaian
      </h2>

      {/* GRID UNTUK KARTU PENCAPAIAN */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {achievements.length > 0 ? (
          achievements.map((item, index) => (
            <Card key={index} className="transition hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.organization} - {item.year}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            Belum ada data pencapaian yang ditambahkan.
          </p>
        )}
      </div>
    </section>
  )
}