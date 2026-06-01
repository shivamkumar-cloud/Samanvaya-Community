
// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu on link click

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.querySelector(".scroll-progress").style.width =
        progress + "%";
});

// Animated Counters

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 120;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Fade-In Animations

const sections = document.querySelectorAll(
    ".section, .card, .stat-card"
);

sections.forEach(section => {
    section.classList.add("fade-up");
});

const fadeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    fadeObserver.observe(section);
});

// Join Button

const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", () => {

    alert(
        "Thank you for your interest in Samanvaya! 🚀\n\nRegistration form coming soon."
    );
});

// Navbar Background Effect

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.85)";
    }
});

// Hero Typing Effect

const heroTitle = document.querySelector(".hero h1");

const text =
    "Empowering Students Through Innovation & Collaboration";

heroTitle.innerHTML = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 40);
    }
}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 300);
});

// Current Year in Footer

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Samanvaya Community. All Rights Reserved.`;
}

// Smooth Reveal Stagger for Cards

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.15}s`;
});

// Console Branding

console.log(`
🚀 SAMANVAYA COMMUNITY WEBSITE
Built with HTML, CSS & JavaScript

Learn • Build • Connect • Grow
`);