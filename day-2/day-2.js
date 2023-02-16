// Q/N 1.
const challenge = '30 Days Of JavaScript';

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
console.log(challenge.substr(3));

// Q/N 8.
console.log(challenge.includes('Script'));

// Q/N 9.
console.log(challenge.split());

// Q/N 10.
console.log(challenge.split(" "));

// Q/N 11.
console.log(challenge.split());

// Q/N 12.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));

// Q/N 13.
console.log(challenge.replace('JavaScript', 'Python'));

// Q/N 14.
console.log(challenge.charAt(15));

// Q/N 15.
console.log(challenge.indexOf('a'));

// Q/N 16.
console.log(challenge.lastIndexOf('a'));

// Q/N 17.
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

// Q/N 18.
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

// Q/N 19.
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search(/because/gi));

// Q/N 20.
console.log('   30 Days Of JavaScript   '.trim());
console.log('   30 Days Of JavaScript   '.trim(" "));

// Q/N 21.
console.log(challenge.startsWith(30));
console.log(challenge.startsWith('30'));

// Q/N 22.
console.log(challenge.endsWith('JavaScript'));

// Q/N 23.
console.log(challenge.match('a'));
console.log(challenge.match(/a/gi));

// Q/N 24.
console.log('30 Days of'.concat(' JavaScript'));

// Q/N 25.
console.log(challenge.repeat(2));

