document.addEventListener("DOMContentLoaded", function () {
  fetch("/products.json")
    .then((response) => response.json())
    .then((product) => {
      const items = product.menu;

      for (let i = 0; i < items.length; i++) {
        // category li
        const categoryLi = document.createElement("li");
        categoryLi.id = `category-${i}`;
        
        // food items category title
        const categoryText = document.createElement("div");
        categoryText.textContent = items[i].category;
        categoryText.classList.add("category-label");

        categoryLi.appendChild(categoryText);
        // categoryLi.textContent = items[i].category;

        // nav link
        const categoryNavLink = document.createElement("a");
        categoryNavLink.href = `#category-${i}`;
        categoryNavLink.textContent = items[i].category;

        document.querySelector("#category-nav").appendChild(categoryNavLink);
        
        // ul for food items
        const foodUl = document.createElement("ul");
        foodUl.classList.add("item-list");
        
        for (let j = 0; j < items[i].items.length; j++) {
          // ul for food items
          const foodUlUl = document.createElement("ul");
          foodUlUl.classList.add("item-list-inner");

          
          const foodNameLi = document.createElement("li");
          foodNameLi.id = `name-${j}`;
          foodNameLi.classList.add("food-name-list");
          
          const foodPriceLi = document.createElement("li");
          foodPriceLi.id = `price-${j}`;
          foodPriceLi.classList.add("food-price-list");
          
          const foodImgLi = document.createElement("img");
          foodImgLi.id = `img-${j}`;
          foodImgLi.classList.add("food-img");
          foodImgLi.src = items[i].items[j].img;
          foodImgLi.alt = items[i].items[j].name;

          const foodBuyLi = document.createElement("li");
          foodBuyLi.id = `cart-${j}`;
          foodBuyLi.classList.add("food-cta-list");

          foodNameLi.textContent = `${items[i].items[j].name}`;
          foodPriceLi.textContent = `¥${items[i].items[j].price}`;
          // foodBuyLi.textContent = `Add to cart`;

          foodUlUl.appendChild(foodImgLi);
          foodUlUl.appendChild(foodNameLi);
          foodUlUl.appendChild(foodPriceLi);
          foodUlUl.appendChild(foodBuyLi);
          categoryLi.appendChild(foodUl);
          foodUl.appendChild(foodUlUl);
        }

        // food ul attached to category li

        document.querySelector("#menu-list").appendChild(categoryLi);
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
