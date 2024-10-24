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
                <div style="
                    display: flex; 
                    flex-wrap: wrap;
                    gap: 12px;
                    align-items: center;
                ">
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
                               display: inline-flex;
                               align-items: center;
                               gap: 6px;
                           "
                        >
                            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                            Open in Spotify
                        </a>
                    ` : ''}
                    ${song.preview_url ? `
                        <div style="
                            flex: 1;
                            min-width: 200px;
                            background: #f5f5f5;
                            padding: 8px;
                            border-radius: 20px;
                        ">
                            <audio controls style="width: 100%; height: 32px;">
                                <source src="${song.preview_url}" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    ` : `
                        <span style="
                            color: #666;
                            font-size: 14px;
                            font-style: italic;
                        ">
                            Preview not available
                        </span>
                    `}
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
