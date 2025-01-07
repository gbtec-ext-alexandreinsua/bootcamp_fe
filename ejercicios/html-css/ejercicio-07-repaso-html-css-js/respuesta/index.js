async function getRandomMeal() {
    const url = "https://themealdb.com/api/json/v1/1/random.php";

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
  
    return { mealName, mealArea, mealImg, mealCategory, mealId};
}

async function generateCard(){
    const data = await getRandomMeal();
    const $wrapper = document.getElementsByTagName("main")[0];
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

    const bodyButton = document.createElement("a");
    bodyButton.setAttribute("href", "./html/meal.html?" + data.mealId)
    bodyButton.innerText = "View recipe";
    cardFooter.appendChild(bodyButton);

    $wrapper.appendChild(card);
    console.log(data);
}

generateCard();