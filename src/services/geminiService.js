/**
 * Gemini AI Service - Free Tier Compatible
 * Get your free API key: https://aistudio.google.com/app/apikey
 */

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const SYSTEM_CONTEXT = `You are a friendly, supportive AI health buddy for the "নতুনপথ (Notun Poth)" app - a teen health awareness platform in Bangladesh.

Your role:
- Provide accurate, age-appropriate information about adolescent health, puberty, mental wellness, and relationships
- Be culturally sensitive to Bangladeshi context
- Use simple, friendly language that teenagers can understand
- Be supportive and non-judgmental
- Encourage seeking professional help for serious concerns
- Keep responses concise (2-4 sentences) unless more detail is needed

Topics you help with:
- Mental health and stress management
- Puberty and physical changes
- Healthy relationships and friendships
- Social media and peer pressure
- Self-esteem and body image
- Gender understanding and respect

Always be encouraging, respectful, and informative.`;

export async function sendMessageToGemini(userMessage) {
    try {
        if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_gemini_api_key_here') {
            throw new Error('Gemini API key not configured. Please add REACT_APP_GEMINI_API_KEY to your .env file.');
        }

        // Request body matching the curl example
        const requestBody = {
            contents: [{
                parts: [{
                    text: `${SYSTEM_CONTEXT}\n\nUser Question: ${userMessage}\n\nProvide a helpful, friendly response:`
                }]
            }]
        };

        // Use X-goog-api-key header instead of query parameter
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': GEMINI_API_KEY
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            return aiResponse;
        } else {
            throw new Error('No response generated. Please try again.');
        }

    } catch (error) {
        console.error('Error calling Gemini API:', error);

        if (error.message.includes('API key')) {
            return '⚠️ Configuration Error: Please check your API key in the .env file.';
        } else if (error.message.includes('429')) {
            return '⏳ Too many requests. Please wait a moment and try again.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            return '🌐 Network error. Please check your internet connection.';
        } else {
            return `⚠️ ${error.message}`;
        }
    }
}

export function isGeminiConfigured() {
    return GEMINI_API_KEY && GEMINI_API_KEY !== 'your_gemini_api_key_here';
}
