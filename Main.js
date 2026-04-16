        // Initialize Lucide Icons
        lucide.createIcons();
        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        // Intersection Observer for Fade-in Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);
        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });
        // Scroll to Top Logic & Navbar Styling on Scroll
        const navbar = document.getElementById('navbar');
        const toTopBtn = document.getElementById('scrollToTopBtn');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
            } else {
                navbar.classList.remove('shadow-md');
            }
            if (window.scrollY > 500) {
                toTopBtn.classList.remove('opacity-0', 'invisible');
            } else {
                toTopBtn.classList.add('opacity-0', 'invisible');
            }
        });
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });