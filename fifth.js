// Create a program that generates an array of 10 random numbers between 1 and 100, and then prints out the largest and smallest number in the array.

function nums() {
  let num = [];
  for (let i = 1; i <= 100; i++) {
    num.push[i];
    Math.floor(Math.random(num) * 10);
  }

  let largest = Math.max(num);
  let smallest = Math.min(num);
}

nums();
console.log(nums);
console.log(largest);
console.log(smallest);
