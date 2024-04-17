/* Obtención de elementos del DOM */

const form = document.getElementById('login-form');
const btn = document.getElementById('login-btn')
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();                 /* Prevenir el envío del formulario */

    // Validar datos ingresados

    if (username.trim() === '') {

        alert('Por favor, ingrese su nombre de usuario,');
        return;
    }

    if (password.trim() === '') {
        alert('Por favor, ingrese su contraseña.');
        return;
    }

    // Enviar datos del inicio de sesión a una función para su procesamiento

    const login = (username,password) =>{

         // Aquí puedes agregar la lógica para verificar las credenciales del usuario
         // Por ejemplo, consultar una base de datos para comprobar si el usuario y la contraseña son válidos
        // Si las credenciales son válidas, puedes redirigir al usuario a la página principal de la aplicación
        

        if (username === 'usuario' && password === '123456') {
            window.location.href = '';
        }

    };

})

