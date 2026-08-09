/* =====================================
   Mobile Menu
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });

}


/* =====================================
   Header Scroll Effect
===================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================
   Scroll Reveal
===================================== */

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .about-grid, .process-item, .technology-group"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================
   Current Year
===================================== */

const footerYear = document.querySelector(".footer-inner p");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} RAJAN`;

}


/* =====================================
   Smooth Navigation
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});