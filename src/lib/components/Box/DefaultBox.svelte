<script lang="ts">
	import { config } from '$lib/config';

	export let name: string;
	export let developer: string;
	export let image: string;
	export let link: string;
</script>

<!-- Why have both box-rounded and box-boxy classes? -->
<!-- This is because Tailwind will not include it in the CSS file if we do not have it and it will not render correctly. -->
<!-- To ensure that it renders correctly we will include every variation inside of it and then the class at the end of it will take precedence. -->
<!-- We only need to have this appear one time throughout the rendered page, but to ensure that it works across all pages it must be placed throughout the codebase. -->
<a
	class="box-rounded box-boxy block h-44 w-[20rem] box-{config.styling.contentBoxStyleType}"
	href={link}
>
	<div class="relative h-full w-full bg-black box-{config.styling.contentBoxStyleType}">
		<img
			class="absolute h-full w-full bg-white object-cover opacity-25 box-{config.styling
				.contentBoxStyleType}"
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
