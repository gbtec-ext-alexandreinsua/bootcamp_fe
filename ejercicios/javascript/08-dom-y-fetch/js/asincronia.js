
async function pedirFoto() {

    try{
        const foto = await window.fetch("https://randomuser.me/api/");


        //console.log(foto);
        //console.log(foto.url);
        if(!foto.ok){
            throw new Error("Esta fallando");
        }
        return foto.json();


    }catch(error){
        console.error("Peta por el catch");
        
    }
}
async function main() {
    const resultado = await pedirFoto();
    const urlImg = resultado.results[0].picture.large; // JSON
    const p2 = "My name is ";
    const h1_2 = resultado.results[0].name.title + " " + resultado.results[0].name.first + " " + resultado.results[0].name.last;
    const h2_2 = resultado.results[0].location.city + " " + resultado.results[0].location.street.name + " " + resultado.results[0].location.street.number;
    const h3_2 = resultado.results[0].phone + " " + resultado.results[0].email;
   
    

    
    
    const card = document.createElement("div");
        card.classList.add("card");
    const subCard1 = document.createElement("div");
        subCard1.classList.add("subCard1");
        const img = document.createElement("img");
            img.src=urlImg;
    
    const subCard2 = document.createElement("div");
        subCard2.classList.add("subCard2");
    const p = document.createElement("p");
        p.innerText = p2;
    const h1 = document.createElement("h1");
        h1.innerText = h1_2;
    const h2 = document.createElement("h2");
        h2.innerText = h2_2;
    const h3 = document.createElement("h3");
        h3.innerText = h3_2;

    subCard1.appendChild(img)

    subCard2.appendChild(p);
    subCard2.appendChild(h1);
    subCard2.appendChild(h2);
    subCard2.appendChild(h3);

    card.appendChild(subCard1);
    card.appendChild(subCard2);

    
    window.document.querySelector("body").appendChild(card);



}

main();