const mealsContainer = document.getElementById("meals-container");
const alphabetMenu =document.getElementById("alphabet-menu")
const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=";

//Función para crear el menu Alfabetico
function generateAlphabetMenu() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabet.forEach(letter => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("letter-btn");
    button.addEventListener("click", () => fetchMeals(letter));
    listItem.appendChild(button);
    alphabetMenu.appendChild(listItem);
    });
}

// Función para obtener las recetas desde la API
async function fetchMeals(letter) {
    try {
        const response = await fetch(url + letter);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Error fetching meal:", error);
    }
}

// Función para mostrar las recetas
function displayMeals(meals) {
    mealsContainer.innerHTML = "";
    if (!meals) {
    mealsContainer.innerHTML = "<p>No meals found.</p>";
    return;
    }

    meals.forEach(meal => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-card");

        mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea || "Unknown"} - ${meal.strCategory || "Uncategorized"}</p>
        <button onclick="viewMeal(${meal.idMeal})">View details</button>        `;
    mealsContainer.appendChild(mealCard);
    });
}

//Función para mostrar detalles de la receta en meal.html
function viewMeal(mealId) {
    window.location.href = `meal.html?id=${mealId}`;
}

generateAlphabetMenu();