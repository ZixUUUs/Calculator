const btns = document.querySelectorAll(".number");
const input = document.querySelector("input");

let firstNum = null;
let operator = null;

btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    input.value += e.target.value;
  });
});

function onOperatorClick(op) {
  firstNum = parseInt(input.value);
  operator = op;
  input.value = "";
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function devide(a, b) {
  if (b == 0) {
    alert("you dump!!!!!!! mareg nta!?");
    return null;
  } else {
    return a / b;
  }
}

function operate() {
  let secondNum = parseInt(input.value);
  let result;
  if (operator === "+") {
    result = add(firstNum, secondNum);
  } else if (operator === "-") {
    result = sub(firstNum, secondNum);
  } else if (operator === "x") {
    result = multiply(firstNum, secondNum);
  } else if (operator === "/") {
    result = devide(firstNum, secondNum);
  }
  input.value = result;
}
