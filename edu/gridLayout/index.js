async function getRick() {
    const url = `https://rickandmortyapi.com/api/character/${getRandomNumber()}`;
    try {
        const response = await window.fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log(data); 
        return mapJson(data);
    } catch (error) {
        console.error("Error en la petición:", error);
        return null; 
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 826) + 1; // Hay 826 personajes en la API
}

function mapJson(rickData) {
    const pic = rickData.image;
    const name = rickData.name;
    const origin = rickData.origin.name;
    const species = rickData.species;
    return { pic, name, origin, species };
}

async function showPic() {
    const cards = document.querySelectorAll(".card");

    if (cards.length === 0) {
        console.error("No se encontraron elementos con la clase 'card'.");
        return;
    }

    for (const card of cards) {
        const rick = await getRick();
        if (!rick) {
            console.error("No se pudo obtener la información del personaje.");
            continue;
        }

        const rickPic = document.createElement("img");
        const data = document.createElement("div");
        data.classList.add("data");
        const name = document.createElement("p");
        const origin = document.createElement("p");
        const species = document.createElement("p");

        rickPic.setAttribute("src", rick.pic);
        rickPic.setAttribute("alt", rick.name);

        name.textContent = "Nombre: " + rick.name;
        origin.textContent = "Planeta de origen: " + rick.origin;
        species.textContent = "Especie: " + rick.species;

        data.appendChild(rickPic);
        data.appendChild(name);
        data.appendChild(origin);
        data.appendChild(species);

        card.innerHTML = "";
        card.appendChild(data);
    }
}

showPic();