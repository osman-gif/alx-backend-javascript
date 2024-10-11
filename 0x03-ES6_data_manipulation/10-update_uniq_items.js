export default function updateUniqueItems(newMap) {
  for (let [key, value] of newMap) {
    if (value === 1){
      newMap.set(key, 100);
    }
  }
  return newMap;
}