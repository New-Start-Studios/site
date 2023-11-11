// DELETE request to create a delete app
import prisma from '$lib/prisma';
import type { App } from '@prisma/client';

interface Opts {
	url: URL;
}

// method DELETE
export async function DELETE({ url }: Opts): Promise<Response> {
	const id = url.searchParams.get('id');
	if (!id) return new Response('No id provided', { status: 400 });

	let app: App;

	try {
		app = await prisma.app.delete({
			where: {
				id
			}
		});
	} catch (err) {
		return new Response(err);
	}

	// Remove every instance that has this game in someone's loved_games or played_games
	await prisma.user.findMany().then((users) => {
		for (let i = 0; i < users.length; i++) {
			const user = users[i];
			let loved_apps = user.loved_apps;
			let played_apps = user.played_apps;

			if (loved_apps.includes(id)) {
				loved_apps.splice(loved_apps.indexOf(id), 1);
			}

			if (played_apps.includes(id)) {
				played_apps.splice(played_apps.indexOf(id), 1);
			}

			prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					loved_apps,
					played_apps
				}
			});
		}
	});

	return new Response(JSON.stringify(app));
}
