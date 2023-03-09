<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Container from '$lib/components/Container.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { PageData } from './$types';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
</script>

<Seo seo={data.seo} />

<Section>
	<Container>
		<div class="grid gap-4">
			<Heading>{data.title}</Heading>
			<p class="text-base-400 max-w-lg">
				{data.summary}
			</p>

			<div class="flex gap-2 items-center">
				<a
					class="w-fit px-4 py-2 rounded bg-primary-500 text-body-inverse"
					href={data.buttons.primaryUrl}>{data.buttons.primary}</a
				>
				<a
					class="w-fit px-4 py-2 rounded bg-secondary-500 text-body-inverse"
					href={data.buttons.secondaryUrl}>{data.buttons.secondary}</a
				>
			</div>
		</div>
	</Container>
</Section>
<Section>
	<Container>
		<div class="grid gap-4 md:grid-cols-3">
			{#each data.features as feature}
				<div class="p-4 ring-2 ring-base-200 rounded grid gap-2 auto-rows-min">
					<Heading variant="md" level="h2">{feature.title}</Heading>
					<p class="text-base-400">{feature.summary}</p>
				</div>
			{/each}
		</div>
	</Container>
</Section>
<Section>
	<Container>
		<div class="grid gap-4 md:grid-cols-2">
			<div class="grid gap-4 auto-rows-min">
				<Heading level="h2" variant="lg">{data.projects.title}</Heading>
				<a class="w-fit px-4 py-2 rounded bg-primary-500 text-body-inverse" href="/projects"
					>{data.projects.button}</a
				>
			</div>
			<div class="grid gap-4">
				{#each data.latestProjects as project (project.path)}
					<ProjectCard project={project.metadata} path={project.path} />
				{/each}
			</div>
		</div>
	</Container>
</Section>
