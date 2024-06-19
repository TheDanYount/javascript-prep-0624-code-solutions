const number1 = 6,
  number2 = 4,
  product = 4 * 6;
console.log(`value of product:`, product);
console.log(`type of product:`, typeof product);
const charge = 10,
  payment = 3;
let amountRemaining = charge - payment;
console.log(`value of amountRemaining:`, amountRemaining);
console.log(`type of amountRemaining:`, typeof amountRemaining);
const tests = 80,
  assignments = 95,
  final = 83,
  grade = (tests + assignments + final) / 3;
console.log(`value of grade:`, grade);
console.log(`type of grade:`, typeof grade);
const firstName = `Daniel`,
  lastName = `Yount`,
  fullName = `${firstName} ${lastName}`;
console.log(`value of fullName:`, fullName);
console.log(`type of fullName:`, typeof fullName);
const pH = 6;
let isAcidic;
pH < 7 ? (isAcidic = true) : (isAcidic = false);
console.log(`value of isAcidic:`, isAcidic);
console.log(`type of isAcidic:`, typeof isAcidic);
const numberOfSoldiers = 299;
let isSparta;
numberOfSoldiers === 300 ? (isSparta = true) : (isSparta = false);
console.log(`value of isSparta:`, isSparta);
console.log(`type of isSparta:`, typeof isSparta);
let nickname = fullName;
nickname += `is the GOAT`;
console.log(`value of nickname:`, nickname);
console.log(`type of nickname:`, typeof nickname);
