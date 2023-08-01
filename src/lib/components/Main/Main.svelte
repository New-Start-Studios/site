<script lang="ts">
	import { config } from '$lib/config';

	import { page } from '$app/stores';

	import Carousel from '../Carousel.svelte';
	import DefaultBox from '../Box/DefaultBox.svelte';

	import Icon from '@iconify/svelte';
</script>

<div class="justify-left mb-10 flex flex-col">
	{#if $page.data.loved_apps !== undefined && $page.data.loved_apps.length > 0}
		<div class="flex flex-col gap-4">
			<!-- Display the apps -->
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-6rem)]">
				<h1 class="mb-1 flex text-2xl font-bold capitalize">
					Loved Apps
					<Icon icon="mdi:heart" class="text-xl text-red-500 my-auto ml-2" />
					<!-- center the text vertically -->
					<a
						href="/profile"
						class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
					>
						View more
					</a>
				</h1>
				<Carousel SCROLL_AMOUNT={640}>
					{#each $page.data.apps as app}
						<!-- if the app.id is in the loved apps show it -->
						{#if $page.data.loved_apps.includes(app.id)}
							<DefaultBox
								name={app.name}
								image={'/cdn/app/img/' + app.image}
								developer={app.developer}
								link={'/apps/' + app.id}
							/>
						{/if}
					{/each}
				</Carousel>
			</div>
		</div>
	{/if}
	<div class="flex flex-col gap-4">
		<!-- Display the apps -->
		<!-- limit the width to the max size of the container -->
		<div class="max-w-[calc(100vw-6rem)]">
			<h1 class="mb-1 flex text-2xl font-bold capitalize">
				Apps
				<!-- center the text vertically -->
				<a
					href="/apps"
					class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
				>
					View more
				</a>
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
	{#if $page.data.loved_games !== undefined && $page.data.loved_games.length > 0}
		<div class="flex flex-col gap-4">
			<!-- Display the apps -->
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-6rem)]">
				<h1 class="mb-1 flex text-2xl font-bold capitalize">
					Loved Games
					<Icon icon="mdi:heart" class="text-xl text-red-500 my-auto ml-2" />
					<!-- center the text vertically -->
					<a
						href="/profile"
						class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
					>
						View more
					</a>
				</h1>
				<Carousel SCROLL_AMOUNT={640}>
					{#each $page.data.games as game}
						<!-- if the app.id is in the loved apps show it -->
						{#if $page.data.loved_games.includes(game.id)}
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
		</div>
	{/if}
	<div class="flex flex-col gap-4">
		<!-- Display the games -->
		{#each $page.data.gameTags as tag}
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-6rem)]">
				<h1 class="mb-1 flex text-2xl font-bold capitalize">
					{#if tag.length > 3}
						{tag}
					{:else}
						{tag.toUpperCase()}
					{/if}
					<!-- center the text vertically -->
					<a
						href="/games?tag={tag}"
						class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
					>
						View more
					</a>
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
