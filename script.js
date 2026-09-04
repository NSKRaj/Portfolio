/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";
  }, 500);
});

/* =========================================================
   AOS INITIALIZATION
========================================================= */

AOS.init({
  duration: 900,

  easing: "ease-out-cubic",

  once: true,

  offset: 80,
});

/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typingText");

const roles = [
  "Front-End Developer",

  "SEO Specialist",

  "React Developer",

  "JavaScript Developer",

  "Web Developer",

  "Digital Marketer",
  
  "Social Media Marketer",
];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;

      setTimeout(typeEffect, 1800);

      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("mainNav");

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================================================
   MOBILE NAV CLOSE
========================================================= */

const navItems = document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse = document.getElementById("navbarNav");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

/* =========================================================
   PARTICLES
========================================================= */

const particles = document.getElementById("particles");

function createParticles() {
  for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration = 8 + Math.random() * 15 + "s";

    particle.style.animationDelay = Math.random() * 10 + "s";

    particle.style.opacity = Math.random();

    particles.appendChild(particle);
  }
}

createParticles();

/* =========================================================
   3D MOUSE EFFECT
========================================================= */

const heroVisual = document.querySelector(".hero-visual");

const codeCard = document.querySelector(".code-card");

if (heroVisual && codeCard) {
  heroVisual.addEventListener("mousemove", (event) => {
    const rect = heroVisual.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 35;

    const rotateX = (centerY - y) / 35;

    codeCard.style.transform = `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;
  });

  heroVisual.addEventListener("mouseleave", () => {
    codeCard.style.transform = "";
  });
}

/* =========================================================
   PROJECT CARD 3D TILT
========================================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 25;

    const rotateY = (x - centerX) / 25;

    card.style.transform = `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* =========================================================
   SKILL CARD TILT
========================================================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 25;

    const rotateX = (rect.height / 2 - y) / 25;

    card.style.transform = `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get("name");

    const email = formData.get("email");

    const subject = formData.get("subject");

    const message = formData.get("message");

    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
      `Hello Kuppuraj,

Name: ${name}
Email: ${email}

Message:
${message}`,
    );

    window.location.href = `mailto:nskraj1988@gmail.com
                ?subject=${mailSubject}
                &body=${mailBody}`;

    contactForm.reset();
  });
}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* =========================================================
   REDUCE MOTION ACCESSIBILITY
========================================================= */

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (mediaQuery.matches) {
  document.documentElement.style.scrollBehavior = "auto";
}
