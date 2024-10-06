export default function returnHowManyArguments() {
  let count = 0;
  for (let i = 0; i < arguments.length; i++){
    count++;
  }
  return count;
}
