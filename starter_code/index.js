const navbarText = document.querySelector("#id-navbar");
const navbarButton = document.querySelector("#navbar-button");

console.log(navbarText);
console.log(navbarButton);

const visibleNavbar = () => {
    navbarText.classList.toggle("hidden");
}

navbarButton.addEventListener("click",visibleNavbar);