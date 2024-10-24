export const renderSongCard = (song) => {
    return `
        <div class="song-card" style="
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin: 8px 0;
            display: flex;
            gap: 16px;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        ">
            ${song.image_url ? `
                <img src="${song.image_url}" 
                    alt="${song.name}" 
                    style="
                        width: 100px;
                        height: 100px;
                        border-radius: 4px;
                        object-fit: cover;
                    "
                />
            ` : ''}
            <div style="flex: 1;">
                <h3 style="margin: 0 0 8px 0; color: #1DB954;">${song.name}</h3>
                <p style="margin: 0 0 4px 0; color: #333;">Artist: ${song.artist}</p>
                <p style="margin: 0 0 8px 0; color: #666;">Album: ${song.album}</p>
                <div style="display: flex; gap: 8px;">
                    ${song.spotify_url ? `
                        <a href="${song.spotify_url}" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           style="
                               background: #1DB954;
                               color: white;
                               padding: 8px 16px;
                               border-radius: 20px;
                               text-decoration: none;
                               font-size: 14px;
                           "
                        >
                            Open in Spotify
                        </a>
                    ` : ''}
                    ${song.preview_url ? `
                        <audio controls style="height: 32px;">
                            <source src="${song.preview_url}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
};

export const renderSuggestionsList = (suggestions, criteria) => {
    return `
        <div style="
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        ">
            <h2 style="color: #333; margin-bottom: 16px;">
                Song Suggestions for: ${criteria}
            </h2>
            <div class="suggestions-list">
                ${suggestions.map(song => renderSongCard(song)).join('')}
            </div>
        </div>
    `;
};
