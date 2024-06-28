function getValues(object) {
  const valueArray = [];
  for (keys in object) {
    valueArray.push(object[keys]);
  }
  return valueArray;
}
