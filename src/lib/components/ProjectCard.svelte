<script lang="ts">
	import type { ProjectMetaData } from '$lib/models/pages/project_metadata';
	import CategoryLink from './CategoryLink.svelte';
	import Heading from './Heading.svelte';

	export let project: ProjectMetaData;
	export let path: string;

	$: formattedDate = new Intl.DateTimeFormat('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	}).format(new Date(project.date));
</script>

<div class="p-4 ring-2 ring-base-200 rounded flex flex-col justify-between gap-6 auto-rows-min">
	<div class="grid gap-2">
		<div>
			<div class="text-xs text-base-400">{formattedDate}</div>
			<Heading variant="sm" level="h2">{project.title}</Heading>
		</div>
		<p class="text-base-400">{project.summary}</p>
		<CategoryLink category={project.category} />
	</div>
	<a class="w-fit px-4 py-2 rounded bg-primary-500 text-body-inverse" href={path}>Open</a>
</div>
