<script lang="ts">
	import StarIcon from '$lib/components/icons/StarIcon.svelte';
	import { i18n } from '$lib/i18n.svelte';

	type Repository = {
		name: string;
		url: string;
		description: string;
		descriptionKey: string;
		stars: string;
	};

	const REPOSITORIES: Repository[] = [
		{
			name: "gemini-cli",
			url: "https://codewiki.google/github.com/google-gemini/gemini-cli",
			description:
				"An open-source AI agent that brings Gemini's powerful capabilities directly to your terminal.",
			descriptionKey: "featured.geminiCli.description",
			stars: "81.5k",
		},
		{
			name: "go",
			url: "https://codewiki.google/github.com/golang/go",
			description: "Go programming language",
			descriptionKey: "featured.go.description",
			stars: "130.7k",
		},
		{
			name: "flutter",
			url: "https://codewiki.google/github.com/flutter/flutter",
			description:
				"Flutter makes it simple to build beautiful, fast mobile and cross-platform apps",
			descriptionKey: "featured.flutter.description",
			stars: "173.7k",
		},
		{
			name: "kubernetes",
			url: "https://codewiki.google/github.com/kubernetes/kubernetes",
			description: "Production-grade container scheduling and management",
			descriptionKey: "featured.kubernetes.description",
			stars: "118.4k",
		},
		{
			name: "react",
			url: "https://codewiki.google/github.com/facebook/react",
			description: "A library for building user interfaces for web and native",
			descriptionKey: "featured.react.description",
			stars: "240.3k",
		},
		{
			name: "python-sdk",
			url: "https://codewiki.google/github.com/modelcontextprotocol/python-sdk",
			description:
				"Official Python SDK for Model Context Protocol servers and clients",
			descriptionKey: "featured.pythonSdk.description",
			stars: "19.8k",
		},
	];

	let featuredTitle = $derived(i18n.t("featured.title") || "Featured Repositories");
	let repositories = $derived(REPOSITORIES.map(repo => ({
		...repo,
		displayDescription: i18n.t(repo.descriptionKey) || repo.description
	})));
</script>

<section class="featured-section">
	<h2>{featuredTitle}</h2>
	<div class="repositories-grid">
		{#each repositories as repo}
			<a class="repo-card shine" href={repo.url}>
				<div class="repo-content">
					<div class="repo-header">
						<h3>{repo.name}</h3>
					</div>
					<p class="repo-description">
						<span>{repo.displayDescription}</span>
					</p>
					<span class="star-count">
						<StarIcon />
						{repo.stars}
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
