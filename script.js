// Wait until DOM fully loaded before starting script
document.addEventListener('DOMContentLoaded', () => {
    // Wrap Hero letters for animation 
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      const text = heroTitle.textContent.trim();
      heroTitle.innerHTML = "";
       // Loop through each character
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = text[i];
         // Apply delay, one after the other
        span.style.animationDelay = `${(i + 1) * 0.1}s`;
        heroTitle.appendChild(span);
      }
    }
  // Hero scroll fade effect 
  const hero = document.querySelector('.hero');
  if (!hero) {
    console.warn('Hero element not found.');
    return;
  }
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      hero.style.opacity = 0;
      hero.style.pointerEvents = 'none';
    } else {
      hero.style.opacity = 1;
      hero.style.pointerEvents = 'auto';
    }
  });

 //  case study section
 const modal = document.getElementById('modal');
 const modalContent = document.getElementById('modal-content');
 const modalCaption = document.getElementById('modal-caption');
 const modalClose = document.getElementById('modal-close');
 const imageBoxes = document.querySelectorAll('.image-box');

 imageBoxes.forEach(box => {
   const img = box.querySelector('img');
   let hoverTimer;

   // Desktop hover 
   box.addEventListener('mouseenter', () => {
     if (!isTouchDevice()) {
       hoverTimer = setTimeout(() => {
         showModal(img);
       }, 900); // delay before opening larger image
     }
   });

   // Cancel timer if mouse leaves before delay
   box.addEventListener('mouseleave', () => {
     if (!isTouchDevice()) {
       clearTimeout(hoverTimer);
     }
   });

   // Click for desktop and mobile, immediatley show
   box.addEventListener('click', () => {
     showModal(img);
   });
 });

 // hide when clicked 
 modalClose.addEventListener('click', () => {
   modal.style.display = 'none';
 });

 function showModal(img) {
   const fullSrc = img.getAttribute('data-full');
   const caption = img.getAttribute('data-caption');
   if (fullSrc) {
     modalContent.src = fullSrc;
     modalCaption.textContent = caption || '';
     modal.style.display = 'flex';
   }
 }

 function isTouchDevice() {
   return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
 }

});

  // Quiz Section
  const quizData = [
    {
      question: "When was the camera obscura first discovered?",
      answers: [
        { text: "At least 400 BC", correct: true },
        { text: "200 BC", correct: false },
        { text: "100 AD", correct: false },
        { text: "50 AD", correct: false }
      ]
    },
    {
      question: "Who created the first in-camera photograph between 1822 and 1827?",
      answers: [
        { text: "Louis Daguerre", correct: false },
        { text: "Joseph Nicéphore Niépce", correct: true },
        { text: "William Henry Fox Talbot", correct: false },
        { text: "George Eastman", correct: false }
      ]
    },
    {
      question: "Which process did William Henry Fox Talbot develop in 1833?",
      answers: [
        { text: "Daguerreotype", correct: false },
        { text: "Cyanotype", correct: false },
        { text: "Photogenic drawing", correct: true },
        { text: "Wet Plate Collodion", correct: false }
      ]
    },
    {
      question: "Which process was introduced by Louis Daguerre in 1839?",
      answers: [
        { text: "Cyanotype", correct: false },
        { text: "Digital Photography", correct: false },
        { text: "Autochrome", correct: false },
        { text: "Daguerreotype", correct: true },
      ]
    },
    {
      question: "Which photographic process, introduced by Sir John Herschel in 1842, produced vivid blue images?",
      answers: [
        { text: "Cyanotype", correct: true },
        { text: "Daguerreotype", correct: false },
        { text: "Photogenic drawing", correct: false },
        { text: "Dry Plate Process", correct: false }
      ]
    },
    {
      question: "Which process did Frederick Scott Archer develop in 1851?",
      answers: [
        { text: "Dry Plate Process", correct: false },
        { text: "Autochrome", correct: false },
        { text: "Wet Plate Collodion Process", correct: true },
        { text: "Digital Photography", correct: false }
      ]
    },
    {
      question: "Who introduced the gelatin dry plate process in 1871?",
      answers: [
        { text: "Richard Leach Maddox", correct: true },
        { text: "Joseph Nicéphore Niépce", correct: false },
        { text: "Louis Daguerre", correct: false },
        { text: "George Eastman", correct: false }
      ]
    },
    {
      question: "Which company released the first camera that used roll film in 1888?",
      answers: [
        { text: "Nikon", correct: false },
        { text: "Kodak", correct: true },
        { text: "Canon", correct: false },
        { text: "Fujifilm", correct: false }
      ]
    },
    {
      question: "Which photographic process, introduced by the Lumière brothers in 1907, was the first commercially successful colour method?",
      answers: [
        { text: "Autochrome", correct: true },
        { text: "Cyanotype", correct: false },
        { text: "Digital Photography", correct: false },
        { text: "Wet Plate Collodion", correct: false }
      ]
    },
    {
      question: "In 1975, which engineer developed the first working prototype of a digital camera?",
      answers: [
        { text: "Richard Leach Maddox", correct: false },
        { text: "Joseph Niépce", correct: false },
        { text: "Louis Daguerre", correct: false },
        { text: "Steven Sasson", correct: true },
      ]
    }
  ];