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
    'lerna',
    'k8s',
    'tailwind',
    'vite',
    'yarn',
    'azure',
    'Azure DevOps',
    'redis',
    'mapbox',
    'bash',
    'eslint',
    'svelte',
    'netlify',
    'githubactions',
] as const

export type DevelopmentTechnology = (typeof DevelopmentTechnologyOptions)[number]
