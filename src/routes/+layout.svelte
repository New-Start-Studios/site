<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import { config } from '$lib/config';
	import '../app.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family={config.fonts.googleFont}:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Nav />

<div class="min-h-[100vh] w-full bg-base-100 p-10 font-main">
	<slot />
</div>

<Footer />
