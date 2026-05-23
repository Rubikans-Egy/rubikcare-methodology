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

// ========== GET CURRENT PAGE PATH ==========
function getCurrentPagePath() {
    const path = window.location.pathname;
    // Remove base path if on GitHub Pages
    const basePath = '/rubikcare-methodology/';
    let relativePath = path;
    if (path.includes(basePath)) {
        relativePath = path.substring(path.indexOf(basePath) + basePath.length);
    }
    // Remove leading slash
    relativePath = relativePath.replace(/^\//, '');
    // Default to index-home.html
    if (relativePath === '' || relativePath === 'index.html') {
        relativePath = 'index-home.html';
    }
    return relativePath;
}

// ========== BUILD HEADER HTML ==========
function buildHeader(currentPage) {
    const pageInfo = pageMap[currentPage] || { title: 'Home', icon: '🏠', parent: null };
    
    // Breadcrumb
    let breadcrumb = `<a href="index-home.html">🏠 Home</a>`;
    if (pageInfo.parent) {
        breadcrumb += ` <span class="rubik-breadcrumb-sep">›</span> <span>${pageInfo.parent}</span>`;
    }
    breadcrumb += ` <span class="rubik-breadcrumb-sep">›</span> <strong>${pageInfo.icon} ${pageInfo.title}</strong>`;
    
    // Calculate depth for relative paths
    const depth = (currentPage.match(/\//g) || []).length;
    const prefix = depth === 0 ? '.' : Array(depth).fill('..').join('/');
    
    return `
    <header class="rubik-header">
        <div class="rubik-header-inner">
            <a href="${prefix}/index-home.html" class="rubik-logo">
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
            <div class="rubik-nav-dropdown">
                <a href="${prefix}/index-home.html" class="rubik-nav-btn ${currentPage === 'index-home.html' ? 'active' : ''}">🏠 Home</a>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${currentPage.includes('methodology/') || currentPage.includes('tools/') || currentPage.includes('resources/') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    📘 Methodology <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${prefix}/pages/methodology/rubik-methodology.html" class="${currentPage === 'pages/methodology/rubik-methodology.html' ? 'active' : ''}">🔄 rubik-methodology</a>
                    <a href="${prefix}/pages/methodology/closed-loops.html" class="${currentPage === 'pages/methodology/closed-loops.html' ? 'active' : ''}">🔄 Closed Loops</a>
                    <a href="${prefix}/pages/methodology/kpis.html" class="${currentPage === 'pages/methodology/kpis.html' ? 'active' : ''}">📊 KPIs</a>
                    <a href="${prefix}/pages/tools/self-assessment.html" class="${currentPage === 'pages/tools/self-assessment.html' ? 'active' : ''}">📋 Self-Assessment</a>
                    <a href="${prefix}/pages/resources/methodology-visual-guide.html" class="${currentPage === 'pages/resources/methodology-visual-guide.html' ? 'active' : ''}">📐 Visual Guide</a>
                </div>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${currentPage.includes('periodic-table/') || currentPage.includes('d-block') || currentPage.includes('f-block') || currentPage.includes('zone-') || currentPage.includes('u-shape') || currentPage.includes('sovereignty') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    ⚛️ Periodic Table <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${prefix}/pages/periodic-table/rubik-periodic-table-final.html" class="${currentPage === 'pages/periodic-table/rubik-periodic-table-final.html' ? 'active' : ''}">⚛️ Interactive Periodic Table</a>
                    <a href="${prefix}/pages/methodology/d-block-final.html" class="${currentPage === 'pages/methodology/d-block-final.html' ? 'active' : ''}">🔷 d-Block (21 elements)</a>
                    <a href="${prefix}/pages/methodology/f-block.html" class="${currentPage === 'pages/methodology/f-block.html' ? 'active' : ''}">💀 f-Block (Distortion)</a>
                    <a href="${prefix}/pages/methodology/zone-a.html" class="${currentPage === 'pages/methodology/zone-a.html' ? 'active' : ''}">✅ Zone A — Complete Digital</a>
                    <a href="${prefix}/pages/methodology/zone-b.html" class="${currentPage === 'pages/methodology/zone-b.html' ? 'active' : ''}">⚡ Zone B — Mixed</a>
                    <a href="${prefix}/pages/methodology/zone-c.html" class="${currentPage === 'pages/methodology/zone-c.html' ? 'active' : ''}">⚠️ Zone C — Collapse</a>
                    <a href="${prefix}/pages/methodology/u-shape.html" class="${currentPage === 'pages/methodology/u-shape.html' ? 'active' : ''}">📐 U-Shape (Collapse Pathway)</a>
                    <a href="${prefix}/pages/methodology/sovereignty.html" class="${currentPage === 'pages/methodology/sovereignty.html' ? 'active' : ''}">⚖️ Sovereignty Layer</a>
                </div>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${currentPage.includes('products/') || currentPage.includes('future-vision') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    💼 Products & Future <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${prefix}/pages/products/psp/psp-pharma-partners.html" class="${currentPage === 'pages/products/psp/psp-pharma-partners.html' ? 'active' : ''}">💊 PSP for Pharma</a>
                    <a href="${prefix}/pages/products/psp/psp-detailed-specs.html" class="${currentPage === 'pages/products/psp/psp-detailed-specs.html' ? 'active' : ''}">📋 PSP Detailed Specs</a>
                    <a href="${prefix}/pages/products/clinic-os.html" class="${currentPage === 'pages/products/clinic-os.html' ? 'active' : ''}">🏥 Clinic OS</a>
                    <a href="${prefix}/pages/products/pharmacy-network.html" class="${currentPage === 'pages/products/pharmacy-network.html' ? 'active' : ''}">💊 Pharmacy Network</a>
                    <a href="${prefix}/pages/products/cme-platform.html" class="${currentPage === 'pages/products/cme-platform.html' ? 'active' : ''}">🎓 CME Platform</a>
                    <a href="${prefix}/pages/products/crm-rep-management.html" class="${currentPage === 'pages/products/crm-rep-management.html' ? 'active' : ''}">📊 Medical Rep CRM</a>
                    <a href="${prefix}/pages/strategy/future-vision.html" class="${currentPage === 'pages/strategy/future-vision.html' ? 'active' : ''}">🚀 Future Vision (All-in-One)</a>
                </div>
            </div>
            
            <div class="rubik-nav-dropdown" data-dropdown>
                <button class="rubik-nav-btn ${currentPage.includes('strategy/') && !currentPage.includes('future-vision') ? 'active' : ''}" onclick="toggleDropdown(this);">
                    📈 Strategy <span class="rubik-arrow">▼</span>
                </button>
                <div class="rubik-nav-menu">
                    <a href="${prefix}/pages/strategy/competitor-analysis.html" class="${currentPage === 'pages/strategy/competitor-analysis.html' ? 'active' : ''}">🏆 Competitor Analysis</a>
                    <a href="${prefix}/pages/strategy/roadmap.html" class="${currentPage === 'pages/strategy/roadmap.html' ? 'active' : ''}">🗺️ Roadmap</a>
                    <a href="${prefix}/pages/strategy/product-specification.html" class="${currentPage === 'pages/strategy/product-specification.html' ? 'active' : ''}">📄 Product Specification</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

// ========== BUILD FOOTER HTML ==========
function buildFooter(currentPage) {
    const depth = (currentPage.match(/\//g) || []).length;
    const prefix = depth === 0 ? '.' : Array(depth).fill('..').join('/');
    
    return `
    <footer class="rubik-footer">
        <div class="rubik-footer-inner">
            <div class="rubik-footer-brand">Rubik<span>Methodology</span></div>
            <ul class="rubik-footer-links">
                <li><a href="${prefix}/pages/methodology/rubik-methodology.html">Methodology</a></li>
                <li><a href="${prefix}/pages/periodic-table/rubik-periodic-table-final.html">Periodic Table</a></li>
                <li><a href="${prefix}/pages/strategy/competitor-analysis.html">Competitor Analysis</a></li>
                <li><a href="${prefix}/pages/strategy/roadmap.html">Roadmap</a></li>
            </ul>
        </div>
    </footer>
    `;
}

// ========== DROPDOWN TOGGLE ==========
function toggleDropdown(button) {
    const dropdown = button.closest('.rubik-nav-dropdown');
    const isOpen = dropdown.classList.contains('open');
    
    // Close all
    document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
    
    // Open current if was closed
    if (!isOpen) {
        dropdown.classList.add('open');
    }
}

// ========== INITIALIZE LAYOUT ==========
(function() {
    const currentPage = getCurrentPagePath();
    
    // Inject header
    const headerHTML = buildHeader(currentPage);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Inject footer
    const footerHTML = buildFooter(currentPage);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // Close dropdowns on outside click
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.rubik-nav-dropdown')) {
            document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
    
    // Close dropdowns on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
})();
