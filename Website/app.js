document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".arrow");
  const movieLists = document.querySelectorAll(".movie-list");

  arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
      const ratio = Math.floor(window.innerWidth / 270);
      clickCounter++;
      
      const maxClicks = itemNumber - (4 + clickCounter) + (4 - ratio);
      const currentTransform = parseFloat(getComputedStyle(movieLists[i]).transform.split(',')[4]) || 0;
      
      if (maxClicks >= 0) {
        movieLists[i].style.transform = `translateX(${currentTransform - 300}px)`;
      } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });

    console.log(`Visible items: ${Math.floor(window.innerWidth / 270)}`);
  });

  // TOGGLE
  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(
    ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
  );

  ball.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });
});
