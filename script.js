const MAINTENANCE_MODE = false;

if (MAINTENANCE_MODE) {
    // Show overlay
    const overlay = document.getElementById("maintenance-overlay");
    if (overlay) {
        overlay.style.display = "flex";
    }

   
    const dateElement = document.getElementById("maintenance-date");
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    // Prevent scrolling behind the overlay
    document.body.style.overflow = "hidden";
}

// MENU TOGGLE
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// ACTIVE NAV LINK ON SCROLL + STICKY HEADER 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove menu on scroll
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// SCROLLREVEAL ANIMATIONS
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(
    ".home-content, .heading, .about-content, .progress i, .progress span",
    { origin: "top" }
);
ScrollReveal().reveal(".about-img, .project-container", {
    origin: "bottom",
});
ScrollReveal().reveal(".progress h3, .bar span", {
    origin: "left",
});

// TYPED JS
const typed = new Typed(".text", {
    strings: [
        "Developer",
        "Coder",
        "Programmer",
        "Engineer",
        "Software Architect",
        "Technologist",
        "Blockchain Expert",
    ],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// (LIGHT / DARK)
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeToggleIcon = document.getElementById("theme-toggle-icon");
const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-theme");
    if (themeToggleIcon) {
        themeToggleIcon.classList.remove("bx-moon");
        themeToggleIcon.classList.add("bx-sun");
    }
}

// Toggle theme on click
if (themeToggleBtn && themeToggleIcon) {
    themeToggleBtn.addEventListener("click", () => {
        const isLight = body.classList.toggle("light-theme");

        if (isLight) {
            themeToggleIcon.classList.remove("bx-moon");
            themeToggleIcon.classList.add("bx-sun");
            localStorage.setItem("theme", "light");
        } else {
            themeToggleIcon.classList.remove("bx-sun");
            themeToggleIcon.classList.add("bx-moon");
            localStorage.setItem("theme", "dark");
        }
    });
}