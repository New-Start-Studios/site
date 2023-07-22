<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';

	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - Apps</title>
	<meta name="description" content="Browse for free now on {config.branding.name}!" />
	<meta property="og:description" content="Browse for free now on {config.branding.name}!" />
</svelte:head>

<!-- fill the entire screen with games without having excess space using flex -->
<grid class="flex flex-wrap justify-center gap-4">
	{#each data.apps as app}
		<DefaultBox
			name={app.name}
			developer={app.developer}
			image="/app/img/{app.image}"
			link={'/apps/' + app.id}
		/>
	{/each}
</grid>
