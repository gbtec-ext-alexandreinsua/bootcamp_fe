const main = document.querySelector("main");

async function fetchMealDetails() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    const meal = data.meals[0];
    displayMealDetails(meal);
  } catch (error) {
    console.error("Error fetching meal details:", error);
    main.innerHTML = "<p>Failed to load the meal details. Please try again later.</p>";
  }
}

function displayMealDetails(meal) {
  const ingredients = getIngredients(meal);

  const html = `
    <div class="meal-details">
      <div class="meal-card">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h4>${meal.strMeal}</h4>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Cuisine:</strong> ${meal.strArea}</p>
        <p><strong>Tags:</strong> ${meal.strTags || "No tags available"}</p>
        <div class="meal-links">
          <a href="${meal.strSource || "#"}" class="source" target="_blank">Source</a>
          <a href="${meal.strYoutube || "#"}" class="youtube" target="_blank">Youtube</a>
        </div>
      </div>
      <div class="meal-instructions">
        <div>
          <h4>Ingredients</h4>
          <ul>${ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Instructions</h4>
          <p>${meal.strInstructions}</p>
        </div>
      </div>
    </div>
  `;

  main.innerHTML = html;
}

function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return ingredients;
}

fetchMealDetails();
