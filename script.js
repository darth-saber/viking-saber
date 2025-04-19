// Lightsaber cursor implementation
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('lightsaber-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Rotate cursor based on movement direction (optional)
    if (typeof cursor.lastX !== 'undefined') {
      const deltaX = e.clientX - cursor.lastX;
      const deltaY = e.clientY - cursor.lastY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      cursor.style.transform = `rotate(${angle}deg)`;
    }
    cursor.lastX = e.clientX;
    cursor.lastY = e.clientY;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Countdown timer
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 10); // 10 days from now

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    if (distance < 0) {
      document.getElementById('countdown').innerHTML = "<h3 class='text-3xl font-semibold glow-blue mb-4'>The event has started!</h3>";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // FAQ toggle
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      if (answer) {
        answer.classList.toggle('hidden');
      }
    });
  });

  // Testimonials slider
  const slider = document.querySelector('.testimonial-slider');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
  });

  // Dark mode toggle with user preference saving
  const modeToggleBtn = document.getElementById('modeToggleBtn');

  // Apply saved mode on load
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  modeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  // Cookie consent banner
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

  // Show cookie consent if not accepted
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieConsent.classList.remove('hidden');
  }

  acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.classList.add('hidden');
  });

  // Newsletter modal popup
  const newsletterModal = document.getElementById('newsletterModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Show modal after 5 seconds
  setTimeout(() => {
    newsletterModal.classList.remove('hidden');
  }, 5000);

  closeModalBtn.addEventListener('click', () => {
    newsletterModal.classList.add('hidden');
  });

  // Close modal on outside click
  newsletterModal.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
      newsletterModal.classList.add('hidden');
    }
  });
});
