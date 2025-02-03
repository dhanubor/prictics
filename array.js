//২. Array চ্যালেঞ্জ
var multipolNumber = [5, 6, 8, 10,15]
//multipolNumber.push(20)
//console.log(multipolNumber);
//multipolNumber.unshift(50);
//multipolNumber.pop()
//multipolNumber.shift()


//console.log(multipolNumber);
// multipolNumber.forEach(Number => {
//     console.log(Number);
// });
const muntipol = multipolNumber.map(num => num*num);
console.log(muntipol);
const divition = multipolNumber.filter(num => num%2 === 0);
console.log(divition);
const  total = multipolNumber.reduce((acc, num) => acc + num);
console.log(total);
const found = multipolNumber.find(num=>num>1);
console.log(found);