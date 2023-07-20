import type { PageLoad } from './$types';
import type { App } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

// This allows for it to be prerendered by the client (say they hover over the games button)
// Or for it to be rendered server side (great for SEO)
export const load = (async ({fetch}) => {
    const response = await fetch(PUBLIC_API_BASE_URL + '/api/apps');
    const apps: App[] = await response.json();
    return { apps };
}) satisfies PageLoad;