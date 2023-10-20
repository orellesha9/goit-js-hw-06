const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liElements = document.querySelector("ul");


ingredients.forEach(function (value) {
  const liElement = document.createElement("li")
  liElement.classList.add("item");
  liElement.textContent = value;
  liElements.append(liElement);
});
document.body.append(liElements); 