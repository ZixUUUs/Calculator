let a = document.querySelector(".number");
let b = document.querySelector(".number");
let operator = document.querySelector("operator");
const btns = document.querySelectorAll(".number");
const input = document.querySelector("input");

btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    input.value += e.target.innerHTML;
  });
});

function add() {
  return a + b;
}
function sub() {
  return a - b;
}
function multiply() {
  return a * b;
}
function devide() {
  return a / b;
}
function operate(a, b, operator) {
  if ((operator = add())) {
    return add(a, b);
  }
  if ((operator = sub())) {
    return sub(a, b);
  }
  if ((operator = multiply())) {
    return multiply(a, b);
  }
  if ((operator = devide())) {
    return devide(a, b);
  }
}
