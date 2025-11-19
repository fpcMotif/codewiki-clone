<script lang="ts">
    import { themeStore } from "$lib/stores/theme.svelte";
    import "$lib/app.css";

    let { children } = $props();

    // Initialize theme from store
    const theme = themeStore();

    // Apply theme class to body
    $effect(() => {
        if (typeof document !== "undefined") {
            document.body.classList.toggle(
                "dark-theme",
                theme.current === "dark",
            );
        }
    });
</script>

<svelte:head>
    <title>Code Wiki</title>
    <meta
        name="description"
        content="A new perspective on development for the intelligent agent era"
    />
</svelte:head>

{@render children()}
