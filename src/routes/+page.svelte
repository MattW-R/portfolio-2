<script lang="ts">
    import { Projects } from '$lib/data/Projects'
    import ProjectPanel from '$lib/components/ProjectPanel.svelte'
    import Title from '$lib/components/Title.svelte'
</script>

<main class="flex flex-col justify-start items-center gap-inter p-inter">
    <Title text="Matt W-R's Portfolio" />
    <div class="flex flex-col justify-start items-center gap-inter">
        {#each Projects as project}
            <ProjectPanel data={project} />
        {/each}
    </div>
</main>
