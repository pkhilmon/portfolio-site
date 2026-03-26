export interface ProjectItem {
  id: string
  title: string
  description: string
  stack: string[]
  liveUrl?: string
  repoUrl: string
  imageSrc: string
  imageAlt: string
}

export const projects: ProjectItem[] = [
  {
    id: 'ivv',
    title: 'IVV Enterprise System',
    description: 'Java backend development for enterprise workflow management system. Built with Spring Boot microservices handling high-volume transaction processing.',
    stack: ['Java', 'Spring Boot'],
    repoUrl: 'https://github.com/Apelmon',
    imageSrc: '/images/projects/ivv.webp',
    imageAlt: 'IVV enterprise system dashboard',
  },
]
