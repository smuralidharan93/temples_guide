
// State Management
const state = {
    temples: [],
    source: localStorage.getItem('temple_source') || 'shiva', // 'shiva' or 'divyadesam'
    visited: new Set(JSON.parse(localStorage.getItem('shiva_visited')) || []),
    visitedDates: JSON.parse(localStorage.getItem('shiva_visited_dates')) || {}, // { id: "YYYY-MM-DD" }
    togo: new Set(JSON.parse(localStorage.getItem('shiva_togo')) || []),
    lang: localStorage.getItem('shiva_lang') || 'en',
    viewMode: localStorage.getItem('view_mode') || 'grid', // 'grid' or 'list'
    groupBy: localStorage.getItem('group_by') || 'none', // 'none', 'district', 'naadu', 'date'
    filters: {
        search: '',
        district: 'All',
        status: 'all' // all, visited, togo
    }
};

// UI Translations
const translations = {
    ta: {
        title: "கோயில் வழிகாட்டி",
        visited: "பார்வையிட்டவை",
        togo: "செல்ல வேண்டியவை",
        searchPlaceholder: "கோயில், மாவட்டம், ஊர் தேடுக...",
        allDistricts: "அனைத்து மாவட்டங்கள்",
        all: "அனைத்தும்",
        openMaps: "வரைபடத்தில் பார்",
        markVisited: "பார்வையிட்டதைக் குறி",
        addBucket: "பட்டியலில் சேர்",
        god: "இறைவன் (மூலவர்)",
        goddess: "இறைவி (அம்பாள்)",
        history: "ஸ்தல வரலாறு",
        travel: "பயண விவரங்கள்",
        close: "மூடு",
        groupBy: "குழுப்படுத்து:",
        none: "இல்லை",
        district: "மாவட்டம்",
        naadu: "நாடு (மண்டலம்)",
        date: "தேதி",
        visitDateLabel: "பார்வையிட்ட தேதி:",
        gridView: "கட்டம்",
        listView: "பட்டியல்",
        shivaTitle: "சிவன் கோயில்கள் (பாடல் பெற்ற தலங்கள்)",
        divyaTitle: "108 வைணவ திவ்ய தேசங்கள்",
        unspecifiedDate: "தேதி குறிப்பிடப்படாதவை"
    },
    en: {
        title: "Temple Guide",
        visited: "Visited",
        togo: "To Go",
        searchPlaceholder: "Search name, district, location...",
        allDistricts: "All Districts",
        all: "All",
        openMaps: "Open in Maps",
        markVisited: "Mark as Visited",
        addBucket: "Add to Bucket List",
        god: "Main Deity",
        goddess: "Goddess/Thayar",
        history: "Sthala Varalaru (History)",
        travel: "Travel Details",
        close: "Close",
        groupBy: "Group by:",
        none: "None",
        district: "District",
        naadu: "Region (Naadu)",
        date: "Date",
        visitDateLabel: "Visit Date:",
        gridView: "Grid",
        listView: "List",
        shivaTitle: "Shiva Temples (Paadal Petra Sthalams)",
        divyaTitle: "108 Divya Desams",
        unspecifiedDate: "Unspecified Date"
    }
};

// Region Mapping Helpers
function getRegion(index, source) {
    const idx = parseInt(index);
    if (source === 'shiva') {
        if (idx >= 1 && idx <= 63) return { ta: "சோழ நாடு (காவிரி வடகரை)", en: "Chola Nadu (Cauvery North)" };
        if (idx >= 64 && idx <= 191) return { ta: "சோழ நாடு (காவிரி தென்கரை)", en: "Chola Nadu (Cauvery South)" };
        if (idx >= 192 && idx <= 213) return { ta: "நடு நாடு", en: "Nadu Nadu" };
        if (idx >= 214 && idx <= 245) return { ta: "தொண்டை நாடு", en: "Thondai Nadu" };
        if (idx >= 246 && idx <= 249) return { ta: "பாண்டி நாடு", en: "Pandiya Nadu" };
        if (idx >= 250 && idx <= 263) return { ta: "கொங்கு நாடு", en: "Kongu Nadu" };
        if (idx >= 264 && idx <= 265) return { ta: "மலை நாடு", en: "Malai Nadu" };
        if (idx >= 266 && idx <= 270) return { ta: "துளுவ நாடு", en: "Tuluva Nadu" };
        if (idx >= 271 && idx <= 275) return { ta: "வட நாடு", en: "Vada Nadu" };
        return { ta: "மற்றவை", en: "Others" };
    } else {
        if (idx >= 1 && idx <= 40) return { ta: "சோழ நாடு", en: "Chola Nadu" };
        if (idx >= 41 && idx <= 42) return { ta: "நடு நாடு", en: "Nadu Nadu" };
        if (idx >= 43 && idx <= 64) return { ta: "தொண்டை நாடு", en: "Thondai Nadu" };
        if (idx >= 65 && idx <= 66) return { ta: "வட நாடு", en: "Vada Nadu" };
        if (idx >= 67 && idx <= 84) return { ta: "பாண்டி நாடு", en: "Pandiya Nadu" };
        if (idx >= 85 && idx <= 97) return { ta: "மலை நாடு", en: "Malai Nadu" };
        if (idx >= 98 && idx <= 106) return { ta: "வட நாடு", en: "Vada Nadu" };
        if (idx === 107) return { ta: "திருப்பாற்கடல்", en: "Thiru Parkadal" };
        if (idx === 108) return { ta: "பரமபதம்", en: "Paramapadam" };
        return { ta: "மற்றவை", en: "Others" };
    }
}

// DOM Elements
const templeList = document.getElementById('temple-list');
const searchInput = document.getElementById('search-input');
const districtSelect = document.getElementById('district-select');
const statusTabs = document.querySelectorAll('.tab');
const visitedCountEl = document.getElementById('visited-count');
const togoCountEl = document.getElementById('togo-count');
const modal = document.getElementById('temple-modal');
const langBtn = document.getElementById('lang-toggle');

// Source Toggle
const sourceSelect = document.createElement('select');
sourceSelect.id = 'source-select';
sourceSelect.classList.add('source-select-custom');
sourceSelect.style.cssText = "margin-left: 1rem; background: var(--surface-highlight); border: 1px solid var(--border-color); color: var(--text-color); padding: 0.5rem; border-radius: 8px; cursor: pointer; font-family: var(--font-primary); font-weight: 600;";
sourceSelect.innerHTML = `
    <option value="shiva">Shiva (276)</option>
    <option value="divyadesam">Divya Desam (108)</option>
`;
const headerLogo = document.querySelector('.logo');
if (headerLogo) headerLogo.appendChild(sourceSelect);

// Modal Elements
const modalTitle = document.getElementById('modal-title');
const modalDistrict = document.getElementById('modal-district');
const mapsLink = document.getElementById('maps-link');
const closeModalBtn = document.querySelector('.close-modal');

// Initialization
function init() {
    loadState();
    processData();
    setupEventListeners();
    applyLanguage();
    renderFilters();
    renderTemples();
    updateStats();

    // Set initial toggle states based on state
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        if (btn.dataset.group === state.groupBy) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    document.querySelectorAll('.view-btn').forEach(btn => {
        if (btn.dataset.view === state.viewMode) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

function loadState() {
    state.source = localStorage.getItem('temple_source') || 'shiva';
    const keyPrefix = state.source === 'shiva' ? 'shiva' : 'divya';
    state.visited = new Set(JSON.parse(localStorage.getItem(`${keyPrefix}_visited`)) || []);
    state.visitedDates = JSON.parse(localStorage.getItem(`${keyPrefix}_visited_dates`)) || {};
    state.togo = new Set(JSON.parse(localStorage.getItem(`${keyPrefix}_togo`)) || []);
    state.lang = localStorage.getItem('shiva_lang') || 'en';
    state.viewMode = localStorage.getItem('view_mode') || 'grid';
    state.groupBy = localStorage.getItem('group_by') || 'none';
}

function saveState() {
    const keyPrefix = state.source === 'shiva' ? 'shiva' : 'divya';
    localStorage.setItem(`${keyPrefix}_visited`, JSON.stringify([...state.visited]));
    localStorage.setItem(`${keyPrefix}_visited_dates`, JSON.stringify(state.visitedDates));
    localStorage.setItem(`${keyPrefix}_togo`, JSON.stringify([...state.togo]));
    localStorage.setItem('temple_source', state.source);
    localStorage.setItem('view_mode', state.viewMode);
    localStorage.setItem('group_by', state.groupBy);
    localStorage.setItem('shiva_lang', state.lang);
}

function getName(temple) {
    if (state.lang === 'en') {
        return temple.name_en || temple.name_ta;
    }
    return temple.name_ta;
}

function getRegionName(temple) {
    return state.lang === 'ta' ? temple.region.ta : temple.region.en;
}

function applyLanguage() {
    const t = translations[state.lang];

    // Header
    const logoTitle = document.querySelector('.logo h1');
    if (logoTitle) logoTitle.textContent = state.source === 'shiva' ? t.shivaTitle : t.divyaTitle;

    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length > 1) {
        statLabels[0].textContent = t.visited;
        statLabels[1].textContent = t.togo;
    }

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    const allOption = districtSelect.querySelector('option[value="All"]');
    if (allOption) allOption.textContent = t.allDistricts;

    if (statusTabs.length > 2) {
        statusTabs[0].textContent = t.all;
        statusTabs[1].textContent = t.visited;
        statusTabs[2].textContent = t.togo;
    }

    if (langBtn) {
        langBtn.textContent = state.lang === 'ta' ? 'தமிழ்' : 'English';
    }

    // Grouping labels
    const groupLabel = document.getElementById('label-group-by');
    if (groupLabel) groupLabel.textContent = t.groupBy;

    const groupBtns = document.querySelectorAll('#group-by-toggle .toggle-btn');
    groupBtns.forEach(btn => {
        const key = btn.dataset.group;
        btn.textContent = t[key] || key;
    });
}

function processData() {
    state.temples = [];

    if (state.source === 'divyadesam') {
        if (typeof divyaDesamData !== 'undefined') {
            state.temples = divyaDesamData.map((item, i) => {
                const index = (i + 1).toString();
                return {
                    id: item.id || `DD${index}`,
                    index: index,
                    name_ta: item.name_ta,
                    name_en: item.name_en,
                    location: item.location,
                    phone: "",
                    district: item.district,
                    region: getRegion(index, 'divyadesam'),
                    god: item.god,
                    goddess: item.goddess,
                    history: item.history,
                    travel: item.travel,
                    originalText: item.name_ta
                };
            });
        }
    } else {
        let currentDistrict = "Unknown District";
        const validData = templesData.filter(item => item.ID !== "Temple Index" && item.Details !== "Temples");

        state.temples = validData.map((item, i) => {
            if (item.District && item.District.trim() !== "") {
                currentDistrict = item.District.trim();
            }

            let details = item.Details || "";
            let id = item.ID;
            let index = "";
            const indexMatch = details.match(/^(\d+)\.\s*/);
            if (indexMatch) {
                index = indexMatch[1];
                details = details.substring(indexMatch[0].length);
            }

            let name_ta = details;
            const parts = details.split(' - ').map(s => s.trim());
            if (parts.length > 0) name_ta = parts[0].replace(/[.,]+$/, '');

            let location = "";
            let phone = "";
            if (parts.length > 1) {
                const lastPart = parts[parts.length - 1];
                const isPhone = /[\d\s-]{6,}/.test(lastPart) && /\d/.test(lastPart);
                if (isPhone) {
                    phone = lastPart;
                    if (parts.length > 2) location = parts.slice(1, parts.length - 1).join(', ');
                } else {
                    location = parts.slice(1).join(', ');
                }
            }
            if (!location && parts.length > 1 && !phone) location = parts.slice(1).join(', ');
            if (location) location = location.replace(/^[.,]+|[.,]+$/g, '').trim();

            return {
                id,
                index: index || (i + 1).toString(),
                name_ta,
                name_en: item.Name_EN || "",
                location,
                phone,
                district: currentDistrict,
                region: getRegion(index || (i + 1).toString(), 'shiva'),
                god: item.God || "",
                goddess: item.Goddess || "",
                history: item.Sthala_Varalaru || "",
                travel: item.Travel_Details || "",
                originalText: item.Details
            };
        });
    }
}

function renderFilters() {
    const currentVal = districtSelect.value;
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

    if ([...districtSelect.options].some(o => o.value === currentVal)) districtSelect.value = currentVal;
    else districtSelect.value = 'All';
}

function searchMatch(temple, term) {
    if (!term) return true;
    term = term.toLowerCase();

    if (temple.name_ta.toLowerCase().includes(term)) return true;
    if (temple.name_en.toLowerCase().includes(term)) return true;
    if (temple.location.toLowerCase().includes(term)) return true;
    if (temple.district.toLowerCase().includes(term)) return true;
    if (temple.god.toLowerCase().includes(term)) return true;
    if (temple.goddess.toLowerCase().includes(term)) return true;
    if (temple.originalText.toLowerCase().includes(term)) return true;

    const words = term.split(/\s+/).filter(w => w.length > 2);
    if (words.length > 1) {
        return words.every(word =>
            temple.name_ta.toLowerCase().includes(word) ||
            temple.name_en.toLowerCase().includes(word) ||
            temple.location.toLowerCase().includes(word) ||
            temple.district.toLowerCase().includes(word)
        );
    }

    return false;
}

function renderTemples() {
    templeList.innerHTML = '';
    templeList.className = `temple-grid ${state.viewMode === 'list' ? 'list-view' : ''}`;

    const filtered = state.temples.filter(t => {
        const districtMatch = state.filters.district === 'All' || t.district === state.filters.district;
        const statusMatch = state.filters.status === 'all' ||
            (state.filters.status === 'visited' && state.visited.has(t.id)) ||
            (state.filters.status === 'togo' && state.togo.has(t.id));
        return districtMatch && statusMatch && searchMatch(t, state.filters.search);
    });

    if (state.groupBy === 'none') {
        filtered.forEach(temple => templeList.appendChild(createCard(temple)));
    } else {
        const groups = {};

        filtered.forEach(t => {
            let key = "";
            if (state.groupBy === 'district') key = t.district;
            else if (state.groupBy === 'naadu') key = getRegionName(t);
            else if (state.groupBy === 'date') {
                const dateVal = state.visitedDates[t.id];
                if (dateVal) {
                    const d = new Date(dateVal);
                    key = d.toLocaleDateString(state.lang === 'ta' ? 'ta-IN' : 'en-US', { month: 'long', year: 'numeric' });
                } else {
                    key = translations[state.lang].unspecifiedDate;
                }
            }

            if (!groups[key]) groups[key] = [];
            groups[key].push(t);
        });

        let sortedKeys = Object.keys(groups).sort();
        if (state.groupBy === 'date') {
            sortedKeys.sort((a, b) => {
                if (a === translations[state.lang].unspecifiedDate) return 1;
                if (b === translations[state.lang].unspecifiedDate) return -1;
                return new Date(b) - new Date(a);
            });
        }

        sortedKeys.forEach(key => {
            const section = document.createElement('div');
            section.className = 'group-section';
            section.innerHTML = `
                <div class="group-header">
                    <h2>${key}</h2>
                    <span class="group-count">${groups[key].length}</span>
                </div>
                <div class="${state.viewMode === 'list' ? 'temple-list-v' : 'temple-grid'}"></div>
            `;
            const container = section.querySelector('div:last-child');
            groups[key].forEach(t => container.appendChild(createCard(t)));
            templeList.appendChild(section);
        });
    }

    lucide.createIcons();

    const cards = document.querySelectorAll('.temple-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${Math.min(index * 0.03, 1)}s`;
    });
}

function createCard(temple) {
    const isVisited = state.visited.has(temple.id);
    const isTogo = state.togo.has(temple.id);
    const visitDate = state.visitedDates[temple.id];

    const div = document.createElement('div');
    div.className = `temple-card ${isVisited ? 'visited' : ''} ${isTogo ? 'togo' : ''}`;
    div.onclick = () => openModal(temple);

    div.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${getName(temple)}</h3>
            <span class="card-id">${temple.index}</span>
        </div>
        <p class="card-details">${temple.location || temple.district}</p>
        <div class="card-footer">
            <div class="card-meta">
                <span class="district-tag">${temple.district}</span>
                ${visitDate ? `<span class="visit-date-tag"><i data-lucide="calendar"></i> ${visitDate}</span>` : ''}
            </div>
            <div class="card-actions">
                ${isVisited ? '<i data-lucide="check-circle" class="status-icon visited"></i>' : ''}
                ${isTogo ? '<i data-lucide="bookmark" class="status-icon togo"></i>' : ''}
            </div>
        </div>
    `;

    return div;
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

    sourceSelect.addEventListener('change', (e) => {
        state.source = e.target.value;
        state.filters.district = 'All';
        loadState();
        processData();
        renderFilters();
        applyLanguage();
        renderTemples();
        updateStats();
        saveState();
    });

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            state.lang = state.lang === 'ta' ? 'en' : 'ta';
            saveState();
            applyLanguage();
            renderFilters();
            renderTemples();
        });
    }

    document.getElementById('group-by-toggle').addEventListener('click', (e) => {
        const btn = e.target.closest('.toggle-btn');
        if (!btn) return;
        document.querySelectorAll('#group-by-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.groupBy = btn.dataset.group;
        saveState();
        renderTemples();
    });

    document.getElementById('view-mode-toggle').addEventListener('click', (e) => {
        const btn = e.target.closest('.view-btn');
        if (!btn) return;
        document.querySelectorAll('#view-mode-toggle .view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;
        saveState();
        renderTemples();
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function updateStats() {
    visitedCountEl.textContent = state.visited.size;
    togoCountEl.textContent = state.togo.size;
}

function openModal(temple) {
    const t = translations[state.lang];
    modal.dataset.currentId = temple.id;
    modalTitle.textContent = getName(temple);
    modalDistrict.textContent = temple.district;

    const godContent = temple.god || (state.lang === 'ta' ? "தகவல் இல்லை" : "Details coming soon");
    const goddessContent = temple.goddess || (state.lang === 'ta' ? "தகவல் இல்லை" : "Details coming soon");
    const historyContent = temple.history || (state.lang === 'ta' ? "வரலாறு விரைவில்..." : "History details to be updated.");
    const travelContent = temple.travel || temple.location || temple.originalText;

    let godLabel = t.god;
    let goddessLabel = t.goddess;
    if (state.source === 'divyadesam') {
        godLabel = state.lang === 'ta' ? 'பெருமாள் (மூலவர்)' : 'Perumal (Main Deity)';
        goddessLabel = state.lang === 'ta' ? 'தாயார்' : 'Thayar (Goddess)';
    }

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="deities-section">
            <div class="info-group">
                <label>${godLabel}</label>
                <p class="highlight-text">${godContent}</p>
            </div>
            <div class="info-group">
                <label>${goddessLabel}</label>
                <p class="highlight-text">${goddessContent}</p>
            </div>
        </div>
        <div class="info-group">
            <label>${t.history}</label>
            <p class="history-scroll">${historyContent}</p>
        </div>
        <div class="info-group">
            <label>${t.travel}</label>
            <p>${travelContent}</p>
            ${temple.phone ? `<p class="phone"><i data-lucide="phone"></i> ${temple.phone}</p>` : ''}
        </div>
        
        <div id="visit-date-container" class="info-group" style="display: ${state.visited.has(temple.id) ? 'block' : 'none'}; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 1rem;">
            <label>${t.visitDateLabel}</label>
            <input type="date" id="modal-visit-date" value="${state.visitedDates[temple.id] || ''}" style="background: var(--surface-highlight); border: 1px solid var(--border-color); color: var(--text-color); padding: 0.5rem; border-radius: 8px; width: 100%; margin-top: 0.5rem;">
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

    const visitedCheck = document.getElementById('modal-visited-check');
    const togoCheck = document.getElementById('modal-togo-check');
    const dateInput = document.getElementById('modal-visit-date');
    const dateContainer = document.getElementById('visit-date-container');
    const mLink = document.getElementById('maps-link');

    visitedCheck.checked = state.visited.has(temple.id);
    togoCheck.checked = state.togo.has(temple.id);

    visitedCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            state.visited.add(temple.id);
            state.togo.delete(temple.id);
            if (togoCheck) togoCheck.checked = false;
            dateContainer.style.display = 'block';
            if (!dateInput.value) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.value = today;
                state.visitedDates[temple.id] = today;
            }
        } else {
            state.visited.delete(temple.id);
            dateContainer.style.display = 'none';
            delete state.visitedDates[temple.id];
        }
        saveState();
        renderTemples();
        updateStats();
    });

    dateInput.addEventListener('change', (e) => {
        state.visitedDates[temple.id] = e.target.value;
        saveState();
        renderTemples();
    });

    togoCheck.addEventListener('change', (e) => {
        if (e.target.checked) state.togo.add(temple.id);
        else state.togo.delete(temple.id);
        saveState();
        renderTemples();
        updateStats();
    });

    const query = `${getName(temple)} Temple, ${temple.location || ''}, ${temple.district}`;
    mLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

    lucide.createIcons();
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

init();
