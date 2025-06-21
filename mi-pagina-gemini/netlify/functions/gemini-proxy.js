// JavaScript source code
// Contenido final para: netlify/functions/gemini-proxy.js
exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    try {
        const { prompt, schema } = JSON.parse(event.body);
        if (!prompt || !schema) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt or schema.' }) };
        }
        const API_KEY = process.env.GEMINI_API_KEY;
        if (!API_KEY) {
            return { statusCode: 500, body: JSON.stringify({ error: 'API key is not configured on the server.' }) };
        }
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
        const payload = {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema
            }
        };
        const geminiResponse = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!geminiResponse.ok) {
            const errorData = await geminiResponse.json();
            return {
                statusCode: geminiResponse.status,
                body: JSON.stringify({ error: errorData.error.message || 'Error from Gemini' }),
            };
        }
        const result = await geminiResponse.json();
        const generatedText = result.candidates[0].content.parts[0].text;
        return {
            statusCode: 200,
            body: JSON.stringify({ response: generatedText }),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
