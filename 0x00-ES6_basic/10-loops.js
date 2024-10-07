export default function appendToEachArrayValue(array, appendString) {
  const temArr = [...array];
  for (const i of temArr.keys()) {
    temArr[i] = appendString + temArr[i];
  }

  return temArr;
}
