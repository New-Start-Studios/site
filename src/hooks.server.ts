import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// we can pass `event` because we used the SvelteKit middleware
	event.locals.auth = auth.handleRequest(event);

	if (event.url.pathname.startsWith('/api/admin') || event.url.pathname.startsWith('/admin')) {
		const session = await event.locals.auth.validate();
		if (!session) {
			return new Response('Unauthorized');
		}
		if (session.user.role !== 'admin') {
			return new Response('Unauthorized');
		}
	}

	// if (event.url.pathname.startsWith('/~/')) {
	// 	// grab the slug from the url
	// 	const slug = event.url.href.split('/').pop();

	// 	// redirect the user to the search page with the slug as the query
	// 	return new Response(null, {
	// 		status: 302,
	// 		headers: {
	// 			location: `/search?q=${slug}`
	// 		}
	// 	});
	// }

	return await resolve(event);
};
