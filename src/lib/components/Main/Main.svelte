<script lang="ts">
	import { config } from '$lib/config';
</script>

<!-- center the div -->
<h2 class="text-2xl font-bold text-center">Config:</h2>
<div class="flex justify-center">
	<div class="mockup-code max-w-xl">
		<code>
			<!-- Print each config -->
			{#each Object.keys(config) as key}
				<p>{key}: {JSON.stringify(config[key])}</p>
			{/each}
		</code>
	</div>
</div>
