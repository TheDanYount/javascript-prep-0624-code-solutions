function getKeys(object) {
  const keyArray = [];
  for (key in object) {
    keyArray.push(key);
  }
  return keyArray;
}
