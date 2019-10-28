function tabla(num1,num2)
{
    for(i=1;i<=num2;i++)
    {
        res = i * num1;
        console.log(i,'*',num1,'=',res);
    }
}

let multi = 5, limit = 22;

tabla(multi,limit);