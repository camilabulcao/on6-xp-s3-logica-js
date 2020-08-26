// Faça um programa que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const query = require('synchronous-user-input');
const tempCelsius = parseFloat(query('Digite a temperatura em Celsius: '));

function conversao(tempCelsius){

    return(9*(tempCelsius/5)) + 32

}
console.log("A temperatura em Fahrenheit eh: " +conversao(tempCelsius))