function rectangulo1(base,altura)
{
    console.log('El rectángulo tiene un area de ',base*altura,'m^2.');
}

function rectangulo2(base1,altura1)
{
    resultado = base1*altura1;
    return resultado;
}

let bas = 10, alt = 5, res;

rectangulo1(bas,alt);

res = rectangulo2(bas, alt);
console.log('El rectángulo tiene un area de ',res,'m^2.')