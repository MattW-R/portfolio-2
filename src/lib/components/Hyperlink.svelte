<script lang="ts">
    export let href: `https://${string}`
    export let label: string
    export let openInNewTab: boolean = true
</script>

<a class="text-accent" {href} target={openInNewTab ? '_blank' : '_self'}>
    {label}
</a>
