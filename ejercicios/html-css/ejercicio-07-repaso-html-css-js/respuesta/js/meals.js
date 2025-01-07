const mealContainer = document.getElementById("meal-container");
const alphabetContainer = document.getElementById("alphabet-container");


function createAlphabetIndex() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabet.forEach((letter) => {
    const letterButton = document.createElement("button");
    letterButton.textContent = letter;
    letterButton.onclick = () => filterMealsByLetter(letter);
    alphabetContainer.appendChild(letterButton);
  });
}


function filterMealsByLetter(letter) {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        displayMeals(data.meals);
      } else {
        mealContainer.innerHTML = `<p>No meals found starting with "${letter}".</p>`;
      }
    })
    .catch((error) => console.error("Error fetching meals:", error));
}


function displayMeals(meals) {
  mealContainer.innerHTML = "";
  const mealGrid = document.createElement("div");
  mealGrid.id = "meal-grid";

  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.className = "meal-card";

    const img = document.createElement("img");
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;

    const title = document.createElement("h4");
    title.textContent = meal.strMeal;

    const category = document.createElement("p");
    category.textContent = meal.strCategory;

    const area = document.createElement("p");
    area.textContent = meal.strArea;

    const button = document.createElement("button");
    button.textContent = "View details";
    button.onclick = () => (window.location.href = `meal.html?id=${meal.idMeal}`);

    mealCard.appendChild(img);
    mealCard.appendChild(title);
    mealCard.appendChild(category);
    mealCard.appendChild(area);
    mealCard.appendChild(button);
    mealGrid.appendChild(mealCard);
  });

  mealContainer.appendChild(mealGrid);
}


createAlphabetIndex();
