<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="prose lg:prose-lg">
	<h1>Admin Page</h1>
	<p>This is an admin page.</p>
	<h2>Users:</h2>
	<code>
		<pre>{JSON.stringify(data.users, null, 2)}</pre>
	</code>

    <h2>Config:</h2>
	<code>
		<pre>{JSON.stringify(data.config, null, 2)}</pre>
	</code>


	<h2>Game Data:</h2>
	<code >
		<pre class="max-h-[50rem]">{JSON.stringify(data.games, null, 2)}</pre>
	</code>

	<h2>App Data:</h2>
	<code>
		<pre class="max-h-[50rem]">{JSON.stringify(data.apps, null, 2)}</pre>
	</code>
</article>
