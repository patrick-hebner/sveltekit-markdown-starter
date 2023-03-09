<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { title, summary, Content } = data;
</script>

<Seo seo={data.seo} />

<Section>
	<Container>
		<div class="grid gap-4">
			<Heading>{title}</Heading>
			<p>
				{summary}
			</p>
			<div class="prose mt-10">
				<Content />
			</div>
		</div>
	</Container>
</Section>
