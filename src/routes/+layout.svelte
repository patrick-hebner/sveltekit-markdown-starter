<!-- /src/routes/+layout.svelte -->
<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import '$lib/styles/app.css';
</script>

<div class="flex flex-col h-full">
	<header class="px-4 md:px-10 h-20 flex justify-between items-center flex-shrink-0">
		<a href="/" class="text-primary-500 font-bold">Logo</a>
		<nav class="flex gap-4 ">
			<NavLink href="/projects">Projects</NavLink>
			<NavLink href="/about">About</NavLink>
		</nav>
	</header>
	<main class="grow">
		<slot />
	</main>
	<footer class="px-10 h-20 flex justify-between items-center flex-shrink-0">Footer</footer>
</div>
