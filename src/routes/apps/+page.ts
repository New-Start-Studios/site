import type { PageLoad } from './$types';
import type { App } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

export const load = (async ({fetch}) => {
    const response = await fetch(PUBLIC_API_BASE_URL + '/api/apps');
    const apps: App[] = await response.json();
    return { apps };
}) satisfies PageLoad;