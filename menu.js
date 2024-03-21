const rightBtn = document.querySelector(".right-btn");

const leftBtn = document.querySelector(".left-btn");

// buttons
rightBtn.addEventListener("click", () => {
  document.querySelector(".menu-selection").scrollLeft += 500;
});

leftBtn.addEventListener("click", () => {
  document.querySelector(".menu-selection").scrollLeft -= 500;
});
//buttons

// document.querySelector(".beef").addEventListener("click", async function (e) {
//   const variable = e.currentTarget.classList[1];
//   async function logMovies() {
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/filter.php?c=${variable}`
//     );
//     const movies = await response.json();
//     console.log(movies);
//   }
//   logMovies();
// });

const categoriesMenu = document.querySelectorAll(".img-contain");

// categoriesMenu.forEach((e) => {
//   e.addEventListener("click", (e) => {
//     const variable = e.currentTarget.classList[1];
//     async function logMovies() {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${variable}`
//       );
//       const movies = await response.json();
//       const renderedData = movies.meals.slice(0, 10);

//       const categChoices = document.createElement("div");
//       categChoices.classList.add("categ-choise");

//       categChoices.appendChild(renderedData[0].strMeal);
//     }
//     logMovies();
//   });
// });

categoriesMenu.forEach((e) => {
  e.addEventListener("click", (e) => {
    const val = e.currentTarget.classList[1];
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`
        );
        const data = await response.json();
        const renderedData = data.meals.slice(0, 10);

        const categoryResult = document.querySelector(".result");

        categoryResult.textContent = val;
        for (let i = 0; i < renderedData.length; i++) {
          const element = renderedData[i];

          const mainDiv = document.querySelector(".categories");
          const secDiv = document.createElement("div");
          secDiv.classList.add("categ-choices");
          const header = document.createElement("h5");
          header.textContent = element.strMeal;
          const img = document.createElement("img");
          img.src = element.strMealThumb;

          secDiv.appendChild(img);
          secDiv.appendChild(header);
          mainDiv.appendChild(secDiv);
        }
      } catch (error) {
        console.error("erro fetching data", error);
      }
    }
    fetchData();
  });
});
