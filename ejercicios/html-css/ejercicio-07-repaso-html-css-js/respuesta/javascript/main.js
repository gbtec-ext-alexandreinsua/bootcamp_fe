const recipeContainer = document.getElementById("contenedor-de-receta");

async function fetchRandomMeal() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    const meal = mapMeal(data.meals[0]);

    displayMeal(meal);
  } catch (error) {
    console.error("Error", error);
    recipeContainer.innerHTML = "<p>Fallo al cargar, intentalo otra vez</p>";
  }
}

function mapMeal(){
  return{

  }
}

fetchRandomMeal();
