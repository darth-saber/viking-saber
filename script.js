// Cool interactive JavaScript for Viking Saber page

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1.viking-font');
  const heroSection = document.querySelector('.hero');
  const forgeBtn = document.getElementById('forgeSaberBtn');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const tagline = document.querySelector('.hero p');

  // Toggle glow effect on heading when clicked
  heading.addEventListener('click', () => {
    heading.classList.toggle('glow');
  });

  // Background pulse effect on hero section
  let pulse = 0;
  let increasing = true;
  setInterval(() => {
    if (increasing) {
      pulse += 0.01;
      if (pulse >= 0.3) increasing = false;
    } else {
      pulse -= 0.01;
      if (pulse <= 0) increasing = true;
    }
    heroSection.style.background = `linear-gradient(rgba(0,0,0,${0.6 + pulse}), rgba(0,0,0,${0.8 + pulse})), url('Viking%20Sabers.jpg') center/cover no-repeat`;
  }, 50);

  // Console greeting
  console.log('%cWelcome to Viking Saber! The Code is strong with the Clan.', 'color: cyan; font-weight: bold; font-family: monospace;');

  // Glowing pulse animation on Forge Your Saber button
  let glowIntensity = 0;
  let glowIncreasing = true;
  setInterval(() => {
    if (glowIncreasing) {
      glowIntensity += 0.02;
      if (glowIntensity >= 1) glowIncreasing = false;
    } else {
      glowIntensity -= 0.02;
      if (glowIntensity <= 0) glowIncreasing = true;
    }
    forgeBtn.style.boxShadow = `0 0 20px rgba(6, 182, 212, ${glowIntensity})`;
  }, 60);

  // Scroll to top button functionality
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.pointerEvents = 'auto';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.pointerEvents = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Typing effect for tagline
  const fullText = tagline.textContent;
  tagline.textContent = '';
  let index = 0;
  function type() {
    if (index < fullText.length) {
      tagline.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  type();

  // Dark/Light mode toggle
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  modeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      modeToggleBtn.textContent = 'Toggle Dark Mode';
    } else {
      modeToggleBtn.textContent = 'Toggle Light Mode';
    }
  });

  // Hover animations on tools section cards
  const toolCards = document.querySelectorAll('.bg-gray-800');
  toolCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 0 20px 5px rgba(0, 255, 255, 0.7)';
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '';
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });
});
