document.getElementById("menu-toggle").addEventListener("click", function toggleMenu() {
  document.getElementById("overlay").style.display = "block";
  document.querySelector(".navbar-list").style.right="0";
});
document.getElementById("menu-close").addEventListener("click", function CloseMenu() {
  document.getElementById("overlay").style.display = "none";
  document.querySelector(".navbar-list").style.right="-100vh";
});
document.getElementById("overlay").addEventListener("click", function CloseMenu() {
  document.getElementById("overlay").style.display = "none";
  document.querySelector(".navbar-list").style.right="-100vh";
});