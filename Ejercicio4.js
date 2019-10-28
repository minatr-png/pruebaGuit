let num, fal = true;
input = require('readline-sync');

function numRomano(numb)
{
    
    switch (numb)
    {
        case 1:
            rom = 'I';
            break;
            
        case 2:
            rom = 'II';
            break;

        case 3:
            rom = 'III';
            break;

        case 4:
            rom = 'IV';
            break;

        case 5:
            rom = 'V';
            break;

        case 6:
            rom = 'VI';
            break;

        case 7:
            rom = 'VII';
            break;

        case 8:
            rom = 'VIII';
            break;

        case 9:
            rom = 'IX';
            break;

        case 10:
            rom = 'X';
            break;
    }
    return rom;
}

do
{
num = input.questionInt('Dime un numero entre 1 y 10: ');

if (num >= 0 && num <= 10) fal = false;
}while(fal);

rom = numRomano(num);

console.log(num+" en romano sería "+rom+".");