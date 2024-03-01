import type { DevelopmentTechnology } from '$lib/literals/DevelopmentTechnology'

export interface ProjectData {
    name: string
    description: string
    links: {
        displayName: string
        href: `https://${string}`
    }[]
    techStack: {
        technology: DevelopmentTechnology
        example?: `https://${string}`
    }[]
}
