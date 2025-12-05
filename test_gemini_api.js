// Quick test to verify your Gemini API key works
// Run this in browser console or create a test page

async function testGeminiAPI() {
    const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    const requestBody = {
        contents: [{
            parts: [{
                text: "Say hello in one sentence"
            }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (response.ok) {
            console.log('✅ SUCCESS! API Key works!');
            console.log('Response:', data.candidates[0].content.parts[0].text);
        } else {
            console.error('❌ ERROR:', data);
        }
    } catch (error) {
        console.error('❌ Network Error:', error);
    }
}

// Run the test
testGeminiAPI();
