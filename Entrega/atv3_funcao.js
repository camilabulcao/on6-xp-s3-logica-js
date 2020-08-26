//3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const query = require('synchronous-user-input');
const metro = parseFloat(query('Digite um valor em metros: '));

function convertemm(metro){
    return metro*1000
}
console.log("O valor em milimetros eh: " +convertemm(metro))