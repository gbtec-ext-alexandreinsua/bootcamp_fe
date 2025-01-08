const randomMealContainer = document.querySelector('.meal-card');

async function fetchRandomMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const meal = data.meals[0];

    randomMealContainer.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h4>${meal.strMeal}</h4>
      <p>Origin: ${meal.strArea}</p>
      <a href="./html/meal.html?id=${meal.idMeal}" class="btn">View Recipe</a>
    `;
  } catch (error) {
    randomMealContainer.innerHTML = `<p>Failed to load meal. Please try again later.</p>`;
    console.error('Error fetching random meal:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchRandomMeal);