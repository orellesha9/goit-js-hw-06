const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector("h2");

  // Знаходимо всі підкатегорії (всі li вкладені в ul)
  const subCategories = categoryItem.querySelectorAll("ul li");

  // Виводимо інформацію про категорію
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${subCategories.length}`);
});





