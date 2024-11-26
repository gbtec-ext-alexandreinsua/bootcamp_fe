document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form form');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const warningBanner = document.querySelector('#warning');
    const warningMessage = document.querySelector('#warning-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        warningBanner.classList.add('hidden');

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username && !password) {
            warningMessage.textContent = 'Por favor, ingresa tu nombre de usuario y contraseña.';
            warningBanner.classList.remove('hidden');
        } else if (!username) {
            warningMessage.textContent = 'Por favor, ingresa tu nombre de usuario.';
            warningBanner.classList.remove('hidden');
        } else if (!password) {
            warningMessage.textContent = 'Por favor, ingresa tu contraseña.';
            warningBanner.classList.remove('hidden');
        } else {
            
            const formData = {
                username: username,
                password: password
            };

            console.log(JSON.stringify(formData));
        }
    });
});
