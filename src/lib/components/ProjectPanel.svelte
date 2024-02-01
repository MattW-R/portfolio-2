<script lang="ts">
    import type { ProjectData } from '$lib/types/ProjectData'
    import Hyperlink from '$lib/components/Hyperlink.svelte'
    import TechnologyIcon from '$lib/components/TechnologyIcon.svelte'

    export let data: ProjectData
</script>

<div>
    <h2>{data.name}</h2>
    <p>{data.description}</p>
    <div>
        {#each data.links as { displayName, href }}
            <Hyperlink label={displayName} {href} />
        {/each}
    </div>
    <div>
        {#each data.techStack as { technology, example }}
            <TechnologyIcon {technology} href={example} />
        {/each}
    </div>
</div>
