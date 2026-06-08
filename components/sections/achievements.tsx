// sections/achievements.tsx

"use client"
import { cvData } from "@/lib/cv-data" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" 
import { Button } from "@/components/ui/button" // 👈 Sudah ditambahkan
import Link from "next/link" // 👈 Sudah ditambahkan

export function AchievementsSection() {
  const achievements = (cvData as any).achievements || [] 

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-12">
      
      {/* JUDUL SECTION */}
      <h2 className="text-3xl font-semibold text-pretty mb-8">
        Pencapaian
      </h2>

      {/* GRID UNTUK KARTU PENCAPAIAN */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {achievements.length > 0 ? (
          achievements.map((item: any, index: number) => (
            <Card key={index} className="flex flex-col justify-between transition hover:shadow-lg">
              <div>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground pb-2">
                  🏆 {item.organization} - {item.year}
                </CardContent>
              </div>

              {/* TOMBOL LINK PENCAPAIAN */}
              <CardContent className="pt-0">
                {item.achievementLink && item.achievementLink !== "#" && (
                  <div className="mt-2">
                    <Button asChild variant="outline" size="sm" className="h-7 text-xs px-2 gap-1">
                      <Link href={item.achievementLink} target="_blank">
                        Lihat Pencapaian
                      </Link>
                    </Button>
                  </div>
                )}
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