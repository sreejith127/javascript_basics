const numbers = [10, 15, 8, 7, 4];
const size = numbers.length;
// console.log(size);
const odd = [];
const even = [];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
for (let i = 0; i < size; i++) {
  if (numbers[i] % 2 === 1) {
    //odd
    odd.push(numbers[i]);
  } else {
    //even
    even.push(numbers[i]);
  }
}

console.log(odd);
console.log(even);



