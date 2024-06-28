const vowels = ['A', 'E', 'I', 'O', 'U'];

function isVowel(str) {
  for (v of vowels) {
    if (v === str.toUpperCase()) {
      return true;
    }
  }
  return false;
}

/* Using a handy method:

function isVowel(str) {
  return vowels.includes(str.toUpperCase());
}
*/
