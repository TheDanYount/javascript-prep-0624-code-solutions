function reverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i > -1; i--) {
    newArr[arr.length - 1 - i] = arr[i];
  }
  return newArr;
}
