<script lang="ts">
	import { config } from '$lib/config';
</script>

<div class="text-secondary">
	<h1 class="text-7xl font-bold font-heading">{config.branding.name}</h1>
	<h3 class="text-3xl">{config.branding.description}</h3>
	<br />
	<!-- config.styling.buttonStyleType can be rounded or boxy -->
	<!-- class names btn-boxy or btn-rounded -->
	<button class="btn-{config.styling.buttonStyleType} mx-4">Button</button>
</div>
