console.log("Задание 1");

function searchStr(search,replace,subject){
	if(!search||!replace||!subject){
		return false;
	}
	return subject.replace(new RegExp(search,'g'),replace);
}
str = prompt('Введи строку');
podStr = prompt('Введи подстроку');
newpodStr = prompt('Введи новую подстроку');

console.log(searchStr(podStr,newpodStr,str));

console.log("Задание 2");

let string = 'дом 9, корпус 2, этаж 6, квартира 59';
function numofStr(string) {
    if(! string) return [];
    return string.match(/(\d+)/g);
}


console.log(numofStr(string));


console.log("Задание 3");

let cities = prompt("Введите города через пробел: ");

function replace(cities){
	if(!cities){
		return false;
	}
let arr = cities.split(' ');
	return arr.sort();
}
console.log(replace(cities));
