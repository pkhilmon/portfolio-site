export interface SkillGroup {
  label: string
  skills: string[]
  variant?: 'accent' | 'neutral'
}

export const skills: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    variant: 'accent',
  },
  {
    label: 'Backend & Infrastructure',
    skills: ['Node.js', 'Java', 'Spring Boot', 'PostgreSQL'],
    variant: 'neutral',
  },
  {
    label: 'Other Technical Background',
    skills: ['C++', 'Python', 'Unity', 'Embedded Systems'],
    variant: 'neutral',
  },
]