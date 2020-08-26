//2. Agora faça o contrário, um programa que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.
//(F -32)x5)/9

const query = require('synchronous-user-input');
const tempF = parseFloat(query('Digite a temperatura em Fahrenheit: '));

function conversaotemp(tempF) {
    return(tempF - 32) * 5/9

}
console.log("A temperatura em Celsius eh: " +conversaotemp(tempF).toFixed(1))