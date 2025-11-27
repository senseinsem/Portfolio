window.addEventListener("load", function() {
    const loader = document.getElementById("loading-screen");
    const minLoadingTime = 5000; // 2000ms = 2 seconds
    setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // fade out duration
    }, minLoadingTime);
});


const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
        themeIcon.src = 'mode/light.png'; // icon for light mode
    } else {
        body.classList.remove('darkmode');
        body.classList.add('lightmode');
        themeIcon.src = 'mode/dark.png'; // icon for dark mode
    }
});

const heroHeader = document.getElementById('hero-header');
const images = ['mc1.png','mc2.png','mc3.png','mc4.png'];
let current = 0;

setInterval(() => {
    const next = (current + 1) % images.length;
    // Smooth transition
    heroHeader.style.backgroundImage = `url(${images[next]})`;
    heroHeader.style.transition = 'background-image 1s ease-in-out';
    current = next;
}, 3000); // change every 3 seconds


// Set background image for each school card
document.querySelectorAll('.school-card').forEach(card => {
    const bg = card.getAttribute('data-bg');
    if(bg) {
        card.style.backgroundImage = `url(${bg})`;
    }
});

document.querySelectorAll('.school-card').forEach(card => {
    const bg = card.getAttribute('data-bg');
    if(bg) {
        card.style.backgroundImage = `url(${bg})`;
    }
});

// =====================================================
// TOGGLE TODAY'S DATE WITH FADE
// =====================================================
function showDate() {
    const dateElement = document.getElementById('date');

    if (!dateElement) return;

    if (dateElement.classList.contains('show')) {
        // Hide with fade-up
        dateElement.classList.remove('show');
        setTimeout(() => {
            dateElement.innerText = "";
        }, 500); // match CSS transition
    } else {
        // Show date
        const today = new Date();
        dateElement.innerText = today.toDateString();
        setTimeout(() => dateElement.classList.add('show'), 10);
    }
}

// =====================================================
// SIMPLE FORM VALIDATION
// =====================================================
function validateForm() {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Thank you! Your message has been sent.");
    return true;
}

// =====================================================
// SKILL CARD POPUPS
// =====================================================
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = 'block';
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = 'none';
}

// Close popup when clicking outside
window.addEventListener('click', (event) => {
    document.querySelectorAll('.popup').forEach(popup => {
        if (event.target === popup) popup.style.display = 'none';
    });
});

// =====================================================
// FAQ ACCORDION WITH SMOOTH TRANSITIONS
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            if (!answer) return;

            if (answer.style.maxHeight) {
                // Collapse
                answer.style.maxHeight = null;
                answer.style.paddingTop = "0";
                answer.style.paddingBottom = "0";
                answer.style.opacity = 0;
            } else {
                // Collapse others
                document.querySelectorAll('.faq-answer').forEach(a => {
                    a.style.maxHeight = null;
                    a.style.paddingTop = "0";
                    a.style.paddingBottom = "0";
                    a.style.opacity = 0;
                });
                // Expand this
                answer.style.paddingTop = "10px";
                answer.style.paddingBottom = "10px";
                answer.style.opacity = 1;
                answer.style.maxHeight = answer.scrollHeight + 20 + "px";
            }
        });
    });
});

// =====================================================
// SHRINK HERO HEADER ON SCROLL
// =====================================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('hero-header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
// Select all images inside any .popup-card
const allPopupCards = document.querySelectorAll('.popup-card img');
const bigImagePopup = document.getElementById('bigImagePopup');
const bigImage = document.getElementById('bigImage');

// Add click event to all images
allPopupCards.forEach(img => {
    img.addEventListener('click', () => {
        bigImage.src = img.src;            // Set the clicked image
        bigImagePopup.style.display = 'flex'; // Show big image popup
    });
});

// Close function for popup
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Close popup when clicking outside the image
bigImagePopup.addEventListener('click', (e) => {
    if (e.target === bigImagePopup) {
        bigImagePopup.style.display = 'none';
    }
});

