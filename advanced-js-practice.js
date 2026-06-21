/*
  advanced-js-practice.js
  Practice syntax dump: loops, else-if chains, functions, async/await,
  advanced array/object operations, classes, destructuring, etc.

  Run (optional): node advanced-js-practice.js
*/

'use strict';

// ------------------------------
// 1) Basic conditionals + else if
// ------------------------------
function evaluateScore(score) {
  let grade;

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

console.log('Grade for 83:', evaluateScore(83));

// ------------------------------
// 2) Switch statement
// ------------------------------
function dayType(day) {
  switch (day) {
    case 'sat':
    case 'sun':
      return 'weekend';
    default:
      return 'weekday';
  }
}

console.log('dayType("sat"):', dayType('sat'));

// ------------------------------
// 3) Loops: for/while/do...while
// ------------------------------
const list = [10, 20, 30, 40];

let sumFor = 0;
for (let i = 0; i < list.length; i++) {
  sumFor += list[i];
}
console.log('sumFor:', sumFor);

let sumWhile = 0;
let j = 0;
while (j < list.length) {
  sumWhile += list[j];
  j++;
}
console.log('sumWhile:', sumWhile);

let sumDoWhile = 0;
let k = 0;
do {
  sumDoWhile += list[k];
  k++;
} while (k < list.length);
console.log('sumDoWhile:', sumDoWhile);

// ------------------------------
// 4) Loops: for...of and for...in
// ------------------------------
const people = [
  { name: 'Ali', age: 21 },
  { name: 'Sara', age: 19 },
];

// for...of iterates values
for (const p of people) {
  console.log('Person:', p.name, 'age:', p.age);
}

// for...in iterates keys (object properties / indexes)
const user = { id: 7, name: 'Mina', active: true };
for (const key in user) {
  console.log('user key:', key, 'value:', user[key]);
}

// ------------------------------
// 5) Arrays: map/filter/reduce/some/every
// ------------------------------
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map((n) => n * 2);
console.log('doubled:', doubled);

const evens = nums.filter((n) => n % 2 === 0);
console.log('evens:', evens);

const total = nums.reduce((acc, n) => acc + n, 0);
console.log('total:', total);

const hasEven = nums.some((n) => n % 2 === 0);
console.log('hasEven:', hasEven);

const allPositive = nums.every((n) => n > 0);
console.log('allPositive:', allPositive);

// ------------------------------
// 6) Optional chaining + nullish coalescing
// ------------------------------
const profile = {
  // bio intentionally missing
  socials: { twitter: '@someone' },
};

const bio = profile?.bio ?? 'No bio yet';
const twitter = profile?.socials?.twitter ?? 'No twitter';
console.log('bio:', bio);
console.log('twitter:', twitter);

// ------------------------------
// 7) Destructuring (array + object)
// ------------------------------
const [first, second] = nums;
console.log('first, second:', first, second);

const { name: profileName, age: profileAge } = people[0];
console.log('profileName, profileAge:', profileName, profileAge);

// ------------------------------
// 8) Spread/rest
// ------------------------------
const arrA = [1, 2];
const arrB = [3, 4];
const merged = [...arrA, ...arrB];
console.log('merged:', merged);

function sumAll(...values) {
  return values.reduce((acc, v) => acc + v, 0);
}
console.log('sumAll:', sumAll(5, 10, 15));

// ------------------------------
// 9) Template literals
// ------------------------------
const city = 'Karachi';
console.log(`Hello from ${city}!`);

// ------------------------------
// 10) Functions: defaults, rest, arrows
// ------------------------------
function greet(name = 'Guest', punctuation = '!') {
  return `Hi, ${name}${punctuation}`;
}
console.log(greet());
console.log(greet('Ahmed', '?'));

const add = (a, b) => a + b;
console.log('add:', add(2, 3));

// ------------------------------
// 11) Promises + async/await + try/catch
// ------------------------------
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demoAsync() {
  try {
    console.log('Async start...');
    await wait(200);
    console.log('After 200ms');

    // Create a resolved promise
    const value = await Promise.resolve({ ok: true, data: [1, 2, 3] });
    console.log('Promise resolved:', value);

    // Example of conditional + async result
    if (value.ok) {
      console.log('value.ok is true');
    } else {
      console.log('value.ok is false');
    }
  } catch (err) {
    console.error('Async error:', err);
  }
}

demoAsync();

// ------------------------------
// 12) Classes + inheritance
// ------------------------------
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }

  introduce() {
    // override + super
    return `${super.introduce()} and I study ${this.major}`;
  }
}

const s = new Student('Zain', 'Computer Science');
console.log(s.introduce());

// ------------------------------
// 13) Object operations: entries/keys/values
// ------------------------------
const user2 = { id: 1, name: 'Nora', role: 'admin' };

console.log('keys:', Object.keys(user2));
console.log('values:', Object.values(user2));
console.log('entries:', Object.entries(user2));

// ------------------------------
// 14) for...of with map/set
// ------------------------------
const set = new Set(['a', 'b', 'c']);
for (const v of set) {
  console.log('set value:', v);
}

const map = new Map([
  ['x', 10],
  ['y', 20],
]);
for (const [key, val] of map) {
  console.log('map entry:', key, val);
}

// ------------------------------
// 15) try/catch/finally (sync)
// ------------------------------
function safeParse(json) {
  try {
    const obj = JSON.parse(json);
    return obj;
  } catch (e) {
    return { error: 'Invalid JSON' };
  } finally {
    // always runs
  }
}

console.log('safeParse valid:', safeParse('{"a":1}'));
console.log('safeParse invalid:', safeParse('{a:1}'));

// ------------------------------
// 16) Advanced: higher-order functions + generators + regex
// ------------------------------

// higher-order: function returning function
function makeMultiplier(factor = 2) {
  return (value) => value * factor;
}

const times3 = makeMultiplier(3);
console.log('times3(10):', times3(10));

// closure example
function counter() {
  let count = 0;
  return {
    inc() {
      count++;
      return count;
    },
    get() {
      return count;
    },
  };
}

const c1 = counter();
console.log('counter inc:', c1.inc());
console.log('counter get:', c1.get());

// generator function
function* idGenerator() {
  let id = 1;
  while (id <= 3) {
    yield id;
    id++;
  }
}

for (const id of idGenerator()) {
  console.log('generated id:', id);
}

// regex: test + match
const text = 'Email: test@example.com and name: Ali';
const emailRe = /[\w.%-]+@[\w.-]+\.[A-Za-z]{2,}/;

console.log('emailRe.test:', emailRe.test(text));
console.log('emailRe.match:', text.match(emailRe));

// ------------------------------
// 17) Destructuring defaults + computed property names
// ------------------------------
const config = {
  featureFlags: {
    darkMode: false,
  },
};

const { darkMode = true } = config.featureFlags ?? {};
console.log('darkMode resolved:', darkMode);

const keyName = 'dynamicKey';
const obj3 = {
  [keyName]: 123,
};
console.log('obj3 dynamic:', obj3);

// ------------------------------
// 18) Map with chaining + immutability pattern
// ------------------------------
const original = [
  { id: 1, active: true },
  { id: 2, active: false },
];

const updated = original.map((item) => ({
  ...item,
  active: item.id === 2,
}));

console.log('original:', original);
console.log('updated:', updated);

// ------------------------------
// 19) End
// ------------------------------
console.log('advanced-js-practice.js loaded');


