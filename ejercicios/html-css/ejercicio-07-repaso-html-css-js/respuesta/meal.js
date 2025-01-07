async function getRandomMeal() {
    const url = "https://themealdb.com/api/json/v1/1/lookup.php?i=" + window.location.href.slice(window.location.href.indexOf("?")+1);

    try {
        const response = await window.fetch(url);
        if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
        }
        
        return await mapMealCard(response.json());
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}

async function mapMealCard(responseJson){
    const result = await responseJson;

    const mealName = result.meals[0].strMeal;
    const mealArea = result.meals[0].strArea;
    const mealImg = result.meals[0].strMealThumb;
    const mealCategory = result.meals[0].strCategory;
    const mealId = result.meals[0].idMeal;
    const mealYoutube = result.meals[0].strYoutube;
    const mealSource = result.meals[0].strSource;
    const mealIngredients = [];
    const mealMeasures = [];
    const mealInstructions = result.meals[0].strInstructions;

    for(const property in result.meals[0]){
        if("strIngredient" === property.slice(0, -1) && result.meals[0][property]){
            mealIngredients.push(result.meals[0][property]);
        }
    };

    for(const property in result.meals[0]){
        if("strMeasure" === property.slice(0, -1)){
            mealMeasures.push(result.meals[0][property]);
        }
    };
  
    return { mealName, mealArea, mealImg, mealCategory, mealId, mealYoutube, mealSource, mealIngredients, mealMeasures, mealInstructions};
}

async function generateCard(){
    const data = await getRandomMeal();
    const $wrapper = document.getElementsByTagName("main")[0];
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const card = document.createElement("div");
    card.setAttribute("class", "main-card");

    const cardHead = document.createElement("div");
    cardHead.setAttribute("class", "card-head");
    card.appendChild(cardHead);

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", data.mealImg);
    cardImg.setAttribute("alt", "random person");
    cardHead.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    card.appendChild(cardBody);

    const bodyP = document.createElement("p");
    bodyP.innerText = data.mealName;
    cardBody.appendChild(bodyP);

    const bodySpans = document.createElement("div");
    bodySpans.setAttribute("class", "card-spans");
    cardBody.appendChild(bodySpans);

    const bodySpan = document.createElement("span");
    bodySpan.innerText = data.mealArea;
    bodySpans.appendChild(bodySpan);

    const bodySpan2 = document.createElement("span");
    bodySpan2.innerText = data.mealCategory;
    bodySpans.appendChild(bodySpan2);

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer");
    card.appendChild(cardFooter);

    const bodySource = document.createElement("a");
    bodySource.setAttribute("href", data.mealYoutube);
    bodySource.innerText = "Source";
    cardFooter.appendChild(bodySource);

    const bodyButton = document.createElement("a");
    bodyButton.setAttribute("href", data.mealYoutube);
    bodyButton.innerText = "Youtube";
    cardFooter.appendChild(bodyButton);

    const cardIngredients = document.createElement("div");
    cardIngredients.setAttribute("class", "card-ingredients");

    const titleIngredients = document.createElement("p");
    titleIngredients.innerText = "Ingredients"
    cardIngredients.appendChild(titleIngredients);

    const ingredientList = document.createElement("ul");
    cardIngredients.appendChild(ingredientList);


    for (let index = 0; index < data.mealIngredients.length; index++) {
        const ingredientLi = document.createElement("li");
        ingredientLi.innerText = data.mealMeasures[index] + " " + data.mealIngredients[index];
        ingredientList.appendChild(ingredientLi);
        
    }

    const cardInstructions = document.createElement("div");
    cardInstructions.setAttribute("class", "card-instructions");

    const titleInstruction = document.createElement("p");
    titleInstruction.innerText = "Instructions";
    cardInstructions.appendChild(titleInstruction);

    const stepsInstruction = document.createElement("p");
    stepsInstruction.innerText = data.mealInstructions;
    cardInstructions.appendChild(stepsInstruction);

    container.appendChild(card);
    container.appendChild(cardIngredients);
    container.appendChild(cardInstructions);

    $wrapper.appendChild(container);
    console.log(data);
    console.log(data.mealInstructions);
}

generateCard();
