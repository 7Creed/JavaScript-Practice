// Exercise Level: 1
// Q/N 1.
function printName() {
  let name = "Khalid";
  return name;
}
console.log(printName());

// Q/N 2.
function printFullName(firstName = "Khalid", lastName = "Creed") {
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
printFullName("vicky", "ndalo");

// Q/N 3.
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log(addNumbers(10, 15));

// Q/N 4.
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(2, 9));

// Q/N 5.
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 9));

// Q/N 6.
function volumeOfRectPrism(length, width, height) {
  let volume = `${length * width * height}cbqcm`;
  return volume;
}
console.log(volumeOfRectPrism(2, 9, 7));

// Q/N 7.
function areaOfCircle(radius) {
  let area = Math.round(Math.PI * radius * radius * 100) / 100; // 2 decimal places
  // let area = Math.round(Math.PI * radius * radius);  // whole number
  return area;
}
console.log(areaOfCircle(7));

// Q/N 8.
function circumOfCircle(radius) {
  let circumference = Math.round(2 * Math.PI * radius * 100) / 100; // 2 decimal places
  // let circumference = Math.round(Math.PI * radius);  // whole number
  return circumference;
}
console.log(circumOfCircle(7));

// Q/N 9.
function calcDensity(mass, vol) {
  let density = mass / vol;
  return density.toFixed(2);
}
console.log(calcDensity(90, 7));

// Q/N 10.
function calcSpeed(distance, time) {
  let speed = distance / time;
  return speed.toFixed(2);
}
console.log(calcSpeed(90, 7));

// Q/N 11.
function calcWeight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}
console.log(calcWeight(2, 9));

// Q/N 12.
function convertCelsiusToFahrenheit(oC) {
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelsiusToFahrenheit(29));

// Q/N 13.
function calcBMI(weight, height) {
  let bmi = weight / (height * height);
  return Math.round(bmi * 10) / 10;
}
console.log(calcBMI(190, 7));
const BMI = calcBMI(56, 7);

if (BMI < 18.5) {
  console.log("Underweight");
} else if (BMI >= 18.5 && BMI < 24.9) {
  console.log("Normal weight");
} else if (BMI >= 24.9 && BMI < 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
  console.log(BMI);
}

const BMI_1 = (weight, height) => {
  let bmi = weight / (height / height);
  if (bmi < 18.5) {
    return `underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    return `overweight`;
  } else if (bmi > 25 && bmi < 29.9) {
    return `overweight`;
  } else {
    return `obese`;
  }
};
console.log(BMI_1(4, 7));

// Q/N 14.
function checkSeason(month) {
  let mnth = month.toLowerCase();
  switch (mnth) {
    case "september":
    case "october":
    case "November":
      return "the season is Autumn";
      break;

    case "december":
    case "january":
    case "febuary":
      return "the season is Winter";
      break;

    case "march":
    case "april":
    case "may":
      return "the season is Spring";
      break;

    case "june":
    case "july":
    case "august":
      return "the season is Summer";
      break;

    default:
      return "invalid Month";
  }
}
console.log(checkSeason("January"));

// Q/N 15.
function findMax(a, b, c) {
  // return Array(a, b, c).sort((a,b) => b - a)[0]
  // return Array(a, b, c).reduce((acc, cur) => (acc > cur ? acc : cur), 0);
}
console.log(findMax(90, 7, 89));
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// Exercise Level: 2
// Q/N 1.
// function solveLinEquation(a, b, c =1) {
//   let  ax + by + c = 0
// }
// console.log(solveLinEquation(90, 7, 89));

// Q/N 2.
// program to solve quadratic equation
// ax2 + bx + c = 0, where
// a, b and c are real numbers and
// a ≠ 0
// From formular:
// (root1,root2) = (-b ± √b2-4ac)/(2*a)  or  (-b ± √(b*b-4ac))/(2*a)

// The term b*b-4ac is known as the discriminant of a quadratic equation.
// It tells the nature of the roots.

// 1. If the discriminant is greater than 0, the roots are real and different.
// 2. If the discriminant is equal to 0, the roots are real and equal.
// 3. If the discriminant is less than 0, the roots are complex and different.

// // take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

function solveQuadEquation(a, b, c) {
  // if (a === " " || b === " " || c === " ") return 0;
  let root1, root2;

  // calculate discriminant from almighty formular
  let discriminant = b * b - 4 * a * c;

  // condition for real and different roots
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (root1 === root2) `The roots of quadratic equation is ${root1}`;

    // result
    return root1 === root2
      ? `The roots of quadratic equation is ${root1}`
      : `The roots of quadratic equation are ${root1} and ${root2}`;
  }
  // condition for real and equal roots
  else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    return root1 === root2
      ? `The roots of quadratic equation is ${root1}`
      : `The roots of quadratic equation are ${root1} and ${root2}`;
  }
  // if roots are not real
  else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
  }
}
console.log(solveQuadEquation(4, 6, 9));
console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

// Q/N 3.
// Print array
function printArr(arr) {
  for (const ar of arr) {
    console.log(ar);
  }
  arr.forEach(function (ar) {
    console.log(ar);
  });
}
printArr([3, 4, 5]);

// Q/N 4.
// show date
function showDateTime() {
  let date = new Date();
  let datee = String(date.getDate()).padStart(2, 0);
  let month = (date.getUTCMonth() + 1).toString().padStart(2, 0);
  let year = date.getFullYear().toString().padStart(2, 0);
  let hour = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  return `${datee}/${month}/${year} ${hour}:${minutes} `;
}
console.log(showDateTime());

// Q/N 5.
function swapValues(x, y) {
  let a = x;
  x = y;
  y = a;
  // console.log('x =' x, 'y =' y);
  console.log(`x => ${x}, y => ${y}`);
  // return [x, y]
}
swapValues(3, 4);
swapValues(4, 5);

// Q/N 6.
// Reverse array without the reverse method
function reverseArray(arr) {
  let newArr = [];
  for (const ar of arr) {
    newArr.unshift(ar);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

// Q/N 7.
// Capitalized Array
function capitalizeArr(arr) {
  let newArr = [];
  for (const ar of arr) {
    console.log(ar);
    newArr.push(ar.toUpperCase());
  }
  return newArr;
}
console.log(capitalizeArr(["ebube", "tobe", "godwin"]));

// Q/N 8.
// Add Item, Add Array
function addArr(arr) {
  let newArr = [];
  let sum = 0;
  for (let ar of arr) {
    console.log(ar);
    sum += ar;
    newArr.push(sum);
  }
  console.log(sum);
  return newArr;
}
console.log(addArr([1, 2, 3, 4, 5]));

function addItem(...arr) {
  let newArr = [];
  let sum = 0;
  for (let ar of arr) {
    console.log(ar);
    sum += ar;
    newArr.push(sum);
  }
  console.log(sum);
  return newArr;
}
console.log(addItem(1, 2, 3, 4, 5));

// Q/N 9.
// Remove Item
function removeItem(index) {
  let names = ["john", "mike"];
  names.splice(index);
  return names;
}
console.log(removeItem(1));

// Q/N 10.
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += num;
  }
  return sum;
}
console.log(sumOfNumbers(5));

// Q/N 11.
function sumOfEven(...args) {
  let evenSum = 0;
  args.forEach(function (i) {
    if (i % 2 === 0) {
      evenSum += i;
    }
  });
  return evenSum;
}
console.log(sumOfEven(1, 2, 3, 4));

function sumOfEvenItem(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvenItem(5));
console.log(sumOfEvenItem(10));

// Q/N 12.
function sumOfOdd(...args) {
  let oddSum = 0;
  args.forEach(function (i) {
    if (i % 2) {
      oddSum += i;
    }
  });
  return oddSum;
}
console.log(sumOfOdd(1, 2, 3, 4));

function sumOfOddItem(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOddItem(5));
console.log(sumOfOddItem(10));

// Q/N 13.
// Count even and odd num
function evensAndOdds(num) {
  let countEven = 0;
  let countOdd = 0;
  for (let i = 1; i <= num; i++) {
    if (!(i % 2)) {
      // console.log(i);
      countEven++;
    } else if (i % 2) {
      // console.log(i);
      countOdd++;
    }
  }
  return [countEven, countOdd];
}
console.log(evensAndOdds(5));
console.log(evensAndOdds(10));
console.log(evensAndOdds(100));

// Q/N 14.
// Check Q/N 8.

// Q/N 15.
// generate Ip
generateRandomIp = () => {
  let one = Math.floor(Math.random() * 255) + 1;
  let two = Math.floor(Math.random() * 255) + 1;
  let three = Math.floor(Math.random() * 255) + 1;
  let four = Math.floor(Math.random() * 255) + 1;
  return `IP: ${one}.${two}.${three}.${four}`;
};
console.log(generateRandomIp());

// Q/N 16.
// Mac address
// a.
// let address = "XX:XX:XX:XX:XX:XX";
// console.log(address.replace(/X/g, function () {
//   let a = '0123456789ABCDEF';
//   return a.charAt(Math.floor(Math.random() * 16))
// }))
// console.log(address)

// Refactor
let address_1 = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
  return "0123456789ABCDEF".charAt(Math.trunc(Math.random() * 17));
});
console.log(address_1);

// b.
function genMAC() {
  var hexDigits = "0123456789ABCDEF";
  var macAddress = "";
  for (var i = 0; i < 6; i++) {
    macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
    macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
    if (i != 5) macAddress += ":";
  }

  return macAddress;
}
console.log(genMAC());

// Q/N 17.
function randomHexaNumberGenerator() {
  // 1.
  // let hexStr = "0123456789abcdef";
  // let color = "#";

  // for (let i = 0; i < 6; i++) {
  //   let index = Math.floor(Math.random() * hexStr.length);
  //   color += hexStr[index];
  // }
  // return color;

  // 2.
  // let colorContainer = [];
  let colors;
  for (let i = 0; i < 6; i++) {
    colors = "#" + Math.random().toString(16).substring(2, 8);
    // colorContainer.push(colors);
  }
  return colors;
}
console.log(randomHexaNumberGenerator());

// Q/N 18.
//generate 6 random numbers/strings

function userIdGenerator() {
  let randomId = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  console.log(characters.length);

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(random);
    // console.log(characters[Math.floor(Math.random() * characters.length)]);
  }
  return randomId;
}
console.log(userIdGenerator());

// Exercise Level: 3
/*
// Q/N 1.
function userIdGeneratedByUser() {
  let ids = [];
  const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let noOfCharacters = parseInt(prompt("Enter no of characters to be generated"));
  let noOfIds = parseInt(prompt("Enter no of ids to be generated"))
  console.log(characters.length);
  
  for (let i = 0; i < noOfIds; i++) {
    let randomId = "";
    for (let j = 0; j < noOfCharacters; j++) {
      let random = Math.floor(Math.random() * characters.length);
      // randomId += characters.charAt(random);
      randomId += characters[random];
    }
    ids.push(randomId)
    // console.log(characters[Math.floor(Math.random() * characters.length)]);
  }
  console.log(ids);
  return ids;
}
console.log(userIdGeneratedByUser());
*/

// Q/N 2.
// rgb(255, 255, 255)
// a.
function rgbColorGnerator() {
  let one = Math.floor(Math.random() * 256);
  let two = Math.floor(Math.random() * 256);
  let three = Math.floor(Math.random() * 256);
  return `rgb(${one}, ${two}, ${three})`;
}
console.log(rgbColorGnerator());

// b.
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

// c.
// Rewrite
const a = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const b = () => {
  return `rgb(${a(0, 255)}, ${a(0, 255)}, ${a(0, 255)})`;
};
console.log(b());

// Q/N 3.
arrayOfHexaColors = () => {
  let chars = "0123456789ABCDEF";
  let hex = [];
  for (let k = 0; k < 3; k++) {
    hex[k] = "#";
    for (let i = 0; i < 6; i++) {
      hex[k] += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return hex;
};
console.log(arrayOfHexaColors());

// Q/N 4.

function arrayOfRgbColors(num) {
  let arrColour = [];
  const aa = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  for (let i = 0; i < num; i++) {
    console.log(i);
    arrColour[i] = `rgb(${aa(0, 255)}, ${aa(0, 255)}, ${aa(0, 255)})`;
  }
  return arrColour;
  // console.log(arrColour);
}
console.log(arrayOfRgbColors(2));
// arrayOfRgbColors(2);

// Q/N 5.
// Converts HEX to RGB

// Q/N 6.
// Converts RGB to HEX
// a.
const rgbToHex_1 = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
console.log(rgbToHex_1(0, 51, 25));

// b.
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex_2(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
console.log(rgbToHex_2(09, 51, 255));

// Q/N 7.
// generate any number of hexa or rgb colour
generateColors = (type, arrLength) => {
  let chars = "0123456789ABCDEF";
  let colors = [];
  if (type === "rgb") {
    for (i = 0; i < arrLength; i++) {
      colors[i] = "rgb";
      colors[i] += `(${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},)`;
    }
  } else if (type === "hex") {
    for (let i = 0; i < arrLength; i++) {
      colors[i] = "#";
      for (k = 0; k < 6; k++) {
        colors[i] += chars[Math.floor(Math.random() * chars.length)];
      }
    }
  }
  return colors;
};
console.log(generateColors("hex", 1));

// Q/N 8.
// const shuffleArray = (arr) => {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let rand = Math.floor(Math.random() * arr.length)
//     if (!newArr.includes(arr[rand])) {
//       newArr.push(arr[rand])
//     }
//   }
//   return newArr
// }
// console.log(shuffleArray([1, 2, 3, 4, 5]));

// Q/N 9.
// factorial
factorial = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};
console.log(factorial(5));

// Q/N 10.
isEmpty = (val) => {
  if (val === undefined || val === "") {
    return `it's empty`;
  } else {
    return `not empty`;
  }
};
console.log(isEmpty());

// Q/N 11.
sum = (...args) => {
  let sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  return sum;
};
console.log(sum(1, 2, 3, 4));

// Q/N 12.
sumOfArrayItems = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
      if (typeof ar === "number") {
          sum += ar
      } else {
        sum = `it's a string`
      }
  })
  return sum;
}
console.log(sumOfArrayItems([1, 2, '', 3, 4]))

// Q/N 13.
average = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
      if (typeof ar === "number") {
          sum += ar;
          sum = arr.length / sum;
      } else {
          sum = `it's a string`;
      }
  })
  return sum;
}
console.log(average([1, 2, 3]));


/** EXTRAS */

// sum array 
// const sum = (arr1, arr2) => {
//   const valid = arr1.length === arr2.length;
//   return (
//     valid &&
//     arr1.reduce((acc, curr, i) => {
//       return acc.concat(curr + arr2[i]);
//     }, [])
//   );
// }; 

// console.log(
//   sum(
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//   )
// );

// let arry=[ 0,1,3,4,5,2,4,5];

// function unique(someArry){
// someArry.filter(
// (item, index, Array)=>Array.indexOf(item)===index)
// }

// Console.log(Unique (arry))



// const removeDups = (arr) => arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
