const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");
const counterValue = 0;

const sum = () => {
    const counterValue = Number(value.textContent) + 1;
    value.innerHTML =+ (Number(counterValue));
    console.log(counterValue);
};

const subtraction = () => {
  const counterValue = Number(value.textContent) - 1;
  value.innerHTML = +Number(counterValue);
  console.log(counterValue);
};

buttonPlus.addEventListener("click", sum);
buttonMinus.addEventListener("click", subtraction);