document.addEventListener("DOMContentLoaded", function () {
  const portfolioBtn = document.querySelector(".cta-button");
  const portfolioSection = document.getElementById("portfolio");
  const homeSection = document.getElementById("home");
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const cards = document.querySelectorAll(".portfolio-card");

  // Show portfolio and hide home on button click
  portfolioBtn.addEventListener("click", function (e) {
    e.preventDefault();
    homeSection.classList.add("hide");
    portfolioSection.classList.add("show");

    // Hide all cards initially
    cards.forEach(card => {
      card.style.display = "none";
      card.classList.remove("active");
    });
  });

  // Filter button click actions
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        if (card.getAttribute("data-type") === filter) {
          card.style.display = "block";
          setTimeout(() => card.classList.add("active"), 100);
        } else {
          card.style.display = "none";
          card.classList.remove("active");
        }
      });
    });
  });
});