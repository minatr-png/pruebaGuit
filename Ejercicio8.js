let i;

function loteria()
{
    numb = Math.random() * (49 - 1) + 1;
    return numb;
}

for (i=1;i<=6;i++)
{
    num = loteria();
    num = Math.trunc(num);
    console.log(num);
}