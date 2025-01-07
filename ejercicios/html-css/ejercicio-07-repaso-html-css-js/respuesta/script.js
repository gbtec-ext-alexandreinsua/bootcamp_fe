
document.addEventListener('DOMContentLoaded', () => {
    const mealContainer = document.getElementById('meal-container');

    async function fetchRandomMeal() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            const meal = data.meals[0];

            displayMeal(meal);
        } catch (error) {
            console.error('Error fetching meal:', error);
            mealContainer.innerHTML = '<p>Error al cargar la comida. Inténtalo de nuevo.</p>';
        }
    }

    function displayMeal(meal) {
        mealContainer.innerHTML = `
            <div class="clickable-card" style="cursor: pointer;">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strInstructions.slice(0, 120)}...</p>
            </div>
        `;
    }

    fetchRandomMeal();
});
