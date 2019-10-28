let sis1, sis2;
input = require('readline-sync');

function dif(ed1,ed2)
{
    dif = ed1 - ed2;
    
    return Math.abs(dif);
}

sis1 = input.questionInt('Dime la edad de una hermana: ');
sis2 = input.questionInt('Dime la edad de la otra hermana: ');

dif = dif(sis1,sis2);

console.log('La diferencia de edad es de',dif,'años.');