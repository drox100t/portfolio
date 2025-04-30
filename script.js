document.addEventListener('DOMContentLoaded', function() {

    // Effet de défilement pour rendre les sections visibles
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
          section.classList.add('visible');
        }
      });
    });
  
    // Animation de "fade-in" et "scale-up" pour les éléments de production
    const productionItems = document.querySelectorAll('.production-item');
    productionItems.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      item.style.transform = 'translateY(50px)';
      
      window.addEventListener('scroll', () => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
          item.style.opacity = 1;
          item.style.transform = 'translateY(0)';
        }
      });
    });
  
    // Effet de survol des images avec une légère rotation et un zoom
    const productionImages = document.querySelectorAll('.production-item img');
    productionImages.forEach(image => {
      image.addEventListener('mouseenter', () => {
        image.style.transition = 'transform 0.3s ease, filter 0.3s ease';
        image.style.transform = 'scale(1.05) rotate(5deg)';
        image.style.filter = 'brightness(1.2)';
      });
  
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1) rotate(0deg)';
        image.style.filter = 'brightness(1)';
      });
    });
  
    // Effet de survol du bouton avec une animation de croissance et de changement de couleur
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transition = 'transform 0.2s ease, background 0.3s ease';
        button.style.transform = 'scale(1.1)';
        button.style.backgroundColor = '#e05243'; // Couleur au survol
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#ff6f61'; // Couleur d'origine
      });
    });
  
    // Effet de défilement fluide pour les liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Compense la hauteur de la barre de navigation
          behavior: 'smooth'
        });
      });
    });
  
    // Effet de chargement des éléments avec une animation de fade-in sur toute la page
    window.addEventListener('load', () => {
      document.body.style.opacity = 1;
      document.body.style.transition = 'opacity 1s ease-in';
    });
  
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
    // Effet de texte dynamique
    const words = ["Designer", "Développeur", "Freelancer"];
    let wordIndex = 0;
    let letterIndex = 0;
    const dynamicText = document.getElementById("dynamic-text");

    function typeEffect() {
        if (letterIndex < words[wordIndex].length) {
            dynamicText.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }

    function eraseEffect() {
        if (letterIndex > 0) {
            dynamicText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();

    // Effet d'apparition des sections au scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (position < screenPosition) {
                section.classList.add('visible');
            }
        });
    });

    // Effet de texte tapé pour "Portfolio Jan Jawish"
    const titleText = "Portfolio - Jan Jawish 💻";
    const titleElement = document.getElementById("portfolio-title");
    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            titleElement.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    }

    typeWriter();
});

  
document.addEventListener("DOMContentLoaded", function() {
  const scrollDownBtn = document.getElementById("scroll-down-btn");

  scrollDownBtn.addEventListener("click", function() {
      window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const words = ["Présent", "Passé", "Futur"];
  let index = 0;
  const changingText = document.getElementById("changing-text");

  function changeText() {
      changingText.style.opacity = 0; // Disparition
      setTimeout(() => {
          index = (index + 1) % words.length;
          changingText.textContent = words[index];
          changingText.style.opacity = 1; // Réapparition
      }, 500);
  }

  setInterval(changeText, 1500); // Change toutes les 3 secondes
});



function toggleMode() {
  const body = document.body;
  const toggleBtn = document.querySelector('.mode-toggle');
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Stocker la préférence
  localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
}

// Appliquer le thème au chargement
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      document.querySelector('.mode-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  }
});
const skillBars = document.querySelectorAll('.progress');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('style').split('width: ')[1];
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => {
  bar.style.width = "0";
  observer.observe(bar);
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const header = document.querySelector('.parallax-header .header-content');
  const background = document.querySelector('.parallax-header::before'); // pseudo-elements can't be selected directly

  if (header) {
    header.style.transform = `translateY(${scrollY * 0.2}px)`; // bouge doucement
  }

  // Tu veux un fond qui bouge aussi ? Utilise une image directe dans le header plutôt que ::before
  const headerElement = document.querySelector('.parallax-header');
  headerElement.style.backgroundPosition = `center ${scrollY * 0.3}px`;
});
// Effet parallax doux sur le header
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const headerContent = document.querySelector('.parallax-header .header-content');

  if (headerContent) {
    headerContent.style.transform = `translateY(${scrollY * 0.3}px)`; // ajustable
  }
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("✅ Merci pour votre message !");
      form.reset();
    } else {
      alert("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  });
});
function scrollCarousel(direction) {
  const container = document.getElementById('projectCarousel');
  const scrollAmount = 320; // Largeur d’une carte + gap
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
let currentIndex = 0;
const cursor = document.getElementById('custom-cursor');
const swipeZone = document.querySelector('.slider-container'); // adapte selon ta classe

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

swipeZone.addEventListener('mouseenter', () => {
  cursor.style.opacity = 1;
  document.body.style.cursor = 'none';
});
swipeZone.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
  document.body.style.cursor = 'auto';
});
let isDown = false;
let startX;
let scrollLeft;

swipeZone.addEventListener('mousedown', (e) => {
  isDown = true;
  swipeZone.classList.add('active');
  startX = e.pageX - swipeZone.offsetLeft;
  scrollLeft = swipeZone.scrollLeft;
});
swipeZone.addEventListener('mouseleave', () => {
  isDown = false;
  swipeZone.classList.remove('active');
});
swipeZone.addEventListener('mouseup', () => {
  isDown = false;
  swipeZone.classList.remove('active');
});
swipeZone.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - swipeZone.offsetLeft;
  const walk = (x - startX) * 1.5; // vitesse
  swipeZone.scrollLeft = scrollLeft - walk;
});
// Activation du scroll horizontal avec la molette verticale
swipeZone.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    swipeZone.scrollLeft += e.deltaY;
  }
}, { passive: false });
// Magnétisme souris sur .skill-team
document.querySelectorAll('.skill-team').forEach(item => {
  item.addEventListener('mousemove', e => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translate(0, 0)';
  });
});
// Explosion améliorée HTML
const htmlCard = document.querySelector('.skill-html-explode');
const particleContainer = htmlCard.querySelector('.particles-container');

htmlCard.addEventListener('mouseenter', () => {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 120 + 40;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const size = Math.random() * 4 + 2;
    const rotation = Math.random() * 720 - 360;

    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `0px`;
    p.style.top = `0px`;

    particleContainer.appendChild(p);

    p.animate([
      {
        transform: 'translate(0, 0) rotate(0deg)',
        opacity: 1
      },
      {
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: 600 + Math.random() * 200,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fill: 'forwards'
    });

    setTimeout(() => p.remove(), 1000);
  }
});
// Animation éclair JS
const jsCard = document.querySelector('.skill-js-flash');

jsCard.addEventListener('mouseenter', () => {
  jsCard.classList.add('animate-flash');
  setTimeout(() => {
    jsCard.classList.remove('animate-flash');
  }, 700);
});
const gifPopup = document.getElementById("gif-popup");
const hoverWords = document.querySelectorAll(".hover-gif");

hoverWords.forEach(word => {
  word.addEventListener("mouseenter", (e) => {
    const gif = document.createElement("img");
    gif.src = word.dataset.gif;
    gifPopup.innerHTML = "";
    gifPopup.appendChild(gif);

    const rect = word.getBoundingClientRect();
    gifPopup.style.left = `${rect.left + rect.width/2 - 100}px`; // bien centré
    gifPopup.style.top = `${rect.bottom + window.scrollY + 20}px`; // bien espacé
    gifPopup.style.display = "block";
    setTimeout(() => {
      gifPopup.style.opacity = 1;
    }, 50);
  });

  word.addEventListener("mouseleave", () => {
    gifPopup.style.opacity = 0;
    setTimeout(() => {
      gifPopup.style.display = "none";
      gifPopup.innerHTML = "";
    }, 300);
  });
});
