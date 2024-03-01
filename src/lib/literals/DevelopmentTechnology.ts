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
    'circleci',
    'React',
    'Nodejs',
    'express',
    'MongoDB',
    'jest',
    'npm',
] as const

export type DevelopmentTechnology = (typeof DevelopmentTechnologyOptions)[number]
