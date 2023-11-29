import type { PageLoad } from './$types';
import { config } from '$lib/config';

// Disable prerendering
export const prerender = false;


export const load = (async ({ fetch }) => {
	const resUser = await fetch('/api/admin/user');
	const resUserCount = await fetch('/api/admin/user/count');

	if (resUser.ok && resUserCount.ok) {
		return {
			users: await resUser.json(),
			userCount: await resUserCount.json(),
            config: config
		};
	}

	return {};
}) satisfies PageLoad;
