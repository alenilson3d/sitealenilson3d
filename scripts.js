document.getElementById("search").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(searchTerm) ? "block" : "none";
  });
});

document.querySelectorAll("#categoryMenu a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const selectedCategory = this.getAttribute("data-category");
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      card.style.display = (selectedCategory === "Todos" || cardCategory === selectedCategory) ? "block" : "none";
    });
  });
});
