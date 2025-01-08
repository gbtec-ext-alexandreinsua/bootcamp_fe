const re = new RegExp(".*?f=(\d*)");

const letterMeals = (window.location.href).replace(re, "$1");

async function getMeals() {
  const url = ("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letterMeals);

  try {
    const response = await window.fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}

async function showMeals() {
  const result = await getMeals();
  const main = document.getElementsByTagName("main");
  const divGrid = document.createElement("div");
  divGrid.setAttribute("class", "grid");
  main[0].appendChild(divGrid);

  for (const meal of result.meals) {

    const section = document.createElement("section");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const pArea = document.createElement("p");
    const pCategory = document.createElement("p");

    const imgUrl = meal.strMealThumb;
    const name = meal.strMeal;
    const area = meal.strArea;
    const category = meal.strCategory;

    section.setAttribute("class", "mealCard");
    img.setAttribute("src", imgUrl);
    p.innerText = name;
    pArea.innerText = area;
    pCategory.innerText = category;
    pCategory.setAttribute("class", "category")
    div.appendChild(pArea);
    div.appendChild(pCategory);
    a.innerText = "View Recipe";
    a.setAttribute("href", ("../html/meal.html?id=" + meal.idMeal))
    a.setAttribute("class", "greenButton");

    section.appendChild(img);
    section.appendChild(p);
    section.appendChild(div);
    section.appendChild(a);

    divGrid.appendChild(section);
  }


}

showMeals()