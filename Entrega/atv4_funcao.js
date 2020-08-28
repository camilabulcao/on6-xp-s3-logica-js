/*4.Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro"*/

function validacao(num1,num2,num3){
    if(num1 !== null && num2 !== null && num3 !== null){
        return(num1+num2)/num3
   }else if(num2 === null && num3 === null && num1 !== null){
       return num1
   }else if(num1 === null && num3 === null && num2 !== null){
       return num2
   }else if(num1 === null && num2 === null && num3 !== null){
        return num3
   }else if(num1 !== null && num2 !==null && num3 === null){
       return num1 + num2
   }else if(num1 === null && num2 !==null && num3 !== null){
       return num2 + num3
   }else if(num1 !== null && num2 === null && num3 !== null){
       return num1 + num3
   }else{
       return"Não recebeu nenhum paramêtro"
   }
}
console.log(validacao(2,null,4))