import { cn } from "@/lib/utils"
import { SECTION_IDS } from "@/lib/constants";
import { ProjectsList } from "./ProjectsList";
import { urlFor } from "@/sanity/lib/image";
import type { ProjectItem } from "@/sanity/lib/types";
import { LOCAL_PROJECTS } from "@/lib/local-projects";

export function ProjectsSection({ projects, heading }: { projects: ProjectItem[], heading: string }) {
    const projectsWithImageUrl = [
        ...LOCAL_PROJECTS,
        ...projects.map(({ image, ...project }) => ({
            ...project,
            imageUrl: urlFor(image).width(600).height(400).url(),
        })),
    ];

    return (
        <section id={SECTION_IDS.projects} className={cn("scroll-mt-nav py-12 md:py-20 px-6")}>
            <h2 className={cn("mb-6 text-3xl font-semibold")}>
                {heading}
            </h2>
            {projectsWithImageUrl.length > 0 ? (
                <ProjectsList projects={projectsWithImageUrl} />
            ) : (
                <p className={cn('text-sm text-muted-foreground')}>No projects yet.</p>
            )}
        </section>
    )
}
