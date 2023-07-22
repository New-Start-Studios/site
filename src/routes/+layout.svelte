<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import '../app.css';
</script>

<Nav />

<div class="min-h-[100vh] w-full bg-base-100 font-main p-10">
	<slot />
</div>

<Footer />
