// VERSIÓN DE DEPURACIÓN para: netlify/functions/gemini-proxy.js
exports.handler = async function (event, context) {
    // 1. Log para saber si la función se inicia
    console.log("Manejador de la función gemini-proxy iniciado.");

    if (event.httpMethod !== 'POST') {
        console.error("Error: El método no es POST. Se recibió:", event.httpMethod);
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        console.log("Función iniciada en el bloque try.");

        const { prompt, schema } = JSON.parse(event.body);
        console.log("Cuerpo de la petición parseado.");

        if (!prompt || !schema) {
            console.error("Error: Falta el prompt o el schema en la petición.");
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing prompt or schema.' }) };
        }
        console.log("Prompt recibido correctamente:", prompt);

        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            console.error("¡ERROR CRÍTICO! La variable de entorno GEMINI_API_KEY no fue encontrada.");
            return { statusCode: 500, body: JSON.stringify({ error: 'API key is not configured on the server.' }) };
        }
        console.log("Clave de API encontrada. (Mostrando solo los últimos 4 caracteres): ..." + API_KEY.slice(-4));

        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
        const payload = { /* ... payload ... */ }; // El payload es el mismo de antes

        console.log("Enviando petición a la API de Gemini...");
        const geminiResponse = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: schema
                }
            })
        });

        console.log("Respuesta recibida de Gemini. Status:", geminiResponse.status);

        if (!geminiResponse.ok) {
            const errorData = await geminiResponse.json();
            console.error('Error retornado por la API de Gemini:', JSON.stringify(errorData, null, 2));
            return { statusCode: geminiResponse.status, body: JSON.stringify({ error: errorData.error.message }) };
        }

        const result = await geminiResponse.json();
        console.log("Respuesta de Gemini procesada como JSON exitosamente.");

        const generatedText = result.candidates[0].content.parts[0].text;
        console.log("Texto generado por Gemini extraído con éxito.");

        return {
            statusCode: 200,
            body: JSON.stringify({ response: generatedText }),
        };

    } catch (error) {
        console.error('Error catastrófico en el bloque try-catch:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
