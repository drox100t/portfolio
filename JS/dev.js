// ----------------------- CURSEUR -----------------------------------------------------------

let curseur = document.getElementById("curseur");

document.addEventListener("mousemove", logKey);

function logKey(e) {
    curseur.style.left = e.clientX - 7.5 + 'px';
    curseur.style.top = e.clientY - 7.5 + 'px';
}

// ----------------------- LIGNES BLANCHES ---------------------------------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.line').forEach(line => {
    observer.observe(line);
});

// ----------------------- MENU -------------------------------------------------------------

let menuSortant = document.getElementById("menu-sortant-main");
let btnMenu = document.getElementById("btn-menu");
let btnClose = document.getElementById("close");

btnMenu.addEventListener("click", () => {
    menuSortant.style.marginLeft = 0;
});

btnClose.addEventListener("click", () => {
    menuSortant.style.marginLeft = "-100vw";
});

// ----------------------- PROJETS ----------------------------------------------------------

let DetailProjet1 = document.getElementById("DetailProjet1");
let DetailProjet2 = document.getElementById("DetailProjet2");
let DetailProjet3 = document.getElementById("DetailProjet3");

let btnSortirDetail = document.getElementById("plus1");
let btnSortirDetail2 = document.getElementById("plus2");
let btnSortirDetail3 = document.getElementById("plus3");

// Boutons fermer et revenir
let btnCroix = document.querySelectorAll(".closeDetail");
let btnExit = document.querySelectorAll(".revenir");

[...btnCroix, ...btnExit].forEach((btn) => {
    btn.addEventListener("click", () => {
        DetailProjet1.style.marginLeft = "-200vh";
        DetailProjet2.style.marginLeft = "-200vh";
        DetailProjet3.style.marginLeft = "-200vh";
    });
});

// Boutons "En savoir plus"
btnSortirDetail.addEventListener("click", () => {
    DetailProjet1.style.marginLeft = "0";
});

btnSortirDetail2.addEventListener("click", () => {
    DetailProjet2.style.marginLeft = "0";
});

btnSortirDetail3.addEventListener("click", () => {
    DetailProjet3.style.marginLeft = "0";
});