<script lang="ts">
	import { config } from '$lib/config';

    import Hero from '$lib/components/Hero/Hero.svelte';
    import Main from '$lib/components/Main/Main.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
</script>

<!-- Sort the elements based on their order in config.layoutOrder -->
{#each config.homeLayoutOrder as layout}
    {#if layout === 'nav'}
        <Nav />
    {/if}
    {#if layout === 'hero'}
        <Hero />
    {/if}
    {#if layout === 'main'}
        <Main />
    {/if}
    {#if layout === 'footer'}
        <Footer />
    {/if}
{/each}
