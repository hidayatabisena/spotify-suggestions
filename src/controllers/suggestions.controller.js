import spotifyService from '../services/spotify.service.js';
import openaiService from '../services/openai.service.js';
import { renderSuggestionsList } from '../utils/html-renderer.js';

export const getSuggestions = async (req, res) => {
    try {
        const { criteria } = req.query;

        if (!criteria) {
            return res.status(400).json({ error: 'Missing criteria parameter' });
        }

        const songList = await openaiService.generateSuggestions(criteria);

        const spotifyResults = await Promise.all(
            songList.map(song => spotifyService.searchTrack(song))
        );

        const suggestions = spotifyResults.filter(result => result !== null);

        const htmlContent = renderSuggestionsList(suggestions, criteria);

        return res.json({
            criteria,
            suggestions,
            timestamp: new Date().toISOString(),
            html: htmlContent
        });
    } catch (error) {
        console.error('Error processing request:', error);
        return res.status(500).json({ 
            error: 'Failed to generate suggestions',
            message: error.message 
        });
    }
};
