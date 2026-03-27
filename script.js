// Simple interactivity

document.querySelectorAll(".menu a").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu a").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Example: search filter (table)
const searchInput = document.querySelector(".table-header input");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(value) ? "" : "none";
  });
});
