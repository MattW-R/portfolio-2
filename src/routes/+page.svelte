<script lang="ts">
    import { Projects } from '$lib/data/Projects'
    import ProjectPanel from '$lib/components/ProjectPanel.svelte'
</script>

<main>
    <div class="flex flex-col justify-start items-center gap-inter">
        {#each Projects as project}
            <ProjectPanel data={project} />
        {/each}
    </div>
</main>
