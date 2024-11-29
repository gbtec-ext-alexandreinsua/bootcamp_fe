const apiEndpoint = "https://randomuser.me/api/";

fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];

  
    document.getElementById('foto').src= user.picture.large;
    document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('address').textContent = `${user.location.city} - ${user.location.street.name} ${user.location.street.number}, ${user.location.postcode}`;
    document.getElementById('contact').textContent = `${user.cell}  ${user.email}`;
  })

.catch(error => console.error("Error en la petición:", error));


//Este código lo saqué buscando en internet, aunque creo que más o menos lo entiendo, pero ¿por qué es tan diferente al hecho en clase? Entiendo que el otro será más correcto