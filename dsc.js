const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const btnScrollToTop=document.querySelector("#btnScrollToTop");
var icon=document.getElementById("icon");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    btnScrollToTop.classList.toggle("active");
})

btnScrollToTop.addEventListener("click", () => {
    btnScrollToTop.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

btnScrollToTop.addEventListener("click" , ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src="sun.png";
    }
    else{
        icon.src="moon.png";
    }
}