// ============================================
// HEADER SCROLL EFFECT
// ============================================
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navMenu.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");

      // Update active link
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// ============================================
// ACTIVE SECTION HIGHLIGHTING ON SCROLL
// ============================================
const sections = document.querySelectorAll("section[id]");

function highlightNav() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNav);

// ============================================
// ANIMATED COUNTER FOR STATS
// ============================================
const animateCounter = (element, target, duration = 2000) => {
  let current = 0;
  const increment = target / (duration / 16);
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.ceil(current) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  };
  updateCounter();
};

const observeStats = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        const target = parseInt(entry.target.getAttribute("data-target"));
        const numberElement = entry.target.querySelector(".stat-number");
        animateCounter(numberElement, target);
        entry.target.classList.add("counted");
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat-item").forEach((stat) => {
  observeStats.observe(stat);
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Add loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML =
    '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
  submitBtn.disabled = true;

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    console.log("Form submitted:", formData);

    // Success message
    submitBtn.innerHTML =
      '<span>Message Sent!</span> <i class="fas fa-check"></i>';
    submitBtn.style.background = "var(--success-color)";

    // Reset form after 2 seconds
    setTimeout(() => {
      contactForm.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.background = "";
    }, 2000);
  }, 1500);
});

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .testimonial-card, .about-content, .about-image, .contact-info-item"
  );

  animateElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    fadeInObserver.observe(el);
  });
});

// ============================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "#!") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const hero = document.querySelector(".hero");
      const scrolled = window.pageYOffset;
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});

// ============================================
// MOUSE CURSOR TRAIL EFFECT (OPTIONAL)
// ============================================
const createCursorTrail = () => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".cursor-circle");

  if (circles.length === 0) {
    // Create cursor circles
    for (let i = 0; i < 20; i++) {
      const circle = document.createElement("div");
      circle.className = "cursor-circle";
      circle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary-color);
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.05};
        transition: transform 0.1s ease;
        display: none;
      `;
      document.body.appendChild(circle);
    }
  }

  window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    document.querySelectorAll(".cursor-circle").forEach((circle, index) => {
      circle.style.display = "block";
      circle.style.left = x - 5 + "px";
      circle.style.top = y - 5 + "px";
      circle.style.transform = `scale(${(20 - index) / 20})`;

      const nextCircle = document.querySelectorAll(".cursor-circle")[index + 1];
      if (nextCircle) {
        x += (parseInt(nextCircle.style.left) - x) * 0.3;
        y += (parseInt(nextCircle.style.top) - y) * 0.3;
      }
    });

    requestAnimationFrame(animateCircles);
  }

  // Uncomment to enable cursor trail
  // animateCircles();
};

// Enable cursor trail on desktop only
if (window.innerWidth > 768) {
  // createCursorTrail();
}

// ============================================
// PORTFOLIO FILTER (OPTIONAL ENHANCEMENT)
// ============================================
const initPortfolioFilter = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter items
        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            item.style.display = "block";
            item.style.animation = "fadeIn 0.5s ease";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
};

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyLoadImages = () => {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const createScrollToTop = () => {
  const scrollBtn = document.createElement("button");
  scrollBtn.className = "scroll-to-top";
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: var(--shadow-lg);
  `;

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.visibility = "hidden";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollBtn.addEventListener("mouseenter", () => {
    scrollBtn.style.transform = "scale(1.1) translateY(-5px)";
  });

  scrollBtn.addEventListener("mouseleave", () => {
    scrollBtn.style.transform = "scale(1) translateY(0)";
  });
};

// Initialize scroll to top button
createScrollToTop();

// ============================================
// TYPING EFFECT FOR HERO TITLE (OPTIONAL)
// ============================================
const typingEffect = (element, text, speed = 100) => {
  let index = 0;
  element.textContent = "";

  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  };

  type();
};

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize lazy loading
  lazyLoadImages();

  // Initialize portfolio filter if exists
  initPortfolioFilter();

  // Add loading animation class removal
  document.body.classList.add("loaded");

  // Log initialization
  console.log("🚀 AppDost Website Initialized Successfully!");
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
const debounce = (func, wait = 10) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Apply debounce to scroll events
const debouncedHighlightNav = debounce(highlightNav, 10);
window.addEventListener("scroll", debouncedHighlightNav);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
// Trap focus in mobile menu when open
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  });
};

// Apply focus trap when mobile menu is open
navMenu.addEventListener("transitionend", () => {
  if (navMenu.classList.contains("active")) {
    trapFocus(navMenu);
  }
});

// Close mobile menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
