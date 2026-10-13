export interface ProjectItem {
  id: string
  title: string
  label: 'Client project' | 'Own project'
  description: string
  stack: string[]
  liveUrl?: string
  gitUrl?: string
  imageUrl: string
  imageAlt: string
  // Internal case-study route; rendered as the card's primary link when set
  caseStudyUrl?: string
}

export const projectsHeading = "Work" as const;
export const projectsDisclaimer = "No agency references yet. That's why the paid test task exists." as const;

export const projects: ProjectItem[] = [
  {
    id: 'dlrg-24h-schwimmen',
    title: 'DLRG 24h-Schwimmen',
    label: 'Client project',
    description: 'Tournament software for a 24-hour charity swim: registration, round-the-clock distance booking by volunteers, live rankings, a public lookup kiosk and the award lists as PDF. Built for a DLRG lifesaving club under the 2027 competition rules.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma 7', 'PostgreSQL on Supabase', 'Tailwind 4'],
    liveUrl: 'https://24h-schwimmen-demo.vercel.app',
    caseStudyUrl: '/work/dlrg-24h-schwimmen',
    imageUrl: '/images/work/dlrg-24h-schwimmen/card.webp',
    imageAlt: 'Live ranking table of the 24h-Schwimmen app with swimmers ordered by distance',
  },
  {
    id: 'vn-photographer-portfolio-page',
    title: 'Photographer portfolio',
    label: 'Client project',
    description: 'Mobile-first website for a portrait and family photographer in the Essen, Düsseldorf and Münster area. Six services, each introduced by one of her photos, with a WhatsApp button on every photo that opens a message written for that service, a fixed enquiry bar and client testimonials. No cookies, so no consent banner.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4'],
    liveUrl: 'https://www.vladlena-fotografie.de',
    caseStudyUrl: '/work/vladlena-fotografie',
    imageUrl: '/images/work/vladlena-fotografie/card.webp',
    imageAlt: 'First screen of the photographer’s website: a portrait, her name and a gold WhatsApp enquiry bar',
  },
  {
    id: 'my-portfolio-landing-page',
    title: 'Portfolio Landing Page',
    label: 'Own project',
    description: 'This site — a performant, accessible portfolio built with Next.js and Tailwind CSS. Deployed on Vercel with CI/CD from GitHub.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend'],
    liveUrl: 'https://pavlokhilmon.com',
    imageUrl: '/images/projects/landing-page.webp',
    imageAlt: 'Portfolio landing page screenshot',
  },
  {
    id: 'habitus-from-figma',
    title: 'From Figma to Website',
    label: 'Own project',
    description: 'Translating Figma designs into Next.js applications using Tailwind CSS, with strict adherence to spacing, typography, color tokens, and component hierarchy defined in the source file.',
    stack: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://habitus-from-figma.vercel.app',
    gitUrl: 'https://github.com/pkhilmon/habitus-from-figma',
    imageUrl: '/images/projects/habitus-figma.webp',
    imageAlt: 'Pixel perfect conversion from Figma design to website'
  },
]
