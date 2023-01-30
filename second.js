// Create a simple calculator that can add, subtract, multiply, and divide two numbers using JavaScript.

function calculate(operation, n1, n2) {
  if (operation === "add") {
    console.log(n1 + n2);
  } else if (operation === "subtract") {
    console.log(n1 - n2);
  } else if (operation === "multiply") {
    console.log(n1 * n2);
  } else if (operation === "divide") {
    console.log(n1 / n2);
  }
}

calculate("add", 3, 5);
