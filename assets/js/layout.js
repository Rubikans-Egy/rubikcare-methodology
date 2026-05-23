/* ==========================================================
   Rubik Methodology — Unified Layout JS
   Version: 2.0
   - Auto-injects header, breadcrumb, navbar and footer
   - Fixes dropdown clipping (uses event delegation)
   - Removes duplicate breadcrumbs from legacy pages
   ========================================================== */

(function () {
  'use strict';

  // ========== AUTO-DETECT BASE PATH ==========
  const PATH = window.location.pathname;
  const BASE_FOLDER = '/rubikcare-methodology/';
  let relativePath = './';
  const baseIndex = PATH.indexOf(BASE_FOLDER);
  if (baseIndex !== -1) {
    const afterBase = PATH.substring(baseIndex + BASE_FOLDER.length);
    const depth = (afterBase.match(/\//g) || []).length;
    relativePath = depth === 0 ? './' : '../'.repeat(depth);
  }
  window.__rubikBasePath = relativePath;

  // ========== AUTO-LOAD CSS ==========
  if (!document.querySelector('link[data-layout-css]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = relativePath + 'assets/css/layout.css';
    link.setAttribute('data-layout-css', 'true');
    document.head.appendChild(link);
  }

  // Load brand fonts (Cormorant Garamond + DM Sans)
  if (!document.querySelector('link[data-layout-fonts]')) {
    const pre1 = document.createElement('link');
    pre1.rel = 'preconnect'; pre1.href = 'https://fonts.googleapis.com';
    const pre2 = document.createElement('link');
    pre2.rel = 'preconnect'; pre2.href = 'https://fonts.gstatic.com'; pre2.crossOrigin = '';
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap';
    fonts.setAttribute('data-layout-fonts', 'true');
    document.head.appendChild(pre1);
    document.head.appendChild(pre2);
    document.head.appendChild(fonts);
  }

  // ========== PAGE MAP ==========
  const pageMap = {
    'index-home.html': { title: 'Home', icon: '🏠', parent: null },
    'pages/methodology/rubik-methodology.html': { title: 'Rubik Methodology', icon: '🔄', parent: '📘 Methodology' },
    'pages/methodology/closed-loops.html':      { title: 'Closed Loops', icon: '🔄', parent: '📘 Methodology' },
    'pages/methodology/kpis.html':              { title: 'KPIs', icon: '📊', parent: '📘 Methodology' },
    'pages/tools/self-assessment.html':         { title: 'Self-Assessment', icon: '📋', parent: '📘 Methodology' },
    'pages/resources/methodology-visual-guide.html': { title: 'Visual Guide', icon: '📐', parent: '📘 Methodology' },
    'pages/periodic-table/rubik-periodic-table-final.html': { title: 'Interactive Periodic Table', icon: '⚛️', parent: '⚛️ Periodic Table' },
    'pages/methodology/d-block-final.html': { title: 'd-Block (21 elements)', icon: '🔷', parent: '⚛️ Periodic Table' },
    'pages/methodology/f-block.html':       { title: 'f-Block (Distortion)', icon: '💀', parent: '⚛️ Periodic Table' },
    'pages/methodology/zone-a.html':        { title: 'Zone A — Complete Digital', icon: '✅', parent: '⚛️ Periodic Table' },
    'pages/methodology/zone-b.html':        { title: 'Zone B — Mixed', icon: '⚡', parent: '⚛️ Periodic Table' },
    'pages/methodology/zone-c.html':        { title: 'Zone C — Collapse', icon: '⚠️', parent: '⚛️ Periodic Table' },
    'pages/methodology/u-shape.html':       { title: 'U-Shape (Collapse Pathway)', icon: '📐', parent: '⚛️ Periodic Table' },
    'pages/methodology/sovereignty.html':   { title: 'Sovereignty Layer', icon: '⚖️', parent: '⚛️ Periodic Table' },
    'pages/products/psp/psp-pharma-partners.html': { title: 'PSP for Pharma', icon: '💊', parent: '💼 Products & Future' },
    'pages/products/psp/psp-detailed-specs.html':  { title: 'PSP Detailed Specs', icon: '📋', parent: '💼 Products & Future' },
    'pages/products/clinic-os.html':         { title: 'Clinic OS', icon: '🏥', parent: '💼 Products & Future' },
    'pages/products/pharmacy-network.html':  { title: 'Pharmacy Network', icon: '💊', parent: '💼 Products & Future' },
    'pages/products/cme-platform.html':      { title: 'CME Platform', icon: '🎓', parent: '💼 Products & Future' },
    'pages/products/crm-rep-management.html':{ title: 'Medical Rep CRM', icon: '📊', parent: '💼 Products & Future' },
    'pages/strategy/future-vision.html':     { title: 'Future Vision (All-in-One)', icon: '🚀', parent: '💼 Products & Future' },
    'pages/strategy/competitor-analysis.html':{ title: 'Competitor Analysis', icon: '🏆', parent: '📈 Strategy' },
    'pages/strategy/roadmap.html':            { title: 'Roadmap', icon: '🗺️', parent: '📈 Strategy' },
    'pages/strategy/product-specification.html': { title: 'Product Specification', icon: '📄', parent: '📈 Strategy' },
  };

  // ========== NAV STRUCTURE ==========
  const navGroups = [
    {
      label: '📘 Methodology',
      items: [
        'pages/methodology/rubik-methodology.html',
        'pages/methodology/closed-loops.html',
        'pages/methodology/kpis.html',
        'pages/tools/self-assessment.html',
        'pages/resources/methodology-visual-guide.html',
      ],
    },
    {
      label: '⚛️ Periodic Table',
      items: [
        'pages/periodic-table/rubik-periodic-table-final.html',
        'pages/methodology/d-block-final.html',
        'pages/methodology/f-block.html',
        'pages/methodology/zone-a.html',
        'pages/methodology/zone-b.html',
        'pages/methodology/zone-c.html',
        'pages/methodology/u-shape.html',
        'pages/methodology/sovereignty.html',
      ],
    },
    {
      label: '💼 Products & Future',
      items: [
        'pages/products/psp/psp-pharma-partners.html',
        'pages/products/psp/psp-detailed-specs.html',
        'pages/products/clinic-os.html',
        'pages/products/pharmacy-network.html',
        'pages/products/cme-platform.html',
        'pages/products/crm-rep-management.html',
        'pages/strategy/future-vision.html',
      ],
    },
    {
      label: '📈 Strategy',
      items: [
        'pages/strategy/competitor-analysis.html',
        'pages/strategy/roadmap.html',
        'pages/strategy/product-specification.html',
      ],
    },
  ];

  // ========== CURRENT PAGE ==========
  function getCurrentPage() {
    const path = window.location.pathname;
    const idx = path.indexOf(BASE_FOLDER);
    if (idx === -1) return 'index-home.html';
    let rel = path.substring(idx + BASE_FOLDER.length);
    if (rel === '' || rel === 'index.html' || rel === '/') rel = 'index-home.html';
    return rel;
  }

  // ========== HELPERS ==========
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function buildBreadcrumb(currentPage) {
    const bp = window.__rubikBasePath;
    const info = pageMap[currentPage] || { title: 'Home', icon: '🏠', parent: null };
    let html = `<a href="${bp}index-home.html">🏠 Home</a>`;
    if (info.parent) {
      html += `<span class="rubik-breadcrumb-sep">›</span><span>${esc(info.parent)}</span>`;
    }
    html += `<span class="rubik-breadcrumb-sep">›</span><span class="rubik-breadcrumb-current">${esc(info.icon)} ${esc(info.title)}</span>`;
    return html;
  }

  function buildNavMenu(group, currentPage) {
    const bp = window.__rubikBasePath;
    const links = group.items.map(slug => {
      const info = pageMap[slug];
      if (!info) return '';
      const isActive = slug === currentPage ? ' class="active"' : '';
      return `<a href="${bp}${slug}"${isActive}>${esc(info.icon)} ${esc(info.title)}</a>`;
    }).join('');
    const hasActive = group.items.includes(currentPage);
    const btnActive = hasActive ? ' active' : '';
    return `
      <div class="rubik-nav-dropdown" data-dropdown>
        <button type="button" class="rubik-nav-btn${btnActive}" data-dropdown-toggle>
          <span>${esc(group.label)}</span>
          <span class="rubik-arrow">▼</span>
        </button>
        <div class="rubik-nav-menu" role="menu">${links}</div>
      </div>
    `;
  }

  function buildHeader(currentPage) {
    const bp = window.__rubikBasePath;
    const homeActive = currentPage === 'index-home.html' ? ' active' : '';
    const navItems = navGroups.map(g => buildNavMenu(g, currentPage)).join('');

    return `
      <header class="rubik-header">
        <div class="rubik-header-inner">
          <a class="rubik-logo" href="${bp}index-home.html">
            <span class="rubik-logo-cube" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
            <span class="rubik-logo-text-wrap">
              <span class="rubik-logo-text">Rubik<em>Methodology</em></span>
              <span class="rubik-logo-subtitle">Market Intelligence Framework</span>
            </span>
          </a>
          <div class="rubik-header-actions">
            <a class="rubik-company-link" href="https://rubikans.com" target="_blank" rel="noopener">← Rubikans.com</a>
          </div>
        </div>
      </header>

      <nav class="rubik-breadcrumb" aria-label="Breadcrumb">
        <div class="rubik-breadcrumb-inner">${buildBreadcrumb(currentPage)}</div>
      </nav>

      <nav class="rubik-navbar" aria-label="Primary">
        <div class="rubik-navbar-inner">
          <a class="rubik-nav-btn${homeActive}" href="${bp}index-home.html">🏠 Home</a>
          ${navItems}
        </div>
      </nav>
    `;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="rubik-footer">
        <div class="rubik-footer-inner">
          <div class="rubik-footer-brand">Rubik<span>Methodology</span></div>
          <ul class="rubik-footer-links">
            <li><a href="https://rubikans.com" target="_blank" rel="noopener">Rubikans</a></li>
            <li><a href="https://github.com/Rubikans-Egy" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
          <div>© ${year} Rubikans — Pharmaceutical Market Intelligence</div>
        </div>
      </footer>
    `;
  }

  // ========== REMOVE LEGACY DUPLICATE BREADCRUMB ==========
  function removeLegacyBreadcrumbs() {
    // Common patterns from older pages
    const selectors = [
      '.legacy-breadcrumb',
      '.page-breadcrumb',
      'body > nav.breadcrumb',
      'body > .breadcrumb',
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!el.classList.contains('rubik-breadcrumb')) el.remove();
      });
    });
  }

  // ========== DROPDOWN BEHAVIOUR (event delegation) ==========
  function closeAllDropdowns() {
    document.querySelectorAll('.rubik-nav-dropdown.open').forEach(d => d.classList.remove('open'));
  }

  function attachInteractions() {
    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('[data-dropdown-toggle]');
      if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        const dd = toggle.closest('[data-dropdown]');
        const wasOpen = dd.classList.contains('open');
        closeAllDropdowns();
        if (!wasOpen) dd.classList.add('open');
        return;
      }
      // Click outside any dropdown closes them
      if (!e.target.closest('[data-dropdown]')) closeAllDropdowns();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAllDropdowns();
    });
  }

  // ========== INIT ==========
  function init() {
    const currentPage = getCurrentPage();
    removeLegacyBreadcrumbs();
    document.body.insertAdjacentHTML('afterbegin', buildHeader(currentPage));
    document.body.insertAdjacentHTML('beforeend', buildFooter());
    attachInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
