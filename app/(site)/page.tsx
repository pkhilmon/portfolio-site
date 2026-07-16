import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getHero, getAbout, getProjectsSettings, getProjects, getContact } from "@/sanity/lib/queries";

const QUERY_LABELS = ["hero", "about", "projectsSettings", "projects", "contact"] as const;

export default async function Home() {
  const results = await Promise.allSettled([
    getHero(),
    getAbout(),
    getProjectsSettings(),
    getProjects(),
    getContact(),
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`[sanity] Failed to fetch ${QUERY_LABELS[index]}:`, result.reason);
    }
  });

  const [heroResult, aboutResult, projectsSettingsResult, projectsResult, contactResult] = results;

  const hero = heroResult.status === "fulfilled" ? heroResult.value : null;
  const about = aboutResult.status === "fulfilled" ? aboutResult.value : null;
  const projectsSettings = projectsSettingsResult.status === "fulfilled" ? projectsSettingsResult.value : null;
  const projects = projectsResult.status === "fulfilled" ? projectsResult.value : [];
  const contact = contactResult.status === "fulfilled" ? contactResult.value : null;

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      {hero && <HeroSection content={hero} />}
      {about && <AboutSection content={about} />}
      <Separator />
      {/* <SkillsSection />
      <Separator /> */}
      <ProjectsSection projects={projects} heading={projectsSettings?.heading ?? "Projects"} />
      <Separator />
      {/*<TestimonialsSection />
      <Separator/> */}
      {contact && <ContactSection heading={contact.heading} privacyNotice={contact.privacyNotice} />}
    </main>
  );
}
