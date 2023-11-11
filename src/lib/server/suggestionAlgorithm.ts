/* eslint-disable prefer-const */
import type { User, Game } from "@prisma/client";
import prisma from '$lib/prisma';

export async function suggestionAlgorithm(loved_games: string[], played_games: string[]) {
    let suggested_games: string[] = [];

    // Get all users
    const users = await prisma.user.findMany();

    // Find the 5 most similar users
    let similarity = 0;
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

        if (user_similarity > similarity) {
            similarity = user_similarity;
            most_similar_users = [user];
        } else if (user_similarity == similarity) {
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