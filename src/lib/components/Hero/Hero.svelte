<script lang="ts">
	import { config } from '$lib/config';
</script>

<div class="hero mb-10 min-h-fit bg-base-100">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="/logo.png"
			alt="{config.branding.name} Logo"
			class="w-full max-w-sm rounded-lg shadow-2xl"
		/>
		<div>
			<h1 class="text-5xl font-bold">{config.branding.name}</h1>
			<p class="py-6">{config.branding.description}</p>
			<div class="flex md:flex-row flex-col gap-2">
				<a href="/games">
					<button class="btn btn-primary w-full">Play Now!</button>
				</a>
				<a href="/apps">
					<button class="btn btn-primary w-full">Browse Now!</button>
				</a>
			</div>
		</div>
	</div>
</div>
