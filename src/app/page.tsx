import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { AchievementsSection } from '@/components/sections/achievements-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { BlogsSection } from '@/components/sections/blogs-section'
import { VisionMissionSection } from '@/components/sections/vision-mission-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ProjectsSection />
      <BlogsSection />
      <VisionMissionSection />
      <ContactSection />
    </>
  )
}
