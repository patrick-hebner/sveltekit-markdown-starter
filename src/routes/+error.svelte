<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Container from '$lib/components/Container.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { page } from '$app/stores';
</script>

<Section>
	<Container>
		<div class="grid gap-4">
			<Heading variant="xs" level="h2" extraClasses="text-primary-500">{$page.status}</Heading>
			<Heading>{$page.status === 404 ? 'This page does not exist' : 'An error occured'}</Heading>
			{#if $page.status !== 404}
				<p class="text-base-400">{$page.error?.message}</p>
			{/if}
		</div>
	</Container>
</Section>
