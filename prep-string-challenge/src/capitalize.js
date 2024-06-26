function capitalize(str) {
  const firstCap = str[0].toUpperCase();
  const remainderOfStr = str.slice(1).toLowerCase();
  return firstCap + remainderOfStr;
}
