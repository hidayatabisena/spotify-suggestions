import express from 'express';
import { config } from './config.js';
import spotifyService from './services/spotify.service.js';
import { getSuggestions } from './controllers/suggestions.controller.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/suggestions', getSuggestions);

const startServer = async () => {
    try {
        await spotifyService.initialize();
        app.listen(config.server.port, () => {
            console.log(`Server running on port ${config.server.port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
