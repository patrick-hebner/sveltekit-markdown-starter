<script lang="ts">
	import { slugify } from '$lib/utils/slugify';

	export let category: string;
	export let activeCategory: string = '';
	$: slug = slugify(category);
	$: isActive = activeCategory ? slug === activeCategory : false;
</script>

<a
	href={`/projects/categories/${slug}`}
	class="ring-primary-500 ring-2  text-xs px-2 py-1 rounded w-fit {isActive
		? 'bg-primary-500 text-body-inverse'
		: 'bg-transparent text-primary-500'}"
>
	{category}
</a>
