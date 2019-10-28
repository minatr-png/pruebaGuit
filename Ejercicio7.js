let char;
input = require('readline-sync');

function tipoCaracter(car)
{
    if (car >= 0 && car <= 9) res = 'número';
    else
    {
        if (car >= 'A' && car <= 'Z' || car >= 'a' && car <= 'z') res = 'carácter';
        else res = 'símbolo';
    }

    return res;
}

car = input.question('Dime argo quillo: ');

res = tipoCaracter(char);

console.log('Se trata de un/a ' + res +'.');