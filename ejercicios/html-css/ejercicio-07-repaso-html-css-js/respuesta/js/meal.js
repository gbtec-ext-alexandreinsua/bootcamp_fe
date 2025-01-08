const urlId = new URLSearchParams(window.location.search);
const mealId = urlId.get('id'); 

const main = document.querySelector('main'); 

async function mealDetails() {
  const urlId = new URLSearchParams(window.location.search);
  const mealId = urlId.get("id");

  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId);
    if (!response.ok) throw new Error("Error fetching meal details");

    const data = await response.json();
    const meal = data.meals[0];

    const mappedMeal = mapMealDetails(meal);
    displayMealCard(mappedMeal);
  } catch (error) {
    console.error("Error:", error);
    const main = document.querySelector("main");
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Failed to load a meal. Please try again later.";
    main.appendChild(errorMsg);
  }
}

function mapMealDetails(meal) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
    strInstructions,
    ...rest
  } = meal;


  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = rest[`strIngredient${i}`];
    const measure = rest[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return {
    name: strMeal,
    image: strMealThumb,
    category: strCategory,
    area: strArea,
    tags: strTags,
    instructions: strInstructions,
    ingredients,
  };
}



function displayMealCard(mappedMeal) {
  const { name, image, category, area, tags, instructions, ingredients } =
    mappedMeal;

  const main = document.querySelector("main");

  const fragment = document.createElement("div");
  fragment.classList.add("mealData");

  // Crear tarjeta principal
  const mealCard = document.createElement("div");
  mealCard.classList.add("meal-card");

  const mealImage = document.createElement("img");
  mealImage.src = image;
  mealImage.alt = name;

  const mealInfo = document.createElement("div");
  mealInfo.classList.add("meal-info");

  const mealTitle = document.createElement("h3");
  mealTitle.textContent = name;

  const mealCatArea = document.createElement("div");
  mealCatArea.classList.add("catArea");

  const mealCategory = document.createElement("p");
  mealCategory.textContent = category;

  const mealArea = document.createElement("p");
  mealArea.textContent = area;

  const mealTags = document.createElement("p");
  mealTags.textContent = tags || "No tags available";
  mealTags.classList.add("tags");

  mealCatArea.appendChild(mealArea);
  mealCatArea.appendChild(mealCategory);
  mealInfo.appendChild(mealTitle);
  mealInfo.appendChild(mealCatArea);
  mealInfo.appendChild(mealTags);

  mealCard.appendChild(mealImage);
  mealCard.appendChild(mealInfo);


  const mealIngredients = document.createElement("div");
  mealIngredients.classList.add("ingredients");

  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Ingredients";



  const ingredientsList = document.createElement("ul");
  ingredients.forEach(({ ingredient, measure }) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${ingredient} - ${measure}`;
    ingredientsList.appendChild(listItem);
  });


  mealIngredients.appendChild(ingredientsTitle);
  mealIngredients.appendChild(ingredientsList);


  const mealInst = document.createElement("div");
  mealInst.classList.add("instructions");

  const instructionsTitle = document.createElement("h3");
  instructionsTitle.textContent = "Instructions";

  const mealInstructions = document.createElement("p");
  mealInstructions.textContent = instructions;

  mealInst.appendChild(instructionsTitle);
  mealInst.appendChild(mealInstructions);


  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const sourceButton = document.createElement("a");
  sourceButton.textContent = "Source";
  sourceButton.href = "https://www.themealdb.com/browse/search/?s=" + name;

  const youtubeButton = document.createElement("a");
  youtubeButton.textContent = "YouTube";
  youtubeButton.href = "https://www.youtube.com/results?search_query=" + name;

  buttons.appendChild(sourceButton);
  buttons.appendChild(youtubeButton);

  mealCard.appendChild(buttons);

  fragment.appendChild(mealCard);
  fragment.appendChild(mealIngredients);
  fragment.appendChild(mealInst);

  main.appendChild(fragment);
}


mealDetails();
