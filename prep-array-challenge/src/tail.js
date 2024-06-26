function tail(arr) {
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  return newArr;
}
