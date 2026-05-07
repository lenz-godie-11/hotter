setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// Funtion to display something
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// Function to calculate a sum
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// Call the calculator
let result = myCalculator(5, 5);

// Call the displayer
myDisplayer(result);