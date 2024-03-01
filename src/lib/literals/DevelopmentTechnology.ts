export const DevelopmentTechnologyOptions = [
    'TypeScript',
    'JavaScript',
    'CSS',
    'HTML',
    'PHP',
    'MySQL',
    'Docker',
    'SCSS',
    'gulp',
    'handlebars',
    'bootstrap',
] as const

export type DevelopmentTechnology = (typeof DevelopmentTechnologyOptions)[number]
