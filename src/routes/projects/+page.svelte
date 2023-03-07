<script lang="ts">
	import type { PageData } from './$types';
	import ProjectsPage from './ProjectsPage.svelte';

	export let data: PageData;
</script>

<ProjectsPage {data} />
