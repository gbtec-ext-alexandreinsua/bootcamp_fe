async function getMeal() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php"

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

async function showMeal() {
  const result = await getMeal();

  const main = document.getElementsByTagName("main");
  const section = document.createElement("section");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const a = document.createElement("a");
  const pArea = document.createElement("p");
  const pCategory = document.createElement("p");

  const imgUrl = result.meals[0].strMealThumb;
  const name = result.meals[0].strMeal;
  const area = result.meals[0].strArea;
  const category = result.meals[0].strCategory;

  section.setAttribute("class", "mealCard");
  img.setAttribute("src", imgUrl);
  p.innerText = name;
  pArea.innerText = area;
  pCategory.innerText = category;
  pCategory.setAttribute("class", "category")
  div.appendChild(pArea);
  div.appendChild(pCategory);
  a.innerText = "View Recipe";
  a.setAttribute("href", ("./html/meal.html?id=" + result.meals[0].idMeal))
  a.setAttribute("class", "greenButton");

  section.appendChild(img);
  section.appendChild(p);
  section.appendChild(div);
  section.appendChild(a);

  main[0].appendChild(section);
}

showMeal()
