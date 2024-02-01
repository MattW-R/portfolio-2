export const DevelopmentTechnologyOptions = [
    'TypeScript',
    'JavaScript',
    'CSS',
    'HTML',
] as const

export type DevelopmentTechnology = (typeof DevelopmentTechnologyOptions)[number]
