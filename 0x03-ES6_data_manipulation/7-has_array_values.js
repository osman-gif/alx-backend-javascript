export default function hasValuesFromArray(newSet, newArr) {
  return newArr.every(value => newSet.has(value))
}