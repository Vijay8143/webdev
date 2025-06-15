const menuBtn = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});
window.addEventListener("click", (event) => {
    if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    !menuBtn.contains(event.target)
    ) {
    sidebar.classList.remove("open");
    }
});
