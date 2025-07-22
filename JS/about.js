let curseur = document.getElementById("curseur")

document.addEventListener("mousemove", logKey);

function logKey(e) {
    // console.log("X : ",e.clientX)
    // console.log("Y : ",e.clientY)

    curseur.style.left = e.clientX - 7.5 + 'px';
    curseur.style.top = e.clientY - 7.5 + 'px';


}



let menuSortant = document.getElementById("menu-sortant-main");
let btnMenu = document.getElementById("btn-menu");
let btnClose = document.getElementById("close");
// let points = document.getElementById("points")


btnMenu.addEventListener("click", () => {
    menuSortant.style.marginLeft = 0;
    // points.classList.add("cache")
})

btnClose.addEventListener("click", () => {
    menuSortant.style.marginLeft = "-100vw";
    // points.classList.remove("cache")
})




const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
},

    {
        threshold: 0.1
    });

document.querySelectorAll('.line').forEach(line => {
    observer.observe(line);
});




