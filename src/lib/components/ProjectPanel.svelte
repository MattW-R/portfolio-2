<script lang="ts">
    import type { ProjectData } from '$lib/types/ProjectData'
    import Hyperlink from '$lib/components/Hyperlink.svelte'
    import TechnologyPanel from '$lib/components/TechnologyPanel.svelte'
    import Text from '$lib/components/Text.svelte'

    export let data: ProjectData
</script>

<div class="w-full max-w-4xl p-inter flex flex-col gap-intra">
    <h2>{data.name}</h2>
    <Text text={data.description} />
    <div class="flex gap-intra">
        {#each data.links as { displayName, href }}
            <Hyperlink label={displayName} {href} />
        {/each}
    </div>
    <div class="flex gap-intra">
        {#each data.techStack as { technology, example }}
            <TechnologyPanel {technology} href={example} />
        {/each}
    </div>
</div>
