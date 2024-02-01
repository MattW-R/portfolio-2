<script lang="ts">
    import type { ProjectData } from '$lib/types/ProjectData'
    import Hyperlink from '$lib/components/Hyperlink.svelte'
    import TechnologyIcon from '$lib/components/TechnologyIcon.svelte'

    export let data: ProjectData
</script>

<div class="w-full max-w-4xl p-inter flex flex-col gap-intra">
    <h2>{data.name}</h2>
    <p>{data.description}</p>
    <div class="flex gap-intra">
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
