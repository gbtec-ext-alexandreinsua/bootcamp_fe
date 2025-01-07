if (document.getElementById('letters')) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lettersDiv = document.getElementById('letters');
    alphabet.forEach(letter => {
        let letterButton = document.createElement('button');
        letterButton.textContent = letter;
        letterButton.addEventListener('click', () => loadMealsByLetter(letter));
        lettersDiv.appendChild(letterButton);
    });
}

// Buscar comidas por letra
function loadMealsByLetter(letter) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(response => response.json())
        .then(data => {
            // Mostrar las comidas de esa letra
            console.log(data);
        });
}