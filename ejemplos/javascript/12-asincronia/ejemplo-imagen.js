
async function obtenerdatos() {
    try{
        const response = await fetch ("https://dog.ceo/api/breeds/image/random");
        if (!response.ok){
            throw new Error(`Erros HTTP: ${response.status}`)
        }
        return await response.json();
       } catch (error){
        console.error("Error en la petición" , error);
    }
}
async function mostrarImagen(){

let data;
const$body = document.querySelector("body");
const img = document
img.setAttribute("src", data.message);
img.setAttribute("alt", "perro")
$body.appendChild(img);

}
mostrarImagen();