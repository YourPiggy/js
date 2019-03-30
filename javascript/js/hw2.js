console.log('задание 1');

let Num = [2, 6, 0, 7, -3, 4, 9];
let i;
for (i = 0; Num[i] + Num[i + 1] !== 7; i++) {
}
console.log("N =", Num[i], "M =", Num[i + 1]);


console.log('задание 2');

for(let i=1; i<=100; i++)
{
    if(i%3==0 && (i%5==0))
    {
        console.log('ThreeFive');
    } else if(i%3==0)
    {
        console.log('Three');
    }
    else if(i%5==0)
    {
        console.log('Five');
    }
    else
    {
        console.log(i);
    }
}

console.log('задание 4.2');

let posl = 1
 for (i = 1; i <= 20; ++i){
 	posl = posl * 2;
 console.log(posl);
}

console.log('задание 5');

let fairy = 5;
let plate = 7;
let count = 0;
for(let i=plate; i>0; i--)
  if(fairy>0) {
		fairy -= 0.5;

	console.log('Осталось fairy: ',fairy);
	}
	else{
		count++;
	}
