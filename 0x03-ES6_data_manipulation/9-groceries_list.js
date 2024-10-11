export default function groceriesList() {
  let groceries = new Map();
  const keys = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const value = [10, 10, 1, 1, 5];

  for (let i = 0; i < value.length; i += 1) {
    groceries.set(keys[i], value[i]);
  }
  return groceries;
}