<script lang="ts">
    import type { DevelopmentTechnology } from '$lib/literals/DevelopmentTechnology'

    export let technology: DevelopmentTechnology
    export let href: `https://${string}` | undefined

    const getDevIconClassName = (
        technology: DevelopmentTechnology,
    ): string | undefined => {
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
            case 'circleci':
                return 'devicon-circleci-plain'
            case 'React':
                return 'devicon-react-plain'
            case 'Nodejs':
                return 'devicon-nodejs-plain'
            case 'express':
                return 'devicon-express-original'
            case 'MongoDB':
                return 'devicon-mongodb-plain'
            case 'jest':
                return 'devicon-jest-plain'
            case 'npm':
                return 'devicon-npm-original-wordmark'
            case 'tailwind':
                return 'devicon-tailwindcss-original'
            case 'k8s':
                return 'devicon-kubernetes-plain'
            case 'yarn':
                return 'devicon-yarn-original'
            case 'vite':
                return 'devicon-vitejs-plain'
            case 'azure':
                return 'devicon-azure-plain'
            case 'Azure DevOps':
                return 'devicon-azuredevops-plain'
            case 'redis':
                return 'devicon-redis-plain'
            case 'bash':
                return 'devicon-bash-plain'
            case 'eslint':
                return 'devicon-eslint-plain'
            case 'svelte':
                return 'devicon-svelte-plain'
            case 'netlify':
                return 'devicon-netlify-plain'
            case 'githubactions':
                return 'devicon-githubactions-plain'
            case 'mapbox':
            case 'lerna':
                return undefined
        }
    }

    const devIconClassName = getDevIconClassName(technology)
</script>

<a
    class={`w-32 h-32 flex justify-center items-center ${href ? 'bg-accent' : 'bg-primary'} text-secondary ${href ? 'cursor-pointer' : 'cursor-default'}`}
    {href}
>
    {#if devIconClassName}
        <i class={`text-8xl ${devIconClassName}`}></i>
    {:else}
        <p class="text-2xl">{technology}</p>
    {/if}
</a>
