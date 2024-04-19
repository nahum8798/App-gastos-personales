/* Obtención de elementos del DOM */

const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const userWrong = document.getElementById('hidden-username');
const passWrong = document.getElementById('hidden-password');
const nuevoGastoBtn = document.getElementById('nuevo-gasto');
const historialBtn = document.getElementById('historial');
const estadisticasBtn = document.getElementById('estadisticas');

const gastosForm = document.getElementById('expense-form');
const amount = parseFloat(document.getElementById('amount').value);
const category = document.getElementById('category').value;
const description = document.getElementById('description').value;


form.addEventListener('submit', (e) => {
    e.preventDefault(); /* Prevenir el envío del formulario */

    // Validar datos ingresados
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (username === '') {
        alert('Por favor, ingrese su nombre de usuario.');
        return;
    }

    if (password === '') {
        alert('Por favor, ingrese su contraseña.');
        return;
    }

    // Enviar datos del inicio de sesión a una función para su procesamiento
    login(usernameValue, passwordValue);
});

// Función de inicio de sesión
const login = (username, password) => {
    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    // Por ejemplo, consultar una base de datos para comprobar si el usuario y la contraseña son válidos
    // Si las credenciales son válidas, puedes redirigir al usuario a la página principal de la aplicación

    if (username === 'usuario' && password === '123456') {
        window.location.href = 'pagina_principal.html';
    } else {
        if (username !== 'usuario') {
            userWrong.innerText = "Nombre de usuario incorrecto."
        }
        if (password !== '123456') {
            passWrong.innerText = "Contraseña incorrecta."
        }
    }
};

/* Menu */

nuevoGastoBtn.addEventListener('click',()=>{window.location.href = 'nuevo_gasto.html';});
historialBtn.addEventListener('click',()=>{window.location.href = 'pagina_principal.html';});
estadisticasBtn.addEventListener('click',()=>{window.location.href = 'pagina_principal.html';});

/* Formulario de carga de gastos */

gastosForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    // Validar datos ingresados

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, ingresa una cantidad valida');
        return
    }

    if (category === ''){

        alert('Por favor, selecciona una categoria');
        return
    }

})