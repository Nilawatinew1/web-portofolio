import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/sections/hero"
import { ContactSection } from "@/components/sections/contact"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { AchievementsSection } from "@/components/sections/achievements"
import { EducationSection } from "@/components/sections/education"
import { CertificationsSection } from "@/components/sections/certifications"

export default function Page() {
  return (
    <main id="top">
      <SiteHeader />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nila Wati. Dibuat dengan Next.js & shadcn/ui.
      </footer>
    </main>
  )
}
