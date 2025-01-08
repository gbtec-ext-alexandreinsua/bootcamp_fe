async function searchMeals($letra){
    /*********************/
    /*********************/
    /*********************/
    /*********************/
    /*********************/
    /*********************/
   
        window.alert($letra);
        
        async function getMeals(letra) {

                const url = "https://www.themealdb.com/api/json/v1/1/search.php?f="+letra;
                
                
                try {

                const response = await window.fetch(url);

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                return await response.json();

                } catch (error) {
                console.error("Error en la petición:", error);
                }
        }
            
        console.log(getMeals($letra));
        
        async function showCards() {
                    // necesito datos que mostrar
                    const datos = await getMeals($letra);
                    let meals;

                    $main = document.getElementsByTagName("main")[0];

                    console.log(datos.meals);
                    console.log(datos.meals.length);

                    if(document.getElementById("meals") == null){;
                        $meals = document.createElement('div');
                        $meals.id = "meals";
                    } else{
                        $meals = document.getElementById("meals")
                        $meals.replaceChildren();
                    }

                    for(let i = 0; i<datos.meals.length;i++){

                        console.log(datos.meals[i].idMeal + datos.meals[i].strMeal +  datos.meals[i].strArea);
    
                        $div = document.createElement('div');
                        $img = document.createElement("img");
                        $h4 = document.createElement("h4");
                        $p = document.createElement("p");
                        $a = document.createElement("a");
                        
                        $img.src = datos.meals[i].strMealThumb;
                        $h4.innerText = datos.meals[i].strMeal;
                        $p.innerText = datos.meals[i].strArea;
                        $a.href = datos.meals[i].strSource;
                        $a.innerText = "View Recipe";
    
                        $div.appendChild($img);
                        $div.appendChild($h4);
                        $div.appendChild($p);
                        $div.appendChild($a);
                        $div.className = "meals";
                        $meals.appendChild($div);
                        $main.appendChild($meals);
                    }
                    

                    //console.log($img)
                    //console.log($main);

                    
        }
        
        showCards();

    /*********************/
    /*********************/
    /*********************/
    /*********************/

    

}

$main = document.getElementsByTagName("main")[0];

$div = document.createElement("div");
$div.className = "contenedorLetras";
    
    for (let i = 65; i <= 90; i++) {
      const $letra = String.fromCharCode(i); 
      const $button = document.createElement('button');
      
      $button.className = "letra";
      $button.style.margin = "0 10px 0 0";
      $button.textContent = $letra; 

      $button.addEventListener("click", () => searchMeals($letra));
      
      $div.appendChild($button);
    }

$main.appendChild($div);
