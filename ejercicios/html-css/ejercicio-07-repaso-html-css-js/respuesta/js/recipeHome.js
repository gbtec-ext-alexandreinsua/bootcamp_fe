//socilitud http
async function obtenerRecipe() {

    const urlHome = "https://www.themealdb.com/api/json/v1/1/random.php";

    try{
        const responseHome = await fetch(urlHome);
        if (!responseHome.ok) {
            throw new Error(`Error HTTP: ${responseHome.status}`);
    }
        return await responseHome.json();
    }
    catch (error) {
    console.error("Error en la petición:", error);
}
    }

obtenerRecipe();


//mostramos los datos procesados
async function mostrarRecipe() {
    const datos = await obtenerRecipe();
    console.log(JSON.stringify(datos));

//creamos los elementos
const fragment = document.createDocumentFragment();
const wrapper = document.createElement('div');
const container = document.createElement('div');
const recipeImage = document.createElement('img');
const recipeName = document.createElement('h3');
const recipeCategory = document.createElement('p');
const recipeArea = document.createElement('p');
const enlaceRecipe = document.createElement('a');
const moreRecipe = document.createElement('button');

//agregamos atributos para los elementos
recipeImage.setAttribute("src", datos.meals[0].strMealThumb);
recipeImage.setAttribute("alt", "randomRecipe");
recipeName.textContent = (datos.meals[0].strMeal);
recipeCategory.textContent = (datos.meals[0].strCategory);
recipeArea.textContent = (datos.meals[0].strArea);
enlaceRecipe.setAttribute("href", "/ejercicios/html-css/ejercicio-07-repaso-html-css-js/respuesta/html/meal.html");
moreRecipe.setAttribute("type", "button");
moreRecipe.textContent = ("View recipe");

//creamos clases para los elementos
wrapper.classList.add('wrapper');
container.classList.add('container');
recipeImage.classList.add('recipe-image');
recipeName.classList.add('recipe-name');
recipeCategory.classList.add('recipe-category');
recipeArea.classList.add('area');
moreRecipe.classList.add('more-recipe');


enlaceRecipe.appendChild(moreRecipe);
wrapper.appendChild(container);
container.appendChild(recipeImage);
container.appendChild(recipeName);
container.appendChild(recipeArea);
container.appendChild(recipeCategory);
container.appendChild(enlaceRecipe);


fragment.appendChild(wrapper);

//agregamos el fragmento al DOM
const mainContent = document.getElementById('mainContent'); 
    mainContent.appendChild(fragment);

}

mostrarRecipe();



