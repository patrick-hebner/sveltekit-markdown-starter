<script lang="ts">
	import type { SeoData } from '$lib/models/seo';

	export let seo: SeoData | undefined;
</script>

<svelte:head>
	{#if seo}
		<title>{seo.title}</title>
		<meta name="description" content={seo.description} />
		<meta property="og:title" content={seo.title} />
		<meta property="og:description" content={seo.description} />
	{/if}
</svelte:head>
