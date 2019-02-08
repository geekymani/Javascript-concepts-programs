function isPrime(n){
    var divisor = 2;

    while (n > divisor){
        if(n % divisor === 0){
            return false;
        }
        else
            divisor++;
    }
    return true;
}


function isPrimeOptimized(n)
{
    var divisor = 3,
        limit = Math.sqrt(n);
    console.log("limit",limit);

    //check simple cases
    if (n === 2 || n === 3)
        return true;
    if (n % 2 === 0)
        return false;

    while (divisor <= limit)
    {
        if (n % divisor === 0)
            return false;
        else
            console.log(divisor);
            divisor += 2;
    }
    return true;
}

console.log(isPrime(137));
console.log(isPrimeOptimized(137));
console.log(isPrime(115));
