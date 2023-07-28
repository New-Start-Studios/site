import prisma from "$lib/prisma";

interface Opts {
	url: URL;
}


export const prerender = false;

// searchParams.get("user") is the username of the user to get
// searchParams.get("page") is the page number to get

export async function GET({ url }: Opts): Promise<Response> {
    const NUM_TO_SHOW = 100;

    // Find the user the request is for
    const userQuery = url.searchParams.get("user");
    if (!userQuery) {
        const pageNumber = url.searchParams.get("page");
        if (pageNumber) {
            const page = parseInt(pageNumber);
            if (isNaN(page)) {
                return new Response("Invalid page number");
            }

            const users = await prisma.user.findMany({
                skip: (page - 1) * NUM_TO_SHOW,
                take: NUM_TO_SHOW,
                orderBy: {
                    username: "asc"
                }
            });

            return new Response(JSON.stringify(users))
        } else {
            const users = await prisma.user.findMany({
                take: NUM_TO_SHOW,
                orderBy: {
                    username: "asc"
                }
            });

            return new Response(JSON.stringify(users))
        }
    }

    const user = await prisma.user.findUnique({
        where: {
            username: userQuery
        }
    });

    if (!user) {
        return new Response("User not found");
    }

    return new Response(JSON.stringify(user), {
        headers: {
            "Content-Type": "application/json",
        }
    });
};