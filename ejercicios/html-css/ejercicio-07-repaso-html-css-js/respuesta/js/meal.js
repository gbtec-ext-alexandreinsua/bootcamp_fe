const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

//Para obter os detalles da receta
async function fetchRecipeMeal(){

    //obter o ID da receta desde a URL
const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get('mealId'); //obtemos o valor do parámetro mealId


try{
//Solicitud a API co ID da receta
const response = await fetch(apiUrl + mealId);
const data = await response.json();

//obtemos a receta da resposta
const meal = data.meals[0];

//REsumen de instrucciones
const instructionsSummary = generateInstructionsSummary(meal.strInstructions, 5);

//Creamos a estructura HTML da receta
const recipeContainer = document.getElementById('recipe-container');

const recipeHTML = `
<div class="recipe-card">
<img src="${meal.strMealThumb}" alt= "Food Image" />
<h2>${meal.strMeal}</h2>
<p>${meal.strCategory}</p>
<p>${meal.strArea}</p>
<div class="buttons">
<a href="${meal.strSource}" target="_blank">Source</a>
${meal.strYoutube ? `<h3></h3><a href= "https://www.youtube.com/watch?v=${meal.strYoutube}" target="_blank">Youtube</a>` : ''}
</div>
</div>

<div class="ingredients">
<h3>Ingredients</h3>
<ul>
${generateIngredientsList(meal)}
</ul>
</div>

<div class="instructions">
<h3>Instructions</h3>
<p>${instructionsSummary}</p>
</div>

`;
//Insertar detalles da receta en el contenedor
recipeContainer.innerHTML = recipeHTML;

}catch(error){
    console.error("Error ao obter a receta", error);
 }
}
//Función para generar resumen en las instrucciones
function generateInstructionsSummary(instructions, sentenceCount){
    const sentences = instructions.split('.');
    const summary = sentences.slice(0, sentenceCount).join('.') + '.';
    return summary;
}

//Función para generar lista de ingredientes
function generateIngredientsList(meal){
    let ingredientsList = '';
    for (let i = 1; i <= 20; i++){
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if(ingredient){
            ingredientsList += `<li>${ingredient} - ${measure}</li>`;
        }       
    }
    return ingredientsList;
}

window.onload = fetchRecipeMeal;