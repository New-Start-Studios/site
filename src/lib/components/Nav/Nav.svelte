<script lang="ts">
	import { config } from '$lib/config';
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	let searchQuery: string = '';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});

	let width: number = 0;
</script>

<svelte:window bind:innerWidth={width} />

<div class="base-content navbar bg-base-300">
	{#if width > 760}
		<div class="flex-1">
			<a class="btn btn-ghost text-2xl normal-case" href="/">{config.branding.name}</a>
		</div>
	{:else}
		<div class="flex-1">
			<a
				class="btn btn-ghost tooltip tooltip-right normal-case"
				data-tip={config.branding.name}
				href="/apps"
			>
				<img src="/logo.png" alt="{config.branding.name} Logo" class="h-full rounded-md" />
			</a>
		</div>
	{/if}
	<div class="flex-none">
		<ul class="menu menu-horizontal gap-2 px-1">
			<li class="form-control hidden sm:block">
				<form on:submit={() => (window.location.href = '/search?q=' + searchQuery)}>
					{#if config.features.searchBar}
						<div class="input input-bordered input-sm flex h-14 flex-row">
							<input
								type="text"
								placeholder="Search here"
								class="input input-ghost input-sm my-auto w-full max-w-md focus:border-none focus:shadow-none focus:outline-none"
								bind:value={searchQuery}
							/>
							<div class="m-auto hidden min-w-fit sm:block">
								<kbd class="kbd">ctrl</kbd>
								+
								<kbd class="kbd">k</kbd>
							</div>
						</div>
					{:else}
						<input
							type="text"
							placeholder="Search"
							class="input input-bordered w-24 md:w-auto"
							bind:value={searchQuery}
						/>
					{/if}
				</form>
			</li>
			<li class="place-content-center">
				<a class="tooltip tooltip-bottom" data-tip="Games" href="/games">
					<Icon icon="mdi:gamepad-variant" class="text-2xl" />
				</a>
			</li>
			<li class="place-content-center">
				<a class="tooltip tooltip-bottom" data-tip="Apps" href="/apps">
					<Icon icon="ri:app-store-fill" class="text-2xl" />
				</a>
			</li>
			<li class="place-content-center">
				<select class="select w-full min-w-[6rem] max-w-xs" data-choose-theme>
					<option value="light" class="bg-base-100">Light</option>
					<option value="dark" class="bg-base-100">Dark</option>
					<option value="black" class="bg-base-100">Black</option>
					<option value="night" class="bg-base-100">Night</option>
					<option value="luxury" class="bg-base-100">Luxury</option>
					<option value="custom" class="bg-base-100">Custom</option>
				</select>
			</li>
		</ul>
	</div>
</div>
