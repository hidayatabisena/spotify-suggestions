import OpenAI from 'openai';
import { config } from '../config.js';

class OpenAIService {
    constructor() {
        this.openai = new OpenAI({
            apiKey: config.openai.apiKey
        });
    }

    async generateSuggestions(criteria) {
        try {
            const completion = await this.openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [{
                    role: "system",
                    content: "You are a music recommendation expert. Provide song suggestions based on the given criteria."
                }, {
                    role: "user",
                    content: `Suggest 5 songs based on: ${criteria}`
                }],
                temperature: 0.7,
            });

            return completion.choices[0].message.content
                .split('\n')
                .filter(line => line.trim().length > 0)
                .map(line => line.replace(/^\d+\.\s*/, ''));
        } catch (error) {
            console.error('Error generating suggestions:', error);
            throw error;
        }
    }
}

export default new OpenAIService();
