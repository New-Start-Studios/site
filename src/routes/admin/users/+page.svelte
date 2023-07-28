<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let users = data.users;

	let search = '';

	$: filteredUsers = users.filter((user) => {
		return user.username.toLowerCase().includes(search.toLowerCase());
	});

	function deleteUser(id: string) {
		fetch(`/api/admin/user?id=${id}`, {
			method: 'DELETE'
		});
	}

	function editUser(id: string, username: string, role: string) {
		console.log(
			JSON.stringify({
				username: username,
				role: role
			})
		);
		fetch(`/api/admin/user?id=${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				role: role
			})
		});
	}
</script>

<div class="prose lg:prose-lg">
	<h1>Manage Users</h1>
	<p>Manage users.</p>
</div>
<!-- /api/admin/user POST request to modify user -->
<!-- /api/admin/user DELETE request to delete user -->

<!-- input field to sort users by username-->
<input
	type="text"
	placeholder="Search by username"
	class="input input-bordered mb-6"
	bind:value={search}
/>
{#each filteredUsers as user}
	<div class="card">
		<div class="card-body">
			<div class="flex flex-row items-center gap-20">
				<div class="avatar placeholder">
					<div class="w-24 rounded-full bg-neutral-focus text-neutral-content">
						<span class="text-3xl">{user.username[0]}</span>
					</div>
				</div>
				<div>
					<p>User id:</p>
					<input type="text" class="input input-disabled" bind:value={user.id} readonly />
					<p>Username:</p>
					<input type="text" class="input input-bordered" bind:value={user.username} />
					<p>Role:</p>
					<input type="text" class="input input-bordered" bind:value={user.role} />
				</div>
				<button
					class="btn btn-primary mt-6"
					on:click={() => editUser(user.id, user.username, user.role)}>Edit</button
				>
				<button class="btn btn-error mt-6" on:click={() => deleteUser(user.id)}>Delete</button>
			</div>
		</div>
	</div>
{/each}
