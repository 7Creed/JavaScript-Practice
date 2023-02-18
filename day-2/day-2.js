// Exercise Level: 1
// Q/N 1.
const challenge = "30 Days Of JavaScript";

// Q/N 2.
console.log(challenge);

// Q/N 3.
console.log(challenge.length);

// Q/N 4.
console.log(challenge.toUpperCase());

// Q/N 5.
console.log(challenge.toLowerCase());

// Q/N 6.
console.log(challenge.substr(3));
console.log(challenge.substring(3, 6));
// console.log(challenge)

// Q/N 7.
console.log(challenge.slice(3));

// Q/N 8.
console.log(challenge.includes("Script"));

// Q/N 9.
console.log(challenge.split());

// Q/N 10.
console.log(challenge.split(" "));

// Q/N 11.
console.log(challenge.split());

// Q/N 12.
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);

// Q/N 13.
console.log(challenge.replace("JavaScript", "Python"));

// Q/N 14.
console.log(challenge.charAt(15));

// Q/N 15.
console.log(challenge.indexOf("a"));

// Q/N 16.
console.log(challenge.lastIndexOf("a"));

// Q/N 17.
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "b"
  )
);

// Q/N 18.
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);

// Q/N 19.
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    /because/gi
  )
);

// Q/N 20.
console.log("   30 Days Of JavaScript   ".trim());
console.log("   30 Days Of JavaScript   ".trim(" "));

// Q/N 21.
console.log(challenge.startsWith(30));
console.log(challenge.startsWith("30"));

// Q/N 22.
console.log(challenge.endsWith("JavaScript"));

// Q/N 23.
console.log(challenge.match("a"));
console.log(challenge.match(/a/gi));

// Q/N 24.
console.log("30 Days of".concat(" JavaScript"));

// Q/N 25.
console.log(challenge.repeat(2));

// Exercise Level: 2
// Q/N 1.
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// Q/N 2.
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// Q/N 3.
console.log(typeof "10" === typeof 10);
console.log(typeof Number("10") === typeof 10);
console.log(typeof +"10" == typeof 10);
console.log(typeof parseInt("10") == typeof 10);

// Q/N 4.
console.log(Math.ceil("9.8") === 10);
console.log(Math.round("9.8") === 10);
console.log(parseInt("9.8") == 10 - 1);

// Q/N 5.
let lang_1 = "python", lang_2 = "jargon";
console.log(lang_1.includes("on"));
console.log(lang_2.includes("on"));
console.log(/on/gi.test(lang_1) && /on/gi.test(lang_2));

// Q/N 6.
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log("I hope this course is not full of jargon".search("jargon"));
console.log(/jargon/gi.test("I hope this course is not full of jargon"));

// Q/N 7.
// 0 -> 100
console.log(Math.floor(Math.random() * 101));

// Q/N 8.
// 50 -> 100
console.log(Math.floor(Math.random() * 51) + 50);

// // 0 -> 10
// Math.floor(Math.random() * 11);

// // 1 -> 10
// Math.floor(Math.random() * 10) + 1;

// // 5 -> 20
// Math.floor(Math.random() * 16) + 5;

// // -10 -> (-2)
// Math.floor(Math.random() * 9) - 10;

// Q/N 9.
// 0 -> 255
console.log(Math.floor(Math.random() * 256));

// Q/N 10.
console.log("JavaScript"[Math.floor(Math.random() * "JavaScript".length)]);

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Q/N 11.
let pattern = `1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`;
console.log(pattern);

// Q/N 12.
console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    31,
    23
  )
);

// // Exercise Level: 3
// // Q/N 1.
// let sentence_1 =
//   "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// console.log(sentence_1.match(/love/gi).length);
// // Q/N 1.

// let sentence_2 =
//   "You cannot end a sentence with because because because is a conjunction.";
// console.log(sentence_2.match(/because/gi).length);

// let sentence_3 =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// let cleanSentence = sentence_3.replace(/[^A-Za-z0-9,.?' ']/gim, "");
// console.log(cleanSentence);

// const mostWords = (sentence) => {
//   const words = sentence.split(" ");
//   const word = words.filter((each, i) => console.log(each[i]))
//   console.log(words);
// };
// mostWords(cleanSentence);
