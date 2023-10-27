let numero;

do {
    numero = parseFloat(prompt("Por favor, ingresa un número positivo:"));
} while (numero <= 0 || isNaN(numero));

alert("Gracias por ingresar un número positivo: " + numero);
