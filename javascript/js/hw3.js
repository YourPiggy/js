// задание №1

function comparisonArrays(arr1, arr2) {

    if(! Array.isArray(arr1))
    {
        console.log('arr1 не является массивом');
        return false;
    }
    if(! Array.isArray(arr2))
    {
        console.log('arr2 не является массивом');
        return false;
    }

    if(arr1.length != arr2.length)
    {
        return false;
    }

    for(let i=0; i<arr1.length; i++)
    {
        if(arr1[i] !== arr2[i])
        {
            return false;
        }
    }

    return true;
}

console.log(compareArrays([],{}));
console.log(compareArrays([0,1,2],[1,2,3]));
console.log(compareArrays([1,2,3],[1,2,'3']));
console.log(compareArrays([1,2,3],[1,2,3]));



// задание №2

Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию
(строки, массивы и циклы использовать запрещено).
*/
function countSum(number) {
    if(number == 0) return 0;
    return number%10 + countSum(parseInt(number/10));
}

console.log(countSum(3571));


// задание №3

function range(start, end, step) {
    let arr = [];
    if (! step) step = 1;
    for(let i=start; i<=end; i+=step)
    {
        arr.push(i);
    }
    return arr;
}

console.log(range(1,10,2));

//  задание №4


function tovar(count) {

    let word = "товаров";

    if (count % 100 < 5 || count % 100 > 20) {
        if (count % 10 == 1) word = 'товар';
        if (count % 10 > 1 && count % 10 < 5) word = 'товара';
    }

    return word;
}

console.log(tovar(1));
