// Referencia al campo de texto donde se mostrarán los números y resultados
let display = document.getElementById('display');

// Variables para guardar el operador y los valores introducidos
let operador = '';
let valorAnterior = '';
let valorActual = '';

// Función para agregar números al display
function agregarNumero(numero) {
    // Limita el número de dígitos a 15
    if (valorActual.length < 15) {
        valorActual += numero;
        display.value = valorActual;  // Muestra el número en el display
    }
}

// Función que guarda el operador seleccionado (+, -, *, /)
function operar(op) {
    // Si no hay un número actual, no hace nada
    if (valorActual === '') return;
    operador = op;  // Guarda el operador
    valorAnterior = valorActual;  // Almacena el valor actual como el valor anterior
    valorActual = '';  // Resetea el valor actual para que el usuario introduzca un nuevo número
}

// Función para realizar la operación matemática cuando se presiona el botón "="
function igual() {
    // Si falta alguno de los valores, no hace nada
    if (valorActual === '' || valorAnterior === '') return;

    let resultado;
    const anterior = parseFloat(valorAnterior);  // Convierte el valor anterior en número
    const actual = parseFloat(valorActual);  // Convierte el valor actual en número

    // Realiza la operación dependiendo del operador seleccionado
    switch (operador) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        default:
            return;
    }

    // Muestra el resultado en el display
    display.value = resultado;
    // Actualiza los valores para futuras operaciones
    valorAnterior = '';
    valorActual = resultado.toString();
}

// Función para limpiar la calculadora
function limpiar() {
    display.value = '';  // Limpia el display
    valorAnterior = '';  // Resetea el valor anterior
    valorActual = '';  // Resetea el valor actual
    operador = '';  // Resetea el operador
}

// Función para borrar el último número ingresado
function borrar() {
    valorActual = valorActual.slice(0, -1);  // Elimina el último carácter
    display.value = valorActual;  // Actualiza el display
}

