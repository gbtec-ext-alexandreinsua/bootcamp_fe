const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';


//función para obtener as comidas por letra
async function fetchMealsByLetter(letter) {
    try{
        const response = await fetch(`${apiUrl}${letter}`);
        const data = await response.json();

        if(data.meals){
            displayMeals(data.meals);
        }else{
            document.getElementById('meal-cards-container').innerHTML = `No se encontraron comidas`
        }
    }catch(error){
        console.error("Error encontrando comidas", error);
    }
}

// Función para mostrar as comidas en tarjetas
function displayMeals(meals) {
    const container = document.getElementById('meal-cards-container');
    container.innerHTML = ''; // Limpiar contenido anterior
  
    // Ordenar as comidas alfabéticamente por nombre
    meals.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  
    // Crear e mostrar una card por cada comida no html
    meals.forEach(meal => {
      const cardHTML = `
        <div class="card">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h3>${meal.strMeal}</h3>
          <p>${meal.strCategory}</p>
          <p>${meal.strArea}</p>
          <a href="./html/meal.html?mealId=${meal.idMeal}" id="view-recipe">View Recipe</a>
        </div>
      `;
      container.innerHTML += cardHTML;
    });
  }
 