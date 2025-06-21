/// CÓDIGO FINAL Y CORRECTO para: netlify/functions/gemini-proxy.js
exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { prompt, schema } = JSON.parse(event.body);

        if (!prompt || !schema) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Falta el prompt o el schema en la petición.' }) };
        }

        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            return { statusCode: 500, body: JSON.stringify({ error: 'La clave de API no está configurada en el servidor.' }) };
        }

        // LA LÍNEA CORREGIDA CON EL NOMBRE EXACTO DEL MODELO
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${API_KEY}`;

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
                body: JSON.stringify({ error: `Error desde la API de Gemini: ${errorData.error.message}` }),
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