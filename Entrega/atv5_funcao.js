//5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

const query = require('synchronous-user-input');
const num = parseInt(query('Digite um número: '));

function somaProgressiva(num){
    
    let resultado = 0
    for(i=1; i<=num; i++){  
        resultado = resultado + i;
    }
    return resultado
}
console.log("A soma progressiva: " +somaProgressiva(num))