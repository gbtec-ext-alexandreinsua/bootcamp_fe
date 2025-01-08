/*
EJEMPLO SOBRE COMO REALIZAR UNA PETICIÓN CON FETCH Y MOSTRAR EL RESULTADO EN LA WEB
  */
// función para obtener los datos
async function getRandomCard() {
    // Necesito una url (la del servidor)
    //se llama endpoint
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    try {
      // la  peticion fetch que devuelve una promesa
      const response = await window.fetch(url);
      // controlamos el estado de la respuesta
      // si la petición es incorrecta lanzará este error
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      // devuelve el resultado de la peticion parseada
      return await response.json();
      // prevenimos un error interno en la promesa
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  }
  
  // funcion para mostrar la imagen
  async function showCard() {
    // necesito datos que mostrar
    const datos = await getRandomCard();
    $main = document.getElementsByTagName("main")[0];
    
    console.log(datos.meals);
    console.log(datos.meals[0].idMeal + datos.meals[0].strMeal +  datos.meals[0].strArea);

    $div = document.createElement('div');
    $img = document.createElement("img");
    $h4 = document.createElement("h4");
    $p = document.createElement("p");
    $a = document.createElement("a");

    $img.src = datos.meals[0].strMealThumb;
    $h4.innerText = datos.meals[0].strMeal;
    $p.innerText = datos.meals[0].strArea;
    $a.href = datos.meals[0].strSource;
    $a.innerText = "View Recipe";
    //console.log($img)
    //console.log($main);


    $div.appendChild($img);
    $div.appendChild($h4);
    $div.appendChild($p);
    $div.appendChild($a);
    $div.className = "uniqueCard";
    $main.appendChild($div);
    
  }
  
  showCard();