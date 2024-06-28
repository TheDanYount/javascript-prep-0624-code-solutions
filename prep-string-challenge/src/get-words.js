/* Note that the following function doesn't simply compare
to [""]. I tried that at first, but objects are distinct
things. Having the same content does not make them strictly
equal, or even equal.*/
function checkSpecialCase(arr) {
  return arr.length === 1 && arr[0] === '';
}

function getWords(str) {
  // I need to practice regex more. \s is for whitespace
  const newArr = str.split(/\s/);
  const specialCase = checkSpecialCase(newArr);
  if (!specialCase) {
    return newArr;
  } else {
    return [];
  }
}
