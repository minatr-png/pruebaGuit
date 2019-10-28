let num;
input = require('readline-sync');

function par(numb)
{
    if (numb%2 == 0) par = 'par';
    else par = 'impar';

    return par;
}

num = input.questionInt('Dime un numero: ');

par = par(num);

console.log('El número es ',par,'.');