document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form form');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const warningBanner = document.querySelector('#warning');
    const warningMessage = document.querySelector('#warning-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

       
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        warningBanner.classList.add('hidden');

        if (!username && !password) {
           
            showWarning('Por favor, ingresa tu nombre de usuario y contraseña.');
        } else if (!username) {
            
            showWarning('Por favor, ingresa tu nombre de usuario.');
        } else if (!password) {
            
            showWarning('Por favor, ingresa tu contraseña.');
        } else {
            
            const formData = {
                username: username,
                password: password
            };

            console.log(JSON.stringify(formData)); 
        }
    });

 
    function showWarning(message) {
        warningMessage.textContent = message;
        warningBanner.classList.remove('hidden');
        warningBanner.style.display = 'block';

        setTimeout(() => {
            warningBanner.classList.add('hidden');
            warningBanner.style.display = 'none';
        }, 3000);
    }
});
