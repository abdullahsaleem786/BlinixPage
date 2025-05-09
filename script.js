document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const mainNav = document.querySelector('.main-nav');
  const slider = document.querySelector('.cptw-testimonials-content');
  const leftButton = document.querySelector('.cptw-nav-left');
  const rightButton = document.querySelector('.cptw-nav-right');
  let currentIndex = 0;

  // Mobile menu toggle
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-menu-active');
    });
  }

  // Testimonials slider
  if (slider && leftButton && rightButton) {
    const cards = document.querySelectorAll('.cptw-testimonial-card1, .cptw-testimonial-card2, .cptw-testimonial-card3');
    const cardCount = cards.length;
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap

    leftButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
    });

    rightButton.addEventListener('click', () => {
      if (currentIndex < cardCount - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
    });

    // Adjust slider on window resize
    window.addEventListener('resize', () => {
      const newCardWidth = cards[0].offsetWidth + 20;
      slider.style.transform = `translateX(-${currentIndex * newCardWidth}px)`;
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  
  // Create mobile navigation if it doesn't exist
  if (!document.querySelector('.mobile-nav')) {
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    
    // Clone the navigation from desktop
    const mainNavUl = document.querySelector('.main-nav ul');
    const mobileNavUl = mainNavUl.cloneNode(true);
    
    mobileNav.appendChild(mobileNavUl);
    document.body.appendChild(mobileNav);
    
    // Add contact elements to mobile menu
    const contactDiv = document.createElement('div');
    contactDiv.className = 'mobile-contact';
    contactDiv.style.padding = '15px 30px';
    contactDiv.style.display = 'flex';
    contactDiv.style.flexDirection = 'column';
    contactDiv.style.gap = '10px';
    
    // Add phone number
    const phoneLink = document.querySelector('.phone-number').cloneNode(true);
    phoneLink.style.textAlign = 'center';
    contactDiv.appendChild(phoneLink);
    
    // Add CTA button
    const ctaButton = document.querySelector('.cta-button').cloneNode(true);
    ctaButton.style.textAlign = 'center';
    contactDiv.appendChild(ctaButton);
    
    mobileNav.appendChild(contactDiv);
  }
  
  const mobileNav = document.querySelector('.mobile-nav');
  
  // Toggle mobile menu when hamburger icon is clicked
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-nav') && 
        !event.target.closest('#mobile-menu') && 
        mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
    }
  });
  
  // Update menu visibility on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
    }
  });
});