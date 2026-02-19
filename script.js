
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
        unspecifiedDate: "தேதி குறிப்பிடப்படாதவை",
        tabId: "எண்",
        tabName: "பெயர்",
        tabDistrict: "மாவட்டம்",
        tabLocation: "ஊர்/விவரம்"
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
        unspecifiedDate: "Unspecified Date",
        tabId: "ID",
        tabName: "Name",
        tabDistrict: "District",
        tabLocation: "Location/Details"
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
    initSloganTicker();

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

function renderTableMarkup(temples) {
    const t = translations[state.lang];
    const table = document.createElement('table');
    table.className = 'temple-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>${t.tabId}</th>
                <th>${t.tabName}</th>
                <th>${t.tabDistrict}</th>
                <th>${t.tabLocation}</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    const tbody = table.querySelector('tbody');
    temples.forEach(temple => tbody.appendChild(createTableRow(temple)));
    return table;
}

function createTableRow(temple) {
    const isVisited = state.visited.has(temple.id);
    const tr = document.createElement('tr');
    tr.className = `table-row ${isVisited ? 'visited' : ''}`;
    tr.onclick = () => openModal(temple);

    const imageUrl = getTempleImage(temple);

    tr.innerHTML = `
        <td class="cell-id">${temple.index}</td>
        <td class="cell-name">
            <div class="name-cell-content">
                <div class="table-thumb">
                    <img src="${imageUrl}" alt="" onerror="handleImgError(this)">
                </div>
                <strong>${getName(temple)}</strong>
                ${isVisited ? '<i data-lucide="check-circle" class="visited-icon"></i>' : ''}
            </div>
        </td>
        <td class="cell-district">${temple.district}</td>
        <td class="cell-location">${temple.location || "-"}</td>
    `;
    return tr;
}

function renderTemples() {
    templeList.innerHTML = '';
    templeList.className = `temple-display ${state.viewMode === 'list' ? 'mode-table' : 'mode-grid'}`;

    const filtered = state.temples.filter(t => {
        const districtMatch = state.filters.district === 'All' || t.district === state.filters.district;
        const statusMatch = state.filters.status === 'all' ||
            (state.filters.status === 'visited' && state.visited.has(t.id)) ||
            (state.filters.status === 'togo' && state.togo.has(t.id));
        return districtMatch && statusMatch && searchMatch(t, state.filters.search);
    });

    if (state.groupBy === 'none') {
        if (state.viewMode === 'list') {
            templeList.appendChild(renderTableMarkup(filtered));
        } else {
            const grid = document.createElement('div');
            grid.className = 'temple-grid';
            filtered.forEach(temple => grid.appendChild(createCard(temple)));
            templeList.appendChild(grid);
        }
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
            `;
            if (state.viewMode === 'list') {
                section.appendChild(renderTableMarkup(groups[key]));
            } else {
                const grid = document.createElement('div');
                grid.className = 'temple-grid';
                groups[key].forEach(t => grid.appendChild(createCard(t)));
                section.appendChild(grid);
            }
            templeList.appendChild(section);
        });
    }

    lucide.createIcons();

    const cards = document.querySelectorAll('.temple-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${Math.min(index * 0.03, 1)}s`;
    });
}

// Sample Temple Images - No longer used, using universal image
const sampleImages = [];

const UNIVERSAL_TEMPLE_IMG = 'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=1200&q=80';
const SHIVA_HEADER_IMG = UNIVERSAL_TEMPLE_IMG;
// Premium SVG Fallback (Sacred Lamp) - Guaranteed to load instantly
const DEFAULT_FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f1c40f'%3E%3Cpath d='M12 2C12 2 7 7 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 7 12 2 12 2ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z'/%3E%3Cpath d='M12 22C16.4183 22 20 20.2091 20 18H4C4 20.2091 7.58172 22 12 22Z'/%3E%3C/svg%3E";

function getTempleImage(temple) {
    return UNIVERSAL_TEMPLE_IMG;
}

window.handleImgError = function (img) {
    img.onerror = null; // Prevent infinite loop
    img.src = DEFAULT_FALLBACK;
    img.classList.add('img-fallback-active');
};

function createCard(temple) {
    const isVisited = state.visited.has(temple.id);
    const isTogo = state.togo.has(temple.id);
    const visitDate = state.visitedDates[temple.id];
    const imageUrl = getTempleImage(temple);

    const div = document.createElement('div');
    div.className = `temple-card ${isVisited ? 'visited' : ''} ${isTogo ? 'togo' : ''}`;
    div.onclick = () => openModal(temple);

    div.innerHTML = `
        <div class="card-image">
            <img src="${imageUrl}" alt="${getName(temple)}" loading="lazy" onerror="handleImgError(this)">
            <div class="card-image-overlay"></div>
            <span class="card-id-badge">${temple.index}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${getName(temple)}</h3>
            <p class="card-details">${temple.location || temple.district}</p>
        </div>
        <div class="card-footer">
            <span class="district-tag">${temple.district}</span>
            <div class="card-actions">
                ${isVisited ? '<i data-lucide="check-circle" class="status-icon visited" style="color:var(--accent-color)"></i>' : ''}
                ${isTogo ? '<i data-lucide="bookmark" class="status-icon togo" style="color:var(--secondary-color)"></i>' : ''}
            </div>
        </div>
    `;

    return div;
}

// Slogan Rotation Logic
const sloganSets = [
    "ஓம் நமச்சிவாய &nbsp;&nbsp;•&nbsp;&nbsp; OM NAMAH SHIVAYA &nbsp;&nbsp;•&nbsp;&nbsp; சிவாய நமஹ &nbsp;&nbsp;•&nbsp;&nbsp; SIVAYA NAMAHA &nbsp;&nbsp;•&nbsp;&nbsp; HARA HARA MAHADEV &nbsp;&nbsp;•&nbsp;&nbsp; அண்ணாமலையாருக்கு அரோகரா &nbsp;&nbsp;•&nbsp;&nbsp; ஓம் நமச்சிவாய &nbsp;&nbsp;•&nbsp;&nbsp; திருச்சிற்றம்பலம்",
    "ஓம் தத்புருஷாய வித்மஹே &nbsp;&nbsp;•&nbsp;&nbsp; RUDRA GAYATRI &nbsp;&nbsp;•&nbsp;&nbsp; சிவ சிவ சிவ சிவ &nbsp;&nbsp;•&nbsp;&nbsp; SHIVA SHIVA SHIVA SHIVA &nbsp;&nbsp;•&nbsp;&nbsp; தென்னாடுடைய சிவனே போற்றி &nbsp;&nbsp;•&nbsp;&nbsp; எந்நாட்டவர்க்கும் இறைவா போற்றி",
    "ஓம் த்ரயம்பகம் யஜாமஹே &nbsp;&nbsp;•&nbsp;&nbsp; SACRED MANTRA &nbsp;&nbsp;•&nbsp;&nbsp; சாந்தி சாந்தி சாந்தி &nbsp;&nbsp;•&nbsp;&nbsp; OM SHANTI SHANTI SHANTI &nbsp;&nbsp;•&nbsp;&nbsp; ஓம் நமச்சிவாய &nbsp;&nbsp;•&nbsp;&nbsp; திருச்சிற்றம்பலம்"
];
let currentSloganIdx = 0;

function initSloganTicker() {
    const tickerContainer = document.querySelector('.mantram-ticker');
    if (!tickerContainer) return;

    tickerContainer.style.cursor = 'pointer';
    tickerContainer.title = "Click to change mantram";

    const changeSlogan = () => {
        currentSloganIdx = (currentSloganIdx + 1) % sloganSets.length;
        const scrollEl = tickerContainer.querySelector('.mantram-scroll');
        if (scrollEl) {
            scrollEl.style.transition = 'opacity 0.5s ease';
            scrollEl.style.opacity = '0';
            setTimeout(() => {
                scrollEl.innerHTML = sloganSets[currentSloganIdx];
                scrollEl.style.opacity = '1';
            }, 500);
        }
    };

    tickerContainer.addEventListener('click', changeSlogan);
    setInterval(changeSlogan, 30000);
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
    const imageUrl = getTempleImage(temple);
    const headerImg = UNIVERSAL_TEMPLE_IMG;

    modalBody.innerHTML = `
        <div class="modal-image-container" style="margin-bottom: 1rem; border-radius: 16px; overflow: hidden; height: 220px; border: 1px solid var(--border-color); position: relative;">
            <img id="modal-main-img" src="${headerImg}" style="width: 100%; height: 100%; object-fit: cover; transition: opacity 0.3s ease;" onerror="handleImgError(this)">
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 1rem;">
                <span style="color: var(--secondary-color); font-size: 0.7rem; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">Divine Presence</span>
            </div>
        </div>

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
            <a id="maps-link" href="#" target="_blank" class="btn btn-primary" style="text-decoration: none;">
                <i data-lucide="map"></i> ${t.openMaps}
            </a>
            <a id="photos-link" href="#" target="_blank" class="btn btn-secondary" style="text-decoration: none; border: 1px solid var(--border-color); margin-top: 0.5rem; background: var(--surface-highlight); color: var(--text-color);">
                <i data-lucide="image"></i> ${state.lang === 'ta' ? 'புகைப்படங்கள்' : 'View More Photos'}
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

    if (visitedCheck) {
        visitedCheck.checked = state.visited.has(temple.id);
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
    }

    if (togoCheck) {
        togoCheck.checked = state.togo.has(temple.id);
        togoCheck.addEventListener('change', (e) => {
            if (e.target.checked) state.togo.add(temple.id);
            else state.togo.delete(temple.id);
            saveState();
            renderTemples();
            updateStats();
        });
    }

    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            state.visitedDates[temple.id] = e.target.value;
            saveState();
            renderTemples();
        });
    }

    const query = `${getName(temple)} Temple, ${temple.location || ''}, ${temple.district}`;
    const mLink = document.getElementById('maps-link');
    const pLink = document.getElementById('photos-link');

    if (mLink) mLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    if (pLink) pLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + " photos")}`;

    lucide.createIcons();

    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

init();

// ============================================================
// QUICK SEARCH WITH AUTOCOMPLETE SUGGESTIONS
// ============================================================
(function initQuickSearch() {
    const suggestions = document.getElementById('search-suggestions');
    const input = document.getElementById('search-input');
    if (!suggestions || !input) return;

    let activeIdx = -1;

    function getSuggestions(query) {
        if (!query || query.length < 2) return [];
        const q = query.toLowerCase();
        const results = [];
        const seen = new Set();

        state.temples.forEach(t => {
            let matchType = '';
            let matchField = '';

            if (t.name_en && t.name_en.toLowerCase().includes(q)) {
                matchType = 'temple';
                matchField = t.name_en;
            } else if (t.name_ta.toLowerCase().includes(q)) {
                matchType = 'temple';
                matchField = t.name_ta;
            } else if (t.god && t.god.toLowerCase().includes(q)) {
                matchType = 'god';
                matchField = t.god;
            } else if (t.goddess && t.goddess.toLowerCase().includes(q)) {
                matchType = 'god';
                matchField = t.goddess;
            } else if (t.district.toLowerCase().includes(q)) {
                matchType = 'district';
                matchField = t.district;
            } else if (t.location && t.location.toLowerCase().includes(q)) {
                matchType = 'district';
                matchField = t.location;
            } else if (t.history && t.history.toLowerCase().includes(q)) {
                matchType = 'temple';
                matchField = t.history.substring(0, 60) + '...';
            }

            if (matchType) {
                const key = t.id;
                if (!seen.has(key)) {
                    seen.add(key);
                    results.push({ temple: t, matchType, matchField });
                }
            }
        });

        return results.slice(0, 8);
    }

    function renderSuggestions(items) {
        if (!items.length) {
            suggestions.classList.add('hidden');
            return;
        }
        activeIdx = -1;
        suggestions.innerHTML = items.map((item, i) => `
            <div class="suggestion-item" data-idx="${i}">
                <div class="suggestion-icon"><i data-lucide="map-pin"></i></div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${getName(item.temple)}</div>
                    <div class="suggestion-meta">
                        <span class="suggestion-highlight">${truncate(item.matchField, 40)}</span>
                        <span>${item.temple.district}</span>
                    </div>
                </div>
                <span class="suggestion-type ${item.matchType}">${item.matchType}</span>
            </div>
        `).join('');
        suggestions.classList.remove('hidden');
        lucide.createIcons();

        suggestions.querySelectorAll('.suggestion-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.dataset.idx);
                const t = items[idx].temple;
                suggestions.classList.add('hidden');
                input.value = getName(t);
                openModal(t);
            });
        });
    }

    function truncate(str, max) {
        if (!str) return '';
        return str.length > max ? str.substring(0, max) + '...' : str;
    }

    input.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        renderTemples();
        const items = getSuggestions(e.target.value);
        renderSuggestions(items);
    });

    input.addEventListener('keydown', (e) => {
        const items = suggestions.querySelectorAll('.suggestion-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIdx = Math.min(activeIdx + 1, items.length - 1);
            items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIdx = Math.max(activeIdx - 1, 0);
            items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
        } else if (e.key === 'Enter' && activeIdx >= 0) {
            e.preventDefault();
            items[activeIdx]?.click();
        } else if (e.key === 'Escape') {
            suggestions.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
            suggestions.classList.add('hidden');
        }
    });
})();

// ============================================================
// VOICE SEARCH (Web Speech API)
// ============================================================
(function initVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        document.querySelectorAll('.voice-btn').forEach(b => b.style.display = 'none');
        return;
    }

    function createRecognition(onResult, btn) {
        const recognition = new SpeechRecognition();
        recognition.lang = state.lang === 'ta' ? 'ta-IN' : 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => btn.classList.add('recording');
        recognition.onend = () => btn.classList.remove('recording');
        recognition.onerror = () => btn.classList.remove('recording');

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            onResult(transcript);
        };

        return recognition;
    }

    // Main search voice button
    const voiceBtn = document.getElementById('voice-search-btn');
    const searchInput = document.getElementById('search-input');
    if (voiceBtn && searchInput) {
        voiceBtn.addEventListener('click', () => {
            const rec = createRecognition((text) => {
                searchInput.value = text;
                searchInput.dispatchEvent(new Event('input'));
            }, voiceBtn);
            rec.start();
        });
    }

    // Chat voice button
    const chatVoiceBtn = document.getElementById('chat-voice-btn');
    const chatInput = document.getElementById('chat-input');
    if (chatVoiceBtn && chatInput) {
        chatVoiceBtn.addEventListener('click', () => {
            const rec = createRecognition((text) => {
                chatInput.value = text;
                // Auto-send
                document.getElementById('chat-send')?.click();
            }, chatVoiceBtn);
            rec.start();
        });
    }
})();

// ============================================================
// CHAT WIDGET — Local Temple Finder Engine
// ============================================================
(function initChat() {
    const fab = document.getElementById('chat-fab');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('chat-close');
    const sendBtn = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    if (!fab || !panel) return;

    // Toggle chat panel
    fab.addEventListener('click', () => {
        const isOpen = panel.classList.contains('active');
        if (isOpen) {
            panel.classList.remove('active');
            fab.classList.remove('active');
            setTimeout(() => panel.classList.add('hidden'), 300);
        } else {
            panel.classList.remove('hidden');
            fab.classList.add('active');
            requestAnimationFrame(() => {
                panel.classList.add('active');
                chatInput.focus();
            });
        }
        lucide.createIcons();
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
        fab.classList.remove('active');
        setTimeout(() => panel.classList.add('hidden'), 300);
    });

    // Send message
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        appendMsg('user', text);
        chatInput.value = '';
        showTyping();
        setTimeout(() => {
            removeTyping();
            const response = processQuery(text);
            appendMsg('bot', response.html, true);
            lucide.createIcons();
            // Attach click handlers to result cards
            messages.querySelectorAll('.chat-result-card[data-id]').forEach(card => {
                card.addEventListener('click', () => {
                    const t = state.temples.find(x => x.id === card.dataset.id);
                    if (t) openModal(t);
                });
            });
        }, 600 + Math.random() * 400);
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function appendMsg(role, content, isHtml) {
        const div = document.createElement('div');
        div.className = `chat-msg ${role}`;
        div.innerHTML = `<div class="chat-bubble">${isHtml ? content : escapeHtml(content)}</div>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
        const div = document.createElement('div');
        div.className = 'chat-msg bot typing-msg';
        div.innerHTML = `<div class="chat-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function removeTyping() {
        const el = messages.querySelector('.typing-msg');
        if (el) el.remove();
    }

    function escapeHtml(str) {
        const d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    // ---- Local Search Engine for Chat ----
    function processQuery(query) {
        const q = query.toLowerCase();
        let results = [];

        // Keyword synonyms / expansion
        const keywords = extractKeywords(q);

        // Score each temple
        state.temples.forEach(t => {
            let score = 0;
            const searchable = [
                t.name_en, t.name_ta, t.god, t.goddess,
                t.history, t.travel, t.district, t.location, t.originalText
            ].map(s => (s || '').toLowerCase()).join(' ');

            keywords.forEach(kw => {
                if (searchable.includes(kw)) {
                    score += 10;
                    // Boost if keyword in god/goddess/name
                    if ((t.god || '').toLowerCase().includes(kw)) score += 5;
                    if ((t.goddess || '').toLowerCase().includes(kw)) score += 5;
                    if ((t.name_en || '').toLowerCase().includes(kw)) score += 8;
                    if ((t.history || '').toLowerCase().includes(kw)) score += 3;
                }
            });

            if (score > 0) results.push({ temple: t, score });
        });

        results.sort((a, b) => b.score - a.score);
        results = results.slice(0, 5);

        if (results.length === 0) {
            return {
                html: `I couldn't find temples matching "<strong>${escapeHtml(query)}</strong>". Try searching by:<br>
                    <em>• God/Goddess name (e.g., Natarajar)</em><br>
                    <em>• Location (e.g., Chidambaram)</em><br>
                    <em>• Feature (e.g., musical pillars)</em><br>
                    <em>• Legend (e.g., Arjuna, Nandanar)</em>`
            };
        }

        let html = `Found <strong>${results.length}</strong> temple${results.length > 1 ? 's' : ''} for "<strong>${escapeHtml(query)}</strong>":<br>`;
        results.forEach(r => {
            const t = r.temple;
            const displayName = getName(t);
            const detail = t.god ? `${t.god}` : t.district;
            html += `
                <div class="chat-result-card" data-id="${t.id}">
                    <div class="chat-result-name">${displayName}</div>
                    <div class="chat-result-detail">${detail} — ${t.district}</div>
                </div>`;
        });
        html += `<br><em>Tap a temple to view details</em>`;

        return { html };
    }

    function extractKeywords(query) {
        // Remove common stop words
        const stopWords = new Set([
            'the', 'a', 'an', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for',
            'of', 'with', 'by', 'from', 'and', 'or', 'but', 'not', 'this', 'that', 'it',
            'i', 'me', 'my', 'we', 'our', 'you', 'your', 'he', 'she', 'they', 'them',
            'what', 'where', 'which', 'who', 'when', 'how', 'can', 'do', 'does', 'did',
            'has', 'have', 'had', 'will', 'would', 'could', 'should', 'may', 'might',
            'find', 'search', 'show', 'tell', 'about', 'temple', 'temples', 'kovil',
            'near', 'please', 'want', 'need', 'looking', 'look'
        ]);

        let words = query
            .replace(/[?!.,;:'"()]/g, '')
            .split(/\s+/)
            .filter(w => w.length > 1 && !stopWords.has(w));

        // Also keep multi-word phrases (2-3 word combos)
        const phrases = [];
        const rawWords = query.replace(/[?!.,;:'"()]/g, '').split(/\s+/);
        for (let i = 0; i < rawWords.length - 1; i++) {
            phrases.push(rawWords[i] + ' ' + rawWords[i + 1]);
            if (i < rawWords.length - 2) {
                phrases.push(rawWords[i] + ' ' + rawWords[i + 1] + ' ' + rawWords[i + 2]);
            }
        }

        return [...words, ...phrases];
    }
})();
