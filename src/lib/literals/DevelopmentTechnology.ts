export const DevelopmentTechnologyOptions = [
    'TypeScript',
    'JavaScript',
    'CSS',
    'HTML',
    'PHP',
    'MySQL',
    'Docker',
] as const

export type DevelopmentTechnology = (typeof DevelopmentTechnologyOptions)[number]
