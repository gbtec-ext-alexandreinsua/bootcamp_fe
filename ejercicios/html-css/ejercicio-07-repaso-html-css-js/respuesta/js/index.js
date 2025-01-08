const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


//Función para obtener una comida aleatoria de la API
async function fetchRandomMeal(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        //Obtener datos da comida aleatoria
        const meal = data.meals[0];


        //Creamos estructura no html da card cos datos obtidos
        const cardContainer = document.getElementById('food-card');

        const cardHTML = `
        <img src="${meal.strMealThumb}" alt="Food Image" />
      <h3>${meal.strMeal}</h3>
      <p>${meal.strCategory}</p>
      <p> ${meal.strArea}</p>
      <a href="./html/meal.html?mealId=${meal.idMeal}" id="view-recipe">View Recipe</a> 
    `;

    cardContainer.innerHTML = cardHTML;

    }catch (error){//Recollemos o error en caso de que non recibamos datos
        console.error("Error al recibir los datos", error);
    }
}

window.onload = fetchRandomMeal;