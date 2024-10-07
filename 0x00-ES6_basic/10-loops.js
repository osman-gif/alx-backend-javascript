export default function appendToEachArrayValue(array, appendString) {
  const temArr = [...array];
  let count = 0;
  for (const i of array) {
    temArr[count] = appendString + i;
    count += 1;
  }
  return temArr;
}
