<script lang="ts">
    import { config } from '$lib/config';
</script>

<div class="my-2 bg-secondary text-onSecondary">
	<h2 class="text-2xl font-bold">Config:</h2>
	<code>
		<!-- Print each config -->
		{#each Object.keys(config) as key}
			<p>{key}: {JSON.stringify(config[key])}</p>
		{/each}
	</code>
</div>