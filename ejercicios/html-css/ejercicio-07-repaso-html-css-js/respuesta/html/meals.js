
//const mealContainer = document.getElementById("meal-container");
//const alphabetContainer = document.getElementById("button-container");

// Función para crear los botones con las letras del abecedario
function crearBotones() {
  const container = document.getElementById('button-container');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  
  
  for (let letter of alphabet) {
      // Creamos un botón
      const button = document.createElement('letter-button');
      boton.classList.add('letter-button'); 
      boton.innerText = letter; 
       
      // Agregamos el botón al contenedor
      container.appendChild(button);

    }
  }


  async function fetchMeals() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php');
      const data = await response.json();
      const meal = data.meals[0];
  
      MealContainer.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h4>${meal.strMeal}</h4>
        <p>Origin: ${meal.strArea}</p>
        <a href="./html/meal.html?id=${meal.idMeal}" class="btn">View Recipe</a>
      `;
    } catch (error) {
      
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchMeals);
