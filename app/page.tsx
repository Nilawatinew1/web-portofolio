import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/sections/hero"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { EducationSection } from "@/components/sections/education"
import { CertificationsSection } from "@/components/sections/certifications"
import { ContactSection } from "@/components/sections/contact"

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
      <ContactSection />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nila Wati. Dibuat dengan Next.js & shadcn/ui.
      </footer>
    </main>
  )
}
