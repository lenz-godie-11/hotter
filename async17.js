//trying harder brainstorming on this concept 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}