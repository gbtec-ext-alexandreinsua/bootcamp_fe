const url = "https://www.themealdb.com/api/json/v1/1";

// Obtener comida aleatoria
async function fetchRandomMeal() {
    try {
        const response = await fetch(`${url}/random.php`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayRandomMeal(data.meals[0]);
    } catch (error) {
        console.error("Error fetching random meal:", error);
    }
}

// Mostrar comida aleatoria en la página
function displayRandomMeal(meal) {
    const mealContainer = document.getElementById('meal-container');

    mealContainer.innerHTML = `
        <div class="meal-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <h2>${meal.strMeal}</h2>
            <p>Category: ${meal.strCategory}</p>
            <p>Country: ${meal.strArea}</p>
            <a href="html/meal.html?id=${meal.idMeal}" class="btn">View Recipe</a>
        </div>
    `;
}
function displayError(message) {
    const mealContainer = document.getElementById('meal-container'); 
    mealContainer.innerHTML = `<p class="error">${message}</p>`;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', fetchRandomMeal);
