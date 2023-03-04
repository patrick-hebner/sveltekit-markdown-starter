<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Section>
	<Container>
		<div class="grid gap-4">
			<Heading>{data.title}</Heading>
			<p>
				{data.summary}
			</p>
		</div>
	</Container>
</Section>
<Section>
	<Container>
		<div class="grid gap-4 md:grid-cols-3">
			{#each data.projects as project (project.path)}
				<div
					class="p-4 ring-2 ring-base-200 rounded flex flex-col justify-between gap-6 auto-rows-min"
				>
					<div class="grid gap-2">
						<Heading variant="sm" level="h2">{project.metadata.title}</Heading>
						<p class="text-base-400">{project.metadata.summary}</p>
					</div>
					<a class="w-fit px-4 py-2 rounded bg-primary-500 text-body-inverse" href={project.path}
						>Open</a
					>
				</div>
			{/each}
		</div>
	</Container>
</Section>
