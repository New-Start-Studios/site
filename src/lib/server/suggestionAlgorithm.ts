/* eslint-disable prefer-const */
import type { User, Game } from "@prisma/client";
import prisma from '$lib/prisma';

export async function suggestionAlgorithm(loved_games: string[], played_games: string[]) {
    let suggested_games: string[] = [];

    // Get only 100 random users
    const skip = Math.floor(Math.random() * await prisma.user.count());
    const users = await prisma.user.findMany({
        skip: skip,
        take: 100,
        orderBy: {
            id: "asc"
        }
    });


    // Find the 5 most similar users
    let similarity = [{
        user_id: "",
        similarity: 0
    }]

    let most_similar_users: User[] = [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let user_similarity = 0;

        // Compare loved games
        for (let j = 0; j < loved_games.length; j++) {
            if (user.loved_games.includes(loved_games[j])) {
                user_similarity++;
            }
        }

        // Compare played games
        for (let j = 0; j < played_games.length; j++) {
            if (user.played_games.includes(played_games[j])) {
                user_similarity++;
            }
        }

        // Add to similarity list
        similarity.push({
            user_id: user.id,
            similarity: user_similarity
        });
    }

    // Sort the similarity list
    similarity.sort((a, b) => b.similarity - a.similarity);

    // Get the 5 most similar users
    for (let i = 0; i < 5; i++) {
        let user = await prisma.user.findUnique({
            where: {
                id: similarity[i].user_id
            }
        });
        if (user) {
            most_similar_users.push(user);
        }
    }

    // Get games from the most similar users
    for (let i = 0; i < most_similar_users.length; i++) {
        let user = most_similar_users[i];
        suggested_games.push(...user.loved_games);
        suggested_games.push(...user.played_games);
    }

    // Remove duplicates
    suggested_games = [...new Set(suggested_games)];

    // Remove games the user already loves or has played
    suggested_games = suggested_games.filter(game => !loved_games.includes(game));

    // Randomize the order
    suggested_games.sort(() => Math.random() - 0.5);

    // Remove games until there are only 10 left
    while (suggested_games.length > 10) {
        suggested_games.pop();
    }

    // Return a list of games
    // Convert the ids to Games
    let suggested_games_objects: Game[] = [];
    for (let i = 0; i < suggested_games.length; i++) {
        let game = await prisma.game.findUnique({
            where: {
                id: suggested_games[i]
            }
        });
        if (game) {
            suggested_games_objects.push(game);
        }
    }

    return suggested_games_objects;
}