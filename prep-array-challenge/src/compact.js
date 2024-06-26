function compact(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
/* Thought I'd squeeze in some filter practice...

function compact(arr) {
  const newArr = arr.filter((v) => Boolean(v) === true);
  return newArr;
}
*/
