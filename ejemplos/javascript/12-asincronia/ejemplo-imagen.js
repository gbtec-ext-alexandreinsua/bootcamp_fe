
let datos;

window
.fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => {
   console.log(response);
   return response.json();
  })
  .then((data) => {
    console.log(data);
  datos = data;
});
console.log({ datos });


