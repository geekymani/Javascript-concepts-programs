// (function(){
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// console.log("sc1");
//  setTimeout(function(){console.log(3)}, 0);
//
//  Promise.resolve().then(function(){console.log("resolve")});
//
// console.log("sc2");

// let dog = {
//     petName: "pupper",
//     bark:function(){
//         console.log("my name"+this.petName);
//     }
// }
//
// let cat = {
//     petName: "kitty",
//     meow:() =>{
//         console.log("my name"+this.petName);
//     }
// }
//
// dog.bark();
// cat.meow();


function sorteggs(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let length = arr.length;
    let pivot = arr.pop();
    console.log("pivot",pivot);
    let returnArr = [];
    for (let i = 0; i < length-1; i++){
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return returnArr.concat(sorteggs(left), pivot, sorteggs(right));

}

console.log(sorteggs([1,5,3,7,9,2,0]));

  function stockBuySell(price)
    {
        // Prices must be given for at least two days
        let n = price.length;
        if (n === 1)
            return;

        let count = 0;

        // solution array
        let sol = [];

        // Traverse through given price array
        let i = 0;
        while (i < n - 1)
        {
            // Find Local Minima. Note that the limit is (n-2) as we are
            // comparing present element to the next element.
            while ((i < n - 1) && (price[i + 1] <= price[i]))
                i++;

            // If we reached the end, break as no further solution possible
            if (i === n - 1)
                break;

            let e = {};
            e.buy = i++;
            // Store the index of minima


            // Find Local Maxima.  Note that the limit is (n-1) as we are
            // comparing to previous element
            while ((i < n) && (price[i] >= price[i - 1]))
                i++;

            // Store the index of maxima
            e.sell = i-1;
            sol.push(e);

            // Increment number of buy/sell
            count++;
        }

        // print solution
        if (count === 0)
            console.log("There is no day when buying the stock "
                                                  + "will make profit");
        else
            for (let j = 0; j < count; j++)
                console.log("Buy on day: " + sol[j].buy
                        +"        " + "Sell on day : " + sol[j].sell);

        return;
    }

    console.log(stockBuySell([100,180,260,310,40,535,695]));