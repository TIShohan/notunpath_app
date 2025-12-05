/**
 * Alternative AI Service using Groq (Free & Fast)
 * Backup option if Gemini doesn't work
 * Get free API key: https://console.groq.com
 */

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

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

/**
 * Send a message to Groq AI and get a response
 * @param {string} userMessage - The user's question
 * @returns {Promise<string>} - AI's response
 */
export async function sendMessageToGroq(userMessage) {
    try {
        if (!GROQ_API_KEY || GROQ_API_KEY === 'your_groq_api_key_here') {
            throw new Error('Groq API key not configured.');
        }

        const requestBody = {
            model: "llama-3.1-8b-instant", // Free, fast model
            messages: [
                {
                    role: "system",
                    content: SYSTEM_CONTEXT
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            temperature: 0.7,
            max_tokens: 500,
        };

        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Groq API Error:', errorData);
            throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error('No response generated.');
        }

    } catch (error) {
        console.error('Error calling Groq API:', error);
        return `⚠️ ${error.message}`;
    }
}

export function isGroqConfigured() {
    return GROQ_API_KEY && GROQ_API_KEY !== 'your_groq_api_key_here';
}
