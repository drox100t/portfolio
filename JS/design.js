// -------------------------------------------------------------------------------------------
// ----------------------- CURSEUR -----------------------------------------------------------
// -------------------------------------------------------------------------------------------

let curseur = document.getElementById("curseur")

document.addEventListener("mousemove", logKey);

function logKey(e) {
    // console.log("X : ",e.clientX)
    // console.log("Y : ",e.clientY)

    curseur.style.left = e.clientX - 7.5 + 'px';
    curseur.style.top = e.clientY - 7.5 + 'px'

}

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------
// ----------------------- LIGNES BLANCHES ---------------------------------------------------
// -------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------



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


// div des détails
let DetailProjet1 = document.getElementById("DetailProjet1")
let DetailProjet2 = document.getElementById("DetailProjet2")
let DetailProjet3 = document.getElementById("DetailProjet3")


// btn voir plus
let btnSortirDetail = document.getElementById("plus1")
let btnSortirDetail2 = document.getElementById("plus2")
let btnSortirDetail3 = document.getElementById("plus3")


// quitter les projets
let btnCroix = document.querySelectorAll(".closeDetail")

btnCroix.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        DetailProjet1.style.marginLeft="-200vh";
        DetailProjet2.style.marginLeft="-200vh";
        DetailProjet3.style.marginLeft="-200vh";

})
})



let btnExit = document.querySelectorAll(".revenir")

btnExit.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        DetailProjet1.style.marginLeft="-200vh";
        DetailProjet2.style.marginLeft="-200vh";
        DetailProjet3.style.marginLeft="-200vh";

})
})

// Detail 1

btnSortirDetail.addEventListener("click", ()=>{
    console.log("cliqué")
    DetailProjet1.style.marginLeft="0";
})


// Detail 2

btnSortirDetail2.addEventListener("click", ()=>{
    console.log("cliqué")
    DetailProjet2.style.marginLeft="0";
})

// Detail 3

btnSortirDetail3.addEventListener("click", ()=>{
    console.log("cliqué")
    DetailProjet3.style.marginLeft="0";
})




