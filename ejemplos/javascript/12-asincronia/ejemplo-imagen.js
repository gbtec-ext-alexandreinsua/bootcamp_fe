/*
EJEMPLOSOBRE COMO REALIZAR UNA PETICIÓN CON FETCH Y MOSTRAR EL RESULTADO EN LA WEB
*/
//función para obtener los datos
async function obtenerDatos() {
    // Necesito una Url (la del servidor)
    // se llama endpoint
    const url = "https://dog.ceo/api/breeds/image/random";

    try {
        // petición fetch que devuelve una promesa
        const response = await window.fetch(url);
        // controlamos el estado de la respuesta
        // si la petición es incorrecta lanzara este error
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        // devuelve el resultado de la petición parseada
        return await response.json();
        // prevenimos un error interno en la promesa 
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}

// función para mostrar la imagen
async function mostrarImagen() {
    const datos = await obtenerDatos():
    const $body = document.querySelector("body");
    const img = document.createElement("img");
    img.setAttribute("src", data.message);
    img.setAttribute("alt", "perro");
    $body.appendChild(img); 
}

mostrarImagen();
