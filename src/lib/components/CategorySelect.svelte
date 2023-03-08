<script lang="ts">
	import CategoryLink from './CategoryLink.svelte';

	export let categories: string[];
	export let activeCategory: string = '';
</script>

<div class="flex gap-2 flex-wrap">
	{#each categories as category}
		<CategoryLink {category} {activeCategory} />
	{/each}
</div>
