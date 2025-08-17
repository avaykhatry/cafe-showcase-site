document.addEventListener("DOMContentLoaded", function () {
  fetch("/products.json")
    .then((response) => response.json())
    .then((product) => {
      const items = product.menu;

      for (let i = 0; i < items.length; i++) {
        // category li
        const categoryLi = document.createElement("li");
        categoryLi.id = `category-${i}`;
        categoryLi.textContent = items[i].category;

        // nav link
        const categoryNavLink = document.createElement("a");
        categoryNavLink.href = `#category-${i}`;
        categoryNavLink.textContent = items[i].category;

        document.querySelector("#category-nav").appendChild(categoryNavLink);
        
        // ul for food items
        const foodUl = document.createElement("ul");
        foodUl.classList.add("item-list");

        for (let j = 0; j < items[i].items.length; j++) {
          const foodLi = document.createElement("li");
          foodLi.textContent = `${items[i].items[j].name} (price: ${items[i].items[j].price})`;
          foodUl.appendChild(foodLi);
        }

        // food ul attached to category li
        categoryLi.appendChild(foodUl);

        document.querySelector("#menu-list").appendChild(categoryLi);
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
