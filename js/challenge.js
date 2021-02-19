let count = 0;

function render() {
  const counter = document.getElementById("counter");
  counter.innerHTML = count;
}

function increment() {
  count++;
  render();
}

function decrement() {
  count--;
  render();
}

const minus = document.getElementById("minus");
minus.onclick = decrement;

const plus = document.getElementById("plus");
plus.onclick = increment;

let interval = setInterval(increment, 1000);

const pause = document.getElementById("pause");
pause.onclick = function () {
  clearInterval(interval);
};
