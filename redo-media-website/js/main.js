/* ============================================
   HYPERFOCUS — Main JavaScript
   Scroll animations, carousels, FAQ, interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // NAVBAR — Scroll-based style changes
    // ========================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========================================
    // MOBILE NAV TOGGLE
    // ========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const btnNav = document.querySelector('.btn-nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (btnNav) {
                btnNav.style.display = btnNav.style.display === 'inline-block' ? 'none' : 'inline-block';
            }
        });
    }

    // ========================================
    // FADE-IN ON SCROLL — Generic observer
    // ========================================
    const fadeElements = document.querySelectorAll(
        '.service-row, .about-content, .faq-item, .section-heading, .section-heading-large, .testimonial-carousel-wrapper'
    );

    fadeElements.forEach(el => el.classList.add('fade-in'));

    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerFade.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => observerFade.observe(el));

    // ========================================
    // FEATURED WORK CAROUSEL
    // ========================================
    const workCarousel = document.getElementById('workCarousel');

    if (workCarousel) {
        const slides = workCarousel.querySelectorAll('.carousel-slide');
        let currentWork = 1;

        const wrapper = workCarousel.closest('.carousel-wrapper');
        const prevBtn = wrapper.querySelector('.prev');
        const nextBtn = wrapper.querySelector('.next');

        function updateWorkCarousel() {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === currentWork) {
                    slide.classList.add('active');
                }
            });

            const activeSlide = slides[currentWork];
            if (activeSlide) {
                const offset = activeSlide.offsetLeft - (workCarousel.offsetWidth / 2) + (activeSlide.offsetWidth / 2);
                workCarousel.scrollTo({ left: offset, behavior: 'smooth' });
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentWork = (currentWork - 1 + slides.length) % slides.length;
                updateWorkCarousel();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentWork = (currentWork + 1) % slides.length;
                updateWorkCarousel();
            });
        }

        updateWorkCarousel();
    }

    // ========================================
    // TESTIMONIALS CAROUSEL
    // ========================================
    const testCarousel = document.getElementById('testimonialCarousel');

    if (testCarousel) {
        const testSlides = testCarousel.querySelectorAll('.testimonial-slide');
        const testDots = document.querySelectorAll('#testimonialDots .dot');
        const testPrev = document.getElementById('testPrev');
        const testNext = document.getElementById('testNext');
        let currentTest = 0;

        function updateTestCarousel() {
            testSlides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === currentTest) slide.classList.add('active');
            });
            testDots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === currentTest) dot.classList.add('active');
            });
        }

        if (testPrev) {
            testPrev.addEventListener('click', () => {
                currentTest = (currentTest - 1 + testSlides.length) % testSlides.length;
                updateTestCarousel();
            });
        }

        if (testNext) {
            testNext.addEventListener('click', () => {
                currentTest = (currentTest + 1) % testSlides.length;
                updateTestCarousel();
            });
        }

        testDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentTest = i;
                updateTestCarousel();
            });
        });

        // Auto-advance every 5 seconds
        setInterval(() => {
            currentTest = (currentTest + 1) % testSlides.length;
            updateTestCarousel();
        }, 5000);
    }

    // ========================================
    // FAQ ACCORDION
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('open');
                }
            });

            // Toggle current item
            item.classList.toggle('open', !isOpen);
        });
    });

    // ========================================
    // SMOOTH SCROLL for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
