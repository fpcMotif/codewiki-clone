<script lang="ts">
	import GoogleForDevelopersLogo from '$lib/components/icons/GoogleForDevelopersLogo.svelte';
	import GoogleLogo from '$lib/components/icons/GoogleLogo.svelte';
	import { i18n } from '$lib/i18n.svelte';

	let strings = $derived({
		logoLabel: i18n.t("footer.logoLabel") || "Google for developers logo",
		privacy: i18n.t("footer.privacy") || "Privacy Policy",
		terms: i18n.t("footer.terms") || "Terms",
		developers: i18n.t("footer.developers") || "Developers",
		support: i18n.t("footer.support") || "Support",
		developerSite: i18n.t("footer.developerSite") || "Developer Site",
		google: i18n.t("footer.google") || "Google"
	});
</script>

<app-footer>
	<footer class="footer-content centered">
		<div
			aria-label={strings.logoLabel}
			class="google-for-dev"
			role="img"
		>
			<GoogleLogo />
			<GoogleForDevelopersLogo />
		</div>
		<div class="footer-links">
			<a
				href="https://policies.google.com/privacy"
				rel="noopener noreferrer"
				target="_blank"
			>
				{strings.privacy}
			</a>
			<a
				href="https://policies.google.com/terms"
				rel="noopener noreferrer"
				target="_blank"
			>
				{strings.terms}
			</a>
			<a
				href="https://developers.google.com/site-terms"
				rel="noopener noreferrer"
				target="_blank"
			>
				{strings.developers}
			</a>
			<a
				href="https://support.google.com"
				rel="noopener noreferrer"
				target="_blank"
			>
				{strings.support}
			</a>
			<a
				href="https://developers.google.com/"
				rel="noopener noreferrer"
				target="_blank"
			>
				{strings.developerSite}
			</a>
			<a
				href="https://www.google.com/"
				rel="noopener noreferrer"
				target="_blank"
			>
				{strings.google}
			</a>
		</div>
		<div class="footer-locale">
			<!-- Language selector removed -->
		</div>
	</footer>
</app-footer>
