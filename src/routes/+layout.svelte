<script lang="ts">
    import "$lib/app.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Code Wiki</title>
    <meta
        name="description"
        content="A new perspective on development for the intelligent agent era"
    />
</svelte:head>

{@render children()}
