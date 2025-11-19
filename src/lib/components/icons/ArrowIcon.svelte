<script lang="ts">
	let { class: className = "", ...rest } = $props();
</script>

<svg
	aria-hidden="true"
	class="h-6 w-6 {className ?? ''}"
	{...rest}
	fill="currentColor"
	viewBox="0 0 24 24"
>
	<title>Arrow</title>
	<path d="M9 5l7 7-7 7" />
</svg>
