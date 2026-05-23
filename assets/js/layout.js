// ========== AUTO-DETECT BASE PATH ==========
(function() {
    const path = window.location.pathname;
    // نحسب العمق بالنسبة للمجلد الجذر rubikcare-methodology
    const baseIndex = path.indexOf('/rubikcare-methodology/');
    let relativePath = '';
    if (baseIndex !== -1) {
        const afterBase = path.substring(baseIndex + '/rubikcare-methodology/'.length);
        const depth = (afterBase.match(/\//g) || []).length;
        relativePath = depth === 0 ? './' : '../'.repeat(depth);
    }
    
    // تحميل CSS تلقائياً
    if (!document.querySelector('link[data-layout-css]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = relativePath + 'assets/css/layout.css';
        link.setAttribute('data-layout-css', 'true');
        document.head.appendChild(link);
    }
    
    // تخزين المسار النسبي للاستخدام لاحقاً
    window.__rubikBasePath = relativePath;
})();

// ========== PAGE MAPPING ==========
const pageMap = {
    'index-home.html': { title: 'Home', icon: '🏠', parent: null },
    'pages/methodology/rubik-methodology.html': { title: 'rubik-methodology', icon: '🔄', parent: '📘 Methodology' },
    'pages/methodology/closed-loops.html': { title: 'Closed Loops', icon: '🔄', parent: '📘 Methodology' },
    'pages/methodology/kpis.html': { title: 'KPIs', icon: '📊', parent: '📘 Methodology' },
    'pages/tools/self-assessment.html': { title: 'Self-Assessment', icon: '📋', parent: '📘 Methodology' },
    'pages/resources/methodology-visual-guide.html': { title: 'Visual Guide', icon: '📐', parent: '📘 Methodology' },
    'pages/periodic-table/rubik-periodic-table-final.html': { title: 'Interactive Periodic Table', icon: '⚛️', parent: '⚛️ Periodic Table' },
    'pages/methodology/d-block-final.html': { title: 'd-Block (21 elements)', icon: '🔷', parent: '⚛️ Periodic Table' },
    'pages/methodology/f-block.html': { title: 'f-Block (Distortion)', icon: '💀', parent: '⚛️ Periodic Table' },
    'pages/methodology/zone-a.html': { title: 'Zone A — Complete Digital', icon: '✅', parent: '⚛️ Periodic Table' },
    'pages/methodology/zone-b.html': { title: 'Zone B — Mixed', icon: '⚡', parent: '⚛️ Periodic Table' },
    'pages/methodology/zone-c.html': { title: 'Zone C — Collapse', icon: '⚠️', parent: '⚛️ Periodic Table' },
    'pages/methodology/u-shape.html': { title: 'U-Shape (Collapse Pathway)', icon: '📐', parent: '⚛️ Periodic Table' },
    'pages/methodology/sovereignty.html': { title: 'Sovereignty Layer', icon: '⚖️', parent: '⚛️ Periodic Table' },
    'pages/products/psp/psp-pharma-partners.html': { title: 'PSP for Pharma', icon: '💊', parent: '💼 Products & Future' },
    'pages/products/psp/psp-detailed-specs.html': { title: 'PSP Detailed Specs', icon: '📋', parent: '💼 Products & Future' },
    'pages/products/clinic-os.html': { title: 'Clinic OS', icon: '🏥', parent: '💼 Products & Future' },
    'pages/products/pharmacy-network.html': { title: 'Pharmacy Network', icon: '💊', parent: '💼 Products & Future' },
    'pages/products/cme-platform.html': { title: 'CME Platform', icon: '🎓', parent: '💼 Products & Future' },
    'pages/products/crm-rep-management.html': { title: 'Medical Rep CRM', icon: '📊', parent: '💼 Products & Future' },
    'pages/strategy/future-vision.html': { title: 'Future Vision (All-in-One)', icon: '🚀', parent: '💼 Products & Future' },
    'pages/strategy/competitor-analysis.html': { title: 'Competitor Analysis', icon: '🏆', parent: '📈 Strategy' },
    'pages/strategy/roadmap.html': { title: 'Roadmap', icon: '🗺️', parent: '📈 Strategy' },
    'pages/strategy/product-specification.html': { title: 'Product Specification', icon: '📄', parent: '📈 Strategy' },
};

// ========== GET CURRENT PAGE ==========
function getCurrentPage() {
    const path = window.location.pathname;
    const base = '/rubikcare-methodology/';
    if (path.includes(base)) {
        let relative = path.substring(path.indexOf(base) + base.length);
        if (relative === '' || relative === 'index.html') relative = 'index-home.html';
        return relative;
    }
    return 'index-home.html';
}

// ========== BUILD HEADER ==========
function buildHeader(currentPage) {
    const bp = window.__rubikBasePath || './';
    const pageInfo = pageMap[currentPage] || { title: 'Home', icon: '🏠', parent: null };
    
    let breadcrumb = `<a href="${bp}index-home.html">🏠 Home</a>`;
    if (pageInfo.parent) {
        breadcrumb += ` <span class="rubik-breadcrumb-sep">›</span> <span>${pageInfo.parent}</span>`;
    }
    breadcrumb += ` <span class="rubik-breadcrumb-sep">›</span> <strong>${pageInfo.icon} ${pageInfo.title}</strong>`;
    
    const isActive = (pattern) => currentPage.includes(pattern);
    
    return `
    <header class="rubik-header">
        <div class="rubik-header-inner">
            <a href="${bp}index-home.html" class="rubik-logo">
                <div class="rubik-logo-cube"><span></span><span></span><span></span><span></span></div>
                <div>
                    <div class="rubik-logo-text">Rubik<em>Methodology</em></div>
                    <div class="rubik-logo-subtitle">Market Intelligence Framework</div>
                </div>
            </a>
            <div class="rubik-header-actions">
                <a href="https://rubikans.com" class="rubik-company-link" target="_blank">← Rubikans.com</a>
            </div>
        </div>
    </header>
    
    <div class="rubik-breadcrumb">
        <div class="rubik-breadcrumb-inner">${breadcrumb}</div>
    </div>
    
    <nav class="rubik-navbar">
        <div class="rubik-navbar-inner">
            <a href="${bp}index-home.html" class="rubik-nav-btn ${currentPage === 'index-home.html' ? 'active' : ''}">🏠 Home</a>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${isActive('methodology/') || isActive('tools/') || isActive('resources/') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    📘 Methodology <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${bp}pages/methodology/rubik-methodology.html">🔄 rubik-methodology</a>
                    <a href="${bp}pages/methodology/closed-loops.html">🔄 Closed Loops</a>
                    <a href="${bp}pages/methodology/kpis.html">📊 KPIs</a>
                    <a href="${bp}pages/tools/self-assessment.html">📋 Self-Assessment</a>
                    <a href="${bp}pages/resources/methodology-visual-guide.html">📐 Visual Guide</a>
                </div>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${isActive('periodic-table/') || isActive('d-block') || isActive('f-block') || isActive('zone-') || isActive('u-shape') || isActive('sovereignty') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    ⚛️ Periodic Table <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${bp}pages/periodic-table/rubik-periodic-table-final.html">⚛️ Interactive Periodic Table</a>
                    <a href="${bp}pages/methodology/d-block-final.html">🔷 d-Block (21 elements)</a>
                    <a href="${bp}pages/methodology/f-block.html">💀 f-Block (Distortion)</a>
                    <a href="${bp}pages/methodology/zone-a.html">✅ Zone A — Complete Digital</a>
                    <a href="${bp}pages/methodology/zone-b.html">⚡ Zone B — Mixed</a>
                    <a href="${bp}pages/methodology/zone-c.html">⚠️ Zone C — Collapse</a>
                    <a href="${bp}pages/methodology/u-shape.html">📐 U-Shape (Collapse Pathway)</a>
                    <a href="${bp}pages/methodology/sovereignty.html">⚖️ Sovereignty Layer</a>
                </div>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${isActive('products/') || isActive('future-vision') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    💼 Products & Future <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${bp}pages/products/psp/psp-pharma-partners.html">💊 PSP for Pharma</a>
                    <a href="${bp}pages/products/psp/psp-detailed-specs.html">📋 PSP Detailed Specs</a>
                    <a href="${bp}pages/products/clinic-os.html">🏥 Clinic OS</a>
                    <a href="${bp}pages/products/pharmacy-network.html">💊 Pharmacy Network</a>
                    <a href="${bp}pages/products/cme-platform.html">🎓 CME Platform</a>
                    <a href="${bp}pages/products/crm-rep-management.html">📊 Medical Rep CRM</a>
                    <a href="${bp}pages/strategy/future-vision.html">🚀 Future Vision (All-in-One)</a>
                </div>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${isActive('strategy/') && !isActive('future-vision') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    📈 Strategy <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${bp}pages/strategy/competitor-analysis.html">🏆 Competitor Analysis</a>
                    <a href="${bp}pages/strategy/roadmap.html">🗺️ Roadmap</a>
                    <a href="${bp}pages/strategy/product-specification.html">📄 Product Specification</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

// ========== BUILD FOOTER ==========
function buildFooter() {
    const bp = window.__rubikBasePath || './';
    return `
    <footer class="rubik-footer">
        <div class="rubik-footer-inner">
            <div class="rubik-footer-brand">Rubik<span>Methodology</span></div>
            <ul class="rubik-footer-links">
                <li><a href="${bp}pages/methodology/rubik-methodology.html">Methodology</a></li>
                <li><a href="${bp}pages/periodic-table/rubik-periodic-table-final.html">Periodic Table</a></li>
                <li><a href="${bp}pages/strategy/competitor-analysis.html">Competitor Analysis</a></li>
                <li><a href="${bp}pages/strategy/roadmap.html">Roadmap</a></li>
            </ul>
        </div>
    </footer>
    `;
}

// ========== TOGGLE DROPDOWN ==========
function toggleDropdown(button) {
    const dropdown = button.closest('.rubik-nav-dropdown');
    const isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
    if (!isOpen) dropdown.classList.add('open');
}

// ========== INITIALIZE ==========
(function() {
    const currentPage = getCurrentPage();
    
    document.body.insertAdjacentHTML('afterbegin', buildHeader(currentPage));
    document.body.insertAdjacentHTML('beforeend', buildFooter());
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.rubik-nav-dropdown')) {
            document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
})();
