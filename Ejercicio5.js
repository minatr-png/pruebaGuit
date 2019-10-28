let win, draw, lost;
input = require('readline-sync');

function calculaPuntos(gan, emp, perd)
{
    res = gan*3 + emp;
    return res;
}

win  = input.questionInt('Dime cuantos partidos ha ganado: ');
draw = input.questionInt('Dime cuantos partidos ha empatado: ');
lost = input.questionInt('Dime cuantos partidos ha perdido: ');

res = calculaPuntos(win,draw,lost);

console.log('\nTienen ' + res + ' puntos.');