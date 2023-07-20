import type { PageLoad } from './$types';
import type { Game } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

export const load = (async ({fetch}) => {
    const response = await fetch(PUBLIC_API_BASE_URL + '/api/games');
    const games: Game[] = await response.json();
    return { games };
}) satisfies PageLoad;