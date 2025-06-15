const menuBtn = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const bar=document.querySelectorAll(".bar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    if(sidebar.classList.contains("open")){
    bar.forEach((element)=>{
        element.style.backgroundColor="white";
    })
}
else{
        bar.forEach((element)=>{
        element.style.backgroundColor="black";
    })
    }
});

window.addEventListener("click", (event) => {
    if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    !menuBtn.contains(event.target)
    ) {
    sidebar.classList.remove("open");
    bar.forEach((element)=>{
        element.style.backgroundColor="black";
    })
    }
});
