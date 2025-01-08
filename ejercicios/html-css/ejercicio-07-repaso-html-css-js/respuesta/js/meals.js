const main = document.querySelector('main');
const cardWrapper = document.querySelector('.card-wrapper');


async function getMealsByLetter(letter) {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter);
    if (!response.ok) throw new Error('Error fetching meals');
    const data = await response.json();
    cardWrapper.innerHTML = '';

    if (data.meals) {
      data.meals.map(mapMeal).forEach(meal => {
          const mealCard = displayMealCard(meal);
          cardWrapper.appendChild(mealCard);
        });
    } else {
      cardWrapper.innerHTML = '<p>No meals found!</p>';
    }
  } catch (error) {
    console.error('Error:', error);
    cardWrapper.innerHTML = '<p>Failed to load meals. Please try again later.</p>';
  }
}

function mapMeal(meal) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    idMeal,
  } = meal;

  return {
    name: strMeal,
    image: strMealThumb,
    category: strCategory,
    area: strArea,
    id: idMeal,
  };
}


function displayMealCard(meal) {
  const mealCard = document.createElement('div');
  mealCard.classList.add('meal-card');

  const mealImage = document.createElement('img');
  mealImage.src = meal.image;
  mealImage.alt = meal.name;

  const mealInfo = document.createElement('div');
  mealInfo.classList.add('meal-info');

  const mealTitle = document.createElement('h3');
  mealTitle.textContent = meal.name;

  const mealCatArea = document.createElement('div');
  mealCatArea.classList.add('catArea');

  const mealCategory = document.createElement('p');
  mealCategory.textContent = meal.category;

  const mealCountry = document.createElement('p');
  mealCountry.textContent = meal.area;

  const viewRecipeLink = document.createElement('a');
  viewRecipeLink.href = `./meal.html?id=${meal.id}`;
  viewRecipeLink.textContent = 'View recipe';
  viewRecipeLink.classList.add('view-recipe');

  mealCatArea.appendChild(mealCountry);
  mealCatArea.appendChild(mealCategory);

  mealInfo.appendChild(mealTitle);
  mealInfo.appendChild(mealCatArea);
  mealInfo.appendChild(viewRecipeLink);

  mealCard.appendChild(mealImage);
  mealCard.appendChild(mealInfo);

  return mealCard;
}


function addLetterButtons() {
  const buttons = document.querySelectorAll('.letras button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const letter = button.textContent.toLowerCase();
      getMealsByLetter(letter);
    });
  });
}
addLetterButtons();
document.addEventListener('DOMContentLoaded', getMealsByLetter('a'));

