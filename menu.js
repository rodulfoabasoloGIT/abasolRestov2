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

const test = document.querySelectorAll(".img-contain");

test.forEach((e) => {
  e.addEventListener("click", (e) => {
    const variable = e.currentTarget.classList[1];
    async function logMovies() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${variable}`
      );
      const movies = await response.json();
      const renderedData = movies.meals.slice(0, 10);
      console.log(renderedData);
    }
    logMovies();

    document.querySelector(".result").innerText = variable;
  });
});
