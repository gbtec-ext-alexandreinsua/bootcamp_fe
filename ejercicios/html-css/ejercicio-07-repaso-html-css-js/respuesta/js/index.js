

async function randomMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    if (!response.ok) throw new Error('Error fetching meal');
    const data = await response.json();
    const meal = data.meals[0];

    const mappedMeal = mapMealData(meal);
    displayMealCard(mappedMeal);
  } catch (error) {
    console.error('Error:', error);
    const main = document.querySelector('main');
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Failed to load a meal. Please try again later.';
    main.appendChild(errorMsg);
  }
}

function mapMealData(meal) {
  return {
    name: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory,
    area: meal.strArea,
    id: meal.idMeal,
  };
}

function displayMealCard(mappedMeal) {
  const { name, image, category, area, id } = mappedMeal;

  const mealCard = document.createElement('div');
  mealCard.classList.add('meal-card');

  const mealImage = document.createElement('img');
  mealImage.src = image;
  mealImage.alt = name;

  const mealInfo = document.createElement('div');
  mealInfo.classList.add('meal-info');

  const mealTitle = document.createElement('h3');
  mealTitle.textContent = name;

  const mealCatArea = document.createElement('div');
  mealCatArea.classList.add('catArea');

  const mealCategory = document.createElement('p');
  mealCategory.textContent = category;

  const mealCountry = document.createElement('p');
  mealCountry.textContent = area;

  const viewRecipeLink = document.createElement('a');
  viewRecipeLink.href = "./html/meal.html?id=" + id;
  viewRecipeLink.textContent = 'View recipe';
  viewRecipeLink.classList.add('view-recipe');

  mealInfo.appendChild(mealTitle);
  mealCatArea.appendChild(mealCountry);
  mealCatArea.appendChild(mealCategory);
  mealInfo.appendChild(mealCatArea);
  mealInfo.appendChild(viewRecipeLink);

  mealCard.appendChild(mealImage);
  mealCard.appendChild(mealInfo);

  const main = document.querySelector('main');
  main.appendChild(mealCard);
}
randomMeal();
