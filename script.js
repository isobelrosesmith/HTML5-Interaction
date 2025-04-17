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
