'use client'

import { cn } from "@/lib/utils"
import { ProjectCardImage } from "@/components/sections/ProjectCardImage";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from '@hugeicons/react';
import { LinkSquare01Icon, Github01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import type { ProjectItem } from "@/sanity/lib/types";

function ProjectCard({ project }: { project: ProjectItem }) {
    return (
        <div className={cn("flex flex-col md:flex-row bg-card text-card-foreground ring-1 ring-foreground/10 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5")}>
            <div className={cn('flex-shring-0 md:w-2/5 md:self-stretch')}>
                <ProjectCardImage
                    src={urlFor(project.image).width(600).height(400).url()}
                    alt={project.imageAlt}
                />
            </div>
            <div className={cn('flex flex-col flex-1 gap-3 p-4')}>
                <h3 className={cn("text-base font-semibold")}>{project.title}</h3>
                <p className={cn("text-sm text-muted-foreground flex-1")}>{project.description}</p>
                <ul className={cn("flex flex-wrap gap-1.5")}>
                    {project.stack.map(tech => (
                        <li key={tech}>
                            <Badge variant="secondary">{tech}</Badge>
                        </li>
                    ))}
                </ul>
                <div className={cn("flex flex-row gap-2")}>
                {project.liveUrl ? (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className={cn("text-sm font-medium self-start inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1 hover:bg-muted transition-colors")}
                    >
                        Visit site
                        <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
                    </a>
                ) : (
                    <span className={cn('text-xs text-muted-foreground italic')}>In development</span>
                )}
                {project.gitUrl && (
                    <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Github - ${project.title}`}
                        className={cn("text-sm font-medium self-start inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1 hover:bg-muted transition-colors")}
                    >
                        <HugeiconsIcon icon={Github01Icon} size={20}/> GitHub
                    </a>
                )}
                </div>
            </div>
        </div>
    )
}

export function ProjectsList({ projects }: { projects: ProjectItem[] }) {
    const [showAll, setShowAll] = useState(false)
    const visible = showAll ? projects : projects.slice(0, 3);

    return (
        <>
            <div className={cn('flex flex-col gap-5')}>
                {visible.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
            {projects.length > 3 && (
                <div className={cn("flex justify-center mt-8")}>
                    <button
                        onClick={() => setShowAll(prev => !prev)}
                        className={cn('text-sm font-medium border border-border rounded-lg px-6 py-2.5 hover:bg-muted transition-colors text-foreground')}
                    >
                        {showAll ? 'Show less' : `Show all projects (${projects.length})`}
                    </button>
                </div>
            )}
        </>
    )
}
