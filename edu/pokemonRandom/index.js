async function getRandomPokemon() {
    const randomNumber = getRandomNumber();
    const url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber;
    try {
        const response = await window.fetch(url);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return mapCard(await response.json());
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    
}

function getRandomNumber(){
    return Math.floor(Math.random() * 1025) + 1;
}


async function mapCard(responseJson) {
    const name = responseJson.name; 
    const id = responseJson.id;
    const type = responseJson.types[0].type.name; 
    const pic = responseJson.sprites.front_default; 
    const cries = responseJson.cries.latest;
    return { name, id, type, pic, cries };
    
}

async function showPokemonCard() {
    const pokemon = await getRandomPokemon();
    const pokemonPicture = document.querySelector(".picture img");
    const name = document.querySelector(".name");
    const number = document.querySelector(".dexNumber");
    const type = document.querySelector(".type");

 
    pokemonPicture.setAttribute("src", pokemon.pic);
    pokemonPicture.setAttribute("alt", pokemon.name);
    name.textContent = `Name: ${pokemon.name}`;
    number.textContent = `ID: ${pokemon.id}`;
    type.textContent = `Type: ${pokemon.type}`;

    const shoutButton = document.querySelector(".shout");
    shoutButton.textContent = "Grito!";
    shoutButton.onclick = () => {
        if (pokemon.cries) {
            const audio = new Audio(pokemon.cries);
            audio.play();
        } else {
            alert(`${pokemon.name} has no cry sound available.`);
        }
    }
}
showPokemonCard();
