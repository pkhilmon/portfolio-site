export interface ProjectItem {
  id: string
  title: string
  description: string
  stack: string[]
  liveUrl?: string
  gitUrl?: string
  imageUrl: string
  imageAlt: string
  // Internal case-study route; rendered as the card's primary link when set
  caseStudyUrl?: string
}

export const projectsHeading = "Projects" as const;

export const projects: ProjectItem[] = [
  {
    id: 'dlrg-24h-schwimmen',
    title: 'DLRG 24h-Schwimmen',
    description: 'Tournament software for a 24-hour charity swim: registration, round-the-clock distance booking by volunteers, live rankings, a public lookup kiosk and the award lists as PDF. Built for a DLRG lifesaving club under the 2027 competition rules.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma 7', 'PostgreSQL', 'Tailwind 4'],
    liveUrl: 'https://24h-schwimmen-demo.vercel.app',
    caseStudyUrl: '/work/dlrg-24h-schwimmen',
    imageUrl: '/images/work/dlrg-24h-schwimmen/card.webp',
    imageAlt: 'Live ranking table of the 24h-Schwimmen app with swimmers ordered by distance',
  },
  {
    id: 'vn-photographer-portfolio-page',
    title: 'Photographer portfolio',
    description: 'Website for a portrait and event photographer in the Essen, Düsseldorf and Münster area. Each service (portraits, families, couples, business, events) gets its own page with sample photos, alongside client testimonials and WhatsApp contact buttons throughout. Image-first, responsive layout built with Next.js and Tailwind CSS.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.vladlena-fotografie.de',
    imageUrl: '/images/projects/vn-photo-portfolio.webp',
    imageAlt: 'VN photographer portfolio screenshot',
  },
  {
    id: 'my-portfolio-landing-page',
    title: 'Portfolio Landing Page',
    description: 'This site — a performant, accessible portfolio built with Next.js and Tailwind CSS. Deployed on Vercel with CI/CD from GitHub.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend'],
    liveUrl: 'https://pavlokhilmon.com',
    imageUrl: '/images/projects/landing-page.webp',
    imageAlt: 'Portfolio landing page screenshot',
  },
  {
    id: 'habitus-from-figma',
    title: 'From Figma to Website',
    description: 'Translating Figma designs into Next.js applications using Tailwind CSS, with strict adherence to spacing, typography, color tokens, and component hierarchy defined in the source file.',
    stack: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://habitus-from-figma.vercel.app',
    gitUrl: 'https://github.com/pkhilmon/habitus-from-figma',
    imageUrl: '/images/projects/habitus-figma.webp',
    imageAlt: 'Pixel perfect conversion from Figma design to website'
  },
  {
    id: 'bubble-burst-html5-game',
    title: 'Bubble Burst',
    description: 'Bubble Burst is a fun bubble shooter game where you match and pop colorful bubbles by aiming them from the cannon. Create bigger chain reactions to unlock the burst bonus and clear the board with satisfying bubble-popping action!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/bubble_burst.html',
    imageUrl: '/images/projects/bubble-burst.avif',
    imageAlt: 'Bubble Burst HTML5 game screenshot',
  },
  {
    id: 'jelly-madness-2-html5-game',
    title: 'Jelly Madness 2',
    description: 'Jelly Madness 2 is a fun match-3 puzzle game where you connect three or more colorful jellies to complete level goals and clear each stage. Make bigger combos to unlock powerful boosters and pop your way through a magical world full of sweet challenges!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/jelly_madness_2.html',
    imageUrl: '/images/projects/jelly-madness-2.webp',
    imageAlt: 'Jelly Madness 2 HTML5 game screenshot',
  },
  {
    id: 'jewel-burst-html5-game',
    title: 'Jewel Burst',
    description: 'Jewel Burst is a colorful match-3 puzzle game where you swap sparkling gems to break glass tiles and clear each level before time runs out. Create bigger matches to unlock powerful boosters like rainbow diamonds and dynamite for even faster jewel-smashing fun!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/jewel_burst.html',
    imageUrl: '/images/projects/jewel-burst.avif',
    imageAlt: 'Jewel Burst HTML5 game screenshot',
  },
  {
    id: 'jelly-madness-html5-game',
    title: 'Jelly Madness',
    description: 'Jelly Madness is a fun match-3 puzzle game where you link colorful jellies to complete each level’s goals. Make bigger combos to unlock powerful boosters and clear tricky stages faster!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/jelly_madness.html',
    imageUrl: '/images/projects/jelly-madness-01.webp',
    imageAlt: 'Jelly Madness HTML5 game screenshot',
  },
]
