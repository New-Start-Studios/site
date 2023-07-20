<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
</script>

<!-- fill the entire screen with games without having excess space using flex -->
<grid class="flex flex-wrap justify-center gap-4">
	{#each data.games as game}
		<DefaultBox name={game.name} developer={game.developer} image="/game/img/{game.image}" />
	{/each}
</grid>
