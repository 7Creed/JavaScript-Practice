// Exercise Level: 1
// Q/N 1.
let firstName_3 = "Chima",
  lastName_3 = "Obika",
  country_3 = "Nigeria",
  city_3 = "Abuja",
  age_3 = 50,
  isMarried_3 = false,
  year_3 = 2023;

console.log(typeof firstName_3);
console.log(typeof lastName_3);
console.log(typeof country_3);
console.log(typeof city_3);
console.log(typeof age_3);
console.log(typeof isMarried_3);
console.log(typeof year_3);

// Q/N 2.
console.log(typeof "10" == typeof 10);
console.log(typeof "10" === typeof 10);

// Q/N 3.
console.log(parseInt(9.8) == 10);
console.log(parseInt("9.8") === 10);

// Q/N 4.
// Truthy
let first_1 = "today";
let second_1 = 2023;
let big_1 = 5 > 3;
console.log(Boolean(first_1));
console.log(Boolean(second_1));
console.log(big_1);

// Falsy
let first_2 = undefined;
let second_2 = null;
let small_1 = 5 === 3;
console.log(Boolean(first_2));
console.log(Boolean(second_2));
console.log(small_1);

// Q/N 5.
/*i.*/ console.log(4 > 3); // true
/*ii.*/ console.log(4 >= 3); // true
/*iii.*/ console.log(4 < 3); // false
/*iv.*/ console.log(4 <= 3); // false
/*v.*/ console.log(4 == 4); // true
/*vi.*/ console.log(4 === 4); // true
/*vii.*/ console.log(4 != 4); // false
/*viii.*/ console.log(4 !== 4); // false
/*ix.*/ console.log(4 != "4"); // false
/*x.*/ console.log(4 == "4"); // true
/*xi.*/ console.log(4 === "4"); // false

// Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length);
console.log("jargon".length);
console.log("python".length != "jargon".length);
console.log("python".length !== "jargon".length);

// Q/N 6.
/*i.*/ console.log(4 > 3 && 10 < 12); // true
/*ii.*/ console.log(4 > 3 && 10 > 12); // false
/*iii.*/ console.log(4 > 3 || 10 < 12); // true
/*iv.*/ console.log(4 > 3 || 10 > 12); // true
/*v.*/ console.log(!(4 > 3)); // false
/*vi.*/ console.log(!(4 < 3)); // true
/*vii.*/ console.log(!false); // true
/*viii.*/ console.log(!(4 > 3 && 10 < 12)); // false
/*ix.*/ console.log(!(4 > 3 && 10 > 12)); // true
/*x.*/ console.log(!(4 === "4")); // true
/*xi.*/ console.log(4 === "4"); // false

console.log(/on/gi.test("python"));
console.log(/on/gi.test("jargon"));
console.log("python".includes("on"));
console.log("jargon".includes("on"));
console.log("python".match("on"));
console.log("python".match(/on/g));

console.log(/on/gi.test("python") === /on/gi.test("jargon"));
console.log(!(/on/gi.test("python") === /on/gi.test("jargon")));

// Q/N 7.
const today = new Date();
console.log(today);
console.log(today.getTime());
console.log(today.getTime() / 1000);
console.log(today.getSeconds());
console.log(today.getMinutes());
console.log(today.getHours());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());

// Exercise Level: 2
// Q/N 1.
/*
let base = prompt("Enter base:");
let height = prompt("Enter height:");

let areaTriangle = 0.5 * parseFloat(base) * parseFloat(height);
console.log(`The area of the triangle is ${areaTriangle}square(cm)`);

// Q/N 2.
let sideA = prompt("Enter side A: ");
let sideB = prompt("Enter side B: ");
let sideC = prompt("Enter side C: ");

let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log(`The perimeter of the triangle is ${perimeter}cm`);

// Q/N 3.
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");

let areaRectangle = parseFloat(length) * parseFloat(width);
let perimeterRec = 2 * (parseFloat(length) + parseFloat(width));
console.log(
  `Area of rectangle: ${areaRectangle} & `,
  `Perimeter of rectangle: ${perimeterRec}`
);

// Q/N 4.
let radius = prompt("Enter radius: ");
let pi = Math.round(Math.PI * 100) / 100;

let areaCircle = pi * parseFloat(radius ** 2);
let circumference = 2 * pi * parseFloat(radius);
console.log(
  `Area of cicle: ${areaCircle} & `,
  `Circumference of circle: ${circumference}`
);
*/

// Q/N 5.
// y = 2x - 2
// for x-intercept replace y with 0 and then solve for x.
// 0 = 2x - 2
// a = 0 , b = 2x, c = -2
let a0 = 1,
  b0 = 2,
  c0 = -2;
// divide everything by a to make sure we have y alone on one side of the equation.
let a1 = a0 / a0,
  b1 = b0 / a0,
  c1 = c0 / a0;
// negate the value of c.
// add it to both a and c. a will be zero.
// divide negated c1 by b1.
let x_intercept = -c1 / b1;
console.log(x_intercept);

//for y intercept replace x with 0 then solve for y.
// y = 2(x) - 2.
// y = 2 (0) - 2. b will be zero hence we don't need it. divide c1 by b1
let y_intercept = c1 / a1; // added c because it comes with its negative and overwrites the +
console.log(y_intercept);

// for slope. Change in y over change in x.
//we can use our x and y intercepts to calculate the slope. (x,0) (0,y)
// slope will be either (y - 0)/ (0 - x) or (0 - y)/(x - 0)
// then we round of the result to 2 decimal places just in case we have floats.
let slope = Math.round(((y_intercept - 0) / (0 - x_intercept)) * 100) / 100;
let slope1 = Math.round(((0 - y_intercept) / (x_intercept - 0)) * 100) / 100;
console.log(slope);
console.log(slope1);

// Q/N 6.
// Slope is m = (y2-y1)/(x2-x1)
let slope2 = (10 - 2) / (6 - 2);
console.log(slope2);

// Q/N 7.
// They all have equal slope

// Q/N 8.
// you can try with different values of a, b and c.
let a2 = 1,
  b2 = 6,
  c2 = 9;
// part under the root.
let bSquared = Math.abs(b2) ** 2;
let fourAC = 4 * a2 * c2;
let twoA = 2 * a2;
let bSquaredMinusFourAC = bSquared - fourAC;
let sqrt = Math.sqrt(bSquaredMinusFourAC);
let operation1 = Math.round(((-b + sqrt) / twoA) * 100) / 100;
let operation2 = Math.round(((-b - sqrt) / twoA) * 100) / 100;
operation1 === operation2
  ? console.log(`x = ${operation1}`)
  : console.log(`x = ${operation1} or x = ${operation2}`);
// This is a simple example. you could use regex to make it super complex to get the values of a, b, c instead of hand coding them.

// Q/N 9.
/*
let hours = prompt("Enter hours: ");
let ratePerHour = prompt("Enter rate per hour: ");
let pay = parseFloat(hours) * parseFloat(ratePerHour);
console.log(`Your pay is $${pay}`);
*/

// Q/N 10.
/*
let yourName = prompt("Enter your name: ");
yourName.length > 7
  ? console.log("your name is long")
  : console.log("your name is short");
*/

// if(name.length > 7){
//   console.log('your name is long');
// }else{
//   console.log('your name is shot');
// }

// Q/N 11.
let firstName = "Asabeneh",
  lastName = "Yetayeh";

let length1 = firstName.length,
  length2 = lastName.length;

if (length1 > length2) {
  console.log(
    `Your first name ${firstName} is longer than your family name ${lastName}`
  );
} else if (length2 > length1) {
  console.log(
    `Your family name ${lastName} is longer than your first name ${firstName}`
  );
} else {
  console.log(
    `Your first name ${firstName} and your family name ${lastName} are equal in length`
  );
}

// Q/N 12.
let myAge_1 = 35,
  yourAge_1 = 22;
if (myAge_1 > yourAge_1) {
  console.log(`I am ${myAge_1 - yourAge_1} years older than you`);
} else if (yourAge_1 > myAge_1) {
  console.log(`You are ${yourAge_1 - myAge_1} years older than me`);
} else {
  console.log(`we are the same age`);
}

// Q/N 13.
/*
let birthYear = parseFloat(prompt("Enter birth year: "));

let newYear = new Date().getFullYear();
newYear - birthYear >= 18
  ? console.log(`You are ${newYear - birthYear}. You are old enough to drive`)
  : console.log(`You are ${newYear - birthYear}. You will be allowed to drive after ${18 - (newYear - birthYear)} years.`);
*/

// Q/N 14.
/*
let age_4 = parseFloat(prompt("Enter your age: "));
let age_4InSecs = age_4 * 365 * 24 * 60 * 60;
let noOfYears = 100 - age_4;
let noOfYearsInSecs = parseFloat(noOfYears) * 365 * 24 * 60 * 60;
console.log(
  `You have lived ${age_4InSecs} secs. \n You have ${noOfYearsInSecs} secs remaining.`
);
*/

// Q/N 15.

let date = new Date();
let yr = date.getFullYear();
let mth = String(date.getMonth()).padStart(2, 0);
let dy = String(date.getDay()).padStart(2, 0);
let hr = String(date.getHours()).padStart(2, 0);
let mm = String(date.getMinutes()).padStart(2, 0);

let readableDate = `${yr}-${mth}-${dy} ${hr}:${mm}`;
console.log(readableDate);

// Exercise Level: 3
// Q/N 1.

let date_1 = new Date();
let yr_1 = date_1.getFullYear();
let mth_1 = String(date_1.getMonth()).padStart(2, 0);
let dy_1 = String(date_1.getDay()).padStart(2, 0);
let hr_1 = String(date_1.getHours()).padStart(2, 0);
let mm_1 = String(date_1.getMinutes()).padStart(2, 0);

let readableDate_1 = `${yr_1}-${mth_1}-${dy_1} ${hr_1}:${mm_1}`;
console.log(readableDate_1);

console.log(`${dy_1}-${mth_1}-${yr_1} ${hr_1}:${mm_1}`);
console.log(`${dy_1}/${mth_1}/${yr_1} ${hr_1}:${mm_1}`);

// // Another way
// function format(val) {
//   if (val < 10) {
//     return (val = `0${val}`);
//   }
//   return val;
// }

// let formatMth = format(mth);
// let formatDay = format(dy);
// let formatHrs = format(hr);
// let formatMins = format(mm);
// console.log(`${yr}-${formatMth}-${formatDay} ${formatHrs}:${formatMins}`);

const [first, second, ...[rest]] = [1, 2, 3, 4, 5];
console.log(rest); // 3

let z = 80;

setTimeout(() => {
  z++;
  console.log(`first : ${z}`);
}, 0);
console.log(`second : ${z}`);
