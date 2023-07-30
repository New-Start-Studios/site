<script lang="ts">
	import { config } from '$lib/config';

	import { page } from '$app/stores';

	import Carousel from '../Carousel.svelte';
	import DefaultBox from '../Box/DefaultBox.svelte';

	import Icon from '@iconify/svelte';
</script>

<div class="justify-left mb-10 flex flex-col">
	<div class="flex flex-col gap-4">
		<!-- Display the apps -->
		<!-- limit the width to the max size of the container -->
		<div class="max-w-[calc(100vw-6rem)]">
			<h1 class="flex text-2xl font-bold capitalize mb-1">
				Apps
				<!-- center the text vertically -->
				<a href="/apps" class="my-auto ml-2 text-sm text-accent-content bg-accent hover:bg-accent-focus transition-colors px-2 py-1 rounded-full"> View more </a>
			</h1>
			<Carousel SCROLL_AMOUNT={640}>
				{#each $page.data.apps as app}
					<DefaultBox
						name={app.name}
						image={'/cdn/app/img/' + app.image}
						developer={app.developer}
						link={'/apps/' + app.id}
					/>
				{/each}
			</Carousel>
		</div>
	</div>
</div>

<div class="justify-left mb-10 flex flex-col">
	<div class="flex flex-col gap-4">
		<!-- Display the games -->
		{#each $page.data.gameTags as tag}
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-6rem)]">
				<h1 class="flex text-2xl font-bold capitalize mb-1">
					{#if tag.length > 3}
						{tag}
					{:else}
						{tag.toUpperCase()}
					{/if}
					<!-- center the text vertically -->
					<a href="/games?tag={tag}" class="my-auto ml-2 text-sm text-accent-content bg-accent hover:bg-accent-focus transition-colors px-2 py-1 rounded-full"> View more </a>
				</h1>
				<Carousel SCROLL_AMOUNT={640}>
					{#each $page.data.games as game}
						{#if game.tags.includes(tag)}
							<DefaultBox
								name={game.name}
								image={'/cdn/game/img/' + game.image}
								developer={game.developer}
								link={'/games/' + game.id}
							/>
						{/if}
					{/each}
				</Carousel>
			</div>
		{/each}
	</div>
</div>
