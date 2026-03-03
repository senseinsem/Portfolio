// ===== THEME TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    updateThemeIcon();

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

    tabContents.forEach(content => {
        if (!content.classList.contains('active')) {
            content.style.display = 'none';
        }
    });

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.style.display = 'block';
                void targetContent.offsetWidth;
                targetContent.classList.add('active');
            }
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

    // ===== INIT FYP =====
    renderFYPCard();

    const fypTab = document.querySelector('[data-tab="fyp"]');
    if (fypTab) {
        fypTab.addEventListener('click', function() {
            renderFYPCard();
        });
    }

}); // <-- END of DOMContentLoaded


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
        const workshopModal = document.getElementById('workshopModal');
        if (workshopModal && workshopModal.classList.contains('active')) {
            closeWorkshopModal();
        }
        closeFYPLightbox();
        closeFYPDetail();
        closeFYPJourney();
        closeFYPAdmin();
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
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🎨 Portfolio Website ', 'background: #3B82F6; color: #ffffff; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold;');
console.log('%cDesigned with passion • Built with modern web technologies', 'color: #3B82F6; font-size: 14px; font-weight: 600;');
console.log('%cDark/Light Mode • Smooth Animations • Responsive Design', 'color: #64748b; font-size: 12px;');

// ===== HORIZONTAL SCROLL SETUP FUNCTION =====
// NOTE: This function definition ends with its own closing brace ONLY.
// Do NOT put any other code inside this function.
function setupHorizontalScroll(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

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

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.scrollLeft += e.deltaY;
    }, { passive: false });

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

} // <-- END of setupHorizontalScroll


// ================================================================
// ===== FYP SECTION - ALL CODE BELOW IS AT GLOBAL SCOPE =====
// ================================================================

const FYP_STORAGE_KEY = 'fypData';
const FYP_ADMIN_PASSWORD = 'fyp2026'; // Tukar password anda di sini

function getFYPData() {
    try {
        const raw = localStorage.getItem(FYP_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {
            project: {
                title: 'My Final Year Project',
                description: 'Click to view my FYP journey and progress updates.',
                year: '2025 - 2026',
                thumbnail: ''
            },
            entries: []
        };
    } catch (e) {
        return { project: { title: 'My Final Year Project', description: '', year: '2025 - 2026', thumbnail: '' }, entries: [] };
    }
}

function saveFYPData(data) {
    localStorage.setItem(FYP_STORAGE_KEY, JSON.stringify(data));
}

function formatDateMY(dateStr) {
    if (!dateStr) return '';
    const months = ['Jan','Feb','Mac','Apr','Mei','Jun','Jul','Ogos','Sep','Okt','Nov','Dis'];
    const d = new Date(dateStr + 'T00:00:00');
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function renderFYPCard() {
    const data = getFYPData();
    const p = data.project;

    const titleEl = document.getElementById('fypTitleDisplay');
    const descEl = document.getElementById('fypDescDisplay');
    const yearEl = document.getElementById('fypYearDisplay');
    const countEl = document.getElementById('fypEntryCount');
    const thumbEl = document.getElementById('fypThumbnailDisplay');
    const placeholderEl = document.getElementById('fypThumbPlaceholder');

    if (titleEl) titleEl.textContent = p.title || 'My Final Year Project';
    if (descEl) descEl.textContent = p.description || 'Click to view my FYP journey.';
    if (yearEl) yearEl.innerHTML = `<i class="fas fa-clock"></i> ${p.year || '2025 - 2026'}`;
    if (countEl) countEl.innerHTML = `<i class="fas fa-calendar-check"></i> ${data.entries.length} entries`;

    if (thumbEl && placeholderEl) {
        if (p.thumbnail) {
            thumbEl.src = p.thumbnail;
            thumbEl.style.display = 'block';
            placeholderEl.style.display = 'none';
        } else {
            thumbEl.style.display = 'none';
            placeholderEl.style.display = 'flex';
        }
    }
}

function openFYPJourney() {
    const data = getFYPData();
    const titleEl = document.getElementById('fypJourneyTitle');
    const subtitleEl = document.getElementById('fypJourneySubtitle');
    if (titleEl) titleEl.textContent = data.project.title;
    if (subtitleEl) subtitleEl.textContent = data.project.description;
    renderTimeline(data.entries);
    const modal = document.getElementById('fypJourneyModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFYPJourney() {
    const modal = document.getElementById('fypJourneyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function renderTimeline(entries) {
    const track = document.getElementById('fypTimelineTrack');
    if (!track) return;

    if (!entries || entries.length === 0) {
        track.innerHTML = `
            <div style="text-align:center; padding: 40px; width:100%; opacity:0.5;">
                <i class="fas fa-calendar-plus" style="font-size:40px; display:block; margin-bottom:12px;"></i>
                <p style="font-size:15px; font-weight:600;">Tiada entries lagi. Tambah melalui Admin Panel.</p>
            </div>`;
        return;
    }

    const sorted = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date));

    let html = '';
    sorted.forEach((entry, idx) => {
        const dateFormatted = formatDateMY(entry.date);
        const hasThumb = entry.thumbnail && entry.thumbnail.trim() !== '';

        html += `
        <div class="fyp-entry-node" onclick="openFYPDetail(${idx})" title="${entry.title}">
            <div class="fyp-entry-thumb-wrap">
                ${hasThumb
                    ? `<img src="${entry.thumbnail}" alt="${entry.title}" class="fyp-entry-thumb" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                       <div class="fyp-entry-thumb-placeholder" style="display:none;"><i class="fas fa-image"></i></div>`
                    : `<div class="fyp-entry-thumb-placeholder"><i class="fas fa-file-alt"></i></div>`
                }
            </div>
            <div class="fyp-entry-dot"></div>
            <div class="fyp-entry-date">${dateFormatted}</div>
            <div class="fyp-entry-label">${entry.title}</div>
        </div>`;

        if (idx < sorted.length - 1) {
            html += `<div class="fyp-entry-connector"></div>`;
        }
    });

    track.innerHTML = html;
    setupHorizontalScroll(track);
}

function openFYPDetail(entryIndexInSorted) {
    const data = getFYPData();
    const sorted = [...data.entries].sort((a, b) => new Date(a.date) - new Date(b.date));
    const entry = sorted[entryIndexInSorted];
    if (!entry) return;

    const badge = document.getElementById('fypDetailDateBadge');
    const title = document.getElementById('fypDetailTitle');
    const desc = document.getElementById('fypDetailDesc');
    const imagesEl = document.getElementById('fypDetailImages');

    if (badge) badge.textContent = formatDateMY(entry.date);
    if (title) title.textContent = entry.title;
    if (desc) desc.textContent = entry.description || 'No description provided.';

    if (imagesEl) {
        if (!entry.images || entry.images.length === 0) {
            imagesEl.innerHTML = `<p style="opacity:0.5; font-size:14px; grid-column:1/-1;">Tiada gambar untuk entry ini.</p>`;
        } else {
            let imgHtml = '';
            entry.images.forEach((imgUrl, i) => {
                const caption = (entry.captions && entry.captions[i]) ? entry.captions[i] : '';
                imgHtml += `
                <div class="fyp-detail-img-card" onclick="openFYPLightbox('${imgUrl}', '${caption.replace(/'/g, "\\'")}')">
                    <img src="${imgUrl}" alt="${caption || 'Image ' + (i+1)}" loading="lazy"
                         onerror="this.parentElement.style.display='none'">
                    ${caption ? `<div class="fyp-detail-img-caption">${caption}</div>` : ''}
                </div>`;
            });
            imagesEl.innerHTML = imgHtml;
        }
    }

    const modal = document.getElementById('fypDetailModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeFYPDetail() {
    const modal = document.getElementById('fypDetailModal');
    if (modal) modal.classList.remove('active');
}

function openFYPLightbox(src, caption) {
    const lb = document.getElementById('fypLightbox');
    const img = document.getElementById('fypLightboxImg');
    const cap = document.getElementById('fypLightboxCaption');
    if (lb && img) {
        img.src = src;
        if (cap) cap.textContent = caption || '';
        lb.classList.add('active');
    }
}

function closeFYPLightbox() {
    const lb = document.getElementById('fypLightbox');
    if (lb) lb.classList.remove('active');
}

function openAdminPanel() {
    const modal = document.getElementById('fypAdminModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('fypAdminLogin').style.display = 'block';
        document.getElementById('fypAdminDashboard').style.display = 'none';
        const pwInput = document.getElementById('fypAdminPassword');
        if (pwInput) { pwInput.value = ''; setTimeout(() => pwInput.focus(), 300); }
    }
}

function closeFYPAdmin() {
    const modal = document.getElementById('fypAdminModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function verifyAdminPassword() {
    const pw = document.getElementById('fypAdminPassword')?.value;
    if (pw === FYP_ADMIN_PASSWORD) {
        document.getElementById('fypAdminLogin').style.display = 'none';
        document.getElementById('fypAdminDashboard').style.display = 'block';
        loadAdminDashboard();
    } else {
        const input = document.getElementById('fypAdminPassword');
        if (input) {
            input.style.borderColor = '#ef4444';
            input.placeholder = 'Wrong password! Try again.';
            input.value = '';
            setTimeout(() => {
                input.style.borderColor = '';
                input.placeholder = 'Enter admin password';
            }, 2000);
        }
    }
}

function logoutAdmin() {
    document.getElementById('fypAdminLogin').style.display = 'block';
    document.getElementById('fypAdminDashboard').style.display = 'none';
    document.getElementById('fypAdminPassword').value = '';
}

function loadAdminDashboard() {
    const data = getFYPData();
    const p = data.project;

    const titleInput = document.getElementById('adminProjectTitle');
    const yearInput = document.getElementById('adminProjectYear');
    const descInput = document.getElementById('adminProjectDesc');
    const thumbInput = document.getElementById('adminProjectThumb');

    if (titleInput) titleInput.value = p.title || '';
    if (yearInput) yearInput.value = p.year || '';
    if (descInput) descInput.value = p.description || '';
    if (thumbInput) thumbInput.value = p.thumbnail || '';

    const dateInput = document.getElementById('adminEntryDate');
    if (dateInput && !dateInput.value) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    renderAdminEntriesList(data.entries);
}

function saveProjectSettings() {
    const data = getFYPData();
    data.project.title = document.getElementById('adminProjectTitle')?.value.trim() || data.project.title;
    data.project.year = document.getElementById('adminProjectYear')?.value.trim() || data.project.year;
    data.project.description = document.getElementById('adminProjectDesc')?.value.trim() || data.project.description;
    data.project.thumbnail = document.getElementById('adminProjectThumb')?.value.trim() || '';
    saveFYPData(data);
    renderFYPCard();
    showAdminToast('✅ Project settings saved!');
}

function addJourneyEntry() {
    const date = document.getElementById('adminEntryDate')?.value;
    const title = document.getElementById('adminEntryTitle')?.value.trim();
    const desc = document.getElementById('adminEntryDesc')?.value.trim();
    const thumb = document.getElementById('adminEntryThumb')?.value.trim();
    const imagesRaw = document.getElementById('adminEntryImages')?.value.trim();
    const captionsRaw = document.getElementById('adminEntryCaptions')?.value.trim();

    if (!date || !title) {
        showAdminToast('⚠️ Date and Title are required!', true);
        return;
    }

    const images = imagesRaw ? imagesRaw.split('\n').map(s => s.trim()).filter(s => s) : [];
    const captions = captionsRaw ? captionsRaw.split('\n').map(s => s.trim()) : [];

    const data = getFYPData();
    data.entries.push({ date, title, description: desc, thumbnail: thumb, images, captions });
    saveFYPData(data);

    document.getElementById('adminEntryTitle').value = '';
    document.getElementById('adminEntryDesc').value = '';
    document.getElementById('adminEntryThumb').value = '';
    document.getElementById('adminEntryImages').value = '';
    document.getElementById('adminEntryCaptions').value = '';

    renderAdminEntriesList(data.entries);
    renderFYPCard();
    showAdminToast('✅ Entry added successfully!');
}

function deleteJourneyEntry(originalIndex) {
    if (!confirm('Delete this entry?')) return;
    const data = getFYPData();
    data.entries.splice(originalIndex, 1);
    saveFYPData(data);
    renderAdminEntriesList(data.entries);
    renderFYPCard();
    showAdminToast('🗑️ Entry deleted.');
}

function renderAdminEntriesList(entries) {
    const container = document.getElementById('adminEntriesList');
    if (!container) return;

    if (!entries || entries.length === 0) {
        container.innerHTML = `<p style="opacity:0.5; font-size:14px; text-align:center; padding:20px;">No entries yet.</p>`;
        return;
    }

    const indexed = entries.map((e, i) => ({ ...e, _origIdx: i }));
    indexed.sort((a, b) => new Date(a.date) - new Date(b.date));

    container.innerHTML = indexed.map(entry => `
        <div class="fyp-admin-entry-row">
            <div class="fyp-admin-entry-info">
                <div class="fyp-admin-entry-date-label">${formatDateMY(entry.date)}</div>
                <div class="fyp-admin-entry-title-label">${entry.title}</div>
                <div class="fyp-admin-entry-img-count">${entry.images ? entry.images.length : 0} images</div>
            </div>
            <div style="display:flex; gap:8px; flex-shrink:0;">
                <button class="fyp-admin-entry-edit" onclick="loadEntryForEdit(${entry._origIdx})">
                    <i class="fas fa-pencil-alt"></i> Edit
                </button>
                <button class="fyp-admin-entry-delete" onclick="deleteJourneyEntry(${entry._origIdx})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

function loadEntryForEdit(origIdx) {
    const data = getFYPData();
    const entry = data.entries[origIdx];
    if (!entry) return;

    // Isi semula form "Add New Journey Entry" dengan data entry yang dipilih
    document.getElementById('adminEntryDate').value = entry.date || '';
    document.getElementById('adminEntryTitle').value = entry.title || '';
    document.getElementById('adminEntryDesc').value = entry.description || '';
    document.getElementById('adminEntryThumb').value = entry.thumbnail || '';
    document.getElementById('adminEntryImages').value = (entry.images || []).join('\n');
    document.getElementById('adminEntryCaptions').value = (entry.captions || []).join('\n');

    // Tukar butang "Add Entry" kepada "Save Edit"
    const addBtn = document.querySelector('.fyp-admin-block .fyp-admin-save-btn[onclick="addJourneyEntry()"]');
    if (addBtn) {
        addBtn.innerHTML = '<i class="fas fa-save"></i> Save Edit';
        addBtn.setAttribute('onclick', `saveEditedEntry(${origIdx})`);
    }

    // Scroll ke atas supaya user nampak form
    const modal = document.querySelector('.fyp-admin-content');
    if (modal) modal.scrollTop = 0;

    showAdminToast('✏️ Entry loaded. Edit and click Save Edit.');
}

function saveEditedEntry(origIdx) {
    const date = document.getElementById('adminEntryDate')?.value;
    const title = document.getElementById('adminEntryTitle')?.value.trim();
    const desc = document.getElementById('adminEntryDesc')?.value.trim();
    const thumb = document.getElementById('adminEntryThumb')?.value.trim();
    const imagesRaw = document.getElementById('adminEntryImages')?.value.trim();
    const captionsRaw = document.getElementById('adminEntryCaptions')?.value.trim();

    if (!date || !title) {
        showAdminToast('⚠️ Date and Title are required!', true);
        return;
    }

    const images = imagesRaw ? imagesRaw.split('\n').map(s => s.trim()).filter(s => s) : [];
    const captions = captionsRaw ? captionsRaw.split('\n').map(s => s.trim()) : [];

    const data = getFYPData();
    data.entries[origIdx] = { date, title, description: desc, thumbnail: thumb, images, captions };
    saveFYPData(data);

    // Clear form
    document.getElementById('adminEntryDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('adminEntryTitle').value = '';
    document.getElementById('adminEntryDesc').value = '';
    document.getElementById('adminEntryThumb').value = '';
    document.getElementById('adminEntryImages').value = '';
    document.getElementById('adminEntryCaptions').value = '';

    // Reset butang balik ke "Add Entry"
    const saveBtn = document.querySelector('.fyp-admin-block .fyp-admin-save-btn[onclick*="saveEditedEntry"]');
    if (saveBtn) {
        saveBtn.innerHTML = '<i class="fas fa-plus"></i> Add Entry';
        saveBtn.setAttribute('onclick', 'addJourneyEntry()');
    }

    renderAdminEntriesList(data.entries);
    renderFYPCard();
    showAdminToast('✅ Entry updated successfully!');
}

function showAdminToast(message, isError = false) {
    const existing = document.getElementById('fypAdminToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'fypAdminToast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 14px 28px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Outfit', sans-serif;
        z-index: 999999;
        animation: fadeInUp 0.3s ease;
        background: ${isError ? '#ef4444' : '#22c55e'};
        color: #ffffff;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        pointer-events: none;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ===== FYP DRAG & DROP =====
let detailImagesBase64 = []; // array of base64 strings

function initFYPDropZones() {
    // Thumbnail drop zone
    const thumbZone = document.getElementById('thumbDropZone');
    if (thumbZone) {
        thumbZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            thumbZone.classList.add('dragover');
        });
        thumbZone.addEventListener('dragleave', () => thumbZone.classList.remove('dragover'));
        thumbZone.addEventListener('drop', (e) => {
            e.preventDefault();
            thumbZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) processThumbFile(file);
        });
    }

    // Detail images drop zone
    const detailZone = document.getElementById('detailDropZone');
    if (detailZone) {
        detailZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            detailZone.classList.add('dragover');
        });
        detailZone.addEventListener('dragleave', () => detailZone.classList.remove('dragover'));
        detailZone.addEventListener('drop', (e) => {
            e.preventDefault();
            detailZone.classList.remove('dragover');
            const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
            files.forEach(processDetailFile);
        });
    }
}

function handleThumbFile(input) {
    const file = input.files[0];
    if (file) processThumbFile(file);
}

function processThumbFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        document.getElementById('adminEntryThumb').value = base64;
        const preview = document.getElementById('thumbPreview');
        const clearBtn = document.getElementById('thumbClearBtn');
        const dropIcon = document.querySelector('#thumbDropZone .fyp-drop-icon');
        const dropText = document.querySelector('#thumbDropZone .fyp-drop-text');
        const dropHint = document.querySelector('#thumbDropZone .fyp-drop-hint');
        if (preview) { preview.src = base64; preview.style.display = 'block'; }
        if (clearBtn) clearBtn.style.display = 'inline-flex';
        if (dropIcon) dropIcon.style.display = 'none';
        if (dropText) dropText.style.display = 'none';
        if (dropHint) dropHint.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

function clearThumb(e) {
    e.stopPropagation();
    document.getElementById('adminEntryThumb').value = '';
    document.getElementById('thumbFileInput').value = '';
    const preview = document.getElementById('thumbPreview');
    const clearBtn = document.getElementById('thumbClearBtn');
    const dropIcon = document.querySelector('#thumbDropZone .fyp-drop-icon');
    const dropText = document.querySelector('#thumbDropZone .fyp-drop-text');
    const dropHint = document.querySelector('#thumbDropZone .fyp-drop-hint');
    if (preview) { preview.src = ''; preview.style.display = 'none'; }
    if (clearBtn) clearBtn.style.display = 'none';
    if (dropIcon) dropIcon.style.display = 'block';
    if (dropText) dropText.style.display = 'block';
    if (dropHint) dropHint.style.display = 'block';
}

function handleDetailFiles(input) {
    const files = Array.from(input.files).filter(f => f.type.startsWith('image/'));
    files.forEach(processDetailFile);
}

function processDetailFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        detailImagesBase64.push(base64);
        renderDetailPreviews();
        // Update hidden input
        document.getElementById('adminEntryImages').value = detailImagesBase64.join('\n');
    };
    reader.readAsDataURL(file);
}

function renderDetailPreviews() {
    const grid = document.getElementById('detailPreviewGrid');
    if (!grid) return;
    grid.innerHTML = detailImagesBase64.map((src, i) => `
        <div class="fyp-detail-preview-item">
            <img src="${src}" alt="Image ${i+1}">
            <button class="fyp-detail-preview-remove" onclick="removeDetailImage(${i})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function removeDetailImage(idx) {
    detailImagesBase64.splice(idx, 1);
    renderDetailPreviews();
    document.getElementById('adminEntryImages').value = detailImagesBase64.join('\n');
}

function resetDropZones() {
    // Reset thumbnail
    clearThumb({ stopPropagation: () => {} });
    // Reset detail images
    detailImagesBase64 = [];
    renderDetailPreviews();
    document.getElementById('adminEntryImages').value = '';
    const detailInput = document.getElementById('detailFileInput');
    if (detailInput) detailInput.value = '';
}
