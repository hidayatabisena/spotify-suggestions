import dotenv from 'dotenv';
dotenv.config()

export const config = {
    openai: {
        apiKey: process.env.OPENAI_API_KEY
    },
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    },
    server: {
        port: process.env.PORT || 3000
    }
};