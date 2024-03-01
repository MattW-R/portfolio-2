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
            case 'SCSS':
                return 'devicon-sass-plain'
            case 'gulp':
                return 'devicon-gulp-plain'
            case 'bootstrap':
                return 'devicon-bootstrap-plain'
            case 'handlebars':
                return 'devicon-handlebars-plain'
        }
    }
</script>

<a
    class={`w-32 h-32 flex justify-center items-center ${href ? 'bg-accent' : 'bg-primary'} text-secondary ${href ? 'cursor-pointer' : 'cursor-default'}`}
    {href}
>
    <i class={`text-8xl ${getDevIconClassName(technology)}`}></i>
</a>
