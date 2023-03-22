// Exercise Level: 1

const countries_6 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs_6 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack_6 = ["MongoDB", "Express", "React", "Node"];

// Q/N 1.
// a.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// b.
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// c.
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Q/N 2.
// a.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// b.
let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

// c.
j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);

// Q/N 3.
// let n = Math.floor(prompt('Enter number: '))
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// Q/N 4.
let str = "";
for (let i = 0; i <= 7; i++) {
  str += "#";
  console.log(str);
}

// Q/N 5.
//multiplication
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i ** 2}`);
}

// Q/N 6.
//power of 2,3
for (let i = 0; i <= 10; i++) {
  console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}

// Q/N 7.
//print even numbers from 0-100;
for (i = 0; i <= 100; i++) {
  if (i !== 0 && i % 2 == 0) {
    console.log(i);
  }
}

// Q/N 8.
//print odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 > 0) {
    console.log(i);
  }
}

/* correct
// Q/N 9.
//print prime numbers
// 1. function to check if a number is prime
function isPrime(num) {
  if (num < 2) return "It is not a prime number";
  for (i = 2; i < num / 2; i++) {
    if (!(num % i)) {
      return "It is not a prime number"; // num % i === 0
    }
  }
  return "It is a prime number";
}
console.log(isPrime(37));

// 2. function that uses the prime number function to print the prime numbers.
function primeNumList(val) {
  // create a function to check if a number is prime.
  let primeNums = [];
  function isPrime(num) {
    if (num < 2) return false;
    for (i = 2; i < num / 2; i++) {
      if (!(num % i)) {
        return false; // num % i === 0
      }
    }
    return true;
  }
  // console.log(isPrime(37));

  // create a function that pushes all prime numbers in val into an array.
  for (let i = 2; i < val; i++) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
  }
  console.log(primeNums);
  return primeNums;
}
console.log(primeNumList(37));
*/

/* not correct yet
function primeNumList(val) {
  // create a function to check if a number is prime.
  let primeNums = [];
  if (val < 2) return false;
  for (i = 2; i < val; i++) {
    console.log(i);
    if ((val % i)) {
      primeNums.push(i);
      // primeNums.push(val);
    }
  }
  // console.log(primeNums);
  return primeNums;
}
console.log(primeNumList(5));
*/

// Q/N 10.
//sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Q/N 11.
//sum of all even and odd numbers
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) sumEven += i;
  if (i % 2 > 0) sumOdd += i;
}
console.log(sumEven);
console.log(sumOdd);

// Extras
// Break
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i); // 0 1 2
}

// Continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i); // 0 1 2 4 5
}

// Q/N 12.
//sum of all even and odd numbers in an array
let sumEvenArr = 0;
let sumOddArr = 0;
let sumArr = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) sumEvenArr += i;
  if (i % 2 > 0) sumOddArr += i;
}
console.log(sumArr.push(sumEvenArr));
console.log(sumArr.push(sumOddArr));
console.log(sumArr);

//storing sum of all even/odd numbers in an array
let sumEvenOdd = [0, 0];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvenOdd[0] += i;
  } else if (i % 2 > 0) {
    sumEvenOdd[1] += i;
  }
}
console.log(sumEvenOdd);

// Q/N 13.
//array of five random numbers
let ranArr = [];
for (let i = 0; i < 5; i++) {
  ranArr.push(Math.trunc(Math.random() * 11));
}
console.log(ranArr);
// console.log(ranArr.indexOf(5))
// console.log([Math.floor(Math.random() * 11)]);

// Q/N 14.
//generating random unique arr
let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i; ) {
  let random = Math.floor(Math.random() * 10);
  if (randomUniqueArr.indexOf(random) === -1) {
    randomUniqueArr.push(random);
  }
}
console.log(randomUniqueArr);

// Q/N 15.
//generate 6 random numbers/strings
let randomId = "";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
console.log(characters.length);

for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * characters.length);
  randomId += characters.charAt(random);
  // console.log(characters[Math.floor(Math.random() * characters.length)]);
}
console.log(randomId);

// Exercise Level: 2
// Q/N 1.
//generate any number of numbers/strings
let r = Math.floor(Math.random() * characters.length);
console.log(r);
let randChars = "";
for (let i = 0; i < r; i++) {
  let random = Math.floor(Math.random() * characters.length);
  randChars += characters[random];
}
console.log(randChars);

// Q/N 2.
// generates a random hexadecimal number.
let hexStr = "0123456789abcdef";
let color = "#";

for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * hexStr.length);
  color += hexStr[index];
}
console.log(color);

// let colorContainer = [];
let colors;
for (let i = 0; i < 6; i++) {
  colors = "#" + Math.random().toString(16).substring(2, 8);
  // colorContainer.push(colors);
}
console.log(colors);

//Can change 7 to 2 for longer results.
let ran = (Math.random() + 1).toString(36).substring(7);
console.log("random:", ran);

// Q/N 3.
// generate a random rgb color number.
const rr = Math.trunc(Math.random() * 256);
const gg = Math.trunc(Math.random() * 256);
const bb = Math.trunc(Math.random() * 256);
console.log(`rgb(${rr}, ${gg}, ${bb})`);

function random_rgba() {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
console.log(random_rgba());
// g.fillStyle = color;
// g.strokeStyle = color;

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

// Q/N 4.
// New countries array in Caps
let newCountryArr = [];
for (const country of countries_6) {
  newCountryArr.push(country.toUpperCase());
}
console.log(newCountryArr);

// Q/N 5.
// New countries length array in Caps
let newCountryLengthArr = [];
for (const country of newCountryArr) {
  newCountryLengthArr.push(country.length);
}
console.log(newCountryLengthArr);

// Q/N 6.
let newCountries = [];
for (let i = 0; i < countries_6.length; i++) {
  newCountries.push([
    countries_6[i],
    countries_6[i].toUpperCase().slice(0, 3),
    countries_6[i].length,
  ]);
}
console.log(newCountries);

// Q/N 7.
let countWithoutLand = [];
let countWithLand = [];
for (let i = 0; i < countries_6.length; i++) {
  if (countries_6[i].toLowerCase().includes("land")) {
    countWithLand.push(countries_6[i]);
  } else {
    countWithoutLand.push(countries_6[i]);
  }
}
if (!countWithoutLand) console.log("All these countries are without land");
if (countWithoutLand.length < 1)
  console.log("All these countries are without land");
console.log(countWithLand);
console.log(countWithoutLand);

// Q/N 8.
let countWithIa = [];
let countWithoutIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().slice(-2).includes("ia")) {
    countWithIa.push(countries[i]);
  } else {
    countWithoutIa.push(countries[i]);
  }
}
console.log("countries with 'ia':", countWithIa);
console.log("countries without 'ia':", countWithoutIa);

// Q/N 9.
let maxLength = 0;
let maxCountry = "";
for (const country of countries_6) {
  if (country.length > maxLength) {
    maxLength = country.length;
    maxCountry = country;
  }
}
console.log(maxLength);
console.log(maxCountry);

const maxCountry_1 = countries_6.reduce((a, c) => {
  return a.length >= c.length ? a : c;
}, 0);
console.log(maxCountry_1);

const maxCountry_2 = countries_6.sort((a, b) => b.length - a.length)[0];
console.log(maxCountry_2);

// Q/N 10.
//countries with five chars
let countriesCharLength = [];
for (const country of countries_6) {
  if (country.length === 5) countriesCharLength.push(country);
}
console.log(countriesCharLength);

let countriesCharLength_1 = countries_6.filter(
  (country) => country.length === 5
);
console.log(countriesCharLength_1);

// Q/N 11.
// longest word in the webTechs array
let maxLeng = 0;
let maxWebTechs = "";
for (const tech of webTechs_6) {
  if (tech.length > maxLeng) {
    maxLeng = tech.length;
    maxWebTechs = tech;
  }
}
console.log(maxLeng);
console.log(maxWebTechs);

// Q/N 12.
// creating a new webTechs array
let newWebTechsArr = [];
for (const tech of webTechs_6) {
  newWebTechsArr.push([tech, tech.length]);
}
console.log(newWebTechsArr);

// Q/N 13.
// An application created using MongoDB, Express, React and Node
// is called a MERN stack app.
// Create the acronym MERN by using the array mernStack
let mernAcronym = "";
for (const mern of mernStack_6) {
  // console.log(mern);
  mernAcronym += mern.charAt(0);
}
console.log(mernAcronym);

console.log(mernStack_6.map((el) => el[0]).join(""));

// Q/N 14.
// loop and print out the items.
for (const [i, item] of [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
].entries()) {
  console.log(`${i + 1}: ${item}`);
}

// Q/N 15.
// reverse the order using loop without using a reverse method.
// 1) I want to take the last element of the array, then add it to the newArray.
// 2) To do this I'll need to loop through the array from the end to the beginning, because I want the last element to be first.
// 3) I want to output the contents of 'newArray' when the for loop is finished.

let smallFruit = ["banana", "orange", "mango", "lemon"];
let newSmallFruit = [];
for (let i = smallFruit.length - 1; i >= 0; i--) {
  newSmallFruit.push(smallFruit[i]);
}
console.log(newSmallFruit);

// Q/N 16.
const fullStack_6 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
fullStack_6.flat().forEach((item) => console.log(item));
// console.log(fullStack_6.join(','));

let newFS = [...fullStack_6[0], ...fullStack_6[1]];
console.log(newFS);
for (let i = 0; i < newFS.length; i++) {
  console.log(newFS[i]);
}

// Exercise Level: 3
// Q/N 1.
// Copy countries array(Avoid mutation)
console.log(countries_6.slice());

// Q/N 2.
// Sorting an array
let sortedCountries = countries_6.slice().sort();
console.log(sortedCountries);

// Q/N 3.
let sortedWebTechs = webTechs_6.slice().sort();
console.log(sortedWebTechs);

let sortedMernStack = mernStack_6.slice().sort();
console.log(sortedMernStack);

// Q/N 4.
let countWithLand_1 = [];
for (let i = 0; i < countries_6.length; i++) {
  if (countries_6[i].toLowerCase().includes("land")) {
    countWithLand_1.push(countries_6[i]);
  }
}
console.log(countWithLand_1);

// Q/N 5.
const maxCountry_3 = countries_6.sort((a, b) => b.length - a.length)[0];
console.log(maxCountry_3);

// Q/N 6.
let countWithoutLand_1 = [];
for (let i = 0; i < countries_6.length; i++) {
  if (!countries_6[i].toLowerCase().includes("land")) {
    countWithoutLand_1.push(countries_6[i]);
  }
}
console.log(countWithoutLand_1);

// Q/N 7.
let countriesCharLength_2 = countries_6.filter(
  (country) => country.length === 4
);
console.log(countriesCharLength_2);

if (countriesCharLength_2.length < 1)
  console.log("All these countries are without land");

// // Q/N 8.
// let countriesCharLength_3 = countries_6.filter(
//   (country) => country.length > 1
// );
// console.log(countriesCharLength_3);

// Q/N 9.
let newCountriesArr = countries_6
  .map((country) => country.toUpperCase())
  .reverse();
console.log(newCountriesArr);


/**
 * EXTRAS
 */