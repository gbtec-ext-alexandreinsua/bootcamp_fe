const form = document.getElementById('contactForm');

const cancelButton = document.getElementById('cancelButton');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email');
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const subscribe = document.getElementById('subscribe').checked;

    let isValid = true;

    if (!name) {
        isValid = false;
        setError('name', 'El nombre es obligatorio.');
    } else {
        clearError('name');
    }

    if (!email.validity.valid) {
        isValid = false;
        setError('email', 'Por favor, ingresa un email válido.');
    } else {
        clearError('email');
    }

    if (!subject) {
        isValid = false;
        setError('subject', 'El asunto es obligatorio.');
    } else {
        clearError('subject');
    }

    if (isValid) {
        const result = {
            name,
            email: email.value.trim(),
            subject,
            message,
            subscribe
        };
        
        console.log(JSON.stringify(result));
        alert('Formulario enviado correctamente. Revisa la consola para ver los datos.');
        form.reset();
    }
});

cancelButton.addEventListener('click', function() {
    if (confirm('¿Estás seguro de que deseas cancelar?')) {
        form.reset();
    }
});

function setError(field, message) {
    const input = document.getElementById(field);
    const errorDiv = document.getElementById(`${field}Error`);
    input.classList.add('error');
    errorDiv.textContent = message;
}

function clearError(field) {
    const input = document.getElementById(field);
    const errorDiv = document.getElementById(`${field}Error`);
    input.classList.remove('error');
    errorDiv.textContent = '';
}