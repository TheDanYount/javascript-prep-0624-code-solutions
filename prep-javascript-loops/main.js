function whileLoop1() {
  const arr = [];
  while (arr.length < 10) {
    arr.push(arr.length);
  }
  return arr;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const arr = [];
  while (arr.length < 10) {
    arr.push(arr.length * 2);
  }
  return arr;
}

/*I read the suggestion about incremening by 2. I decided not to
follow it because I like the conditional expression to reference the
number of times the loop runs. If I incremented by 2, I'd have to
change the comparison to "< 20", which, I admit, would still be a
useful reference for the upper bound, but is in my mind an inferior
thing to have referenced.*/

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
}

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (i = 100; i >= 0; i--) {
    console.log(`Time to explosion: ${i}!`);
  }
}

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

/*Charles Babbage invented the analytical engine. Ada Lovelace wrote
the first program for it and realized the significance of what he
created, a sum far greater than the parts of this lever and that lever.
A brilliant woman in her own right. Not however, Charles Babbage. Also
not anyone else. Ada Lovelace was Ada Lovelace.*/

function forInLoop1(object) {
  const propertyList = [];
  for (key in object) {
    propertyList.push(key);
  }
  return propertyList;
}
const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const propertyValueList = [];
  for (key in object) {
    propertyValueList.push(object[key]);
  }
  return propertyValueList;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
