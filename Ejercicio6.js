let num1, num2;
input = require('readline-sync');

function suma(multiplicador,multiplicando)
{
    res = 0;
    for(i=1;i<=multiplicando;i++)
    {
        res += multiplicador;
    }
    return res;
}

num1 = input.questionInt('Dime el multiplicador: ');
num2 = input.questionInt('Dime el multiplicando: ');

res = suma(num1,num2);

console.log(num1 +' x '+ num2 +' = '+res);