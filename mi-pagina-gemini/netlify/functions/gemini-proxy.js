// CÓDIGO TEMPORAL para descubrir los modelos disponibles
// Pega esto en netlify/functions/gemini-proxy.js
exports.handler = async function (event, context) {
    console.log("Iniciando función para listar modelos...");

    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
        return { statusCode: 500, body: JSON.stringify({ error: 'API key no configurada.' }) };
    }

    // Esta es la URL especial para listar los modelos disponibles
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

    try {
        console.log("Consultando la lista de modelos a Google...");
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!response.ok) {
            console.error("Error recibido de Google al listar modelos:", data);
            return { statusCode: response.status, body: JSON.stringify(data) };
        }

        console.log("¡Lista de modelos obtenida con éxito!");

        // Devolvemos la lista completa para poder verla en el navegador
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(data.models, null, 2), // Formateado para ser fácil de leer
        };

    } catch (error) {
        console.error("Error catastrófico:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};