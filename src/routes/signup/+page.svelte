<script lang="ts">
	import { enhance } from "$app/forms";
	import { config } from "$lib/config";

    export let form;
</script>

<svelte:head>
	<title>{config.branding.name} - Signup</title>
	<meta property="og:title" content="{config.branding.name} - Signup" />
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Play and browse for free now on {config.branding.name}!"
	/>
</svelte:head>

<h1 class="mb-2 text-3xl font-bold">Sign up</h1>
<form method="post" use:enhance>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Email</span>
		</label>
		<input name="email" id="email" class="input input-primary w-full max-w-xs" /><br />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Display Name</span>
		</label>
		<input name="display_name" id="display_name" class="input input-primary w-full max-w-xs" /><br />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Password</span>
		</label>
		<input
			type="password"
			name="password"
			id="password"
			class="input input-primary w-full max-w-xs"
		/><br />
	</div>
	<input type="submit" class="btn btn-primary" />
</form>
<div class="form-control w-full max-w-[14rem] mt-4">
	<label class="label">
		<span class="label-text">Have an account?</span>
	</label>
	<a href="/login" class="btn btn-secondary">Login</a>
</div>


{#if form?.message}
    <p style="color: red">{form?.message}</p>
{/if}