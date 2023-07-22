<script lang="ts">
	import { config } from '$lib/config';
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<div class="navbar bg-base-300 base-content">
	<div class="flex-1">
		<a class="btn btn-ghost text-2xl normal-case" href="/">{config.branding.name}</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal gap-2 px-1">
			<li class="form-control sm:block hidden">
				<input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
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
			<li>
				<select class="select w-full max-w-xs min-w-[6rem]" data-choose-theme>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="black">Black</option>
					<option value="night">Night</option>
					<option value="luxury">Luxury</option>
				</select>
			</li>
		</ul>
	</div>
</div>
