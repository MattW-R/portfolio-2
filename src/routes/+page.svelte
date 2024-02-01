<script lang="ts">
    import { Projects } from '$lib/data/Projects'
    import ProjectPanel from '$lib/components/ProjectPanel.svelte'
</script>

<main>
    {#each Projects as project}
        <ProjectPanel data={project} />
    {/each}
</main>
