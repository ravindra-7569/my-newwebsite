// Toggle dark mode (simple accessibility feature)

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Keyboard accessibility helper
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.body.classList.remove("dark");
  }
});
