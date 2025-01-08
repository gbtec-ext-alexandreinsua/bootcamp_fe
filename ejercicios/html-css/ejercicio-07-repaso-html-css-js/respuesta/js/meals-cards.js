async function getMeals(letter) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  
    try {
        const response = await fetch(url);
  
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
  
        const data = await response.json(); //para convertir la response en un objeto
        
        if (data.meals) {
            renderMeals(data.meals);
        } else {
            renderMeals([]);
        }
    } catch (error) {
        console.error("Error al obtener las recetas:", error);
    }
}

function renderMeals(meals) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";//para borrar el conteenido de antes
  
    if (!meals || meals.length === 0) {
        const message = document.createElement("h2");
        message.classList.add("message");
        message.textContent = "No meals found for this letter";
        container.appendChild(message);
        return;
    }
  
    //cards
    meals.forEach(meal => {
        const card = document.createElement("div");
        card.classList.add("card");
  
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

        //enlace
        const mealHref = document.createElement("a");
        mealHref.classList.add("view-recipe");
        mealHref.setAttribute("href", `./meal.html?id=${meal.idMeal}`);
        mealHref.textContent = "View recipe";

        ////////
        detailsDiv.appendChild(area);
        detailsDiv.appendChild(category);

        card.appendChild(mealPicture);
        card.appendChild(name);
        card.appendChild(detailsDiv);
        card.appendChild(mealHref);
        
        container.appendChild(card);
    });
}

//filtro par cada letra
function filterMealsByLetter(letter) {
    getMeals(letter);
}

//bootones
function createLetterButtons() {
    const buttonContainer = document.getElementById("button");
  
    //hay que elegir el abecedario -- no Ñ
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    //esto para el botón de cada letra
    for (let i = 0; i < alphabet.length; i++) {
        const button = document.createElement("button");
        button.textContent = alphabet[i];
       
        button.onclick = function() {
            filterMealsByLetter(alphabet[i]);
        };
        
        buttonContainer.appendChild(button);
    }
}

createLetterButtons();

getMeals("a");
