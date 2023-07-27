<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import Gtm from '$lib/components/Collection/GTM.svelte';
	import { config } from '$lib/config';
	import '../app.css';
	import customMessage from '$lib/console';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// if control  + k is pressed, focus the search bar and ensure the browser doesn't do anything
	onMount(() => {
		customMessage();

		window.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'k') {
				e.preventDefault();
				if (window.searchBar === undefined) {
					return;
				}

				if (window.searchBar.open) {
					window.searchBar.close();
				} else {
					window.searchBar.showModal();
				}
			}
		});
	});

	// Reset the layout for certain pages containing the url path
	const layoutResetPaths = ['/games/ruffle', '/games/emulator'];
	let resetLayout = false;
	for (const path of layoutResetPaths) {
		if ($page.url.pathname.includes(path)) {
			resetLayout = true;
		}
	}

	import SearchBar from '$lib/components/SearchBar.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family={config.fonts
			.googleFont}:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Gtm gtmId={config.analytics.gtmID} />

{#if !resetLayout}
	<Nav />
{/if}

{#if !resetLayout}
	<div class="min-h-[100vh] w-full bg-base-100 p-10 font-main">
		{#if config.features.searchBar}
			<dialog id="searchBar" class="modal">
				<form method="dialog" class="modal-box h-fit" in:fade out:fade={{ duration: 50 }}>
					<SearchBar />
				</form>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		{/if}
		<slot />
	</div>
{:else}
	<slot />
{/if}

{#if !resetLayout}
	<Footer />
{/if}
