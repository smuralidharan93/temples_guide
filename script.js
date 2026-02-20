
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
        region: 'All',
        district: 'All',
        status: 'all' // all, visited, togo
    },
    journeys: JSON.parse(localStorage.getItem('temple_journeys')) || [],
    allTemples: [],
    currentPage: 1,
    itemsPerPage: 50
};

// UI Translations
const translations = {
    ta: {
        title: "கோயில் வழிகாட்டி",
        visited: "பார்வையிட்டவை",
        togo: "செல்ல வேண்டியவை",
        searchPlaceholder: "கோயில், மாவட்டம், ஊர் தேடுக...",
        allRegions: "அனைத்து மண்டலங்கள்",
        allDistricts: "அனைத்து மாவட்டங்கள்",
        region: "மண்டலம்",
        district: "மாவட்டம்",
        tabRegion: "மண்டலம்",
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
        naadu: "நாடு (மண்டலம்)",
        date: "தேதி",
        visitDateLabel: "பார்வையிட்ட தேதி:",
        gridView: "கட்டம்",
        listView: "பட்டியல்",
        shivaTitle: "சிவன் கோயில்கள் (பாடல் பெற்ற தலங்கள்)",
        divyaTitle: "108 வைணவ திவ்ய தேசங்கள்",
        sakthiTitle: "64 சக்தி பீடங்கள்",
        jyoTitle: "12 ஜோதிர்லிங்கங்கள்",
        selectSource: "கோயில் பட்டியலைத் தேர்ந்தெடு",
        unspecifiedDate: "தேதி குறிப்பிடப்படாதவை",
        tabId: "எண்",
        tabName: "பெயர்",
        tabDistrict: "மாவட்டம்",
        found: "கண்டறியப்பட்டவை:",
        temples: "கோயில்கள்",
        tabLocation: "ஊர்/விவரம்"
    },
    en: {
        title: "Temple Guide",
        visited: "Visited",
        togo: "To Go",
        searchPlaceholder: "Search name, district, location...",
        allRegions: "All Regions",
        allDistricts: "All Districts",
        region: "Region",
        district: "District",
        tabRegion: "Region",
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
        naadu: "Region (Naadu)",
        date: "Date",
        visitDateLabel: "Visit Date:",
        gridView: "Grid",
        listView: "List",
        shivaTitle: "Shiva Temples (Paadal Petra Sthalams)",
        divyaTitle: "108 Divya Desams",
        sakthiTitle: "64 Sakthi Peedams",
        jyoTitle: "12 Jyothirlingams",
        selectSource: "Select Temple List",
        unspecifiedDate: "Unspecified Date",
        tabId: "ID",
        tabName: "Name",
        tabDistrict: "District",
        found: "Found:",
        temples: "temples", // e.g. "Found: 10 temples"
        tabLocation: "Location/Details"
    }
};

// Region Mapping Helpers
function getRegion(id, source) {
    if (source === 'shiva') {
        const prefix = id ? id.replace(/[0-9]/g, '').toUpperCase() : "";

        // Chola Nadu North (NCN)
        if (prefix === "NCN") return { ta: "சோழ நாடு - காவிரிக்கு வடகரைத் தலங்கள்", en: "Chola Nadu - Cauvery North Coast" };

        // Chola Nadu South (SCN)
        if (prefix === "SCN") return { ta: "சோழ நாடு (காவிரி தென்கரை)", en: "Chola Nadu (Cauvery South Coast)" };

        // Nadu Nadu (NN)
        if (prefix === "NN") return { ta: "நடு நாடு", en: "Nadu Nadu" };

        // Thondai Nadu (TN)
        if (prefix === "TN") return { ta: "தொண்டை நாடு", en: "Thondai Nadu" };

        // Pandiya Nadu (PN)
        if (prefix === "PN") return { ta: "பாண்டி நாடு", en: "Pandiya Nadu" };

        // Kongu Nadu (KN)
        if (prefix === "KN") return { ta: "கொங்கு நாடு", en: "Kongu Nadu" };

        // Malai Nadu (ML)
        if (prefix === "ML") return { ta: "மலை நாடு", en: "Malai Nadu" };

        // Tuluva Nadu (TU)
        if (prefix === "TU") return { ta: "துளுவ நாடு", en: "Tuluva Nadu" };

        // Vada Nadu (VN)
        if (prefix === "VN") return { ta: "வட நாடு", en: "Vada Nadu" };

        // Eezha Nadu (EZ)
        if (prefix === "EZ") return { ta: "ஈழ நாடு", en: "Eezha Nadu" };

        return { ta: "மற்றவை", en: "Others" };
    } else {
        const idx = parseInt(id) || 0;
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
const regionSelect = document.getElementById('region-select');
const districtSelect = document.getElementById('district-select');
const statusTabs = document.querySelectorAll('.tab');
const visitedCountEl = document.getElementById('visited-count');
const togoCountEl = document.getElementById('togo-count');
const modal = document.getElementById('temple-modal');
const langBtn = document.getElementById('lang-toggle');

// Source Selector
const sourceSelector = document.getElementById('source-selector');
const selectorTrigger = document.getElementById('selector-trigger');
const selectorMenu = document.getElementById('selector-menu');
const menuItems = document.querySelectorAll('.menu-item');

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
    updateSourceSelector();
    updateHeroForSource();

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
    state.journeys = JSON.parse(localStorage.getItem('temple_journeys')) || [];
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
    localStorage.setItem('temple_journeys', JSON.stringify(state.journeys));
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
    if (logoTitle) {
        const sourceKey = state.source + 'Title';
        logoTitle.textContent = t[sourceKey] || t.title;
    }

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

    updateSourceSelector();
}

function updateSourceSelector() {
    if (!selectorTrigger) return;
    const t = translations[state.lang];

    // Update trigger text
    let sourceKey = state.source + 'Title';
    let title = t[sourceKey] || t.selectSource;
    selectorTrigger.querySelector('span').textContent = title;

    // Update active state in menu
    menuItems.forEach(item => {
        if (item.dataset.source === state.source) item.classList.add('active');
        else item.classList.remove('active');
    });
}

function updateHeroForSource() {
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc = document.querySelector('.hero-desc');
    const heroStats = document.querySelectorAll('.h-stat');
    const t = translations[state.lang];

    if (state.source === 'divyadesam') {
        if (heroTitle) heroTitle.textContent = t.divyaTitle;
        if (heroDesc) heroDesc.textContent = state.lang === 'ta'
            ? '12 ஆழ்வார்களால் மங்களாசாசனம் செய்யப்பட்ட 108 திவ்ய தேசங்களின் விவரங்கள்.'
            : 'Discover the 108 sacred Vishnu temples across Bharat, sung by the 12 Azhwar saints in the Nalayira Divya Prabandham.';
        if (heroStats.length >= 3) {
            heroStats[0].querySelector('span').textContent = '108';
            heroStats[0].querySelector('label').textContent = state.lang === 'ta' ? 'கோயில்கள்' : 'Temples';
            heroStats[1].querySelector('span').textContent = '12';
            heroStats[1].querySelector('label').textContent = state.lang === 'ta' ? 'ஆழ்வார்கள்' : 'Azhwars';
            heroStats[2].querySelector('span').textContent = '4000';
            heroStats[2].querySelector('label').textContent = state.lang === 'ta' ? 'பாசுரங்கள்' : 'Hymns';
        }
    } else if (state.source === 'sakthi') {
        if (heroTitle) heroTitle.textContent = t.sakthiTitle;
        if (heroDesc) heroDesc.textContent = state.lang === 'ta'
            ? 'அன்னை பராசக்தியின் 64 புனித பீடங்கள் மற்றும் அவற்றின் வரலாறு.'
            : 'Explore the 64 sacred seats of Power (Sakthi Peedams) scattered across the subcontinent.';
        if (heroStats.length >= 3) {
            heroStats[0].querySelector('span').textContent = '64';
            heroStats[0].querySelector('label').textContent = state.lang === 'ta' ? 'பீடங்கள்' : 'Peedams';
            heroStats[1].querySelector('span').textContent = '4';
            heroStats[1].querySelector('label').textContent = state.lang === 'ta' ? 'முக்கியப்பீடங்கள்' : 'Adi Peedams';
            heroStats[2].querySelector('span').textContent = '1';
            heroStats[2].querySelector('label').textContent = state.lang === 'ta' ? 'அன்னை' : 'Goddess';
        }
    } else if (state.source === 'jyothirlingam') {
        if (heroTitle) heroTitle.textContent = t.jyoTitle;
        if (heroDesc) heroDesc.textContent = state.lang === 'ta'
            ? 'சிவனின் ஜோதி வடிவமாகத் திகழும் 12 புனித ஜோதிர்லிங்கத் தலங்கள்.'
            : 'Journey through the 12 most sacred shrines of Lord Shiva where he appeared as a Pillar of Light.';
        if (heroStats.length >= 3) {
            heroStats[0].querySelector('span').textContent = '12';
            heroStats[0].querySelector('label').textContent = state.lang === 'ta' ? 'லிங்கங்கள்' : 'Lingams';
            heroStats[1].querySelector('span').textContent = '7';
            heroStats[1].querySelector('label').textContent = state.lang === 'ta' ? 'புரிகள்' : 'Moksha Puris';
            heroStats[2].querySelector('span').textContent = '12';
            heroStats[2].querySelector('label').textContent = state.lang === 'ta' ? 'ஜோதிகள்' : 'Lights';
        }
    } else {
        if (heroTitle) heroTitle.textContent = t.shivaTitle;
        if (heroDesc) heroDesc.textContent = state.lang === 'ta'
            ? 'மூவர் முதலிகளால் தேவாரப் பாடல் பெற்ற 276 புனித சிவத்தலங்கள்.'
            : 'Discover the 276 sacred temples of Lord Shiva across Bharat, immortalized by the Moovar saints.';
        if (heroStats.length >= 3) {
            heroStats[0].querySelector('span').textContent = '276';
            heroStats[0].querySelector('label').textContent = state.lang === 'ta' ? 'கோயில்கள்' : 'Temples';
            heroStats[1].querySelector('span').textContent = '14';
            heroStats[1].querySelector('label').textContent = state.lang === 'ta' ? 'மண்டலங்கள்' : 'Regions';
            heroStats[2].querySelector('span').textContent = '3';
            heroStats[2].querySelector('label').textContent = state.lang === 'ta' ? 'நாயன்மார்கள்' : 'Saints';
        }
    }
}

function processAllTemples() {
    let all = [];

    // Process Divya Desam
    if (typeof divyaDesamData !== 'undefined') {
        const divya = divyaDesamData.map((item, i) => {
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
                originalText: item.name_ta,
                source: 'divyadesam'
            };
        });
        all = all.concat(divya);
    }

    // Process Shiva
    if (typeof templesData !== 'undefined') {
        let currentDistrict = "Unknown District";
        const validData = templesData.filter(item => item.ID !== "Temple Index" && item.Details !== "Temples");
        const shiva = validData.map((item, i) => {
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
                region: getRegion(id, 'shiva'),
                god: item.God || "",
                goddess: item.Goddess || "",
                history: item.Sthala_Varalaru || "",
                travel: item.Travel_Details || "",
                originalText: item.Details,
                source: 'shiva'
            };
        });
        all = all.concat(shiva);
    }

    state.allTemples = all;
}

function processData() {
    processAllTemples(); // Ensure allTemples is ready
    state.temples = state.allTemples.filter(t => {
        if (state.source === 'shiva') return t.source === 'shiva';
        if (state.source === 'divyadesam') return t.source === 'divyadesam';
        return false;
    });

    if (state.source === 'sakthi' || state.source === 'jyothirlingam') {
        state.temples = []; // Placeholders
    }
}

function renderFilters() {
    // Populate Regions
    const currentRegion = regionSelect.value;
    regionSelect.innerHTML = '';
    const allRegOpt = document.createElement('option');
    allRegOpt.value = 'All';
    allRegOpt.textContent = translations[state.lang].allRegions;
    regionSelect.appendChild(allRegOpt);

    const regions = [...new Set(state.temples.map(t => getRegionName(t)))].sort();
    regions.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r;
        opt.textContent = r;
        regionSelect.appendChild(opt);
    });
    if ([...regionSelect.options].some(o => o.value === currentRegion)) regionSelect.value = currentRegion;
    else regionSelect.value = 'All';

    // Populate Districts
    const currentDist = districtSelect.value;
    districtSelect.innerHTML = '';
    const allDistOpt = document.createElement('option');
    allDistOpt.value = 'All';
    allDistOpt.textContent = translations[state.lang].allDistricts;
    districtSelect.appendChild(allDistOpt);

    const districts = [...new Set(state.temples.map(t => t.district))].sort();
    districts.forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        districtSelect.appendChild(option);
    });

    if ([...districtSelect.options].some(o => o.value === currentDist)) districtSelect.value = currentDist;
    else districtSelect.value = 'All';
}

function searchMatch(temple, term) {
    if (!term) return true;
    const cleanTerm = term.toLowerCase().trim();

    // AI-like normalization for South Indian transliterations
    const normalize = (val) => {
        if (!val) return "";
        return val.toLowerCase()
            .replace(/th/g, 't')
            .replace(/dh/g, 'd')
            .replace(/sh/g, 's')
            .replace(/zh/g, 'l')
            .replace(/w/g, 'v')
            .replace(/oo/g, 'u')
            .replace(/ee/g, 'i')
            .replace(/y/g, 'i')
            .replace(/ /g, '')
            .replace(/[^a-z0-9\u0B80-\u0BFF]/g, ''); // Keep alphanumeric and Tamil characters
    };

    const normTerm = normalize(cleanTerm);

    const fields = [
        temple.name_ta,
        temple.name_en,
        temple.location,
        temple.district,
        getRegionName(temple),
        temple.god || "",
        temple.goddess || "",
        temple.originalText || ""
    ];

    // 1. Direct Include Match
    if (fields.some(f => f && f.toLowerCase().includes(cleanTerm))) return true;

    // 2. Phonetic/Normalized Match
    if (fields.some(f => f && normalize(f).includes(normTerm))) return true;

    // 3. Detailed Token Matching
    const tokens = cleanTerm.split(/\s+/).filter(t => t.length > 1);
    if (tokens.length > 1) {
        return tokens.every(tok => {
            const nTok = normalize(tok);
            return fields.some(f => f && (f.toLowerCase().includes(tok) || normalize(f).includes(nTok)));
        });
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
                <th width="40">${t.tabId}</th>
                <th>${t.tabName}</th>
                <th>${t.tabRegion}</th>
                <th>${t.tabDistrict}</th>
                <th width="80">${t.visited}</th>
                <th width="80">${t.togo}</th>
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
    const isTogo = state.togo.has(temple.id);
    const tr = document.createElement('tr');
    tr.className = `table-row ${isVisited ? 'visited' : ''}`;

    // Main row click opens modal, but we prevent it on checkbox clicks
    tr.onclick = (e) => {
        if (e.target.tagName !== 'INPUT') openModal(temple);
    };

    const imageUrl = getTempleImage(temple);

    tr.innerHTML = `
        <td class="cell-id"><div>${temple.index}</div><div style="font-size:0.65rem; color:var(--primary-color); font-weight:600; opacity:0.8;">${temple.id}</div></td>
        <td class="cell-name">
            <div class="name-cell-content">
                <div class="table-thumb">
                    <img src="${imageUrl}" alt="" onerror="handleImgError(this)">
                </div>
                <div class="name-cell-text">
                    <strong>${getName(temple)}</strong>
                    ${temple.god ? `<span class="cell-god">${temple.god}</span>` : ''}
                    ${temple.location ? `<span class="cell-city">📍 ${temple.location}</span>` : ''}
                </div>
            </div>
        </td>
        <td class="cell-region" style="font-size: 0.8rem; font-weight: 500; color: var(--primary-color)">${getRegionName(temple)}</td>
        <td class="cell-district">${temple.district}</td>
        <td class="cell-action">
            <input type="checkbox" class="status-check visited-check" 
                ${isVisited ? 'checked' : ''} onclick="toggleStatus('${temple.id}', 'visited', this)">
        </td>
        <td class="cell-action">
            <input type="checkbox" class="status-check togo-check" 
                ${isTogo ? 'checked' : ''} onclick="toggleStatus('${temple.id}', 'togo', this)">
        </td>
    `;
    return tr;
}

window.toggleStatus = function (id, type, checkbox) {
    event.stopPropagation();
    if (type === 'visited') {
        if (checkbox.checked) {
            state.visited.add(id);
            state.visitedDates[id] = new Date().toISOString().split('T')[0];
            state.togo.delete(id);
        } else {
            state.visited.delete(id);
            delete state.visitedDates[id];
        }
    } else if (type === 'togo') {
        if (checkbox.checked) {
            state.togo.add(id);
        } else {
            state.togo.delete(id);
        }
    }
    saveState();
    updateStats();
    if (state.filters.status !== 'all') {
        renderTemples();
    } else {
        const row = checkbox.closest('tr');
        if (type === 'visited') {
            if (checkbox.checked) {
                row.classList.add('visited');
                const planCheck = row.querySelector('.togo-check');
                if (planCheck && planCheck.checked) {
                    planCheck.checked = false;
                    state.togo.delete(id);
                    saveState();
                }
            } else {
                row.classList.remove('visited');
            }
        }
    }
};


function renderTemples() {
    templeList.innerHTML = '';
    templeList.className = `temple-display ${state.viewMode === 'list' ? 'mode-table' : 'mode-grid'}`;

    const filtered = state.temples.filter(t => {
        const regionMatch = state.filters.region === 'All' || getRegionName(t) === state.filters.region;
        const districtMatch = state.filters.district === 'All' || t.district === state.filters.district;
        const statusMatch = state.filters.status === 'all' ||
            (state.filters.status === 'visited' && state.visited.has(t.id)) ||
            (state.filters.status === 'togo' && state.togo.has(t.id));
        return regionMatch && districtMatch && statusMatch && searchMatch(t, state.filters.search);
    });

    // Pagination Logic
    const totalItems = filtered.length;

    // Add result count display
    let resultHeader = document.getElementById('results-header');
    if (!resultHeader) {
        resultHeader = document.createElement('div');
        resultHeader.id = 'results-header';
        resultHeader.style.padding = '0 1rem 1rem';
        resultHeader.style.color = 'var(--text-muted)';
        resultHeader.style.fontSize = '0.9rem';
        templeList.parentNode.insertBefore(resultHeader, templeList);
    }

    if (state.filters.search || state.filters.district !== 'All' || state.filters.region !== 'All' || state.filters.status !== 'all') {
        const t = translations[state.lang];
        if (state.lang === 'ta') {
            resultHeader.textContent = `${t.found} ${totalItems} ${t.temples}`;
        } else {
            resultHeader.textContent = `${t.found} ${totalItems} ${t.temples}`;
        }
        resultHeader.style.display = 'block';
    } else {
        resultHeader.style.display = 'none';
    }

    const totalPages = Math.ceil(totalItems / state.itemsPerPage);

    // Ensure current page is valid after filtering
    if (state.currentPage > totalPages && totalPages > 0) state.currentPage = totalPages;
    if (state.currentPage < 1) state.currentPage = 1;

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const paginatedItems = filtered.slice(startIndex, startIndex + state.itemsPerPage);

    if (state.groupBy === 'none') {
        if (state.viewMode === 'list') {
            templeList.appendChild(renderTableMarkup(paginatedItems));
        } else {
            const grid = document.createElement('div');
            grid.className = 'temple-grid';
            paginatedItems.forEach(temple => grid.appendChild(createCard(temple)));
            templeList.appendChild(grid);
        }
    } else {
        const groups = {};
        // Group everything, but we might want to paginate at group level? 
        // For simplicity with grouping, we'll slice THE GROUPS or THE ITEMS inside.
        // Usually grouping doesn't play well with item-based pagination.
        // We'll show all grouped items for now, or just paginated items if grouped.
        paginatedItems.forEach(t => {
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
            const groupTemples = groups[key];
            const indices = groupTemples.map(t => parseInt(t.index)).filter(n => !isNaN(n));
            const min = indices.length ? Math.min(...indices) : 0;
            const max = indices.length ? Math.max(...indices) : 0;
            const count = groupTemples.length;
            const rangeStr = min > 0 ? `(${min}-${max})` : '';

            const section = document.createElement('div');
            section.className = 'group-section';
            section.innerHTML = `
                <div class="group-header">
                    <h2>${key} ${rangeStr} ${count} temples</h2>
                </div>
            `;
            if (state.viewMode === 'list') {
                section.appendChild(renderTableMarkup(groupTemples));
            } else {
                const grid = document.createElement('div');
                grid.className = 'temple-grid';
                groupTemples.forEach(t => grid.appendChild(createCard(t)));
                section.appendChild(grid);
            }
            templeList.appendChild(section);
        });
    }

    renderPagination(totalPages);
    lucide.createIcons();

    const cards = document.querySelectorAll('.temple-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${Math.min(index * 0.05, 1)}s`;
    });
}

function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    if (!container) return;
    container.innerHTML = '';

    if (totalPages <= 1) return;

    // Page Info
    const info = document.createElement('div');
    info.className = 'page-info';
    info.style.cssText = 'width: 100%; text-align: center; margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem; font-weight: 500;';
    info.textContent = `Page ${state.currentPage} of ${totalPages}`;
    container.appendChild(info);

    const createBtn = (page, text, active = false, disabled = false) => {
        const btn = document.createElement('button');
        btn.className = `page-btn ${active ? 'active' : ''}`;
        btn.textContent = text || page;
        btn.disabled = disabled;
        btn.onclick = () => {
            state.currentPage = page;
            renderTemples();
            window.scrollTo({ top: 300, behavior: 'smooth' });
        };
        return btn;
    };

    // First
    container.appendChild(createBtn(1, '««', false, state.currentPage === 1));

    // Prev
    container.appendChild(createBtn(state.currentPage - 1, '«', false, state.currentPage === 1));

    // Pages
    let startPage = Math.max(1, state.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

    for (let i = startPage; i <= endPage; i++) {
        container.appendChild(createBtn(i, i, i === state.currentPage));
    }

    // Next
    container.appendChild(createBtn(state.currentPage + 1, '»', false, state.currentPage === totalPages));

    // Last
    container.appendChild(createBtn(totalPages, '»»', false, state.currentPage === totalPages));
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
            <span class="card-id-badge" style="left:auto; right:12px; background:rgba(0,0,0,0.6); font-size:0.6rem;">${temple.id}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${getName(temple)}</h3>
            <p class="card-details">${temple.location || temple.district}</p>
        </div>
        <div class="card-footer">
            <div style="display:flex; flex-direction:column; gap:0.2rem;">
                <span class="region-tag" style="font-size:0.6rem; color:var(--primary-color); font-weight:700; text-transform:uppercase;">${getRegionName(temple)}</span>
                <span class="district-tag">${temple.district}</span>
            </div>
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
        state.currentPage = 1;
        renderTemples();
    });

    regionSelect.addEventListener('change', (e) => {
        state.filters.region = e.target.value;
        state.currentPage = 1;
        renderTemples();
    });

    districtSelect.addEventListener('change', (e) => {
        state.filters.district = e.target.value;
        state.currentPage = 1;
        renderTemples();
    });

    statusTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            statusTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.filters.status = tab.dataset.filter;
            state.currentPage = 1;
            renderTemples();
        });
    });

    // Source Selector Logic
    if (selectorTrigger) {
        selectorTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            sourceSelector.classList.toggle('active');
        });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const newSource = item.dataset.source;
            if (state.source === newSource) {
                sourceSelector.classList.remove('active');
                return;
            }

            state.source = newSource;
            state.filters.district = 'All';
            state.filters.search = '';
            state.currentPage = 1;
            if (searchInput) searchInput.value = '';

            localStorage.setItem('temple_source', state.source);
            loadState();
            processData();
            renderFilters();
            applyLanguage();
            renderTemples();
            updateStats();
            saveState();
            updateSourceSelector();
            updateHeroForSource();

            sourceSelector.classList.remove('active');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        if (sourceSelector) sourceSelector.classList.remove('active');
    });

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            state.lang = state.lang === 'ta' ? 'en' : 'ta';
            saveState();
            applyLanguage();
            renderFilters();
            renderTemples();
            renderFilters(); // Re-render filters to update language
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
    modalDistrict.innerHTML = `<span style="display:inline-block; background:var(--primary-color); color:#fff; padding:0.15rem 0.6rem; border-radius:20px; font-size:0.7rem; font-weight:700; margin-right:0.5rem; letter-spacing:0.5px;">${temple.id}</span> ${temple.district}`;

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
            <div class="journey-add-section" style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.5rem; text-transform: uppercase;">Add to Journey</label>
                <div id="modal-journey-list" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <!-- Journey pins will be here -->
                </div>
            </div>
            <div class="toggle-status" style="margin-top: 1.5rem;">
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
    updateJourneyStatusInModal(temple.id);

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

// ============================================================
// JOURNEY MANAGEMENT LOGIC
// ============================================================

function setupJourneyUI() {
    const journeysToggle = document.getElementById('journeys-toggle');
    const journeysModal = document.getElementById('journeys-modal');
    const closeJourneys = document.getElementById('close-journeys');
    const addJourneyBtn = document.getElementById('add-journey-btn');
    const createJourneyModal = document.getElementById('create-journey-modal');
    const closeCreateJ = document.getElementById('close-create-j');
    const saveJourneyBtn = document.getElementById('save-journey-btn');
    const jNameInput = document.getElementById('j-name-input');
    const typeBtns = document.querySelectorAll('.type-btn');
    const jTabs = document.querySelectorAll('.j-tab');

    let currentCreateType = 'plan';
    let filterType = 'plan';

    const backBtn = document.getElementById('back-to-journeys');
    const jMainView = document.getElementById('journeys-main-view');
    const jDetailView = document.getElementById('journey-detail-view');
    const jTempleSearch = document.getElementById('j-temple-search');
    const jSearchResults = document.getElementById('j-search-results');

    let currentJourneyId = null;

    const mainView = document.getElementById('view-temples');

    if (journeysToggle) {
        journeysToggle.addEventListener('click', () => {
            jMainView.classList.remove('hidden');
            jDetailView.classList.add('hidden');
            renderJourneys(filterType);

            // Hide main temple view to make it feel like a new page
            if (mainView) mainView.classList.add('hidden');

            journeysModal.classList.remove('hidden');
            journeysModal.style.display = 'flex';
            setTimeout(() => journeysModal.classList.add('active'), 10);
        });
    }

    if (closeJourneys) {
        closeJourneys.addEventListener('click', () => {
            journeysModal.classList.remove('active');
            if (mainView) mainView.classList.remove('hidden');
            setTimeout(() => {
                journeysModal.classList.add('hidden');
                journeysModal.style.display = 'none';
            }, 300);
        });
    }

    if (closeCreateJ) {
        closeCreateJ.addEventListener('click', () => {
            createJourneyModal.classList.remove('active');
            setTimeout(() => createJourneyModal.classList.add('hidden'), 300);
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            jMainView.classList.remove('hidden');
            jDetailView.classList.add('hidden');
            renderJourneys(filterType);
        });
    }

    // Backup & Cloud Export Logic
    const exportBtn = document.getElementById('export-data-btn');
    const importBtn = document.getElementById('import-data-btn');
    const importFile = document.getElementById('import-file');

    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
                visited: Array.from(state.visited),
                visitedDates: state.visitedDates,
                togo: Array.from(state.togo),
                journeys: state.journeys,
                source: state.source,
                lang: state.lang
            }, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "temple_guide_backup.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });
    }

    if (importBtn && importFile) {
        importBtn.addEventListener('click', () => importFile.click());
        importFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (data.journeys) state.journeys = data.journeys;
                    if (data.visited) state.visited = new Set(data.visited);
                    if (data.visitedDates) state.visitedDates = data.visitedDates;
                    if (data.togo) state.togo = new Set(data.togo);

                    saveState();
                    renderJourneys(filterType);
                    updateStats();
                    renderTemples();
                    alert('Backup restored successfully!');
                } catch (err) {
                    alert('Invalid backup file');
                }
            };
            reader.readAsText(file);
        });
    }

    if (jTempleSearch) {
        jTempleSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            if (term.length < 2) {
                jSearchResults.innerHTML = '';
                jSearchResults.classList.add('hidden');
                return;
            }

            const results = state.allTemples
                .filter(t => searchMatch(t, term))
                .slice(0, 10);

            jSearchResults.innerHTML = '';
            if (results.length > 0) {
                results.forEach(t => {
                    const item = document.createElement('div');
                    item.className = 'j-search-item';
                    const sourceText = t.source === 'shiva' ? 'Shiva' : 'Divya';
                    item.innerHTML = `
                        <div class="j-search-item-info">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <h4>${getName(t)}</h4>
                                <span style="font-size: 0.6rem; background: var(--surface-highlight); padding: 2px 6px; border-radius: 4px; color: var(--primary-color); border: 1px solid var(--border-color);">${sourceText}</span>
                            </div>
                            <p>${t.district} — ${t.location || ''}</p>
                        </div>
                    `;
                    item.onclick = () => {
                        addTempleToJourney(currentJourneyId, t.id);
                        jTempleSearch.value = '';
                        jSearchResults.classList.add('hidden');
                    };
                    jSearchResults.appendChild(item);
                });
                jSearchResults.classList.remove('hidden');
            } else {
                jSearchResults.innerHTML = '<div style="padding: 1rem; color: var(--text-muted)">No temples found</div>';
                jSearchResults.classList.remove('hidden');
            }
        });
    }

    // Close search on outside click
    document.addEventListener('click', (e) => {
        if (jSearchResults && !jSearchResults.contains(e.target) && e.target !== jTempleSearch) {
            jSearchResults.classList.add('hidden');
        }
    });

    window.openJourneyDetail = function (id) {
        const journey = state.journeys.find(j => j.id === id);
        if (!journey) return;
        currentJourneyId = id;
        document.getElementById('detail-j-name').textContent = journey.name;
        jMainView.classList.add('hidden');
        jDetailView.classList.remove('hidden');
        renderJourneyTemples(id);
    };

    window.addTempleToJourney = function (journeyId, templeId) {
        const journey = state.journeys.find(j => j.id === journeyId);
        if (!journey || journey.temples.includes(templeId)) return;

        journey.temples.push(templeId);
        if (journey.type === 'trip') {
            state.visited.add(templeId);
            if (!state.visitedDates[templeId]) {
                state.visitedDates[templeId] = new Date().toISOString().split('T')[0];
            }
        }
        saveState();
        updateStats();
        renderTemples();
        renderJourneyTemples(journeyId);
    };

    window.removeTempleFromJourney = function (journeyId, templeId) {
        const journey = state.journeys.find(j => j.id === journeyId);
        if (!journey) return;

        journey.temples = journey.temples.filter(tid => tid !== templeId);
        saveState();
        updateStats();
        renderTemples();
        renderJourneyTemples(journeyId);
    };

    function renderJourneyTemples(journeyId) {
        const journey = state.journeys.find(j => j.id === journeyId);
        const container = document.getElementById('j-temples-container');
        const countEl = document.getElementById('j-temple-count');
        if (!container) return;

        container.innerHTML = '';
        countEl.textContent = `${journey.temples.length} Temples`;

        if (journey.temples.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted)">No temples in this journey yet. Search above to add.</div>';
            return;
        }

        journey.temples.forEach(tid => {
            const temple = state.allTemples.find(t => t.id === tid);
            if (!temple) return;

            const item = document.createElement('div');
            item.className = 'j-temple-item';
            const sourceText = temple.source === 'shiva' ? 'Shiva' : 'Divya';
            item.innerHTML = `
                <div class="j-temple-info">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <h4>${getName(temple)}</h4>
                        <span style="font-size: 0.6rem; background: var(--surface-highlight); padding: 1px 5px; border-radius: 4px; color: var(--text-muted);">${sourceText}</span>
                    </div>
                    <p>${temple.district} — ${temple.location || ''}</p>
                </div>
                <div class="remove-from-j" onclick="removeTempleFromJourney('${journeyId}', '${temple.id}')" title="Remove">
                    <i data-lucide="minus-circle"></i>
                </div>
            `;
            container.appendChild(item);
        });
        lucide.createIcons();
    }

    if (saveJourneyBtn) {
        saveJourneyBtn.addEventListener('click', () => {
            const name = jNameInput.value.trim();
            if (!name) return alert('Please enter a journey name');

            const newJourney = {
                id: 'J' + Date.now(),
                name: name,
                type: currentCreateType,
                temples: [],
                createdAt: new Date().toISOString()
            };

            state.journeys.push(newJourney);
            saveState();
            jNameInput.value = '';
            createJourneyModal.classList.remove('active');
            setTimeout(() => createJourneyModal.classList.add('hidden'), 300);
            renderJourneys(filterType);
        });
    }
}

function renderJourneys(typeFilter) {
    const list = document.getElementById('journeys-list');
    if (!list) return;

    list.innerHTML = '';
    const filtered = state.journeys.filter(j => j.type === typeFilter);

    if (filtered.length === 0) {
        list.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No ${typeFilter === 'plan' ? 'plans' : 'trips'} yet. Start by creating one!</div>`;
        return;
    }

    filtered.forEach(j => {
        const card = document.createElement('div');
        card.className = 'journey-card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
            if (e.target.closest('.j-btn')) return;
            openJourneyDetail(j.id);
        };
        card.innerHTML = `
            <div class="j-card-header">
                <h3>${j.name}</h3>
                <span class="j-badge ${j.type}">${j.type === 'plan' ? 'Future Plan' : 'Travelled'}</span>
            </div>
            <div class="j-stats">
                <span><i data-lucide="map-pin"></i> ${j.temples.length} Temples</span>
                <span><i data-lucide="calendar"></i> ${new Date(j.createdAt).toLocaleDateString()}</span>
            </div>
            <div class="j-actions">
                <button class="j-btn delete" onclick="deleteJourney('${j.id}')" title="Delete"><i data-lucide="trash-2"></i></button>
            </div>
        `;
        list.appendChild(card);
    });
    lucide.createIcons();
}

// Global functions for Journey
window.deleteJourney = function (id) {
    if (!confirm('Are you sure you want to delete this journey?')) return;
    state.journeys = state.journeys.filter(j => j.id !== id);
    saveState();
    const activeTab = document.querySelector('.j-tab.active');
    renderJourneys(activeTab ? activeTab.dataset.type : 'plan');
};

window.toggleTempleInJourney = function (journeyId, templeId, btn) {
    const journey = state.journeys.find(j => j.id === journeyId);
    if (!journey) return;

    const index = journey.temples.indexOf(templeId);
    if (index > -1) {
        journey.temples.splice(index, 1);
        btn.classList.remove('active');
    } else {
        journey.temples.push(templeId);
        btn.classList.add('active');
        // If it's a travelled trip, also mark as visited in master list
        if (journey.type === 'trip') {
            state.visited.add(templeId);
            if (!state.visitedDates[templeId]) {
                state.visitedDates[templeId] = new Date().toISOString().split('T')[0];
            }
        }
    }
    saveState();
    updateStats();
    renderTemples();
    updateJourneyStatusInModal(templeId);
};

function updateJourneyStatusInModal(templeId) {
    const listContainer = document.getElementById('modal-journey-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    if (state.journeys.length === 0) {
        listContainer.innerHTML = '<span style="font-size: 0.8rem; color: var(--text-muted)">No journeys created yet.</span>';
        return;
    }

    state.journeys.forEach(j => {
        const isIn = j.temples.includes(templeId);
        const btn = document.createElement('button');
        btn.className = `journey-pin ${isIn ? 'active' : ''}`;
        btn.style.cssText = `
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid ${isIn ? 'var(--primary-color)' : 'var(--border-color)'};
            background: ${isIn ? 'var(--primary-glow)' : 'var(--surface-highlight)'};
            color: ${isIn ? 'var(--primary-color)' : 'var(--text-color)'};
            font-size: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.2s;
        `;
        btn.innerHTML = `<i data-lucide="${j.type === 'plan' ? 'calendar' : 'check-circle'}" style="width: 12px; height: 12px;"></i> ${j.name}`;
        btn.onclick = () => toggleTempleInJourney(j.id, templeId, btn);
        listContainer.appendChild(btn);
    });
    lucide.createIcons();
}

// Call the setup
setupJourneyUI();
