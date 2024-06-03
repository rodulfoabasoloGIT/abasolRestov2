const rightBtn = document.querySelector(".right-btn");

const leftBtn = document.querySelector(".left-btn");

// buttons
rightBtn.addEventListener("click", () => {
  document.querySelector(".menu-selection").scrollLeft += 500;
});

leftBtn.addEventListener("click", () => {
  document.querySelector(".menu-selection").scrollLeft -= 500;
});

const categoriesMenu = document.querySelectorAll(".img-contain");

categoriesMenu.forEach((e) => {
  e.addEventListener("click", (e) => {
    const val = e.currentTarget.classList[1];
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`
        );
        const data = await response.json();
        const filteredData = data.meals;
        const categDiv = document.querySelector(".categories");
        const categName = document.querySelector(".result");
        categName.textContent = val;

        let i = 1;
        if (!categDiv || !categName) {
          console.error("Categories or result element not found");
          return;
        }

        const stars = generateStars(5);

        categDiv.innerHTML = filteredData
          .map((item) => {
            const { strMeal, strMealThumb } = item;
            return `
          <div class="categ-choices">
          <img
            src=${strMealThumb}
          />
            ${stars}
          <h5>${strMeal}</h5>
          <button class="addToCart">Add to cart!</button>
        </div>
          `;
          })
          .join("");

        document.querySelectorAll(".addToCart").forEach((button) => {
          button.addEventListener("click", () => {
            // document.querySelector(".count").textContent = i++;
            const orderedCart = document.querySelector(".order-quantity");
            orderedCart.setAttribute("data-before", i++);
          });
        });
      } catch (error) {
        console.error("error fetching data", error);
      }
    }

    fetchData();

    function generateStars(count) {
      return new Array(count)
        .fill('<i class="fa-solid fa-star" style="color: #ffd43b"></i>')
        .join("");
    }
  });
});
