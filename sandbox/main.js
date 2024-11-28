window
.fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => {
   console.log(response);
   return Response.json();
  })
  .then((data) => console.log(data));


  