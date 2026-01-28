// ===================================
// KLASSY MINIMALIST - JAVASCRIPT
// Simple, subtle interactions only
// ===================================

document.addEventListener('DOMContentLoaded', function () {

  // === 1. SMOOTH SCROLL FOR ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // === 2. SUBTLE FADE-IN ON SCROLL ===
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply to sections
  const elementsToAnimate = document.querySelectorAll(
    '.feature, .stat-item, .pricing-card, .professors-grid'
  );

  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
  });

  // === 3. NAVBAR SCROLL EFFECT (OPTIONAL) ===
  let lastScroll = 0;
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add subtle shadow when scrolled
    if (currentScroll > 50) {
      nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
    } else {
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // === 4. PROFESSOR GRID HOVER EFFECT (OPTIONAL) ===
  const professorImage = document.querySelector('.professors-image');

  if (professorImage) {
    professorImage.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.4s ease';
    });

    professorImage.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  }

  // === 5. PRICING CARD INTERACTIONS ===
  const pricingCards = document.querySelectorAll('.pricing-card');

  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.borderColor = 'var(--primary-900)';
    });

    card.addEventListener('mouseleave', function () {
      if (!this.classList.contains('pricing-featured')) {
        this.style.borderColor = 'rgba(0, 0, 0, 0.12)';
      }
    });
  });

  // === 6. SIMPLE CONSOLE LOG ===
  console.log('✨ Klassy Minimalist Landing Page Loaded');

});

// === 7. PREVENT LAYOUT SHIFT ===
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
