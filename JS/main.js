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
let points = document.getElementById("points")


btnMenu.addEventListener("click", () => {
    menuSortant.style.marginLeft = 0;
    points.classList.add("cache")
})

btnClose.addEventListener("click", () => {
    menuSortant.style.marginLeft = "-100vw";
    points.classList.remove("cache")
})

let btnToutVoir = document.getElementById("btnToutVoir")

btnToutVoir.addEventListener("click", ()=> {
    menuSortant.style.marginLeft = 0;
    points.classList.add("cache")

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




const onSectionEnter = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // console.log(`Vous êtes sur ${entry.target.id}`);

            


            if (entry.target.id == "presentation") {
                let navlinks = document.querySelectorAll(".navlinks")
                navlinks.forEach((elem) => elem.style.color="black");

                let menu = document.getElementById("btn-menu");
                menu.src = "Icon/menu.svg"

                let point1 = document.getElementById("point1")
                point1.classList.add("active")

                let fleche = document.getElementById("fleche")
                let divfleche = document.getElementById("divfleche")

                fleche.style.opacity="0"
                divfleche.style.opacity="0"
  
            }
            else {
                point1.classList.remove("active")
                fleche.style.opacity="1"
                divfleche.style.opacity="1"

            }



            if (entry.target.id == "section2") {
                let navlinks = document.querySelectorAll(".navlinks")
                navlinks.forEach((elem) => elem.style.color="white");

                let menu = document.getElementById("btn-menu");
                menu.src = "Icon/menuClair.svg"


                let point2 = document.getElementById("point2")
                point2.classList.add("active")
                
                fleche.style.color="white"
                divfleche.style.borderColor="white"
            }


            else {
                point2.classList.remove("active")

                fleche.style.color="black"
                divfleche.style.borderColor="black"
            }


            if (entry.target.id == "section3") {
                let navlinks = document.querySelectorAll(".navlinks")
                navlinks.forEach((elem) => elem.style.color="black");

                
                let menu = document.getElementById("btn-menu");
                menu.src = "Icon/menu.svg"


                let point3 = document.getElementById("point3")
                point3.classList.add("active")

            }
            else {
                point3.classList.remove("active")
            }


        }
    });
};

// Options pour l'observateur (par exemple, détecter quand 50% de l'élément est visible)
const options = {
    threshold: 0.6  // % de la section doit être visible pour être considérée comme "vue"
};

// Crée un nouvel observateur d'intersection
const observer2 = new IntersectionObserver(onSectionEnter, options);

// Cibler toutes les sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer2.observe(section);  // Commence à observer chaque section
});







let divVideo = document.getElementById("divideo");

document.addEventListener("mousemove", logKey);

function div(x) {
    console.log("X : ",x.clientX)
    console.log("Y : ",x.clientY)

    // divVideo.style.left = x.clientX - 7.5 + 'px';
    // divVideo.style.top = x.clientY - 7.5 + 'px';


}




// -------------------------------------------------------------------------------------------
// ----------------------- ANIMATIONS --------------------------------------------------------
// -------------------------------------------------------------------------------------------







const observer3 = new IntersectionObserver((images) => {
    images.forEach(image => {
        if (image.isIntersecting) {
            image.target.classList.add('active');
            // console.log("visible")
        }
        else{
            // console.log("invisible")
            image.target.classList.remove('active');

        }
    });
},

    {
        threshold: 0.1
    });

document.querySelectorAll('.anim-image').forEach(img => {
    observer3.observe(img);
});