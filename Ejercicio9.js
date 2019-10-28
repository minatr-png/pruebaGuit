let num1, num2, resu;
input = require('readline-sync');

function calculaSuma(numb1, numb2)
{
    res = 0;

    if (numb1%2 == 0) for(i=numb1+2;i<numb2;i+=2) res += i;
    else for(i=numb1+3;i<numb2;i+=2) res += i;

    return res;
}

num1 = input.questionInt('Dime un número: ');
num2 = input.questionInt('Dime otro número: ');

resu = calculaSuma(num1, num2);

console.log(resu);