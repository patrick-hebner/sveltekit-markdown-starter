<script lang="ts">
	type Variant = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | '3xs';

	export let level: 'h1' | 'h2' | 'h3' | 'h4' = 'h1';
	export let variant: Variant = 'xl';
	export let extraClasses = '';

	$: variantClasses = getVariant(variant);

	function getVariant(variant: Variant): string {
		switch (variant) {
			case 'xl':
				return 'text-4xl md:text-5xl lg:text-6xl';
			case 'lg':
				return 'text-3xl md:text-4xl lg:text-5xl';
			case 'md':
				return 'text-2xl md:text-3xl lg:text-4xl';
			case 'sm':
				return 'text-xl md:text-2xl lg:text-3xl';
			case 'xs':
				return 'text-lg md:text-xl lg:text-2xl';
			case '2xs':
				return 'text-md md:text-lg lg:text-xl';
			case '3xs':
				return 'text-sm md:text-md lg:text-lg';
			default:
				return 'text-lg md:text-xl lg:text-2xl';
		}
	}
</script>

<svelte:element this={level} class="font-sans font-bold h-fit {variantClasses} {extraClasses}"
	><slot />
</svelte:element>
