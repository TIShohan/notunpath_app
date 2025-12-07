/**
 * Unified AI Service with Automatic Fallback
 * Tries Gemini first, falls back to Groq if Gemini fails
 */

import { sendMessageToGemini } from './geminiService';
import { sendMessageToGroq } from './groqService';

/**
 * Send message to AI with automatic fallback
 * @param {string} userMessage - User's question
 * @returns {Promise<string>} - AI response
 */
export async function sendMessageToAI(userMessage) {
    try {
        // Try Gemini first
        console.log('🤖 Trying Gemini AI...');
        const geminiResponse = await sendMessageToGemini(userMessage);

        // Check if Gemini returned an error message
        if (geminiResponse.includes('⚠️') || geminiResponse.includes('quota') || geminiResponse.includes('exceeded')) {
            throw new Error('Gemini quota exceeded or error');
        }

        console.log('✅ Gemini responded successfully');
        return geminiResponse;

    } catch (error) {
        // Gemini failed, try Groq as fallback
        console.log('⚠️ Gemini failed, switching to Groq...');

        try {
            const groqResponse = await sendMessageToGroq(userMessage);

            // Add a small indicator that we're using fallback
            console.log('✅ Groq responded successfully (fallback)');
            return groqResponse;

        } catch (groqError) {
            // Both failed
            console.error('❌ Both AI services failed');
            return '😔 Sorry, I\'m having trouble connecting right now. Please try again in a moment or check the modules for information!';
        }
    }
}

/**
 * Check which AI service is available
 * @returns {string} - 'gemini', 'groq', or 'none'
 */
export function getAvailableAI() {
    const geminiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const groqKey = process.env.REACT_APP_GROQ_API_KEY;

    if (geminiKey && geminiKey !== 'your_gemini_api_key_here') {
        return 'gemini';
    } else if (groqKey && groqKey !== 'your_groq_api_key_here') {
        return 'groq';
    } else {
        return 'none';
    }
}
