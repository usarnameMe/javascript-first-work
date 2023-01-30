// Write a function that takes an array of numbers and returns the sum of all the elements in the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumOfNumbers() {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
}

console.log(sumOfNumbers());
