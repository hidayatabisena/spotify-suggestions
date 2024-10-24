import SpotifyWebApi from 'spotify-web-api-node';
import { config } from '../config.js';

class SpotifyService {
    constructor() {
        this.spotifyApi = new SpotifyWebApi({
            clientId: config.spotify.clientId,
            clientSecret: config.spotify.clientSecret
        });
    }

    async initialize() {
        try {
            const data = await this.spotifyApi.clientCredentialsGrant();
            this.spotifyApi.setAccessToken(data.body['access_token']);
        } catch (error) {
            console.error('Error initializing Spotify API:', error);
            throw error;
        }
    }

    async searchTrack(query) {
        try {
            const result = await this.spotifyApi.searchTracks(query, { limit: 1 });
            if (result.body.tracks.items.length > 0) {
                const track = result.body.tracks.items[0];
                return {
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    spotify_url: track.external_urls.spotify,
                    preview_url: track.preview_url,
                    image_url: track.album.images[0]?.url
                };
            }
            return null;
        } catch (error) {
            console.error(`Error searching for track: ${query}`, error);
            return null;
        }
    }
}

export default new SpotifyService();
