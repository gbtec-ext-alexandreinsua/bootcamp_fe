const apiUrl = "https://random.dog/woof.json";

function showRandomImage() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.url.endsWith(".mp4")) {
                return showRandomImage();
            }

            document.getElementById("image-container").innerHTML =
                `<img src="${data.url}" alt="Imagen aleatoria">`;
        })
        .catch(error => {
            console.error("Error al obtener la imagen:", error);
            document.getElementById("image-container").textContent = "No se pudo cargar la imagen.";
        });
}

document.getElementById("fetch-image").addEventListener("click", showRandomImage);

showRandomImage();
