let datos;

async function obtenerdatos() {
   try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
    }catch(error){
        console.error("Error en la peticion:", error )
   }
}

async function mostrarimagen() {
    const datos = await obtenerdatos();
    const $body = document.querySelector("body");
    const img = document.createElement("img");
    img.setAttribute("src",datos.message);
    img.setAttribute("alt","perro")
    $body.appendChild(img)

}
 mostrarimagen();