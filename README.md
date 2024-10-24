# 🎵 Spotify Song Suggestions Plugin MAIA

A Plugin that generates intelligent song suggestions using OpenAI and fetches detailed track information from Spotify. Perfect for integration as a plugin or standalone service.

example web implementation
![Example Web](https://res.cloudinary.com/moyadev/image/upload/v1729776188/maia-spotify_mayijo.png)

---
JSON and HTML data
![Plugin Spotify MAIA](https://res.cloudinary.com/moyadev/image/upload/v1729776630/CleanShot_2024-10-24_at_20.23.16_2x_uimtse.png)

## ✨ Features

- 🤖 AI-powered song suggestions using OpenAI
- 🎵 Detailed Spotify track information
- 🚀 Fast and efficient API responses
- 🔒 Secure credential handling
- 📚 Well-documented codebase

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A Spotify Developer Account
- An OpenAI API Key

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/hidayatabisena/spotify-suggestions.git
cd spotify-suggestions
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Configure your credentials**
Open `.env` and add your credentials:
```bash
OPENAI_API_KEY=your_openai_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
PORT=3000
```

5. **Start the development server**
```bash
npm run dev
```

## 🔧 Development

Start the development server with hot reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📡 API Usage

### Get Song Suggestions

**Endpoint:** `GET /suggestions`

**Query Parameters:**
- `criteria` (required): Description of the type of songs you're looking for

**Example Request:**
```bash
curl "http://localhost:3000/suggestions?criteria=upbeat workout songs"
```

**Example Response:**
```json
{
    "criteria": "upbeat workout songs",
    "suggestions": [
        {
            "name": "Stronger",
            "artist": "Kanye West",
            "album": "Graduation",
            "spotify_url": "https://open.spotify.com/track/...",
            "preview_url": "https://p.scdn.co/mp3-preview/...",
            "image_url": "https://i.scdn.co/image/..."
        }
    ],
    "timestamp": "2024-10-24T17:00:00.000Z"
}
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `SPOTIFY_CLIENT_ID` | Spotify application client ID | Yes |
| `SPOTIFY_CLIENT_SECRET` | Spotify application client secret | Yes |
| `PORT` | Server port (defaults to 3000) | No |

## 📂 Project Structure

```
spotify-suggestions/
├── src/
│   ├── controllers/
│   │   └── suggestions.controller.js
│   ├── services/
│   │   ├── spotify.service.js
│   │   └── openai.service.js
│   ├── config.js
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔒 Security

- Never commit your `.env` file
- Always use environment variables for sensitive data
- Keep your API keys secure and rotate them regularly
- Consider implementing rate limiting for production use

## 🛠 Getting API Keys

### Spotify API
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Get your Client ID and Client Secret

### OpenAI API
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or log in
3. Navigate to API keys section
4. Generate a new API key

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/hidayatabisena/spotify-suggestions/blob/main/LICENSE.md) file for details.

## 🙏 Acknowledgments

- OpenAI for their powerful GPT models
- Spotify for their comprehensive Web API
- The Node.js community for excellent tools and libraries

## 📧 Contact

Your Name - [@hidayatabisena](https://twitter.com/hidayatabisena)

Project Link: [https://github.com/hidayatabisena/spotify-suggestions](https://github.com/hidayatabisena/spotify-suggestions)

## ⚠️ Troubleshooting

**Common Issues:**

1. **API Authentication Errors**
   - Verify your API keys are correct
   - Check if your keys have proper permissions

2. **Module Not Found Errors**
   - Run `npm install` again
   - Check if all dependencies are properly listed in package.json

3. **Port Already in Use**
   - Change the PORT in your .env file
   - Kill any process using the same port

## 🚀 Deployment

This API can be deployed to various platforms:

### Heroku
```bash
heroku create
git push heroku main
```

### Docker
```bash
docker build -t spotify-suggestions .
docker run -p 3000:3000 spotify-suggestions
```

Remember to set up environment variables on your deployment platform!
