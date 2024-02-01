<script lang="ts">
    import type { DevelopmentTechnology } from '$lib/literals/DevelopmentTechnology'

    export let technology: DevelopmentTechnology
    export let href: `https://${string}` | undefined

    const getDevIconClassName = (technology: DevelopmentTechnology): string => {
        switch (technology) {
            case 'CSS':
                return 'devicon-css3-plain'
            case 'HTML':
                return 'devicon-html5-plain'
            case 'JavaScript':
                return 'devicon-javascript-plain'
            case 'TypeScript':
                return 'devicon-typescript-plain'
            case 'MySQL':
                return 'devicon-mysql-plain'
            case 'PHP':
                return 'devicon-php-plain'
            case 'Docker':
                return 'devicon-docker-plain'
        }
    }
</script>

<div class="w-32 h-32 flex justify-center items-center bg-primary text-secondary">
    <a target="_blank" {href}>
        <i class={`text-8xl ${getDevIconClassName(technology)}`}></i>
    </a>
</div>
