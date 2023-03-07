<script lang="ts">
	import { slugify } from '$lib/utils/slugify';

	export let category: string;
	$: slug = slugify(category);
</script>

<a
	href={`/projects/categories/${slug}`}
	class="ring-primary-500 ring-2 text-primary-500 text-xs px-2 py-1 rounded w-fit"
>
	{category}
</a>
