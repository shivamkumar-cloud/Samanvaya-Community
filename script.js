// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== STATIC STATS ANIMATION (About stats) =====
const statNumbers = document.querySelectorAll('.stat-num');
function animateStats(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statCard = entry.target;
      const targetNum = parseInt(statCard.closest('.stat-card').getAttribute('data-count'));
      let current = 0;
      const increment = targetNum / 50;
      const updateNumber = () => {
        current += increment;
        if (current < targetNum) {
          statCard.innerText = Math.floor(current);
          requestAnimationFrame(updateNumber);
        } else {
          statCard.innerText = targetNum;
        }
      };
      updateNumber();
      observer.unobserve(statCard);
    }
  });
}

const statObserver = new IntersectionObserver(animateStats, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => {
  statObserver.observe(el);
});

// ===== IMPACT COUNTER ANIMATION (scroll triggered) =====
const impactNumbers = document.querySelectorAll('.impact-number');
let counted = false;

function startImpactCounters() {
  impactNumbers.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.innerText = target;
        clearInterval(interval);
      } else {
        counter.innerText = current;
      }
    }, 25);
  });
}

const impactSection = document.querySelector('.impact');
const impactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counted) {
      counted = true;
      startImpactCounters();
      impactObserver.unobserve(impactSection);
    }
  });
}, { threshold: 0.4 });
if (impactSection) impactObserver.observe(impactSection);

// ===== FORM SUBMISSION HANDLER =====
const form = document.getElementById('communityForm');
const formMessageDiv = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const college = document.getElementById('college').value.trim();
    const interest = document.getElementById('interest').value;

    if (!name || !email) {
      formMessageDiv.innerHTML = '<span style="color:#d9534f;">❌ Please fill name and email.</span>';
      return;
    }
    if (!email.includes('@')) {
      formMessageDiv.innerHTML = '<span style="color:#d9534f;">❌ Enter a valid email address.</span>';
      return;
    }

    // Simulate success response
    formMessageDiv.innerHTML = '<span style="color:#2e7d32;">🎉 Thanks ' + name + '! You\'re now part of Samanvaya community. Check your inbox soon.</span>';
    form.reset();
    setTimeout(() => {
      formMessageDiv.innerHTML = '';
    }, 5000);
  });
}

// ===== NEWSLETTER SUBSCRIPTION =====
const newsBtn = document.getElementById('newsBtn');
const newsEmail = document.getElementById('newsEmail');
if (newsBtn && newsEmail) {
  newsBtn.addEventListener('click', () => {
    const emailVal = newsEmail.value.trim();
    if (emailVal && emailVal.includes('@')) {
      alert('✨ Subscribed! Stay tuned for amazing opportunities.');
      newsEmail.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// ===== SMOOTH SCROLLING FOR ALL ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ADD HOVER INTERACTIVITY TO CARDS (glow effect) =====
const cards = document.querySelectorAll('.initiative-card, .stat-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.25s, box-shadow 0.3s';
  });
});

// ===== SIMPLE TYPEWRITER FOR SLOGAN? (extra fun on hero badge but optional) =====
// dynamic year in footer
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
}

console.log("Samanvaya — Interactive community webpage ready!");