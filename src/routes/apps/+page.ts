import type { PageLoad } from './$types';
import type { App } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

export const load = (async ({ fetch, url }) => {
	const searchParam = url.searchParams.get('search') || '';
	const tagParam = url.searchParams.get('tag') || '';

	const response = await fetch(
		PUBLIC_API_BASE_URL +
			'/api/apps' +
			(searchParam ? '?search=' + searchParam : '') +
			(tagParam ? '?tag=' + tagParam : '')
	);
	const apps: App[] = await response.json();
	return { apps, searchParam, tagParam };
}) satisfies PageLoad;
