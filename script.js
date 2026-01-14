// ===== THEME TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Load saved theme or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    updateThemeIcon();

    // Theme toggle click event
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (body.classList.contains('dark-mode')) {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // ===== TAB NAVIGATION =====
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Initialize - hide all tabs except the active one
    tabContents.forEach(content => {
        if (!content.classList.contains('active')) {
            content.style.display = 'none';
        }
    });

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            
            if (targetContent) {
                targetContent.style.display = 'block';
                // Force reflow
                void targetContent.offsetWidth;
                targetContent.classList.add('active');
            }

            // Scroll to top of content area
            const contentArea = document.querySelector('.content-area');
            if (contentArea) {
                contentArea.scrollTop = 0;
            }
        });
    });

    // ===== SKILL BAR ANIMATION =====
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-item').forEach(skill => {
        skillObserver.observe(skill);
    });

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.service-card, .timeline-item, .skill-item, .portfolio-item, .workshop-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // ===== HORIZONTAL SCROLL FOR TOOLS & TESTIMONIALS =====
    const toolsScroll = document.querySelector('.tools-scroll');
    if (toolsScroll) {
        setupHorizontalScroll(toolsScroll);
    }

    const testimonialsScroll = document.querySelector('.testimonials-scroll');
    if (testimonialsScroll) {
        setupHorizontalScroll(testimonialsScroll);
    }

    // ===== CONTACT FORM SUBMISSION =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
                submitBtn.style.opacity = '0.8';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 2000);
            }, 1500);
        });
    }

    // ===== POPUP IMAGE CLICK TO ENLARGE =====
    const allPopupCards = document.querySelectorAll('.popup-card img');
    const bigImagePopup = document.getElementById('bigImagePopup');
    const bigImage = document.getElementById('bigImage');

    if (bigImagePopup && bigImage) {
        allPopupCards.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                bigImage.src = img.src;
                bigImagePopup.style.display = 'flex';
            });
        });

        bigImagePopup.addEventListener('click', (e) => {
            if (e.target === bigImagePopup || e.target.classList.contains('close')) {
                bigImagePopup.style.display = 'none';
            }
        });
    }
});

// ===== POPUP FUNCTIONS =====
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ===== WORKSHOP MODAL FUNCTIONS =====
function openWorkshopModal() {
    const modal = document.getElementById('workshopModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeWorkshopModal() {
    const modal = document.getElementById('workshopModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openWorkshopImage(imageSrc) {
    const bigImagePopup = document.getElementById('bigImagePopup');
    const bigImage = document.getElementById('bigImage');
    
    if (bigImagePopup && bigImage) {
        bigImage.src = imageSrc;
        bigImagePopup.style.display = 'flex';
    }
}

// Close popup when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        
        // Close workshop modal
        const workshopModal = document.getElementById('workshopModal');
        if (workshopModal && workshopModal.classList.contains('active')) {
            closeWorkshopModal();
        }
        
        document.body.style.overflow = '';
    }
});

// ===== FORM VALIDATION =====
function validateForm() {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
    }

    return true;
}

// ===== PARALLAX EFFECT FOR PROFILE PICTURE =====
window.addEventListener('mousemove', (e) => {
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic && window.innerWidth > 768) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        profilePic.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🎨 Portfolio Website ', 'background: #3B82F6; color: #ffffff; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold;');
console.log('%cDesigned with passion • Built with modern web technologies', 'color: #3B82F6; font-size: 14px; font-weight: 600;');
console.log('%cDark/Light Mode • Smooth Animations • Responsive Design', 'color: #64748b; font-size: 12px;');

// ===== HORIZONTAL SCROLL SETUP FUNCTION =====
function setupHorizontalScroll(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse drag to scroll
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        e.preventDefault();
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    // Mouse wheel to scroll horizontally
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.scrollLeft += e.deltaY;
    }, { passive: false });

    // Touch support for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - container.offsetLeft;
        touchScrollLeft = container.scrollLeft;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - touchStartX) * 2;
        container.scrollLeft = touchScrollLeft - walk;
    }, { passive: true });
}