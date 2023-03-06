<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
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
				<ProjectCard project={project.metadata} path={project.path} />
			{/each}
		</div>
	</Container>
</Section>
