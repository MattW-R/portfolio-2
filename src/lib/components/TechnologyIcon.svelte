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
        }
    }
</script>

<a {href}>
    <i class={getDevIconClassName(technology)}></i>
</a>
