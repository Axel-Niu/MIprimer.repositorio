document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validar nombre (solo texto)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
            alert('El nombre debe contener solo texto ');
            return;
        }
        
        // Validar email (debe contener @)
        if (!email.includes('@')) {
            alert('El correo electrónico debe contener el símbolo @');
            return;
        }
        
        // Validar contraseña (al menos 6 caracteres)
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        
        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Si todo está correcto, se puede enviar el formulario
        alert('Formulario válido. Cuenta creada con éxito!');
        // registerForm.submit(); // Descomentar para enviar realmente el formulario
    });
});