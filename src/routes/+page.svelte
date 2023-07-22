<script lang="ts">
	import { config } from '$lib/config';

    import Hero from '$lib/components/Hero/Hero.svelte';
    import Main from '$lib/components/Main/Main.svelte';
</script>

<svelte:head>
    <title>{config.branding.name}</title>
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta property="og:description" content="Play and browse for free now on {config.branding.name}!" />
</svelte:head>

<!-- Sort the elements based on their order in config.layoutOrder -->
{#each config.homeLayoutOrder as layout}
    {#if layout === 'hero'}
        <Hero />
    {/if}
    {#if layout === 'main'}
        <Main />
    {/if}
{/each}
