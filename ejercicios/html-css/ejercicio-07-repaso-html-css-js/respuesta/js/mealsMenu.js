//se realiza una solicitud http
async function obtenerMealID(){

const urlMeals = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

try{
    const responseMeals = await fetch(urlMeals);
    //si se rechaza capturamos el error
    if(!responseMeals){

        throw new Error(`Error HTTPS: ${responseMeals.status}`);
        //si se resuelve lo convertimos a un objeto y devolvemos la promesa
    } return await responseMeals.json();

    } catch(error){

        console.error("Error en la petición:", error);
    }
}

obtenerMealID();

//obtenemos los datos procesados y trabajamos con ellos
async function mostrarMeal(){
    const datos = await obtenerMealID(); //obtenemos los datos procesados y los almacenamos en datos
    console.log(JSON.stringify(datos)); //mostramos por consola los datos recibidos para asegurarnos

//creando fragmentos para cada contenedor
const fragmentRecipe = document.createDocumentFragment();
const fragmentIngredients = document.createDocumentFragment();
const fragmentInstructions = document.createDocumentFragment();

//creando elementos
const wrapper = document.createElement('div');
const containerRecipe = document.createElement('div');
const containerIngredients = document.createElement('div');
const containerInstructions = document.createElement('div');
const titleIngredients = document.createElement('h2')
const titleInstructions = document.createElement('h2');
const recipeImage = document.createElement('img');
const recipeName = document.createElement('h3');
const recipeCategory = document.createElement('p');
const recipeArea = document.createElement('p');
const enlaceSource = document.createElement('a');
const buttonSource = document.createElement('button');
const enlaceYoutube = document.createElement('a');
const buttonYoutube = document.createElement('button');
const instructions = document.createElement('p');
const buttonContainer = document.createElement('div');

//asignando propiedades
enlaceYoutube.setAttribute("href", datos.meals[0].strYoutube);
recipeImage.setAttribute("src", datos.meals[0].strMealThumb);
recipeImage.setAttribute("alt", "randomRecipe");
recipeName.textContent = (datos.meals[0].strMeal);
recipeCategory.textContent = (datos.meals[0].strCategory);
recipeArea.textContent = (datos.meals[0].strArea);
instructions.textContent = (datos.meals[0].strInstructions);
titleIngredients.textContent = ("Ingredients");
titleInstructions.textContent = ("Instructions");
buttonSource.textContent = ("Source");
buttonYoutube.textContent = ("Youtube");

//asignando clases a los elementos
wrapper.classList.add('wrapper');
containerRecipe.classList.add("containerRecipe");
containerIngredients.classList.add("containerIngredients");
containerInstructions.classList.add("containerInstructions");
recipeImage.classList.add('recipe-image');
recipeName.classList.add('recipe-name');
recipeCategory.classList.add('recipe-category');
recipeArea.classList.add('area');
instructions.classList.add('instructions');
titleIngredients.classList.add('titleContainer');
titleInstructions.classList.add('titleContainer');
buttonSource.classList.add('buttonEnlace');
buttonYoutube.classList.add('buttonEnlace');
buttonContainer.classList.add('buttonContainer');

//asignando botones a cada elemento
buttonContainer.appendChild(enlaceSource);
buttonContainer.appendChild(enlaceYoutube);
enlaceSource.appendChild(buttonSource);
enlaceYoutube.appendChild(buttonYoutube);

//div containerRecipe
containerRecipe.appendChild(recipeName);
containerRecipe.appendChild(recipeImage);
containerRecipe.appendChild(recipeName);
containerRecipe.appendChild(recipeArea);
containerRecipe.appendChild(recipeCategory);
containerRecipe.appendChild(buttonContainer);
fragmentRecipe.appendChild(containerRecipe);

//div containerInstructions
containerInstructions.appendChild(titleInstructions);
containerInstructions.appendChild(instructions);
fragmentInstructions.appendChild(containerInstructions);

//div containerIngredients
containerIngredients.appendChild(titleIngredients);
    //llama a la funcion para que devuelva un array y se almacena en ingredientList
    const ingredientsList = await mostrarIngredients(datos);
    ingredientsList.forEach(ingredient => {
    const ingredientItem = document.createElement('p');
    ingredientItem.textContent = ingredient;
    containerIngredients.appendChild(ingredientItem); 
    })
fragmentIngredients.appendChild(containerIngredients);


//div wrapper. Contenedor envoltorio.
wrapper.appendChild(fragmentRecipe); //receta
wrapper.appendChild(fragmentIngredients); //ingredientes
wrapper.appendChild(fragmentInstructions); // instrucciones
//agregamos los contenedores en el Main
const mealContent = document.getElementById('contenidoPrincipal');
    mealContent.appendChild(wrapper);

}

mostrarMeal();

//funcion para mostrar los ingredientes y filtrar los valores nulos
async function mostrarIngredients(datos) {
    //inicializamos un array vacio donde almacenaremos el futuro array
    const ingredients = [];
        for(let i = 0; i <=20; i++){
        const ingredient = await datos.meals[0][`strIngredient${i}`];
        const measure = await datos.meals[0][`strMeasure${i}`];

        if(ingredient && ingredient.trim() !== ""){
        ingredients.push(`• ${ingredient} - ${measure}`);
        }

    } return ingredients;
    
}

