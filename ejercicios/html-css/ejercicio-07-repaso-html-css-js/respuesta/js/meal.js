// Selección de elementos del DOM
const mealContainer = document.getElementById("meal-card");
const ingredientsContainer = document.getElementById("ingredients");
const instructionsContainer = document.getElementById("instructions");

// Obtener el ID de la comida desde la URL
const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get("id");

const url = "https://www.themealdb.com/api/json/v1/1";

// Función principal para cargar los datos de la receta
const fetchMealData = async (id) => {
try {
    // Llamada a la API
    const response = await fetch(`${url}/lookup.php?i=${id}`);
    if (!response.ok)
throw new Error(`Error en la solicitud: ${response.statusText}`);

    const data = await response.json();
    const meal = data.meals[0];

    // Llamar a funciones para mostrar los datos
    displayMealCard(meal);
    displayIngredients(meal);
    displayInstructions(meal);
} catch (error) {
    console.error("Error fetching the meal data:", error);
}
};

// Función para mostrar la tarjeta principal de la comida
const displayMealCard = (meal) => {
mealContainer.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <h2>${meal.strMeal}</h2>
    <p><strong>${meal.strArea}</strong> - <em>${meal.strCategory}</em></p>
    <p>
    <a href="${meal.strSource}" target="_blank" class="btn">Source</a>
    <a href="${meal.strYoutube}" target="_blank" class="btn">Youtube</a>
    </p>
`;
};

// Función para mostrar los ingredientes
const displayIngredients = (meal) => {
let ingredientsHTML = `<h3>Ingredients</h3><ul>`;
for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
    ingredientsHTML += `<li>${measure} ${ingredient}</li>`;
    }
}
ingredientsHTML += `</ul>`;
ingredientsContainer.innerHTML = ingredientsHTML;
};

// Función para mostrar las instrucciones
const displayInstructions = (meal) => {
instructionsContainer.innerHTML = `
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
`;
};

// Llamada inicial para cargar la receta
fetchMealData(mealId);
