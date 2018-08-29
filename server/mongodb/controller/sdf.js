console.log(new Date());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleString());

const genNumArr = (length, limit) => Array.from({length}, _ => Math.floor(Math.random() * limit));


var c = genNumArr(10, 100);
console.log(c);


const reduce = (f,acc,arr) =>{
  if(arr.length === 0) return acc;
  const [head,...tail] = arr;
  return reduce(f,f(head,acc),tail)
}
