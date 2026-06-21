export interface ProjectItem {
  id: string
  title: string
  description: string
  stack: string[]
  liveUrl?: string
  gitUrl?: string
  imageSrc: string
  imageAlt: string
}

export const projectsHeading = "Projects" as const;

export const projects: ProjectItem[] = [
  {
    id: 'vn-photographer-portfolio-page',
    title: 'Photographer portfolio',
    description: 'Photographer portfolio is a modern personal website that showcases professional experience, technical skills, and real-world web development projects in a clean and responsive layout. It highlights expertise in front-end development with Next.js, and TailwindCSS while making it easy for visitors to explore projects and connect for future opportunities.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.vladlena-fotografie.de',
    imageSrc: '/images/projects/vn-photo-portfolio.webp',
    imageAlt: 'VN photographer portfolio screenshot',
  },
  {
    id: 'my-portfolio-landing-page',
    title: 'Portfolio Landing Page',
    description: 'This site — a performant, accessible portfolio built with Next.js and Tailwind CSS. Deployed on Vercel with CI/CD from GitHub.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://pavlokhilmon.com',
    imageSrc: '/images/projects/landing-page.webp',
    imageAlt: 'Portfolio landing page screenshot',
  },
  {
    id: 'habitus-from-figma',
    title: 'From Figma to Website',
    description: '',
    stack: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://habitus-from-figma.vercel.app',
    gitUrl: 'https://github.com/pkhilmon/habitus-from-figma',
    imageSrc: '/images/projects/habitus-figma.webp',
    imageAlt: 'Pixel perfect conversion from Figma design to website'
  },
  {
    id: 'bubble-burst-html5-game',
    title: 'Bubble Burst',
    description: 'Bubble Burst is a fun bubble shooter game where you match and pop colorful bubbles by aiming them from the cannon. Create bigger chain reactions to unlock the burst bonus and clear the board with satisfying bubble-popping action!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/bubble_burst.html',
    imageSrc: '/images/projects/bubble-burst.avif',
    imageAlt: 'Bubble Burst HTML5 game screeshot',
  },
  {
    id: 'jelly-madness-2-html5-game',
    title: 'Jelly Madness 2',
    description: 'Jelly Madness 2 is a fun match-3 puzzle game where you connect three or more colorful jellies to complete level goals and clear each stage. Make bigger combos to unlock powerful boosters and pop your way through a magical world full of sweet challenges!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/jelly_madness_2.html',
    imageSrc: '/images/projects/jelly-madness-2-.webp',
    imageAlt: 'Jelly Madness 2 HTML5 game screenshot',
  },
  {
    id: 'jewel-burst-html5-game',
    title: 'Jewel Burst',
    description: 'Jewel Burst is a colorful match-3 puzzle game where you swap sparkling gems to break glass tiles and clear each level before time runs out. Create bigger matches to unlock powerful boosters like rainbow diamonds and dynamite for even faster jewel-smashing fun!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/jewel_burst.html',
    imageSrc: '/images/projects/jewel-burst.avif',
    imageAlt: 'Jewel Burst HTML5 game screenshot',
  },
  {
    id: 'jelly-madness-html5-game',
    title: 'Jelly Madness',
    description: 'Jelly Madness is a fun match-3 puzzle game where you link colorful jellies to complete each level’s goals. Make bigger combos to unlock powerful boosters and clear tricky stages faster!',
    stack: ['Phaser.io', 'TypeScript'],
    liveUrl: 'https://www.funnygames.org/game/jelly_madness.html',
    imageSrc: '/images/projects/jelly-madness-01.webp',
    imageAlt: 'Jelly Madness HTML5 game screenshot',
  },
]
