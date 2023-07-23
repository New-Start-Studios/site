<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import { config } from '$lib/config';
	import '../app.css';
	import customMessage from '$lib/console';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		customMessage();
	});

	// Reset the layout for certain pages containing the url path
	const layoutResetPaths = ['/games/ruffle', '/games/emulator'];
	let resetLayout = false;
	for (const path of layoutResetPaths) {
		if ($page.url.pathname.includes(path)) {
			resetLayout = true;
		}
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family={config.fonts
			.googleFont}:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if !resetLayout}
	<Nav />
{/if}

{#if !resetLayout}
	<div class="min-h-[100vh] w-full bg-base-100 p-10 font-main">
		<slot />
	</div>
{:else}
	<slot />
{/if}

{#if !resetLayout}
	<Footer />
{/if}
