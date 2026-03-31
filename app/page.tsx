import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SECTION_IDS } from "@/lib/constants";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ProjectsSection />
      <Separator className="my-4" />
      <TestimonialsSection />
      {Object.entries(SECTION_IDS)
        .filter(([, id]) => id !== SECTION_IDS.hero &&
          id !== SECTION_IDS.about &&
          id !== SECTION_IDS.projects &&
          id !== SECTION_IDS.skills &&
          id !== SECTION_IDS.testimonials)
        .map(([key, id]) => (
          <div key={key} >
            <Separator />
            <section id={`${id}`} className={cn("capitalize min-h-screen scroll-mt-nav")}>
              {id}
            </section>
          </div>
        ))}
    </main>
  );
}
