import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ProjectsSection />
      <Separator />
      <TestimonialsSection />
      <Separator/>
      <ContactSection />
    </main>
  );
}
