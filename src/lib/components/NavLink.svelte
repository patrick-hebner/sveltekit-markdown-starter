<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	{href}
	class="text-xs uppercase hover:text-primary-500 {$page.url.pathname.startsWith(href)
		? 'text-primary-500'
		: 'text-body'}"><slot /></a
>
