// Contenido para el nuevo archivo: netlify/functions/hello.js
exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "¡Hola desde la función de Netlify! El despliegue funcionó." }),
    };
};