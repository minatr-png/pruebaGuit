let num;
input = require('readline-sync');

function mul(numb)
{
    if (numb%10 == 0) mul = 'sí';
    else mul = 'no';

    return mul;
}

num = input.questionInt('Dime un numero: ');

mul = mul(num);

console.log('El número ',mul,' es múltiplo de 10.');