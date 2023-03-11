// Exercise Level: 1

const countries = [
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Q/N 1.
const array_1 = Array();
const array_2 = [];
console.log(array_1, array_2);

// Q/N 2.
const arrNumbers = Array(6).fill(5);
const arrFruits = ["banana", "orange", "mango", "lemon", "apple", "paw-paw"];
console.log("Numbers:", arrNumbers);
console.log("Fruits:", arrFruits);

// Q/N 3.
console.log("Number of fruits:", arrFruits.length);
console.log("Number of numbers:", arrNumbers.length);

// Q/N 4.
console.log("firstItem:", arrFruits[0]);
// console.log(arrFruits.shift());
console.log("MiddleItem:", arrFruits[3]);
console.log("lastItem:", arrFruits[arrFruits.length - 1]);
// console.log(arrFruits.pop());

console.log("firstItem:", arrNumbers[0]);
// console.log(arrNumbers.shift());
console.log("MiddleItem:", arrNumbers[3]);
console.log("lastItem:", arrNumbers[arrNumbers.length - 1]);
// console.log(arrNumbers.pop());

// Q/N 5.
const mixedDataTypes = [
  1,
  "two",
  false,
  null,
  ["head", "tail"],
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];

console.log(mixedDataTypes.length);

// Q/N 6.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Q/N 7.
console.log(itCompanies);

// Q/N 8.
console.log(itCompanies.length);

// Q/N 9.
console.log(itCompanies[0]);
console.log(itCompanies[4]);
console.log(itCompanies[itCompanies.length - 1]);

// Q/N 10.
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

for (const it of itCompanies) {
  console.log(it);
}

// Q/N 11.
for (let i = 0; i < itCompanies.length; i++) {
  const upperCase = itCompanies[i].toUpperCase();
  console.log(upperCase);
}

// Q/N 12.
// a
const arrSentence_1 = new Intl.ListFormat().format(itCompanies);
console.log(arrSentence_1);

// b.
// const arrSentence_2 =
//   itCompanies.slice(0, itCompanies.length - 1).join(", ") +
//   ", and " +
//   itCompanies.slice(-1);
const arrSentence_2 = `${itCompanies
  .slice(0, itCompanies.length - 1)
  .join(", ")}, and ${itCompanies.slice(-1)}`;
console.log(arrSentence_2);

// c.
const arrSentence_3 = itCompanies
  .reduce((acc, cur, i) => {
    return acc + cur + (i === itCompanies.length - 2 ? " and " : ", ");
  }, "")
  .slice(0, -2);
console.log(arrSentence_3);

// d.

let arrSentence = "";
for (const it of itCompanies) {
  arrSentence += it;
}
console.log(arrSentence);
console.log(itCompanies.join(", "));

// Q/N 13.
// const techCo = prompt("Enter a tech company: ");
// itCompanies.includes(techCo)
//   ? console.log(techCo)
//   : console.log("company not found");

// Q/N 14.
let oo = [];
for (let i = 0; i < itCompanies.length; i++) {
  //   oo.push(itCompanies[i].includes("oo"));
  itCompanies[i].includes("oo") ? oo.push(itCompanies[i]) : "";
}
console.log(oo);

// Q/N 15.
console.log(itCompanies.sort());
console.log(itCompanies.sort((a, b) => a - b));
console.log(itCompanies.sort((a, b) => -1));
console.log(itCompanies.sort((a, b) => (a > b ? -1 : 1)));
console.log(itCompanies.sort().reverse());

// Q/N 16.
console.log(itCompanies);
console.log(itCompanies.reverse());

// Q/N 17.
console.log(itCompanies.slice(0, 3));

// Q/N 18.
console.log(itCompanies.slice(-3));

// Q/N 19.
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2)));
console.log(
  itCompanies.slice(
    parseInt(itCompanies.length / 2),
    parseInt(itCompanies.length / 2) + 1
  )
);

// Q/N 20.
console.log(itCompanies.slice().shift());

// Q/N 21.
console.log(itCompanies.slice().splice(3, 1).join());

// Q/N 22.
console.log(itCompanies.slice().pop());

// Q/N 23.
console.log(itCompanies.slice().splice(0, itCompanies.length).join());

// Exercise Level: 2
// Q/N 1.

// Q/N 2.
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.replace(/[^A-Za-z0-9' ']/gim, ""));
console.log(text.replace(/[,.]/gim, ""));
let words = text.replace(/[,.]/gim, "").split(" ");
console.log(words);
console.log(words.length);

// Q/N 3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.push("Sugar"));
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// Q/N 4.
countries.includes("Ethiopia")
  ? console.log("Ethiopia".toUpperCase())
  : countries.push("Ethiopia");

/Ethiopia/gi.test(countries)
  ? console.log("Ethiopia".toUpperCase())
  : countries.push("Ethiopia");

// Q/N 5.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

if (/Sass/gi.test(webTechs)) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

const fullStack_1 = [frontEnd, backEnd];
const fullStack_2 = [...frontEnd, ...backEnd];

console.log(fullStack);
console.log(fullStack_1);
console.log(fullStack_2);

// Exercise Level: 3
// Q/N 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(Math.max(...ages));
console.log(Math.max.apply(null, ages));
console.log(Math.min(...ages));
console.log(Math.min.apply(null, ages));

// sort, min, max
console.log(ages.sort((a, b) => a - b));
console.log(ages.sort((a, b) => (a > b ? 1 : -1)));
let minAge = ages.sort()[0];
let maxAge = ages.sort()[ages.length - 1];
console.log(minAge, maxAge);

// median
const halfArr = Math.floor(ages.length / 2);
console.log(halfArr);
console.log(10 % 3);
if (ages.length % 2) {
  console.log(ages[halfArr]);
} else {
  console.log((ages[halfArr - 1] + ages[halfArr]) / 2);
}

// average
// const aveArr = ages.reduce((acc, cur) => {
//     let ave = (acc += cur / ages.length)
//     return ave;
// }, 0)
// console.log(aveArr);

const aveArr = ages.reduce((acc, cur) => acc + cur) / ages.length;
console.log(aveArr);

let avgAge;
let totalAge = 0;
for (i = 0; i < ages.length; i++) {
  totalAge += ages[i];
  avgAge = totalAge / ages.length;
}
console.log(avgAge);

// range
const range = maxAge - minAge
console.log(range);