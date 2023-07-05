/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Sabir";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// VAriable name convention
let PI = 3.1415;
let $function = 39;

let myFirstJob = 'Logistics';
let myCurrentJob = 'Tester';//more discriptive instead of
let job1 = 'Logistics';
let job2 = 'Tester';

console.log(myFirstJob);


// works top to buttom
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);//boolean
console.log(typeof javascriptIsFun);//boolean
console.log(typeof 39);//number
console.log(typeof 'Sabir');//string

// when we assign a new value no need let
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);//string

let year;
console.log(year);//undefined
console.log(typeof year);//undefined

year = 1991;
console.log(year);//1991
console.log(typeof year);// number

console.log(typeof null); // object-but it is undefined


let age = 30;
age = 31;

const birthYear = 1983; // when we use const, we can not change it.

lastName = 'Vardarli';//didn't use any variable and printed but this is not the right way
console.log(lastName);


//Math Operators -  works left to right
const now = 2023;
const ageSabir = now - 1983;
const ageBurcu = now - 1996;
console.log(ageSabir, ageBurcu);

console.log(ageSabir * 2, ageBurcu / 2, 2 ** 3);// so cool :)

const firstName = 'Sabir';
const lastName = 'Vardarli';
console.log(firstName + ' ' + lastName);//concetanation

// Assignment Operators- works right to left
let x = 10 + 5;//15
x += 10;// add 10 to 15 like Java man:)
x *= 4; //multiply 25 with 4
x++; // increase 1
x--;// decrease 1
console.log(x);

// Comparison Operators(komperasin)- works left to right

console.log(ageSabir > ageBurcu);//true
console.log(ageBurcu >= 18); //true

const isFullAge = ageBurcu >= 18;

console.log(now - 1983 > now - 1996);

const now = 2023;
const ageSabir = now - 1983;
const ageBurcu = now - 1996;

console.log(now - 1983 > now - 1996);// first parantesis

const averageAge = (ageSabir + ageBurcu) / 2
console.log(ageSabir, ageBurcu, averageAge);


const firstName = 'Sabir';
const job = 'Tester';
const birthYear = 1983;
const year = 2023

// regular string way
const sabir = "I am " + firstName + ', a ' + (year - birthYear) + " year old " + job + '!';
console.log(sabir);

//template string way-much better BY USING BACKTICK
const sabirNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(sabirNew);

//BACKTICK
console.log(`Just a regular string....`);

//REGULAR STRING WAY CHANGING THE LINE
console.log('String with \n\
multiple \n\
lines');

//BACKTICK WAY
console.log(`String
multiple
lines`);


// If-Else Statement
const age = 15;

if (age >= 18) {
    console.log('Sabir can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sabir is too young. Wait another ${yearsLeft} years 😌`);
}

const birthYear = 1983;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Type Conversion-(Parsing from Java)
const inputYear = '1991';
console.log(Number(inputYear), inputYear);//1991 '1991'
console.log(inputYear + 18);//199118
console.log(Number(inputYear) + 18);//2009

console.log(Number('Sabir'));//NaN == Not a Number
console.log(typeof NaN);//number

console.log(String(23), 23);// 23 23

// type coercion
console.log('I am ' + 23 + ' years old')// I am 23 years old
console.log('23' - '10' - 3);//10

let n = '1' + 1;//11
n = n - 1;//1
console.log(n);// 10

2 + 3 + 4 + '5'//'95'


// 5 falsy values; 0, '', undifined, null, NaN

console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Sabir'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money = 0;
if (money) {
    console.log("Don't sped it at all ;)");
} else {
    console.log('You shoul get a job!');//returns this as false because boolean 0
}

let height;
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is undefined')//this runs because it is undefined
}


// Equal- use most of cases ===
const age = 18;
if (age === 18) console.log('You just became an adult (strict)');//both runs
if (age == 18) console.log('You just became an adult (loose)');

const age2 = '18';
if (age2 === 18) console.log('You just became an adult (strict)');
if (age2 == 18) console.log('You just became an adult (loose)');//just this runs

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite); // string before parse it with Number now number

if (favourite === 23) console.log('23 is an amazing number!')

if (favourite !== 23) console.log('Whey not 23?');



// Boolean Logic- And,Or & Not operators

const hasDriverLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriverLicense && hasGoodVision);//true

const hasDriverLicense2 = true; // A
const hasGoodVision2 = false; // B
console.log(hasDriverLicense || hasGoodVision);//true
console.log(!hasDriverLicense);//false

let shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
    console.log('sarah can drive');//that runs
} else {
    console.log('sara cannot drice');
}


// Switch statements-same as Java

const day = 'Friday';

switch (day) {
    case 'Monday': // day === 'Monday'
        console.log('pirt');
        break;
    case 'Tuesday':
        console.log('tirt');
        break;
    case 'Wednesday':
        console.log('zirt');
        break;
    default:
        console.log('hirt');
}


// Ternary

const age = 20;
age >= 18 ? console.log('I like to drive car 🚗') : console.log('tirt');

const a = age >= 18 ? 'drive' : 'tirt';
console.log(a);

console.log(`I want to drive ${age >= 18 ? 'car' : 'tirt'}`);

*/

//Question
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
*/

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);