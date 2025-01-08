
document.querySelector('form').addEventListener('submit', event=> {
        event.preventDefault();
        const data =Object.fromEntries(new FormData(event.target))
        console.log(JSON.stringify(data))
});