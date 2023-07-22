import type { PageLoad } from './$types';
import type { Game } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

export const load = (async ({ fetch, url }) => {
	const searchParam = url.searchParams.get('search') || '';
	const tagParam = url.searchParams.get('tag') || '';

	const response = await fetch(
		PUBLIC_API_BASE_URL +
			'/api/games' +
			(searchParam ? '?search=' + searchParam : '') +
			(tagParam ? '?tag=' + tagParam : '')
	);
	const games: Game[] = await response.json();
	return { games, searchParam, tagParam };
}) satisfies PageLoad;
