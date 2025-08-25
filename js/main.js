/* =============================
   Beyond The Limit Creations
   main.js
   ============================= */

// Mobile menu toggle
const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Modal functionality for gallery images (optional)
const galleryImages = document.querySelectorAll('.gallery-grid img');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('open');
    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.appendChild(modalImg);
  });
});

modal.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Optional: Scroll reveal animations
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
});
