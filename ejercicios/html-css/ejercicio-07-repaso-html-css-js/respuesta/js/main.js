async function getRandomMeal() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    try {
        const response = await window.fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        return mapMeal(await response.json());
    } catch (error) {
        console.error("Error en la petición:", error);
    }

}

async function mapMeal(responseJson) {
    const result = await responseJson.meals[0];

    const mealImgUrl = result.strMealThumb;

    const mealName = result.strMeal;

    const mealArea = result.strArea;

    const mealCategory = result.strCategory;

    const mealId = result.idMeal;

    return {mealImgUrl, mealName, mealArea, mealCategory, mealId};
}

async function showMealCard() {

    const meal = await getRandomMeal();

    const $card = document.querySelector(".card");

    const fragment = document.createDocumentFragment();

    const mealPicture = document.createElement("img");
    mealPicture.setAttribute("src", meal.mealImgUrl);
    mealPicture.setAttribute("alt", meal.mealName);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = meal.mealName;

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("meal_details");

    const area = document.createElement("p");
    area.textContent = meal.mealArea;

    const category = document.createElement("p");
    category.classList.add("cursive");
    category.textContent = meal.mealCategory;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    const mealHref = document.createElement("a");
    mealHref.classList.add("view-recipe");
    mealHref.setAttribute("href", `./html/meal.html?id=${meal.mealId}`);
    mealHref.textContent = "View recipe";

    detailsDiv.appendChild(area);
    detailsDiv.appendChild(category);

    recipeDiv.appendChild(mealHref);

    fragment.appendChild(mealPicture);
    fragment.appendChild(name);
    fragment.appendChild(detailsDiv);
    fragment.appendChild(recipeDiv);

    $card.appendChild(fragment);
    
}
  
showMealCard();
