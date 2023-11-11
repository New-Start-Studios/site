// DELETE request to create a delete game
import prisma from '$lib/prisma';
import type { Game } from '@prisma/client';

interface Opts {
	url: URL;
}

// method DELETE
export async function DELETE({ url }: Opts): Promise<Response> {
	const id = url.searchParams.get('id');
	if (!id) return new Response('No id provided', { status: 400 });

	let game: Game;

	try {
		game = await prisma.game.delete({
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
			let loved_games = user.loved_games;
			let played_games = user.played_games;

			if (loved_games.includes(id)) {
				loved_games.splice(loved_games.indexOf(id), 1);
			}

			if (played_games.includes(id)) {
				played_games.splice(played_games.indexOf(id), 1);
			}

			prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					loved_games,
					played_games
				}
			});
		}
	});

	return new Response(JSON.stringify(game));
}
