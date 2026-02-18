
// State Management
const state = {
    temples: [],
    visited: new Set(JSON.parse(localStorage.getItem('shiva_visited')) || []),
    togo: new Set(JSON.parse(localStorage.getItem('shiva_togo')) || []),
    lang: localStorage.getItem('shiva_lang') || 'en', // Default to English for broader access initially, or 'ta' if preferred
    filters: {
        search: '',
        district: 'All',
        status: 'all' // all, visited, togo
    }
};

// UI Translations
const translations = {
    ta: {
        title: "சிவன் கோயில்கள்",
        visited: "பார்வையிட்டவை",
        togo: "செல்ல வேண்டியவை",
        searchPlaceholder: "கோயில், மாவட்டம் தேடுக...",
        allDistricts: "அனைத்து மாவட்டங்கள்",
        all: "அனைத்தும்",
        openMaps: "வரைபடத்தில் பார்",
        markVisited: "பார்வையிட்டதைக் குறி",
        addBucket: "பட்டியலில் சேர்",
        god: "இறைவன் (மூலவர்)",
        goddess: "இறைவி (அம்பாள்)",
        history: "ஸ்தல வரலாறு",
        travel: "பயண விவரங்கள்",
        close: "மூடு"
    },
    en: {
        title: "Shiva Temples",
        visited: "Visited",
        togo: "To Go",
        searchPlaceholder: "Search temples, districts...",
        allDistricts: "All Districts",
        all: "All",
        openMaps: "Open in Maps",
        markVisited: "Mark as Visited",
        addBucket: "Add to Bucket List",
        god: "Lord Shiva (Moolavar)",
        goddess: "Goddess (Ambal)",
        history: "Sthala Varalaru (History)",
        travel: "Travel Details",
        close: "Close"
    }
};

// DOM Elements
const templeList = document.getElementById('temple-list');
const searchInput = document.getElementById('search-input');
const districtSelect = document.getElementById('district-select');
const statusTabs = document.querySelectorAll('.tab');
const visitedCountEl = document.getElementById('visited-count');
const togoCountEl = document.getElementById('togo-count');
const modal = document.getElementById('temple-modal');

// Language Toggle
const langBtn = document.getElementById('lang-toggle');

// Modal Elements
const modalTitle = document.getElementById('modal-title');
const modalDistrict = document.getElementById('modal-district');
const mapsLink = document.getElementById('maps-link');
const closeModalBtn = document.querySelector('.close-modal');

// Initialization
function init() {
    processData();
    setupEventListeners();
    applyLanguage();
    renderFilters();
    renderTemples();
    updateStats();
}

function getName(temple) {
    // If English is selected, try English name, else fallback to Tamil/Original
    // If Tamil is selected, use Tamil name (original text usually)
    if (state.lang === 'en') {
        return temple.name_en || temple.name_ta;
    }
    return temple.name_ta;
}

function applyLanguage() {
    const t = translations[state.lang];

    // Update Header
    const logoTitle = document.querySelector('.logo h1');
    if (logoTitle) logoTitle.textContent = t.title;

    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length > 1) {
        statLabels[0].textContent = t.visited;
        statLabels[1].textContent = t.togo;
    }

    // Update Input Placeholder
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // Update District Select "All" option
    const allOption = districtSelect.querySelector('option[value="All"]');
    if (allOption) allOption.textContent = t.allDistricts;

    // Update Tabs
    if (statusTabs.length > 2) {
        statusTabs[0].textContent = t.all;
        statusTabs[1].textContent = t.visited;
        statusTabs[2].textContent = t.togo;
    }

    // Update Lang Button Text
    if (langBtn) {
        langBtn.textContent = state.lang === 'ta' ? 'English' : 'தமிழ்';
    }
}

function processData() {
    let currentDistrict = "Unknown District";

    // Filter out header row if present
    const validData = templesData.filter(item => item.ID !== "Temple Index" && item.Details !== "Temples");

    state.temples = validData.map(item => {
        // Fill down District
        if (item.District && item.District.trim() !== "") {
            currentDistrict = item.District.trim();
        }

        // Parse Details
        let details = item.Details || "";
        let id = item.ID;
        let index = "";

        // Extract Index (e.g. "01. ")
        const indexMatch = details.match(/^(\d+)\.\s*/);
        if (indexMatch) {
            index = indexMatch[1];
            details = details.substring(indexMatch[0].length);
        }

        let name_ta = details;

        // Split by " - " to guess parts
        const parts = details.split(' - ').map(s => s.trim());

        if (parts.length > 0) {
            name_ta = parts[0].replace(/[.,]+$/, '');
        }

        let location = "";
        let phone = "";

        if (parts.length > 1) {
            // Check if last part looks like a phone number
            const lastPart = parts[parts.length - 1];
            const isPhone = /[\d\s-]{6,}/.test(lastPart) && /\d/.test(lastPart);

            if (isPhone) {
                phone = lastPart;
                if (parts.length > 2) {
                    location = parts.slice(1, parts.length - 1).join(', ');
                } else if (parts.length === 2) {
                    // Just Name - Phone
                }
            } else {
                location = parts.slice(1).join(', ');
            }
        }

        // Fallback for location
        if (!location && parts.length > 1 && !phone) {
            location = parts.slice(1).join(', ');
        }

        if (location) location = location.replace(/^[.,]+|[.,]+$/g, '').trim();

        // Use the new Name_EN property if it exists
        const name_en = item.Name_EN || "";

        return {
            id,
            index,
            name_ta,
            name_en,
            location,
            phone,
            district: currentDistrict,
            god: item.God || "",
            goddess: item.Goddess || "",
            history: item.Sthala_Varalaru || "",
            travel: item.Travel_Details || "",
            originalText: item.Details
        };
    });
}

function renderFilters() {
    // Save current selection
    const currentVal = districtSelect.value;

    // Clear and add All
    districtSelect.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'All';
    allOpt.textContent = translations[state.lang].allDistricts;
    districtSelect.appendChild(allOpt);

    const districts = [...new Set(state.temples.map(t => t.district))].sort();

    districts.forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        districtSelect.appendChild(option);
    });

    // Restore selection if valid, else All
    if ([...districtSelect.options].some(o => o.value === currentVal)) {
        districtSelect.value = currentVal;
    } else {
        districtSelect.value = 'All';
    }
}

function renderTemples() {
    templeList.innerHTML = '';

    const filtered = state.temples.filter(t => {
        // District Filter
        if (state.filters.district !== 'All' && t.district !== state.filters.district) return false;

        // Search Filter
        if (state.filters.search) {
            const term = state.filters.search.toLowerCase();
            const name = getName(t).toLowerCase();
            const match = name.includes(term) ||
                t.location.toLowerCase().includes(term) ||
                t.district.toLowerCase().includes(term) ||
                t.originalText.toLowerCase().includes(term);
            if (!match) return false;
        }

        // Status Filter
        if (state.filters.status === 'visited') {
            return state.visited.has(t.id);
        }
        if (state.filters.status === 'togo') {
            return state.togo.has(t.id);
        }

        return true;
    });

    filtered.forEach(temple => {
        const card = createCard(temple);
        templeList.appendChild(card);
    });

    // Animate
    const cards = document.querySelectorAll('.temple-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
}

function createCard(temple) {
    const isVisited = state.visited.has(temple.id);
    const div = document.createElement('div');
    div.className = 'temple-card';
    div.onclick = () => openModal(temple);

    div.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${getName(temple)}</h3>
            <span class="card-id">${temple.index || temple.id}</span>
        </div>
        <p class="card-details">${temple.location || temple.originalText}</p>
        <div class="card-footer">
            <span class="district-tag">${temple.district}</span>
            ${isVisited ? '<div class="status-check visited-true" title="Visited"></div>' : ''}
        </div>
    `;

    return div;
}

function updateStats() {
    visitedCountEl.textContent = state.visited.size;
    togoCountEl.textContent = state.togo.size;
}

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        renderTemples();
    });

    districtSelect.addEventListener('change', (e) => {
        state.filters.district = e.target.value;
        renderTemples();
    });

    statusTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            statusTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.filters.status = tab.dataset.filter;
            renderTemples();
        });
    });

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            state.lang = state.lang === 'ta' ? 'en' : 'ta';
            localStorage.setItem('shiva_lang', state.lang);
            applyLanguage();
            renderFilters();
            renderTemples();
        });
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Modal toggle listeners - Use generic handler to avoid duplicated logic
}

function saveState() {
    localStorage.setItem('shiva_visited', JSON.stringify([...state.visited]));
    localStorage.setItem('shiva_togo', JSON.stringify([...state.togo]));
}

function openModal(temple) {
    const t = translations[state.lang];
    modal.dataset.currentId = temple.id;
    modalTitle.textContent = getName(temple);
    modalDistrict.textContent = temple.district;

    // Deities
    const godContent = temple.god ? `${temple.god}` : (state.lang === 'ta' ? "தகவல் இல்லை" : "Data to be updated");
    const goddessContent = temple.goddess ? `${temple.goddess}` : (state.lang === 'ta' ? "தகவல் இல்லை" : "Data to be updated");
    const historyContent = temple.history || (state.lang === 'ta' ? "வரலாறு விரைவில்..." : "Sthala varalaru details to be updated shortly.");
    const travelContent = temple.travel || temple.location || temple.originalText;

    // Update Modal DOM
    const modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="deities-section">
            <div class="info-group">
                <label>${t.god}</label>
                <p class="highlight-text" style="color: var(--accent-color); font-weight: 500;">${godContent}</p>
            </div>
            <div class="info-group">
                <label>${t.goddess}</label>
                <p class="highlight-text" style="color: var(--secondary-color); font-weight: 500;">${goddessContent}</p>
            </div>
        </div>

        <div class="info-group">
            <label>${t.history}</label>
            <p class="scrolling-text" style="max-height: 100px; overflow-y: auto; background: var(--surface-highlight); padding: 0.5rem; border-radius: 8px; font-size: 0.9rem;">${historyContent}</p>
        </div>

        <div class="info-group">
            <label>${t.travel}</label>
            <p>${travelContent}</p>
            ${temple.phone ? `<p class="phone" style="margin-top:0.5rem; color:var(--text-muted)"><i data-lucide="phone" style="width:14px; display:inline"></i> ${temple.phone}</p>` : ''}
        </div>
        
        <div class="actions">
            <a id="maps-link" href="#" target="_blank" class="btn btn-primary">
                <i data-lucide="map"></i> ${t.openMaps}
            </a>
            <div class="toggle-status">
                <label class="checkbox-container">
                    <input type="checkbox" id="modal-visited-check">
                    <span class="checkmark"></span>
                    ${t.markVisited}
                </label>
                <label class="checkbox-container">
                    <input type="checkbox" id="modal-togo-check">
                    <span class="checkmark"></span>
                    ${t.addBucket}
                </label>
            </div>
        </div>
    `;

    // Re-attach listeners
    const visitedCheck = document.getElementById('modal-visited-check');
    const togoCheck = document.getElementById('modal-togo-check');
    const mLink = document.getElementById('maps-link');

    visitedCheck.checked = state.visited.has(temple.id);
    togoCheck.checked = state.togo.has(temple.id);

    visitedCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            state.visited.add(temple.id);
            state.togo.delete(temple.id);
            togoCheck.checked = false;
        } else {
            state.visited.delete(temple.id);
        }
        saveState();
        renderTemples();
        updateStats();
    });

    togoCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            state.togo.add(temple.id);
        } else {
            state.togo.delete(temple.id);
        }
        saveState();
        updateStats();
    });

    const query = `${getName(temple)} Temple, ${temple.location || ''}, ${temple.district}`;
    mLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

    lucide.createIcons();

    modal.classList.add('active');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Start app
init();
