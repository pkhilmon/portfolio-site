import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { heroContent } from "@/lib/data/hero";
import { servicesContent } from "@/lib/data/services";
import { aboutContent } from "@/lib/data/about";
import { projects, projectsDisclaimer, projectsHeading } from "@/lib/data/projects";
import { processContent, whyMeContent } from "@/lib/data/process";
import { contactContent } from "@/lib/data/contact";
import { FaqSection } from "@/components/sections/FaqSection";
import { faqContent } from "@/lib/data/faq";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      <PersonJsonLd />
      <HeroSection content={heroContent} />
      <ServicesSection content={servicesContent} />
      <Separator />
      <ProjectsSection projects={projects} heading={projectsHeading} disclaimer={projectsDisclaimer} />
      <Separator />
      <ProcessSection content={processContent} />
      <Separator />
      <WhyMeSection content={whyMeContent} />
      <Separator />
      {/* <SkillsSection />
      <Separator /> */}
      <AboutSection content={aboutContent} />
      <Separator />
      {/*<TestimonialsSection />
      <Separator/> */}
      <FaqSection content={faqContent} />
      <Separator />
      <ContactSection content={contactContent} />
    </main>
  );
}
