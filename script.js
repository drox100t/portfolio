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



