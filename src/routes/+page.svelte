<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import HeroSection from '$lib/components/home/HeroSection.svelte';
	import FeaturedRepos from '$lib/components/home/FeaturedRepos.svelte';
	import FeaturesSection from '$lib/components/home/FeaturesSection.svelte';
	import BrowserSection from '$lib/components/home/BrowserSection.svelte';
	import { bootstrap } from '$lib/bootstrap';

	onMount(() => {
		bootstrap();
	});
</script>

<sdlc-agents-root>
	<landing-page>
		<Header />

		<app-home>
			<div class="home-container">
				<HeroSection />
				<section class="sticky-hero-cube-section"></section>

				<FeaturedRepos />
				<FeaturesSection />

				<BrowserSection />
			</div>
		</app-home>
	</landing-page>
	<Footer />
</sdlc-agents-root>
