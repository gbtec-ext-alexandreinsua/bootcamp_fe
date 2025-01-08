const main = document.querySelector('main');
const cardWrapper = document.querySelector('.card-wrapper');


async function getMealsByLetter(letter) {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter);
    const data = await response.json();
    cardWrapper.innerHTML = "";

    if (data.meals) {
      data.meals.forEach(mealData => {
        const mealCard = displayMealCard(mapMeal(mealData));
        cardWrapper.appendChild(mealCard);
      });
    } else {
      const message = document.createElement("p");
      message.textContent = "No meals found!";
      cardWrapper.appendChild(message);
    }
  } catch {
    cardWrapper.innerHTML = "";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load meals. Please try again later.";
    cardWrapper.appendChild(errorMessage);
  }
}


function mapMeal(meal) {
  return {
    name: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory,
    area: meal.strArea,
    id: meal.idMeal,
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
  viewRecipeLink.href = "./meal.html?id=" + meal.id;
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

// esto
function addLetterButtons() {
  const buttons = document.querySelectorAll('.letras button');
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
      const letter = button.textContent.toLowerCase(); 
      getMealsByLetter(letter); 
    });
  }
}
addLetterButtons();
document.addEventListener('DOMContentLoaded', getMealsByLetter('a'));

