<script lang="ts">
	import { config } from '$lib/config';
</script>

<div class="hero min-h-fit bg-base-100">
	<div class="hero-content flex-col lg:flex-row mb-32">
		<img src="/logo.png" alt="{config.branding.name} Logo" class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">{config.branding.name}</h1>
			<p class="py-6">{config.branding.description}</p>
			<a href="/games">
				<button class="btn btn-primary">Play Now!</button>
			</a>
			<a href="/apps">
				<button class="btn btn-primary">Browse Now!</button>
			</a>
		</div>
	</div>
</div>
