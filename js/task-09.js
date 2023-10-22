const changeColor = document.querySelector(".widget");
const bgrColor = changeColor.querySelector(".color");


changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bgrColor.innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
});




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
