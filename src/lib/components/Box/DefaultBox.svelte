<script lang="ts">
	import { config } from '$lib/config';

	export let name: string;
	export let developer: string;
	export let image: string;
	export let link: string;
</script>

<!-- Create a box with a predefined size that will have an image taking up the entire space of the box -->
<a
	class="box-rounded box-boxy block h-44 w-[20rem] box-{config.styling.contentBoxStyleType}"
	href={link}
>
	<div class="relative h-full w-full bg-black box-{config.styling.contentBoxStyleType}">
		<img
			class="absolute h-full w-full bg-white object-cover opacity-25 box-{config.styling.contentBoxStyleType}"
			src={image}
			alt={name}
		/>
		<div class="absolute bottom-0 left-0 p-2">
			<h2 class="text-2xl font-bold text-white">
				{name}
			</h2>
			<p class="text-xl text-white">
				{developer}
			</p>
		</div>
	</div>
</a>
