function toObject(keyValuePair) {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const newObj = {
    [key]: value,
  };
  return newObj;
}
