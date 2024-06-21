function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(3, 4);
console.log('The value of sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(3);
console.log('The value of minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const greetTom = getGreeting('Tom');
console.log('The value of greetTom:', greetTom);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const product = addAndMultiplyBy5(4, 8);
console.log('The value of product:', product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const quotientOfCombinedNumbers = multiplyAndDivideBy5(2, 3);
console.log(
  'The value of quotientOfCombinedNumbers:',
  quotientOfCombinedNumbers
);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(100, 89);
console.log('The value of difference:', difference);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

const circumference = getCircleCircumference(0.5);
console.log('The value of circumference:', circumference);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const myFullName = getFullName('Daniel', 'Yount');
console.log('The value of myFullName:', myFullName);

function cube(number) {
  return Math.pow(number, 3);
}

const cubed = cube(6);
console.log('The value of cubed:', cubed);
