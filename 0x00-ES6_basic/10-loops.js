export default function appendToEachArrayValue(array, appendString) {
  const temArr = [...array];
  for (const i of array.keys()) {
    temArr[i] = appendString + temArr[i];
  }

  return temArr;
}
