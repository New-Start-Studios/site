<script lang="ts">
	import { enhance } from '$app/forms';

	import type { PageData } from './$types';

	import { config } from '$lib/config';

	export let data: PageData;
</script>

<svelte:head>
	<title>{config.branding.name} - Profile</title>
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Play and browse for free now on {config.branding.name}!"
	/>
</svelte:head>

<h1 class="mb-2 text-3xl font-bold">Profile</h1>
<div class="flex flex-row items-center gap-20">
	<div class="avatar placeholder">
		<div class="w-24 rounded-full bg-neutral-focus text-neutral-content">
			<span class="text-3xl">{data.display_name[0]}</span>
		</div>
	</div>
	<div>
		<p>User id: {data.userId}</p>
		<p>
			Email: {data.email}
			{#if data.email_verified}
				<span class="text-success-content px-2 py-1 rounded-full bg-success"> Verified </span>
			{:else}
			<span class="text-error-content px-2 py-1 rounded-full bg-error"> Not verified </span>
			{/if}
		</p>
		<p>Display Name: {data.display_name}</p>
		<p>Role: {data.role}</p>
	</div>
</div>
<div class="flex flex-row gap-2">
	<form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" class="btn btn-primary mt-6" />
	</form>
	{#if data.role === 'admin'}
		<a href="/admin" class="btn btn-primary mt-6"> Admin Page </a>
	{/if}
</div>
