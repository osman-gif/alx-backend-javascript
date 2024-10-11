export let weakMap = new WeakMap()
// {
//     protocol: 'http',
//     name: 'getUsers',
//   }

export function queryAPI(endPoint){
  
  let count = 0;
  if (weakMap.has(endPoint)){
    weakMap.set(endPoint, 0)
  }
  
}