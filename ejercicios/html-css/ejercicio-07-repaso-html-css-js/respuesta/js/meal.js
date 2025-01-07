async function getMealDetailsById(mealId) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try {
        const response = await window.fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);  
        }
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error("Error al obtener los detalles:", error);
        return null;
    }
}

async function showMealDetails() {

    //coge el id de la url
    const params = new URLSearchParams(window.location.search);
    const mealId = params.get("id");

    const meal = await getMealDetailsById(mealId);

    const $card = document.querySelector(".card");

    const fragment = document.createDocumentFragment();

    //imagen
    const mealPicture = document.createElement("img");
    mealPicture.setAttribute("src", meal.strMealThumb);
    mealPicture.setAttribute("alt", meal.strMeal);

    //nombre
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = meal.strMeal;

    //detalles
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("meal_details");

    const area = document.createElement("p");
    area.textContent = meal.strArea;

    const category = document.createElement("p");
    category.classList.add("cursive");
    category.textContent = meal.strCategory;

    //etiquetas que tiene la receta en una lista?
    const tagsDiv = document.createElement("div");
    tagsDiv.classList.add("tags");

    if (meal.strTags) {
        const tags = meal.strTags.split(",");
        const tagsList = document.createElement("ul");
        
        tags.forEach(tag => {
            const tagItem = document.createElement("li");
            tagItem.textContent = tag.trim();
            tagsList.appendChild(tagItem);
        });

        tagsDiv.appendChild(tagsList);
    }

    //enlaces
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    const mealHref = document.createElement("a");
    mealHref.classList.add("source");
    mealHref.setAttribute("href", meal.strSource);
    mealHref.textContent = "Source";

    const videoHref = document.createElement("a");
    videoHref.classList.add("youtube");
    videoHref.setAttribute("href", meal.strYoutube);
    videoHref.textContent = "Youtube";

    //////////////
    detailsDiv.appendChild(area);
    detailsDiv.appendChild(category);

    recipeDiv.appendChild(mealHref);
    recipeDiv.appendChild(videoHref);

    fragment.appendChild(mealPicture);
    fragment.appendChild(name);
    fragment.appendChild(detailsDiv);
    fragment.appendChild(tagsDiv);
    fragment.appendChild(recipeDiv);

    $card.appendChild(fragment);

}

showMealDetails();

//ingredientes
async function showIngredientsDetails() {
    const params = new URLSearchParams(window.location.search);
    const mealId = params.get("id");

    const meal = await getMealDetailsById(mealId);

    const $ingredients = document.querySelector(".ingredients");

    const fragment = document.createDocumentFragment();
    
    const ingredientsTitle = document.createElement("h3");
    ingredientsTitle.textContent = "Ingredients";
    
    //creo una lista para los ingredientes
    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("ingredients_list");

    //meto los ingredientes en la lista -- solo salen 20 en la API
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            const ingredientItem = document.createElement("li");
            ingredientItem.textContent = `${ingredient} - ${measure || "N/A"}`;
            ingredientsList.appendChild(ingredientItem);
        }
    }

    ///////
    fragment.appendChild(ingredientsTitle);
    fragment.appendChild(ingredientsList);

    $ingredients.appendChild(fragment);

}

showIngredientsDetails();

//instrucciones
async function showInstructionsDetails() {
    const params = new URLSearchParams(window.location.search);
    const mealId = params.get("id");

    const meal = await getMealDetailsById(mealId);

    const $instructions = document.querySelector(".instructions");

    const fragment = document.createDocumentFragment();

    const instructionsDiv = document.createElement("div");
    instructionsDiv.classList.add("meal_instructions");

    const instructionsTitle = document.createElement("h3");
    instructionsTitle.textContent = "Instructions";
    
    const instructionsText = document.createElement("p");
    instructionsText.textContent = meal.strInstructions;
    
    //////////
    instructionsDiv.appendChild(instructionsTitle);
    instructionsDiv.appendChild(instructionsText);

    fragment.appendChild(instructionsDiv);

    $instructions.appendChild(fragment);

}

showInstructionsDetails();


