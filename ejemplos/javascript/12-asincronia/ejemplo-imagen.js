

async function obtenerdatos() {
    try {
        const response - await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}


async function mostrarImagen() {
    const datos = await obtenerdatos();
    const $body
}

