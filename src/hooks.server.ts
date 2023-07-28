import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	// we can pass `event` because we used the SvelteKit middleware
	event.locals.auth = auth.handleRequest(event);

	if (event.url.pathname.startsWith("/api/admin") || event.url.pathname.startsWith("/admin")) {
		const session = await event.locals.auth.validate();
		if (!session) {
			return new Response("Unauthorized")
		}
		if (session.user.role !== "admin") {
			return new Response("Unauthorized")
		}
	}

	return await resolve(event);
};
