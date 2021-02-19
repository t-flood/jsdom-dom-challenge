let count = 0;

const render = () => {
  const counter = document.getElementById("counter");
  counter.innerHTML = count;
};

const increment = () => {
  count++;
  render();
};

const decrement = () => {
  count--;
  render();
};

const minus = document.getElementById("minus");
minus.addEventListener("click", decrement);

const plus = document.getElementById("plus");
plus.addEventListener("click", increment);

let interval = setInterval(increment, 1000);

const pause = document.getElementById("pause");
pause.addEventListener("click", () => clearInterval(interval));
