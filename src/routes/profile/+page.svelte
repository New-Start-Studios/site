<script lang="ts">
	import { enhance } from '$app/forms';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="mb-2 text-3xl font-bold">Profile</h1>
<div class="flex flex-row items-center gap-20">
	<div class="avatar placeholder">
		<div class="w-24 rounded-full bg-neutral-focus text-neutral-content">
			<span class="text-3xl">{data.username[0]}</span>
		</div>
	</div>
	<div>
		<p>User id: {data.userId}</p>
		<p>Username: {data.username}</p>
		<p>Role: {data.role}</p>
	</div>
</div>
<form method="post" action="?/logout" use:enhance>
	<input type="submit" value="Sign out" class="btn btn-primary mt-6" />
</form>
