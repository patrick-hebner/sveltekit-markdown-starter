<script lang="ts">
	import type { PageData } from './$types';
	import ProjectsPage from './ProjectsPage.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<ProjectsPage {data} category={$page.params.category} />
