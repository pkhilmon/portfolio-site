import { LANDING_PAGE_REPO } from "@/lib/constants"

export interface ProjectItem {
  id: string
  title: string
  description: string
  stack: string[]
  liveUrl?: string
  repoUrl: string | undefined
  imageSrc: string
  imageAlt: string
}

export const projectsHeading = "Projects" as const;

export const projects: ProjectItem[] = [
  {
    id: 'ivv',
    title: 'IVV Enterprise System',
    description: 'Java backend development for enterprise workflow management system. Built with Spring Boot microservices handling high-volume transaction processing.',
    stack: ['Java', 'Spring Boot'],
    repoUrl: undefined,
    imageSrc: '/images/projects/ivv.webp',
    imageAlt: 'IVV enterprise system dashboard',
  },
  {
    id: 'landing-page',
    title: 'Portfolio Landing Page',
    description: 'This site — a performant, accessible portfolio built with Next.js and Tailwind CSS. Deployed on Vercel with CI/CD from GitHub.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://portfolio-site-pi-weld.vercel.app',
    repoUrl: LANDING_PAGE_REPO,
    imageSrc: '/images/projects/landing-page.webp',
    imageAlt: 'Portfolio landing page screenshot',
  },
]
