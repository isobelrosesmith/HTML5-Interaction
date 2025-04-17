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
});
