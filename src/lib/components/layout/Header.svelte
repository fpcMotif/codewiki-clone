<script lang="ts">
	import SearchIcon from "$lib/components/icons/SearchIcon.svelte";
	import GoogleLogo from "$lib/components/icons/GoogleLogo.svelte";
	import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
	import { i18n } from "$lib/i18n.svelte";

	let strings = $derived({
		homeLabel: i18n.t("header.homeLabel") || "Home",
		searchPlaceholder: i18n.t("header.searchPlaceholder") || "Find open source repositories"
	});
</script>

<app-bar>
	<header class="header-content small-width">
		<a aria-label={strings.homeLabel} class="app-title" href="https://codewiki.google/">
			<GoogleLogo class="logo !w-auto" data-test-id="product-logo" />
		</a>
		<div class="header-search shine">
			<input
				autocomplete="off"
				class="header-search-input"
				placeholder={strings.searchPlaceholder}
				tabindex="-1"
				type="text"
			/>
			<button
				class="header-search-button"
				disabled
				tabindex="-1"
				type="button"
			>
				<SearchIcon />
			</button>
		</div>
		<div class="actions">
			<ThemeSwitcher />
		</div>
	</header>
</app-bar>
