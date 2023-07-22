<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { config } from '$lib/config';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
</script>

<svelte:head>
    <title>{config.branding.name} - Games</title>
	<meta name="description" content="Play for free now on {config.branding.name}!" />
	<meta property="og:description" content="Play for free now on {config.branding.name}!" />
</svelte:head>

<!-- fill the entire screen with games without having excess space using flex -->
<grid class="flex flex-wrap justify-center gap-4">
	{#each data.games as game}
		<DefaultBox name={game.name} developer={game.developer} image="/game/img/{game.image}" link={'/games/' + game.id} />
	{/each}
</grid>
