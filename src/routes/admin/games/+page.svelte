<script lang="ts">
	import type { Game } from '@prisma/client';
	import type { PageData } from './$types';

	export let data: PageData;

	let name: string;
	let id: string;
	let tags: string = '';
	let realTags: string[];
	$: realTags = tags.split(',') || [];
	let platform: string;
	let developer: string;
	let description: string;
	let image: string;
	let embedURL: string;
	let popular: boolean;
	let emulatorType: string;
	let emulatorFile: string;
	let emulatorCore: string;
	let views: number;

	function createGame(game: Game) {
		fetch(`/api/admin/games/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		});
	}

	let userSelectedGame: string;
	let selectedGame: Game;
	$: selectedGame = data.games.find((game) => game.id === userSelectedGame);

	function updateGame(game: Game) {
		fetch(`/api/admin/games/edit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		});
	}
</script>

<div class="prose lg:prose-lg">
	<h1>Manage Games</h1>
	<p>Manage games.</p>
</div>

<!-- id: string;
    name: string;
    tags: string[];
    platform: string;
    developer: string;
    description: string;
    image: string;
    embedURL: string | null;
    popular: boolean;
    errorMessage: string | null;
    emulatorType: string | null;
    emulatorFile: string | null;
    emulatorCore: string | null;
    views: number;
 -->
<div class="card p-6">
	<div class="flex items-center gap-8">
		<div class="flex w-full flex-col gap-4">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<input type="text" placeholder="Name" class="input input-bordered" bind:value={name} />
				<input type="text" placeholder="ID" class="input input-bordered" bind:value={id} />
			</div>
			<input
				type="text"
				placeholder="Tags (comma-separated)"
				class="input input-bordered"
				bind:value={tags}
			/>
			<input
				type="text"
				placeholder="Platform"
				class="input input-bordered"
				bind:value={platform}
			/>
			<input
				type="text"
				placeholder="Developer"
				class="input input-bordered"
				bind:value={developer}
			/>
			<input
				type="text"
				placeholder="Description"
				class="input input-bordered"
				bind:value={description}
			/>
			<input type="text" placeholder="Image" class="input input-bordered" bind:value={image} />
			<input
				type="text"
				placeholder="Embed URL"
				class="input input-bordered"
				bind:value={embedURL}
			/>

			<div class="flex flex-row flex-wrap items-center gap-4">
				<label class="label">
					<input type="checkbox" class="checkbox-primary checkbox" bind:checked={popular} />
					<span class="label label-text ml-1">Popular</span>
				</label>
				<input
					type="text"
					placeholder="Emulator Type"
					class="input input-bordered"
					bind:value={emulatorType}
				/>
				<input
					type="text"
					placeholder="Emulator File"
					class="input input-bordered"
					bind:value={emulatorFile}
				/>
				<input
					type="text"
					placeholder="Emulator Core"
					class="input input-bordered"
					bind:value={emulatorCore}
				/>
				<input type="text" placeholder="Views" class="input input-bordered" bind:value={views} />
			</div>

			<button
				class="btn btn-primary mt-4"
				on:click={() =>
					createGame({
						id,
						name,
						tags: realTags,
						platform,
						developer,
						description,
						image,
						embedURL,
						popular,
						emulatorType,
						emulatorFile,
						emulatorCore,
						views,
						errorMessage: null
					})}
			>
				Create Game
			</button>
		</div>
	</div>
</div>

<div class="prose">
	<h2>Edit Game</h2>
	<p>Edit an existing game.</p>
</div>
<!-- Edit existing games -->
<select bind:value={userSelectedGame} class="select select-bordered w-full max-w-xs">
	<option>Select a game</option>
	{#each data.games as game}
		<option value={game.id}>{game.name}</option>
	{/each}
</select>

{#if selectedGame}
	<div class="card p-6">
		<div class="flex items-center gap-8">
			<div class="flex w-full flex-col gap-4">
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<input
						type="text"
						placeholder="Name"
						class="input input-bordered"
						bind:value={selectedGame.name}
					/>
					<input
						type="text"
						placeholder="ID"
						class="input input-bordered"
						bind:value={selectedGame.id}
					/>
				</div>
				<input
					type="text"
					placeholder="Tags (comma-separated)"
					class="input input-bordered input-disabled"
					disabled
				/>
				<input
					type="text"
					placeholder="Platform"
					class="input input-bordered"
					bind:value={selectedGame.platform}
				/>
				<input
					type="text"
					placeholder="Developer"
					class="input input-bordered"
					bind:value={selectedGame.developer}
				/>
				<input
					type="text"
					placeholder="Description"
					class="input input-bordered"
					bind:value={selectedGame.description}
				/>
				<input
					type="text"
					placeholder="Image"
					class="input input-bordered"
					bind:value={selectedGame.image}
				/>
				<input
					type="text"
					placeholder="Embed URL"
					class="input input-bordered"
					bind:value={selectedGame.embedURL}
				/>

				<div class="flex flex-row flex-wrap items-center gap-4">
					<label class="label">
						<input
							type="checkbox"
							class="checkbox-primary checkbox"
							bind:checked={selectedGame.popular}
						/>
						<span class="label label-text ml-1">Popular</span>
					</label>
					<input
						type="text"
						placeholder="Emulator Type"
						class="input input-bordered"
						bind:value={selectedGame.emulatorType}
					/>
					<input
						type="text"
						placeholder="Emulator File"
						class="input input-bordered"
						bind:value={selectedGame.emulatorFile}
					/>
					<input
						type="text"
						placeholder="Emulator Core"
						class="input input-bordered"
						bind:value={selectedGame.emulatorCore}
					/>
					<input
						type="number"
						placeholder="Views"
						class="input input-bordered"
						bind:value={selectedGame.views}
					/>
				</div>
			</div>
		</div>
	</div>

	<button class="btn btn-primary mt-4" on:click={() => updateGame(selectedGame)}>
		Update Game
	</button>
{/if}
