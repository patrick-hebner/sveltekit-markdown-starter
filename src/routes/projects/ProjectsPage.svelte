<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Section from '$lib/components/Section.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { MetaDataWithPath } from '$lib/models/markdown';
	import type { ProjectsMetaData } from '$lib/models/pages/projects_metadata';
	import type { ProjectMetaData } from '$lib/models/pages/project_metadata';
	import CategorySelect from '$lib/components/CategorySelect.svelte';
	import { getCategoryName } from '$lib/utils/collections';

	export let data: ProjectsMetaData & {
		projects: MetaDataWithPath<ProjectMetaData>[];
		categories: string[];
	};
	export let category: string = '';
</script>

<Section>
	<Container>
		<div class="grid gap-4">
			{#if category}
				<Heading level="h2" variant="2xs" extraClasses="text-primary-500"
					>{getCategoryName(data.categories, category)}</Heading
				>
			{/if}
			<Heading>{data.title}</Heading>
			<p>
				{data.summary}
			</p>
			<CategorySelect categories={data.categories} activeCategory={category} />
		</div>
	</Container>
</Section>
<Section>
	<Container>
		{#if data.projects.length}
			<div class="grid gap-4 md:grid-cols-3">
				{#each data.projects as project (project.path)}
					<ProjectCard project={project.metadata} path={project.path} />
				{/each}
			</div>
		{:else}
			<div class="text-center">
				<Heading level="h3" variant="sm">No projects found</Heading>
			</div>
		{/if}
	</Container>
</Section>
