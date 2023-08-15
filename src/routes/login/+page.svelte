<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: any;
</script>

<h1 class="mb-2 text-3xl font-bold">Sign in</h1>
<form method="post" use:enhance>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Email</span>
		</label>
		<input name="email" id="email" type="email" class="input input-primary w-full max-w-xs" /><br />
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
		<span class="label-text">Don't have an account?</span>
	</label>
	<a href="/signup" class="btn btn-secondary">Create an account</a>
</div>

{#if form?.message}
    <p style="color: red">{form?.message}</p>
{/if}
