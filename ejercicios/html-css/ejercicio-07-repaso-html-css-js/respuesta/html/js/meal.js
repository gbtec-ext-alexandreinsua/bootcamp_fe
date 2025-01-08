
const getMealIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  };
  

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      return data.meals[0]; 
    } catch (error) {
      console.error('Error al obtener los detalles de la comida:', error);
      return null;
    }
  };
  

  const renderMealDetails = (meal) => {
    if (!meal) {
      document.querySelector('main').innerHTML = '<p>Error: No se encontraron detalles para esta comida.</p>';
      return;
    }
  
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredientsList.push(`${measure} ${ingredient}`);
      }
    }
  
    const mealCard = `
  <div class="meal-card">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <h1>${meal.strMeal}</h1>
    <div class="meal-info">
      <p>${meal.strArea}</p>
      <p>${meal.strCategory}</p>
    </div>
    <p class="tip"> ${meal.strTags || "N/A"}</p>
    <div class="links">
      <a href="${meal.strSource}" target="_blank">Source</a>
      <a href="${meal.strYoutube}" target="_blank">YouTube</a>
    </div>
  </div>
`;

  
    const ingredients = `
      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>
          ${ingredientsList.map((ingredient) => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
    `;
  
    const instructions = `
      <div class="instructions">
        <h2>Instructions</h2>
        <p>${meal.strInstructions.replace(/\n/g, '</p><p>')}</p>
      </div>
    `;
  
    document.querySelector('main').innerHTML = `
      <div class="meal-details">
        ${mealCard}
        ${ingredients}
        ${instructions}
      </div>
    `;
  };
  

  
  const initMealPage = async () => {
    const main = document.querySelector('main');
    const mealId = getMealIdFromURL();
  
    if (!mealId) {
      alert('No se proporcionó un ID de comida válido.');
      main.innerHTML = '<p>Error: No se proporcionó un ID de comida válido.</p>';
      return;
    }
  
    const mealDetails = await fetchMealDetails(mealId);
  
    if (mealDetails) {
      renderMealDetails(mealDetails);
    } else {
      main.innerHTML = '<p>Error al cargar los detalles de la comida. Inténtalo nuevamente.</p>';
    }
  };
  
  initMealPage();
  