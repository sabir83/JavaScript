'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;// if we make a mistake when typing use strict will show this error on console.
if (hasDriversLicense) console.log('I can drive');

// const private = 'Audio';//reserved word used error.


// FUNCTION -(Method id Java)
function logger() {
    console.log('My name is Sabir');
}

// calling / runnning / invoking function
logger();//runs 2 times with buttom
logger();


// apples and oranges are arguments
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// or
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1983);


// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1983);

console.log(age1, age2);



// Arrow function - more shorter and better way of function expression
const calcAge4 = birthYear => 2037 - birthYear;
const age4 = calcAge4(1983);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1983, 'Sabir'));



// Functions calling other funtions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement2 = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));
*/
/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

1- Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

2- Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

3- Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

4- Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

5- Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

/*
// Arrow function way- I don't like it
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);//46
let scoreKoalas = calcAverage(65, 54, 49);//56

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);


// function way- best way

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return `No wins`;
    }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

/*
// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


const tyears = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // we get Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3 - gives number of elements
console.log(friends[friends.length - 1]); // Peter

friends[2] = 'Jay'; // update- even we declared with const in the above, we can change it because only primitives are immutable. Arrays are mutable
console.log(friends); // ['Michael', 'Steven', 'Jay']

const firstName = 'Jonas';
const jonas = [firstName, 'Vardarli', 2037 - 1983, 'teacher', friends];
console.log(jonas); // ['Jonas', 'Vardarli', 54, 'teacher', Array(3)]
console.log(jonas.length); // 5

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // 47 70 19


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); // [47, 70, 19]



// Array Methods
// push - add element to last
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']

// unshift - add element to first
friends.unshift('John');
console.log(friends); // adds beginning - ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// pop - removes the last element
friends.pop();
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// shift - removes the first element
friends.shift();
console.log(friends); // ['Michael', 'Steven', 'Peter']

// indexOf - gives the index of element
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

// includes - turns boolean
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

friends.push(23);
console.log(friends.includes(23)); // true
*/

/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.


function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); // (3) [125, 555, 44] (3) [18.75, 111, 8.8] (3) [143.75, 666, 52.8]


// OBJECTS

const sabir = { // object sabir has 5 properties.
    firstName: 'Sabir',
    lastName: 'Vardarli',
    age: 2037 - 1983,
    job: 'Tester',
    friends: ['Michael', 'Peter', "Steven"]
};
console.log(sabir); // {firstName: 'Sabir', lastName: 'Vardarli', age: 54, job: 'Tester', friends: Array(3)}

// Dot notation to get the property of an Object
console.log(sabir.lastName); // Vardarli

// Bracket notation to get the property of an Object
console.log(sabir['lastName']); // Vardarli

const nameKey = 'Name';
console.log(sabir['first' + nameKey]); // Sabir
console.log(sabir['last' + nameKey]); // Vardarli

// console.log(sabir.'last' + nameKey) -- does not work

const interestedIn = prompt('What do you want to know about Sabir? Choose between firstName, lastName, age, job, and friends');

// console.log(sabir.interestedIn);// undefined
// console.log(sabir[interestedIn]); // if you ask age to prompt it gives 54

if (sabir[interestedIn]) {
    console.log(sabir[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

sabir.location = 'New Jersey';
sabir['pet'] = 'fish';
console.log(sabir); // added these 2 as new properties.

// Challenge
// "Sabir has 3 friends, and his best friend is called Michael"

console.log(`${sabir.firstName} has ${sabir.friends.length} friends, and his best friend is called ${sabir.friends[0]}`);


// Object Methods

const sabir = {
    firstName: 'Sabir',
    lastName: 'Vardarli',
    birthYear: 1983,
    job: 'Tester',
    friends: ['Michael', 'Peter', "Steven"],
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }
};
console.log(sabir.calcAge());

console.log(sabir.age);

// Challenge
// "Sabir is a 54-year old teacher, and he has a driver's license"

//1st way that i prefer
console.log(`${sabir.firstName} is a ${sabir.age}-year old ${sabir.job}, and he has ${sabir.hasDriverLicense ? 'a' : 'no'} driver's license`);

// 2nd way we added getSummary method and called the method below.
console.log(sabir.getSummary());
*/

/*
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`)
} else {
    console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`)
}
*/

// LOOPS

// for loop keeps running while condition is true
for (let rep = 1; rep <= 3; rep++) {
    console.log(`Lifting weights repetiton ${rep}`);
}

const sabir2 = [
    'Sabir',
    'Vardarli',
    2037 - 1983,
    'Tester',
    ['Michael', 'Peter', "Steven"],
    true
];

const types = [];

for (let i = 0; i < sabir2.length; i++) {
    console.log(sabir2[i], typeof sabir2[i]);

    // Filling types array
    // types[i] = types sabir2[i];
    types.push(typeof sabir2[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


// continue and break
console.log('------ONLY STRINGS-----')
for (let i = 0; i < sabir2.length; i++) {
    if (typeof sabir2[i] !== 'string') continue;
    console.log(sabir2[i], typeof sabir2[i]);
}

console.log('------BREAK WITH NUMBER-----')
for (let i = 0; i < sabir2.length; i++) {
    if (typeof sabir2[i] === 'number') break;

    console.log(sabir2[i], typeof sabir2[i]);
}

