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

<svelte:window bind:outerWidth={width} />

<div class="base-content navbar bg-base-300">
	{#if width > 760}
		<div class="flex-1">
			<a class="btn btn-ghost text-2xl normal-case" href="/">{config.branding.name}</a>
		</div>
	{:else}
		<div class="flex-1">
			<a class="btn btn-ghost text-2xl normal-case" href="/">
				<img src="/logo.png" alt="{config.branding.name} Logo" class="h-10 w-10 rounded-md" />
			</a>
		</div>
	{/if}
	<div class="flex-none">
		<ul class="menu menu-horizontal gap-2 px-1">
			<li class="form-control hidden sm:block">
				<form on:submit={() => (window.location.href = '/search?q=' + searchQuery)}>
					<input
						type="text"
						placeholder="Search"
						class="input input-bordered w-24 md:w-auto"
						bind:value={searchQuery}
					/>
				</form>
			</li>
			<li class="place-content-center">
				<a href="/games">
					<Icon icon="mdi:gamepad-variant" class="text-2xl" />
				</a>
			</li>
			<li class="place-content-center">
				<a href="/apps">
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
				</select>
			</li>
		</ul>
	</div>
</div>
