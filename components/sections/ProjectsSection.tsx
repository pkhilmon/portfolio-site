import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants";
import { ProjectsList } from "./ProjectsList";
import type { ProjectItem } from "@/lib/data/projects";

export function ProjectsSection({ projects, heading, disclaimer }: { projects: ProjectItem[], heading: string, disclaimer: string }) {
    return (
        <section id={SECTION_IDS.projects} className={cn("scroll-mt-nav py-12 md:py-20 px-0 md:px-6")}>
            <h2 className={cn("px-6 md:px-0 mb-6 text-3xl font-semibold")}>
                {heading}
            </h2>
            {projects.length > 0 ? (
                <ProjectsList projects={projects} />
            ) : (
                <p className={cn('px-6 md:px-0 text-sm text-muted-foreground')}>No projects yet.</p>
            )}
            <p className={cn("mt-6 px-6 md:px-0 text-sm text-muted-foreground")}>{disclaimer}</p>
        </section>
    )
}
