export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = [];
  for (let value of array) {
    value = appendString + value;
    arrayNew.push(value);
  }

  return arrayNew;
}
