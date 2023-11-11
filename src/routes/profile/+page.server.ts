import { fail, redirect } from "@sveltejs/kit";

import { auth } from "$lib/server/lucia";

import type { Actions, PageServerLoad } from "./$types";

import { suggestionAlgorithm } from "$lib/server/suggestionAlgorithm";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, "/login");
	return {
		userId: session.user.userId,
		email: session.user.email,
		display_name: session.user.display_name,
		email_verified: session.user.email_verified,
		role: session.user.role,
		suggested_games: await suggestionAlgorithm(session.user.loved_games, session.user.played_games),
	};
};


export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/login"); // redirect to login page
	}
};