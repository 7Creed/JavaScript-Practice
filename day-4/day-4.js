// Exercise Level: 1
// Q/N 1.
/*
let age_5 = Number(prompt("enter age"));
if (age_5 >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${18 - age_5} year(s) to drive`);
}

// Q/N 2.
let yourAge_5 = 30;
if (age_5 > yourAge_5) {
  console.log(`I'm older than you with ${age_5 - yourAge_5}`);
} else {
  console.log(`You are ${yourAge_5 - age_5} years older than me`);
}

// Q/N 3.
let a_5 = 4;
let b_5 = 3;

// if else
if (a_5 > b_5) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// ternary
a_5 > b_5
  ? console.log("a is greater than b")
  : console.log("a is less than b");

// Q/N 4.
let num_1 = parseFloat(prompt("Enter a number: "));

if (num_1 % 2 === 0) {
  console.log(`${num_1} is an even number`);
} else {
  console.log(`${num_1} is an odd number`);
}

//even and odd
// let num = Number(prompt("enter number to kno if it's even/odd"))
// if (num % 2 === 0) {
//     console.log(`${num} is an even number`)
// } else if (num % 2 !== 0) {
//     console.log(`${num} is an odd number`)
// }
*/

// Exercise Level: 2
// Q/N 1.
/*
let score_1 = parseFloat(prompt("Enter your score: "));

switch (true) {
  case score_1 >= 80:
    console.log("A");
    break;

  case score_1 >= 70:
    console.log("B");
    break;

  case score_1 >= 60:
    console.log("C");
    break;

  case score_1 >= 50:
    console.log("D");
    break;

  case score_1 < 50:
    console.log("F");
    break;

  default:
    console.log("no score assigned");
}
*/

// Q/N 2.
//seasons
/*
let month = prompt("enter month to check seasons").toLowerCase();
switch (month) {
    case "september":
    case "october":
    case "November":
        console.log("the season is Autumn");
        break;

    case "december":
    case "january":
    case "febuary":
        console.log("the season is Winter");
        break;

    case "march":
    case "april":
    case "may":
        console.log("the season is Spring");
        break;

    case "june":
    case "july":
    case "august":
        console.log("the season is Summer");
        break;

    default:
        console.log("invalid Month")
}
*/

// Q/N 3.
//check weekend

/*
let weekDay = prompt("Enter week day: ").toLowerCase();
if (weekDay === "saturday" || weekDay == "sunday") {
  console.log(`${weekDay} is a weekend day`);
} else if (
  weekDay == "monday" ||
  weekDay == "tuesday" ||
  weekDay == "wednesday" ||
  weekDay == "thursday" ||
  weekDay == "friday"
) {
  console.log(`${weekDay} is a work day`);
} else {
  console.log("invalid week day");
}

// switch
switch (weekDay) {
  case "saturday":
  case "sunday":
    console.log(`${weekDay} is a weekend day`);
    break;

  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`${weekDay} is a work day`);
    break;

  default:
    console.log("invalid Month");
}
*/

// Exercise Level: 2
// Q/N 1.

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/*
let month = prompt("Enter month: ");
month = month.slice(0, 1).toUpperCase() + month.slice(1).toLowerCase();

let numberOfMonth = months.indexOf(month) + 1;
let year_4 = new Date().getFullYear();
let numberOfDays = new Date(year_4, numberOfMonth, 0).getDate();

console.log(`${month} has ${numberOfDays} days`);

// Q/N 2
let inputYear = parseInt(prompt("Enter year: "));
inputYear.length = 3;
let numberOfDays_1 = new Date(inputYear, numberOfMonth, 0).getDate();
console.log(`${month} has ${numberOfDays_1} days`);
*/