const person = {
  firstName: `Joe`,
  lastName: `Montana`,
  hobby: `Football`,
};
console.log(`value of person:`, person);
const fullName = `${person.firstName} ${person.lastName}`;
console.log(`value of fullName:`, fullName);
person.job = `Quarterback`;
console.log(`value of person.job:`, person.job);
person[`previousJob`] = `Burger flipper`;
console.log(`value of person[\`previousJob\`]:`, person[`previousJob`]);
console.log(`updated value of person is:`, person);
