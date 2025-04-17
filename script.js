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

  let currentQuestionIndex = 0;
  const quizContainer = document.getElementById('quiz-container');
  const quizFeedback = document.getElementById('quiz-feedback');
  const nextQuestionBtn = document.getElementById('next-question');
  
  // load and display question
  function loadQuestion() {
    // Clear before question
    quizContainer.innerHTML = "";
    quizFeedback.textContent = "";
    
    if (currentQuestionIndex >= quizData.length) {
      // Display 'complete' text
      quizContainer.innerHTML = "<p>Quiz Complete! Thanks for playing.</p>";
      nextQuestionBtn.style.display = "none"; // hide next question button
      
      // try again button
      const tryAgainBtn = document.createElement("button");
      tryAgainBtn.textContent = "Try Again";
      tryAgainBtn.id = "try-again";
      // when clicked restart quiz
      tryAgainBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        nextQuestionBtn.style.display = "inline-block";
        loadQuestion();
      });
      quizContainer.appendChild(tryAgainBtn);
      
      return;
    }
    
    const currentQuestion = quizData[currentQuestionIndex];
    const questionEl = document.createElement('p');
    questionEl.textContent = currentQuestion.question;
    quizContainer.appendChild(questionEl);
    
    currentQuestion.answers.forEach(answer => {
      const answerBtn = document.createElement('span');
      answerBtn.textContent = answer.text;
      answerBtn.classList.add('answer');
      // click function to show feedback on right or wrong
      answerBtn.addEventListener('click', () => {
        if (answer.correct) {
          quizFeedback.textContent = "Correct!";
          quizFeedback.style.color = "green";
        } else {
          quizFeedback.textContent = "Incorrect!";
          quizFeedback.style.color = "red";
        }
      });
      quizContainer.appendChild(answerBtn);
    });
  }
  // go to next question when clicked
  nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
  });
  
  // load first question
  loadQuestion();



  // image Carousel function
  
  // call container and images
  const carousel = document.querySelector('.carousel');
  const carouselImages = document.querySelectorAll('.carousel img');
  // previuos and next buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  // track visible image
  let carouselIndex = 0;
// update carousel based on index image
  function updateCarousel() {
    const imageWidth = carouselImages[0].clientWidth;
    carousel.style.transform = `translateX(-${carouselIndex * imageWidth}px)`;
  }
// next button
  nextBtn.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
  });
// change image every 8 secs
  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    updateCarousel();
  }, 8000);


    // Drag and drop function
    // select all draggabel and drop zones
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');
    const matchFeedback = document.getElementById('match-feedback');
    const restartButton = document.getElementById('restart-drag-drop');
  
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', draggable.dataset.year);
      });
    });
  
    dropzones.forEach(dropzone => {
       // allow item to be dragged over
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.background = '#666'; // feedback on hover
      });
  // reset background when drag leaves drop
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.background = '';
      });
  
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedYear = e.dataTransfer.getData('text/plain');
        const correctYear = dropzone.dataset.answer;
  
        if (!dropzone.classList.contains('correct')) {
          if (draggedYear === correctYear) {
            //correct
            dropzone.textContent = `${dropzone.dataset.title} (${correctYear}) ✅`;
            dropzone.classList.add('correct');
            dropzone.classList.remove('incorrect');
          } else {
            //incrorrect
            dropzone.textContent = `${dropzone.dataset.title} ❌`;
            dropzone.classList.add('incorrect');
            dropzone.classList.remove('correct');
          }
          dropzone.style.background = '';
        }
  
        const allCorrect = Array.from(dropzones).every(dz => dz.classList.contains('correct'));
        if (allCorrect) {
          matchFeedback.textContent = 'All answers matched correctly!';
          restartButton.style.display = 'inline-block'; // restart button
        }
      });
    });
  // activity restarted after reload
    restartButton.addEventListener('click', () => {
      location.reload();
    });


  // Timeline tooltip 
  const timelineItems = document.querySelectorAll('.timeline-item');
  let tooltip; // manage one at a time
  
  timelineItems.forEach(item => {
    const info = item.getAttribute('data-info');
  
    // Desktop hover
    item.addEventListener('mouseenter', () => {
      if (!isTouchDevice()) {
        showTooltip(item, info); // show ion hover
      }
    });
  
    item.addEventListener('mouseleave', () => {
      if (!isTouchDevice() && tooltip) {
        tooltip.remove(); //unshow when mouse leaves
        tooltip = null;
      }
    });
  
    // Mobile click
    item.addEventListener('click', () => {
      if (isTouchDevice()) {
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        } else {
          showTooltip(item, info);
          setTimeout(() => {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }, 3000); // hide after 3 seconds
        }
      }
    });
  });
  
  // Helper functions
  function showTooltip(item, info) {
    tooltip = document.createElement('div');
    tooltip.className = 'timeline-tooltip';
    tooltip.textContent = info;
    document.body.appendChild(tooltip);
  
    const rect = item.getBoundingClientRect();
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const top = rect.bottom + scrollY + 10;
    const left = rect.left + rect.width / 2;
  
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }
  
  // detect touch devices 
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  
  