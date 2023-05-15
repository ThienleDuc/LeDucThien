let navBar = document.querySelector(".navBar");
let toggle = document.querySelector("#toggle");
let menuItems = document.querySelectorAll(".navBar .navBar__list li a[href*='#']");
toggle.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
    toggle.classList.toggle("active");
    for(let i = 0; i < menuItems.length; i++){
        let menuItem = menuItems[i];
        menuItem.addEventListener("click", ()=>{
            navBar.classList.remove("active");
            toggle.classList.remove("active");
        })
    }
})