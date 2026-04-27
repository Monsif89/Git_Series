window.gsapAnimations = {

    // Animation d'entree des cartes KPI
    animateCards: function (selector) {
        gsap.from(selector, {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.15,
            ease: "power3.out"
        });
    },

    // Animation du tableau (lignes)
    animateTableRows: function (selector) {
        gsap.from(selector, {
            duration: 0.5,
            y: 20,
            opacity: 0,
            stagger: 0.08,
            ease: "power2.out"
        });
    },

    // Animation fade-in generique
    fadeIn: function (selector) {
        gsap.from(selector, {
            duration: 0.6,
            opacity: 0,
            y: 20,
            ease: "power2.out"
        });
    },

    // Animation slide-in formulaire
    slideInForm: function (selector) {
        gsap.from(selector, {
            duration: 0.7,
            x: 60,
            opacity: 0,
            ease: "power3.out"
        });
    },

    // Animation scale pour graphiques
    scaleIn: function (selector) {
        gsap.from(selector, {
            duration: 0.8,
            scale: 0.8,
            opacity: 0,
            ease: "back.out(1.7)"
        });
    },

    // Animation sidebar
    animateSidebar: function () {
        gsap.from(".sidebar-nav-item", {
            duration: 0.4,
            x: -30,
            opacity: 0,
            stagger: 0.06,
            ease: "power2.out"
        });
    },

    // Animation hero / titre page
    animatePageTitle: function (selector) {
        gsap.from(selector, {
            duration: 0.6,
            y: -20,
            opacity: 0,
            ease: "power3.out"
        });
    },

    // ScrollTrigger pour sections
    animateOnScroll: function (selector) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(selector).forEach(function (el) {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                duration: 0.6,
                y: 40,
                opacity: 0,
                ease: "power2.out"
            });
        });
    },

    // Animation compteur (pour KPI)
    animateCounter: function (selector, targetValue) {
        let obj = { val: 0 };
        gsap.to(obj, {
            val: targetValue,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: function () {
                var el = document.querySelector(selector);
                if (el) {
                    el.textContent = Math.floor(obj.val);
                }
            }
        });
    },

    // Hover effect pour cartes
    addHoverEffect: function (selector) {
        document.querySelectorAll(selector).forEach(function (card) {
            card.addEventListener("mouseenter", function () {
                gsap.to(card, { duration: 0.3, y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.12)", ease: "power2.out" });
            });
            card.addEventListener("mouseleave", function () {
                gsap.to(card, { duration: 0.3, y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", ease: "power2.out" });
            });
        });
    },

    // Toggle sidebar collapse
    toggleSidebar: function () {
        var sidebar = document.querySelector('.sidebar');
        var topbar = document.querySelector('.topbar');
        var mainContent = document.querySelector('.main-content');
        if (sidebar) {
            sidebar.classList.toggle('collapsed');
            if (sidebar.classList.contains('collapsed')) {
                if (topbar) topbar.style.marginLeft = '72px';
                if (mainContent) mainContent.style.marginLeft = '72px';
            } else {
                if (topbar) topbar.style.marginLeft = '';
                if (mainContent) mainContent.style.marginLeft = '';
            }
        }
    },

    // Toggle mobile sidebar
    toggleMobileSidebar: function () {
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) {
            sidebar.classList.toggle('mobile-open');
        }
        if (overlay) {
            overlay.classList.toggle('visible');
        }
    }
};
