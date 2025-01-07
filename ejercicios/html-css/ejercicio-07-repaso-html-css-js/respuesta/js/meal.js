const re = new RegExp(".*?id=(\d*)");

const idMeal = (window.location.href).replace(re, "$1");

async function getMeal() {
  const url = ("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal)

  try {
    const response = await window.fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}

async function showMeal() {
  const result = await getMeal();

  const main = document.getElementsByTagName("main");
  const sectionFoodCard = document.createElement("section");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const divButtons = document.createElement("div");
  const aSource = document.createElement("a");
  const aYoutube = document.createElement("a");
  const pArea = document.createElement("p");
  const pCategory = document.createElement("p");
  const pTags = document.createElement("p");

  const imgUrl = result.meals[0].strMealThumb;
  const name = result.meals[0].strMeal;
  const area = result.meals[0].strArea;
  const category = result.meals[0].strCategory;
  const tags = result.meals[0].strTags;
  const source = result.meals[0].strSource;
  const youtube = result.meals[0].strYoutube;

  sectionFoodCard.setAttribute("class", "mealCard");
  img.setAttribute("src", imgUrl);
  p.innerText = name;
  pArea.innerText = area;
  pCategory.innerText = category;
  pCategory.setAttribute("class", "category")
  div.appendChild(pArea);
  div.appendChild(pCategory);
  aSource.innerText = "Source";
  aSource.setAttribute("href", source);
  aSource.setAttribute("class", "greenButton")
  aYoutube.innerText = "Youtube";
  aYoutube.setAttribute("href", youtube);
  aYoutube.setAttribute("class", "greenButton")
  divButtons.appendChild(aSource);
  divButtons.appendChild(aYoutube);
  pTags.innerText = tags;
  pTags.setAttribute("class", "tags")

  sectionFoodCard.appendChild(img);
  sectionFoodCard.appendChild(p);
  sectionFoodCard.appendChild(div);
  sectionFoodCard.appendChild(pTags);
  sectionFoodCard.appendChild(divButtons);

  main[0].appendChild(sectionFoodCard);

  const sectionIngredientsCard = document.createElement("section");
  const h2IngredientsTitle = document.createElement("h2");
  // const ingredient1 = document.createElement("li");
  // const ingredient2 = document.createElement("li");
  // const ingredient3 = document.createElement("li");
  // const ingredient4 = document.createElement("li");
  // const ingredient5 = document.createElement("li");
  // const ingredient6 = document.createElement("li");
  // const ingredient7 = document.createElement("li");
  // const ingredient8 = document.createElement("li");
  // const ingredient9 = document.createElement("li");
  // const ingredient10 = document.createElement("li");
  // const ingredient11 = document.createElement("li");
  // const ingredient12 = document.createElement("li");
  // const ingredient13 = document.createElement("li");
  // const ingredient14 = document.createElement("li");
  // const ingredient15 = document.createElement("li");
  // const ingredient16 = document.createElement("li");
  // const ingredient17 = document.createElement("li");
  // const ingredient18 = document.createElement("li");
  // const ingredient19 = document.createElement("li");
  // const ingredient20 = document.createElement("li");

  let ingredient1;
  let ingredient2;
  let ingredient3;
  let ingredient4;
  let ingredient5;
  let ingredient6;
  let ingredient7;
  let ingredient8;
  let ingredient9;
  let ingredient10;
  let ingredient11;
  let ingredient12;
  let ingredient13;
  let ingredient14;
  let ingredient15;
  let ingredient16;
  let ingredient17;
  let ingredient18;
  let ingredient20;
  let ingredient19;

  if (result.meals[0].strIngredient1) {
    ingredient1 = document.createElement("li");
  }
  if (result.meals[0].strIngredient2) {
    ingredient2 = document.createElement("li");
  }
  if (result.meals[0].strIngredient3) {
    ingredient3 = document.createElement("li");
  }
  if (result.meals[0].strIngredient4) {
    ingredient4 = document.createElement("li");
  }
  if (result.meals[0].strIngredient5) {
    ingredient5 = document.createElement("li");
  }
  if (result.meals[0].strIngredient6) {
    ingredient6 = document.createElement("li");
  }
  if (result.meals[0].strIngredient7) {
    ingredient7 = document.createElement("li");
  }
  if (result.meals[0].strIngredient8) {
    ingredient8 = document.createElement("li");
  }
  if (result.meals[0].strIngredient9) {
    ingredient9 = document.createElement("li");
  }
  if (result.meals[0].strIngredient10) {
    ingredient10 = document.createElement("li");
  }
  if (result.meals[0].strIngredient11) {
    ingredient11 = document.createElement("li");
  }
  if (result.meals[0].strIngredient12) {
    ingredient12 = document.createElement("li");
  }
  if (result.meals[0].strIngredient13) {
    ingredient13 = document.createElement("li");
  }
  if (result.meals[0].strIngredient14) {
    ingredient14 = document.createElement("li");
  }
  if (result.meals[0].strIngredient15) {
    ingredient15 = document.createElement("li");
  }
  if (result.meals[0].strIngredient16) {
    ingredient16 = document.createElement("li");
  }
  if (result.meals[0].strIngredient17) {
    ingredient17 = document.createElement("li");
  }
  if (result.meals[0].strIngredient18) {
    ingredient18 = document.createElement("li");
  }
  if (result.meals[0].strIngredient19) {
    ingredient19 = document.createElement("li");
  }
  if (result.meals[0].strIngredient20) {
    ingredient20 = document.createElement("li");
  }

  h2IngredientsTitle.innerText = "Ingredients";
  // ingredient1.innerText = result.meals[0].strIngredient1;
  // ingredient2.innerText = result.meals[0].strIngredient2;
  // ingredient3.innerText = result.meals[0].strIngredient3;
  // ingredient4.innerText = result.meals[0].strIngredient4;
  // ingredient5.innerText = result.meals[0].strIngredient5;
  // ingredient6.innerText = result.meals[0].strIngredient6;
  // ingredient7.innerText = result.meals[0].strIngredient7;
  // ingredient8.innerText = result.meals[0].strIngredient8;
  // ingredient9.innerText = result.meals[0].strIngredient9;
  // ingredient10.innerText = result.meals[0].strIngredient10;
  // ingredient11.innerText = result.meals[0].strIngredient11;
  // ingredient12.innerText = result.meals[0].strIngredient12;
  // ingredient13.innerText = result.meals[0].strIngredient13;
  // ingredient14.innerText = result.meals[0].strIngredient14;
  // ingredient15.innerText = result.meals[0].strIngredient15;
  // ingredient16.innerText = result.meals[0].strIngredient16;
  // ingredient17.innerText = result.meals[0].strIngredient17;
  // ingredient18.innerText = result.meals[0].strIngredient18;
  // ingredient19.innerText = result.meals[0].strIngredient19;
  // ingredient20.innerText = result.meals[0].strIngredient20;

  if (result.meals[0].strIngredient1) {
    ingredient1.innerText = result.meals[0].strIngredient1;
  }
  if (result.meals[0].strIngredient2) {
    ingredient2.innerText = result.meals[0].strIngredient2;
  }
  if (result.meals[0].strIngredient3) {
    ingredient3.innerText = result.meals[0].strIngredient3;
  }
  if (result.meals[0].strIngredient4) {
    ingredient4.innerText = result.meals[0].strIngredient4;
  }
  if (result.meals[0].strIngredient5) {
    ingredient5.innerText = result.meals[0].strIngredient5;
  }
  if (result.meals[0].strIngredient6) {
    ingredient6.innerText = result.meals[0].strIngredient6;
  }
  if (result.meals[0].strIngredient7) {
    ingredient7.innerText = result.meals[0].strIngredient7;
  }
  if (result.meals[0].strIngredient8) {
    ingredient8.innerText = result.meals[0].strIngredient8;
  }
  if (result.meals[0].strIngredient9) {
    ingredient9.innerText = result.meals[0].strIngredient9;
  }
  if (result.meals[0].strIngredient10) {
    ingredient10.innerText = result.meals[0].strIngredient10;
  }
  if (result.meals[0].strIngredient11) {
    ingredient11.innerText = result.meals[0].strIngredient11;
  }
  if (result.meals[0].strIngredient12) {
    ingredient12.innerText = result.meals[0].strIngredient12;
  }
  if (result.meals[0].strIngredient13) {
    ingredient13.innerText = result.meals[0].strIngredient13;
  }
  if (result.meals[0].strIngredient14) {
    ingredient14.innerText = result.meals[0].strIngredient14;
  }
  if (result.meals[0].strIngredient15) {
    ingredient15.innerText = result.meals[0].strIngredient15;
  }
  if (result.meals[0].strIngredient16) {
    ingredient16.innerText = result.meals[0].strIngredient16;
  }
  if (result.meals[0].strIngredient17) {
    ingredient17.innerText = result.meals[0].strIngredient17;
  }
  if (result.meals[0].strIngredient18) {
    ingredient18.innerText = result.meals[0].strIngredient18;
  }
  if (result.meals[0].strIngredient19) {
    ingredient19.innerText = result.meals[0].strIngredient19;
  }
  if (result.meals[0].strIngredient20) {
    ingredient20.innerText = result.meals[0].strIngredient20;
  }

  sectionIngredientsCard.appendChild(h2IngredientsTitle);
  sectionIngredientsCard.setAttribute("class", "ingredientsCard")

  if (ingredient1) {
    sectionIngredientsCard.appendChild(ingredient1);
  }
  if (ingredient2) {
    sectionIngredientsCard.appendChild(ingredient2);
  }
  if (ingredient3) {
    sectionIngredientsCard.appendChild(ingredient3);
  }
  if (ingredient4) {
    sectionIngredientsCard.appendChild(ingredient4);
  }
  if (ingredient5) {
    sectionIngredientsCard.appendChild(ingredient5);
  }
  if (ingredient6) {
    sectionIngredientsCard.appendChild(ingredient6);
  }
  if (ingredient7) {
    sectionIngredientsCard.appendChild(ingredient7);
  }
  if (ingredient8) {
    sectionIngredientsCard.appendChild(ingredient8);
  }
  if (ingredient9) {
    sectionIngredientsCard.appendChild(ingredient9);
  }
  if (ingredient10) {
    sectionIngredientsCard.appendChild(ingredient10);
  }
  if (ingredient11) {
    sectionIngredientsCard.appendChild(ingredient11);
  }
  if (ingredient12) {
    sectionIngredientsCard.appendChild(ingredient12);
  }
  if (ingredient13) {
    sectionIngredientsCard.appendChild(ingredient13);
  }
  if (ingredient14) {
    sectionIngredientsCard.appendChild(ingredient14);
  }
  if (ingredient15) {
    sectionIngredientsCard.appendChild(ingredient15);
  }
  if (ingredient16) {
    sectionIngredientsCard.appendChild(ingredient16);
  }
  if (ingredient17) {
    sectionIngredientsCard.appendChild(ingredient17);
  }
  if (ingredient18) {
    sectionIngredientsCard.appendChild(ingredient18);
  }
  if (ingredient19) {
    sectionIngredientsCard.appendChild(ingredient19);
  }
  if (ingredient20) {
    sectionIngredientsCard.appendChild(ingredient20);
  }

  main[0].appendChild(sectionIngredientsCard);

  const sectionInstructionCard = document.createElement("section");
  const h2InstructionsTitle = document.createElement("h2");
  const pInstructions = document.createElement("p");

  h2InstructionsTitle.innerText = "Instructions";
  pInstructions.innerText = result.meals[0].strInstructions;
  sectionInstructionCard.setAttribute("class", "instructionsCard")
  sectionInstructionCard.appendChild(h2InstructionsTitle);
  sectionInstructionCard.appendChild(pInstructions);

  main[0].appendChild(sectionInstructionCard);
}

showMeal()