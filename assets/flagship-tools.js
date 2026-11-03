// Babie Blue — Clinical UX, Speculation Rules, Dual-Unit Switcher, & Academic Citation/Embed Engine
(function () {
  const CORE_SEARCH_INDEX = [
    { title: "Wake Windows by Age & Nap Transitions (0–24 Months)", url: "/baby-care/wake-windows-nap-transitions-by-age/", cat: "Baby Care", desc: "Interactive 24-hour wake window schedule generator, cortisol science & nap transition quiz." },
    { title: "Paced Bottle Feeding & Combo Feeding Schedule Guide", url: "/baby-care/paced-bottle-feeding-combo-feeding-schedule/", cat: "Baby Care", desc: "Weight-based daily breastmilk & formula volume calculator, horizontal bottle angle & nipple flow matrix." },
    { title: "Postpartum Diastasis Recti Self-Test & 12-Week Core Rehab", url: "/maternal-health/postpartum-diastasis-recti-self-test-rehab-protocol/", cat: "Maternal Health", desc: "3-zone finger-width IRD & linea alba tension scorer with 360° piston rehab progression." },
    { title: "Newborn Poop Color & Texture Chart: Visual Stool Triage", url: "/baby-care/newborn-poop-color-texture-chart/", cat: "Baby Care", desc: "9-color stool swatch decoder (meconium to CMPA mucus & biliary atresia alert) + Day 1–7 diaper tracker." },
    { title: "Infant Fever Guide & Exact Tylenol / Motrin Dosing Chart", url: "/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/", cat: "Baby Care", desc: "Weight-based mL syringe visualizer (160mg/5mL, 50mg/1.25mL, 100mg/5mL) & AAP under-60-day fever triage." },
    { title: "Cord Blood & Cord Tissue Banking (2026): Public vs. Private Costs", url: "/pregnancy/cord-blood-cord-tissue-banking-costs-public-vs-private/", cat: "Pregnancy", desc: "18–25 year private banking true cost calculator, delayed cord clamping blood volume & medical odds." },
    { title: "NICU Preemie Discharge Checklist & Corrected Age Guide", url: "/baby-care/nicu-preemie-discharge-checklist-corrected-age-guide/", cat: "Baby Care", desc: "Adjusted vs. chronological age milestone calculator, 22-calorie fortification recipes & NICU readiness." },
    { title: "Silent Reflux (LPR) vs. Colic in Newborns: Clinical Protocol", url: "/baby-care/silent-reflux-lpr-vs-colic-newborns-protocol/", cat: "Baby Care", desc: "4-way symptom differentiator (Silent LPR vs. GERD vs. Colic vs. CMPA) & 14-day conservative plan." },
    { title: "Hypoallergenic vs. Extensively Hydrolyzed vs. Goat Milk Formula", url: "/baby-care/hypoallergenic-vs-extensively-hydrolyzed-vs-goat-milk-formula/", cat: "Baby Care", desc: "Dalton protein hydrolysis ladder, corn-free Alimentum RTF vs. powder & HCPCS B4161 insurance calculator." },
    { title: "Interactive Hospital Bag Checklist (Mom, Partner & Baby Tracker)", url: "/pregnancy/hospital-bag-checklist-mom-partner-baby-tracker/", cat: "Pregnancy", desc: "Customize by Vaginal, Scheduled C-Section, VBAC, or Induction with auto-saved packing progress bars." },
    { title: "The Ultimate Postpartum Blood Work Panel: Ferritin & Thyroiditis", url: "/maternal-health/postpartum-blood-work-panel-ferritin-thyroiditis-vitamin-d/", cat: "Maternal Health", desc: "Compare standard lab vs. optimal postpartum ranges (Ferritin >=50 ng/mL, TSH, Free T4, TPOAb, Vitamin D)." },
    { title: "Daycare Illness Survival Guide: RSV, Croup, HFM & Ear Infections", url: "/parenting/daycare-illness-survival-guide-rsv-croup-hfm-ear-infections/", cat: "Parenting", desc: "Cough & rash differential matcher, AAP return-to-daycare clearance calculator & Beyfortus RSV guide." },
    { title: "Best Organic Baby Formulas (2026): US vs. European Standards", url: "/baby-care/best-organic-baby-formulas-us-vs-european-standards/", cat: "Baby Care", desc: "US vs. EU organic formula matcher (Bobbie, Kendamil, ByHeart, HiPP, Holle) & FDA Operation Stork Speed audit." },
    { title: "How to Get a Free Breast Pump Through Insurance (2026 ACA Guide)", url: "/pregnancy/breast-pump-insurance-coverage-how-to-get-free/", cat: "Pregnancy", desc: "Compare Aeroflow, Babylist Health & Byram copays + 90-day free replacement parts (HCPCS A4281–A4286)." },
    { title: "Early Gender DNA Blood Test: SneakPeek vs. Clinical NIPT Accuracy", url: "/pregnancy/early-gender-dna-blood-test-sneakpeek-vs-nipt-accuracy/", cat: "Pregnancy", desc: "Fetal fraction readiness calculator by gestational age & BMI + Y-chromosome contamination risk scorer." },
    { title: "Safest Non-Toxic Crib Mattresses & Breathable Cribs (2026 CPSC)", url: "/baby-care/safest-non-toxic-nursery-mattresses-breathable-cribs/", cat: "Baby Care", desc: "Decode GOTS, GOLS & Greenguard Gold certifications + Newton vs. Naturepedic vs. Avocado comparison." },
    { title: "Pregnancy Due Date & Gestational Milestone Calculator", url: "/calculators/due-date-calculator/", cat: "Calculators", desc: "Calculate estimated delivery date from LMP, conception, or IVF transfer with trimester milestones." },
    { title: "Ovulation & 6-Day Fertile Window Calculator", url: "/calculators/ovulation-calculator/", cat: "Calculators", desc: "Track your peak LH surge, 6-day fertile window, and earliest sensitive hCG testing dates." },
    { title: "Beta hCG Doubling Time & Viability Calculator", url: "/calculators/hcg-calculator/", cat: "Calculators", desc: "Calculate 48-hour hCG percentage rise, doubling hours, and ultrasound discriminatory zones." },
    { title: "Baby Name Shortlist & Origin Finder Engine", url: "/calculators/baby-name-generator/", cat: "Calculators", desc: "Filter 300+ baby names by origin, gender, and style with persistent nursery shortlist." },
    { title: "Pregnancy Calorie & Trimester TDEE Calculator", url: "/calculators/pregnancy-calorie-deficit-calculator/", cat: "Calculators", desc: "Calculate trimester-adjusted caloric intake (+0, +340, +452 kcal) and safe maternal energy targets." },
    { title: "Open Clinical Datasets (CSV/JSON), REST API & Clinic Widgets", url: "/datasets/", cat: "Datasets & API", desc: "Download CC-BY-4.0 clinical reference tables, explore OpenAPI 3.1 endpoints, or embed calculators on your site." },
    { title: "Dr. Mangala Devi K.R., MBBS, MS (OBG), MBA — Senior Medical Reviewer", url: "/dr-mangala-devi/", cat: "Medical Board", desc: "Secretary (IFS Karnataka), Immediate Past President (BSOG), Consultant at Manipal Hospitals (MHEL)." },
    { title: "Dr. Anagha Nawal, MBBS, DGO, MD, MCE, FRM — Senior Medical Reviewer", url: "/dr-anagha-nawal/", cat: "Medical Board", desc: "20+ yrs Consultant OB-GYN & Clinical Embryologist (Monash University Australia & Kiel University Germany)." },
    { title: "Sivanandan N — Founder & Publisher", url: "/sivanandan-n/", cat: "Medical Board", desc: "Founder of Babie Blue & Shaynly, former Healthcare Project Head at Ferticare." },
    { title: "Madhuri B — Lead Healthcare Content Specialist", url: "/madhuri-b/", cat: "Medical Board", desc: "12+ yrs in Healthcare Leadership & Medical Billing (CPT/ICD-10/HCPCS)." },
    { title: "About Babie Blue — Leadership & Medical Review Board", url: "/about-us/", cat: "Medical Board", desc: "Meet our Medical Review Board, editorial verification standards, and leadership team." }
  ];

  let FULL_SEARCH_INDEX = [...CORE_SEARCH_INDEX];
  let fullIndexLoaded = false;
  let activeCategoryFilter = 'All';

  // 1. Speculation Rules API (Prefetch on Hover for <50ms Page Transitions)
  function injectSpeculationRules() {
    if (window.self !== window.top) return;
    if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
      if (document.querySelector('script[type="speculationrules"]')) return;
      const specScript = document.createElement('script');
      specScript.type = 'speculationrules';
      specScript.textContent = JSON.stringify({
        prefetch: [
          {
            source: 'document',
            where: {
              and: [
                { href_matches: '/*' },
                { not: { href_matches: '/api/*' } },
                { not: { href_matches: '/_*' } }
              ]
            },
            eagerness: 'moderate'
          }
        ]
      });
      document.head.appendChild(specScript);
    }
  }

  // 2. Register Offline-Ready Clinical Service Worker (Auto-cleans inside preview iframes)
  function registerClinicalServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    const isPreview =
      window.self !== window.top ||
      window.location.hostname.includes('localhost') ||
      window.location.hostname === '127.0.0.1';

    if (isPreview) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => {});
      if ('caches' in window) {
        caches
          .keys()
          .then((keys) => keys.forEach((k) => caches.delete(k)))
          .catch(() => {});
      }
      return;
    }

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  function loadFullSearchIndex() {
    if (fullIndexLoaded) return;
    fullIndexLoaded = true;
    fetch('/assets/search-index.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((items) => {
        if (Array.isArray(items) && items.length > 0) {
          const seen = new Set(CORE_SEARCH_INDEX.map((i) => i.url));
          for (const item of items) {
            if (!seen.has(item.url)) {
              seen.add(item.url);
              FULL_SEARCH_INDEX.push(item);
            }
          }
          const input = document.getElementById('bbSearchInput');
          if (input && document.getElementById('bbSearchModal')?.classList.contains('open')) {
            renderSearchResults(input.value);
          }
        }
      })
      .catch(() => {});
  }

  // 4. Dual-Unit System (US Imperial lbs/fl oz/°F ⇄ Metric SI kg/mL/°C)
  function getUnitSystem() {
    return localStorage.getItem('bb_unit_system') === 'metric' ? 'metric' : 'imperial';
  }

  function updateUnitButtons() {
    const isMetric = getUnitSystem() === 'metric';
    document.querySelectorAll('.bb-unit-toggle').forEach((btn) => {
      btn.innerHTML = isMetric ? 'Units: Metric (kg / mL / °C)' : 'Units: US (lbs / oz / °F)';
      btn.setAttribute('aria-pressed', isMetric ? 'true' : 'false');
    });
  }

  window.toggleBbUnitSystem = function () {
    const next = getUnitSystem() === 'metric' ? 'imperial' : 'metric';
    localStorage.setItem('bb_unit_system', next);
    updateUnitButtons();
    if (typeof window.updateBbPediatricWidget === 'function') window.updateBbPediatricWidget();
  };

  window.copyBbText = function (idOrText, btnEl) {
    let text = '';
    const el = typeof idOrText === 'string' ? document.getElementById(idOrText) : null;
    if (el) {
      text = (el.innerText || el.textContent || '').trim();
    } else if (typeof idOrText === 'string' && idOrText.length > 24) {
      text = idOrText.trim();
    } else {
      const fallback = document.querySelector('.clinical-summary-box, .bb-subtitle');
      if (fallback) text = (fallback.innerText || fallback.textContent || '').trim();
    }
    if (!text) return;
    const payload = text.includes('Babie Blue')
      ? text
      : text + '\n— Clinical Source: Babie Blue (' + window.location.href + ')';
    navigator.clipboard.writeText(payload).then(() => {
      if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Copied to Clipboard';
        setTimeout(() => {
          btnEl.innerHTML = orig;
        }, 2200);
      }
    });
  };

  window.copyBbShareLink = function (btnEl) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Link Copied';
        setTimeout(() => {
          btnEl.innerHTML = orig;
        }, 2200);
      }
    });
  };

  window.shareBbPartnerBrief = function () {
    const h1 = document.querySelector('h1')?.innerText || document.title;
    const bluf = document.querySelector('.clinical-summary-box, .bb-subtitle')?.innerText?.slice(0, 260) || '';
    const shareText = `Babie Blue Clinical Brief: ${h1}\n\n${bluf}...\n\nFull protocol: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({ title: h1 + ' | Babie Blue', text: shareText, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        const btn = document.getElementById('bbPartnerShareBtn');
        if (btn) {
          const orig = btn.innerHTML;
          btn.innerHTML = '✓ Brief Copied';
          setTimeout(() => (btn.innerHTML = orig), 2200);
        }
      });
    }
  };

  window.toggleBbCiteEmbedDrawer = function (mode) {
    const drawer = document.getElementById('bbCiteEmbedDrawer');
    if (!drawer) return;
    const isSameOpen = drawer.classList.contains('open') && drawer.getAttribute('data-mode') === mode;
    if (isSameOpen) {
      drawer.classList.remove('open');
      return;
    }
    drawer.setAttribute('data-mode', mode);
    drawer.classList.add('open');

    const title = (document.querySelector('h1')?.innerText || document.title).replace(/\s*\|\s*Babie Blue.*$/i, '').trim();
    const url = window.location.origin + window.location.pathname;
    const path = window.location.pathname;
    const toolType = path.includes('fever') ? 'fever' : path.includes('hcg') ? 'hcg' : path.includes('wake') || path.includes('sleep') ? 'wake' : 'edd';

    if (mode === 'cite') {
      const ama = `Madhuri B; reviewed by Devi KR M, Nawal A. ${title}. Babie Blue Clinical Protocols. Updated 2026. Accessed ${new Date().toISOString().split('T')[0]}. ${url}`;
      const apa = `Madhuri, B., Devi K.R., M., & Nawal, A. (2026). ${title}. Babie Blue. ${url}`;
      drawer.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <strong>Academic &amp; Clinical Citation Formats (AMA / APA / RIS)</strong>
          <button type="button" class="bb-utility-btn" onclick="document.getElementById('bbCiteEmbedDrawer').classList.remove('open')">Close &times;</button>
        </div>
        <div style="margin-top:10px;">
          <div style="font-weight:700;font-size:12px;color:#0f766e;">AMA 11th Edition Style:</div>
          <div class="bb-cite-box" id="bbAmaText">${ama}</div>
          <div style="font-weight:700;font-size:12px;color:#0369a1;margin-top:10px;">APA 7th Edition Style:</div>
          <div class="bb-cite-box" id="bbApaText">${apa}</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
            <button type="button" class="bb-utility-btn" onclick="navigator.clipboard.writeText(document.getElementById('bbAmaText').innerText);this.innerText='✓ AMA Copied'">Copy AMA</button>
            <button type="button" class="bb-utility-btn" onclick="navigator.clipboard.writeText(document.getElementById('bbApaText').innerText);this.innerText='✓ APA Copied'">Copy APA</button>
            <a href="/api/cite.ris?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}" class="bb-utility-btn" onclick="event.preventDefault();downloadBbCiteFile('ris')">Download .RIS</a>
            <a href="/api/cite.bib?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}" class="bb-utility-btn" onclick="event.preventDefault();downloadBbCiteFile('bib')">Download .BIB</a>
          </div>
        </div>
      `;
    } else {
      const snippet = `<div class="babieblue-clinical-widget" data-tool="${toolType}"></div>\n<p style="font-size:12px;margin-top:6px;">Clinical Reference: <a href="${url}" rel="dofollow">${title} — Babie Blue</a></p>\n<script async src="https://babieblue.com/embed/clinical-widget.js"><\/script>`;
      drawer.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <strong>Embed Clinical Calculator Widget</strong>
          <button type="button" class="bb-utility-btn" onclick="document.getElementById('bbCiteEmbedDrawer').classList.remove('open')">Close &times;</button>
        </div>
        <p style="margin:6px 0;font-size:12.5px;">Copy and paste this snippet into any clinic or patient education page:</p>
        <div class="bb-cite-box" id="bbEmbedBox">${snippet.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
          <button type="button" class="bb-utility-btn" onclick="navigator.clipboard.writeText(document.getElementById('bbEmbedBox').innerText);this.innerText='✓ Embed Code Copied'">Copy HTML Snippet</button>
          <a href="/datasets/" class="bb-utility-btn">Open Clinical Datasets &rarr;</a>
        </div>
      `;
    }
  };

  function triggerClientBlobDownload(filename, mimeType, content) {
    try {
      const blob = new Blob([content], { type: mimeType });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
    } catch {}
  }

  window.downloadBbCiteFile = function (fmt, customTitle, customUrl) {
    const title = (customTitle || document.querySelector('h1')?.innerText || document.title || 'Babie Blue Clinical Protocol')
      .replace(/\s*\|\s*Babie Blue.*$/i, '')
      .trim();
    const url = customUrl || window.location.origin + window.location.pathname;
    if (fmt === 'bib') {
      const cleanTitle = title.replace(/[{}]/g, '');
      const bib = `@misc{babieblue2026,\n  author = {Madhuri B and Mangala Devi K.R. and Anagha Nawal},\n  title = {{${cleanTitle}}},\n  publisher = {Babie Blue},\n  year = {2026},\n  url = {${url}},\n  note = {Medically reviewed against ACOG, AAP, and WHO clinical guidelines}\n}`;
      triggerClientBlobDownload('babie-blue-citation.bib', 'application/x-bibtex;charset=utf-8', bib);
    } else {
      const ris = [
        'TY  - ELEC',
        `TI  - ${title}`,
        'AU  - Madhuri, B.',
        'A2  - Devi K.R., Mangala',
        'A2  - Nawal, Anagha',
        'PB  - Babie Blue Medical Review Board',
        'PY  - 2026',
        `UR  - ${url}`,
        'ER  - '
      ].join('\r\n');
      triggerClientBlobDownload('babie-blue-citation.ris', 'application/x-research-info-systems;charset=utf-8', ris);
    }
  };

  window.downloadBbIcsCalendar = function (mode, customParam) {
    const now = new Date();
    const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Babie Blue Clinical Milestone Feed//EN',
      'CALSCALE:GREGORIAN',
      'X-WR-CALNAME:Babie Blue Clinical Milestones'
    ];

    if (mode === 'obstetric' || mode === 'pregnancy' || !mode) {
      const startWk = Math.min(
        39,
        Math.max(4, parseInt(String(customParam || document.getElementById('bbWidgetGestWeek')?.value || localStorage.getItem('bb_saved_preg_week') || '12'), 10) || 12)
      );
      const milestones = [
        { wk: 12, title: 'Week 12: NIPT & Nuchal Translucency Window', url: 'https://babieblue.com/pregnancy/week-by-week/12-weeks/' },
        { wk: 20, title: 'Week 20: Comprehensive Fetal Anatomy Scan', url: 'https://babieblue.com/pregnancy/week-by-week/20-weeks/' },
        { wk: 26, title: 'Week 26: Glucola GDM Screen & Serum Ferritin Check', url: 'https://babieblue.com/pregnancy/week-by-week/26-weeks/' },
        { wk: 28, title: 'Week 28: Third Trimester Kick Counts & Tdap Window', url: 'https://babieblue.com/pregnancy/week-by-week/28-weeks/' },
        { wk: 36, title: 'Week 36: Group B Strep (GBS) Swab & Hospital Bag Ready', url: 'https://babieblue.com/pregnancy/hospital-bag-checklist-mom-partner-baby-tracker/' },
        { wk: 40, title: 'Week 40: Estimated Due Date (40w0d) — Babie Blue', url: 'https://babieblue.com/calculators/due-date-calculator/' }
      ];
      milestones.forEach((m, i) => {
        const diffDays = (m.wk - startWk) * 7;
        const evDate = new Date(now.getTime() + diffDays * 86400000);
        const evEnd = new Date(evDate.getTime() + 3600000);
        lines.push(
          'BEGIN:VEVENT',
          `UID:babieblue-preg-${m.wk}w-${i}@babieblue.com`,
          `DTSTAMP:${fmt(now)}`,
          `DTSTART:${fmt(evDate)}`,
          `DTEND:${fmt(evEnd)}`,
          `SUMMARY:${m.title} (Babie Blue)`,
          `DESCRIPTION:Review your physician-verified ACOG checklist at ${m.url}`,
          `URL:${m.url}`,
          'END:VEVENT'
        );
      });
    } else {
      const curMonths = Math.min(23, Math.max(0, parseInt(String(customParam || '2'), 10) || 2));
      [2, 4, 6, 9, 12, 15, 18, 24].forEach((m, i) => {
        if (m < curMonths) return;
        const evDate = new Date(now.getTime() + (m - curMonths) * 30 * 86400000);
        const evEnd = new Date(evDate.getTime() + 3600000);
        const url = `https://babieblue.com/calculators/wake-window-matrix/${m}-months/`;
        lines.push(
          'BEGIN:VEVENT',
          `UID:babieblue-ped-${m}m-${i}@babieblue.com`,
          `DTSTAMP:${fmt(now)}`,
          `DTSTART:${fmt(evDate)}`,
          `DTEND:${fmt(evEnd)}`,
          `SUMMARY:Month ${m} Pediatric Sleep, Feeding & Developmental Check (Babie Blue)`,
          `DESCRIPTION:Check Month ${m} wake windows, nap transitions & dosing at ${url}`,
          `URL:${url}`,
          'END:VEVENT'
        );
      });
    }

    lines.push('END:VCALENDAR');
    triggerClientBlobDownload('babie-blue-clinical-schedule.ics', 'text/calendar;charset=utf-8', lines.join('\r\n'));
  };

  window.printBbSheet = function () {
    window.print();
  };

  window.setBbSearchCat = function (cat, btnEl) {
    activeCategoryFilter = cat;
    document.querySelectorAll('.bb-search-filter-btn').forEach((b) => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    const input = document.getElementById('bbSearchInput');
    renderSearchResults(input ? input.value : '');
  };

  window.handleBbStageSelect = function (url) {
    if (!url) return;
    localStorage.setItem('bb_personal_stage', url);
    window.location.href = url;
  };

  function injectArticleUtilitiesAndWidgets() {
    const article = document.querySelector('article.single-post, main.bb-article-shell');
    if (!article) return;
    const path = window.location.pathname;
    const isCalculatorPage = path.startsWith('/calculators/');
    const hasDedicatedTool = Boolean(
      article.querySelector('.bb-calc-workbench, .bb-tool-card, .bb-interactive-tool, .bb-interactive-scorecard')
    );

    // Subtle Utility Bar on Editorial Articles (not on standalone calculator pages which have their own action bar)
    const targetAnchor = article.querySelector('.clinical-summary-box, .bb-trust-strip');
    if (!isCalculatorPage && targetAnchor && !article.querySelector('.bb-article-utility-bar')) {
      const bar = document.createElement('div');
      bar.className = 'bb-article-utility-bar';
      bar.innerHTML = `
        <span><strong>Clinical Reference Utilities:</strong></span>
        <div class="bb-utility-actions">
          <button type="button" class="bb-utility-btn bb-unit-toggle" onclick="toggleBbUnitSystem()">Units: US / Metric</button>
          <button type="button" class="bb-utility-btn" id="bbPartnerShareBtn" onclick="shareBbPartnerBrief()">Share Brief</button>
          <button type="button" class="bb-utility-btn" onclick="toggleBbCiteEmbedDrawer('cite')">Cite (AMA / APA)</button>
          <button type="button" class="bb-utility-btn" onclick="printBbSheet()">Print Protocol</button>
        </div>
      `;
      targetAnchor.insertAdjacentElement('afterend', bar);

      const drawer = document.createElement('div');
      drawer.id = 'bbCiteEmbedDrawer';
      drawer.className = 'bb-cite-embed-panel';
      bar.insertAdjacentElement('afterend', drawer);
      updateUnitButtons();
    }

    // Only inject a micro-widget if the article does NOT already have a calculator, tool card, or interactive scorecard
    if (!isCalculatorPage && !hasDedicatedTool && article.classList.contains('single-post') && !article.querySelector('.bb-micro-widget')) {
      const params = new URLSearchParams(window.location.search);
      const contentArea = article.querySelector('.entry-content');
      const firstH2 = contentArea ? contentArea.querySelector('h2') : null;
      if (contentArea && firstH2) {
        const widget = document.createElement('section');
        widget.className = 'bb-micro-widget';
        widget.setAttribute('aria-label', 'Interactive Clinical Reference Tool');

        if (path.startsWith('/baby-care/')) {
          const initW = params.get('w') || '12';
          const initF = params.get('feeds') || '8';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Pediatric Reference Tool • AAP Protocol</span>
              <a href="/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/" style="font-size:12.5px;font-weight:700;">Full Dosing &amp; Feeding Suite &rarr;</a>
            </div>
            <h3>Weight-Based Daily Intake &amp; Acetaminophen Estimator</h3>
            <div class="bb-micro-widget-controls">
              <div>
                <label for="bbWidgetWeight" id="bbWidgetWeightLabel">Infant Weight (lbs)</label>
                <input type="number" id="bbWidgetWeight" min="4" max="36" step="0.5" value="${initW}" oninput="updateBbPediatricWidget(true)" />
              </div>
              <div>
                <label for="bbWidgetFeeds">Feeds per 24 Hours</label>
                <select id="bbWidgetFeeds" onchange="updateBbPediatricWidget(true)">
                  <option value="10" ${initF === '10' ? 'selected' : ''}>10 feeds (Every 2–2.5 hrs)</option>
                  <option value="8" ${initF === '8' ? 'selected' : ''}>8 feeds (Every 3 hrs)</option>
                  <option value="7" ${initF === '7' ? 'selected' : ''}>7 feeds (Every 3–3.5 hrs)</option>
                  <option value="6" ${initF === '6' ? 'selected' : ''}>6 feeds (Every 4 hrs)</option>
                </select>
              </div>
            </div>
            <div class="bb-micro-widget-output" id="bbWidgetPedOutput"></div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbPediatricWidget(false);
        } else if (path.startsWith('/pregnancy/')) {
          const initWk = params.get('wk') || '12';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Obstetric Milestone Lookup • ACOG Guidelines</span>
              <a href="/calculators/due-date-calculator/" style="font-size:12.5px;font-weight:700;">Full Due Date Calculator &rarr;</a>
            </div>
            <h3>Gestational Week &amp; Trimester Clinical Checkpoint</h3>
            <div class="bb-micro-widget-controls">
              <div>
                <label for="bbWidgetGestWeek">Current Gestational Week (4–41 wks)</label>
                <input type="number" id="bbWidgetGestWeek" min="4" max="41" step="1" value="${initWk}" oninput="updateBbObstetricWidget(true)" />
              </div>
            </div>
            <div class="bb-micro-widget-output" id="bbWidgetObOutput"></div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbObstetricWidget(false);
        } else if (path.startsWith('/maternal-health/')) {
          const initFer = params.get('fer') || '28';
          const initTsh = params.get('tsh') || '1.8';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Maternal Biomarker Reference • Fourth Trimester</span>
              <a href="/maternal-health/postpartum-blood-work-panel-ferritin-thyroiditis-vitamin-d/" style="font-size:12.5px;font-weight:700;">Full Postpartum Lab Guide &rarr;</a>
            </div>
            <h3>Serum Ferritin &amp; TSH Clinical Target Evaluator</h3>
            <div class="bb-micro-widget-controls">
              <div>
                <label for="bbWidgetFerritin">Serum Ferritin (ng/mL)</label>
                <input type="number" id="bbWidgetFerritin" min="2" max="300" step="1" value="${initFer}" oninput="updateBbMaternalWidget(true)" />
              </div>
              <div>
                <label for="bbWidgetTsh">TSH Level (mIU/L)</label>
                <input type="number" id="bbWidgetTsh" min="0.05" max="20" step="0.1" value="${initTsh}" oninput="updateBbMaternalWidget(true)" />
              </div>
            </div>
            <div class="bb-micro-widget-output" id="bbWidgetMatOutput"></div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbMaternalWidget(false);
        } else if (path.startsWith('/parenting/')) {
          const initAge = params.get('age') || '7-12m';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Pediatric Sleep &amp; Routine Reference • AAP Guidelines</span>
              <a href="/baby-care/wake-windows-nap-transitions-by-age/" style="font-size:12.5px;font-weight:700;">Full 0–24m Sleep Matrix &rarr;</a>
            </div>
            <h3>Age-Calibrated Sleep &amp; Daily Routine Target Lookup</h3>
            <div class="bb-micro-widget-controls">
              <div>
                <label for="bbWidgetChildAge">Child Age Band</label>
                <select id="bbWidgetChildAge" onchange="updateBbParentingWidget(true)">
                  <option value="0-3m" ${initAge === '0-3m' ? 'selected' : ''}>0–3 Months (Fourth Trimester)</option>
                  <option value="4-6m" ${initAge === '4-6m' ? 'selected' : ''}>4–6 Months (Circadian Consolidation)</option>
                  <option value="7-12m" ${initAge === '7-12m' ? 'selected' : ''}>7–12 Months (2-Nap Schedule)</option>
                  <option value="1-2y" ${initAge === '1-2y' ? 'selected' : ''}>1–2 Years (1-Nap Toddler Transition)</option>
                  <option value="3-5y" ${initAge === '3-5y' ? 'selected' : ''}>3–5 Years (Preschool Readiness)</option>
                </select>
              </div>
            </div>
            <div class="bb-micro-widget-output" id="bbWidgetParOutput"></div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbParentingWidget(false);
        }
        updateUnitButtons();
      }
    }

    // Only inject Next Steps if page does not already have .bb-related-articles or .bb-cluster-nav
    if (!article.querySelector('.bb-next-steps-section, .bb-related-articles, .bb-cluster-nav')) {
      const curUrl = window.location.pathname;
      const cat =
        curUrl.startsWith('/pregnancy/') ? 'Pregnancy' :
        curUrl.startsWith('/maternal-health/') ? 'Maternal Health' :
        curUrl.startsWith('/parenting/') ? 'Parenting' : 'Baby Care';

      const sameCatGuides = CORE_SEARCH_INDEX.filter((i) => i.cat === cat && i.url !== curUrl).slice(0, 2);
      const calcGuide = CORE_SEARCH_INDEX.find((i) => i.cat === 'Calculators' && i.url !== curUrl) || CORE_SEARCH_INDEX[16];
      const picks = [...sameCatGuides, calcGuide].slice(0, 3);

      const nextSec = document.createElement('section');
      nextSec.className = 'bb-next-steps-section';
      nextSec.setAttribute('aria-label', 'Related Clinical Protocols');
      nextSec.innerHTML = `
        <div class="bb-next-steps-header">
          <div>
            <span class="bb-next-steps-kicker">Related Clinical Protocols</span>
            <h3 style="margin:4px 0 0 0;font-size:19px;">Continue Reading</h3>
          </div>
          <a href="/calculators/" style="font-size:13px;font-weight:700;">All Calculators &rarr;</a>
        </div>
        <div class="bb-next-steps-grid">
          ${picks
            .map(
              (p) => `
            <a href="${p.url}" class="bb-next-step-card">
              <div>
                <div class="bb-next-step-cat">${p.cat}</div>
                <div class="bb-next-step-title">${p.title}</div>
                <p style="font-size:12.5px;margin:0 0 12px 0;opacity:0.85;">${p.desc}</p>
              </div>
              <span class="bb-next-step-cta">Read Clinical Guide &rarr;</span>
            </a>
          `
            )
            .join('')}
        </div>
      `;

      const refBlock = article.querySelector('.bb-references-block');
      if (refBlock) {
        refBlock.insertAdjacentElement('beforebegin', nextSec);
      } else {
        article.appendChild(nextSec);
      }
    }
  }

  function syncUrlParams(kv) {
    if (!window.history || !window.history.replaceState) return;
    const url = new URL(window.location.href);
    Object.entries(kv).forEach(([k, v]) => url.searchParams.set(k, String(v)));
    window.history.replaceState({}, '', url.toString());
  }

  window.updateBbPediatricWidget = function (pushUrl) {
    const wInput = document.getElementById('bbWidgetWeight');
    const lbl = document.getElementById('bbWidgetWeightLabel');
    const w = parseFloat(wInput?.value || '12');
    const f = parseInt(document.getElementById('bbWidgetFeeds')?.value || '8', 10);
    const out = document.getElementById('bbWidgetPedOutput');
    if (!out || isNaN(w) || isNaN(f)) return;

    const isMetric = getUnitSystem() === 'metric';
    if (lbl) lbl.textContent = isMetric ? 'Infant Weight (lbs — displays kg & mL)' : 'Infant Weight (lbs — displays fl oz & mL)';
    const weightKg = (w / 2.20462).toFixed(2);
    const rawDailyOz = Math.min(32, Math.max(10, w * 2.5));
    const rawDailyMl = Math.round(rawDailyOz * 29.5735);
    const perFeedOz = (rawDailyOz / f).toFixed(1);
    const perFeedMl = Math.round((rawDailyOz / f) * 29.5735);
    const roundedLbs = Math.min(34, Math.max(6, Math.round(w)));

    if (pushUrl) syncUrlParams({ w, feeds: f });

    if (w < 12) {
      // Hard Safety Gate: Neonatal Fever (<60–90 Days / <12 lbs)
      out.innerHTML = '<strong>Weight:</strong> <code>' + (isMetric ? weightKg + ' kg' : w + ' lbs') + '</code> &bull; <strong>24-Hr Feeding:</strong> <code>' + (isMetric ? rawDailyMl + ' mL/day' : rawDailyOz.toFixed(1) + ' fl oz/day') + '</code> (' + (isMetric ? perFeedMl + ' mL' : perFeedOz + ' oz') + '/feed)<br>' +
        '<div class="bb-emergency-alert" style="color:#991b1b;background:#fef2f2;border:1px solid #fecaca;padding:10px 14px;border-radius:8px;margin-top:8px;font-size:13px;line-height:1.5;">' +
        '<strong>🚨 Neonatal Fever Emergency Stop (&lt;60–90 Days):</strong> Any rectal fever &ge;100.4&deg;F (38.0&deg;C) in infants under 12 lbs requires <strong>immediate Pediatric ER evaluation</strong> to rule out systemic infection. Do NOT administer home antipyretics to mask a fever without direct physician direction.<br>' +
        '<strong>Ibuprofen Safety Rule:</strong> Strictly <code>CONTRAINDICATED</code> under 6 months of age regardless of weight.</div>';
      return;
    }

    const acetMl = ((w / 2.20462 * 12.5) / 32).toFixed(2);
    out.innerHTML = isMetric
      ? '<strong>Weight:</strong> <code>' + weightKg + ' kg</code> (' + w + ' lbs) &bull; <strong>24-Hr Intake:</strong> <code>' + rawDailyMl + ' mL/day</code> (' + perFeedMl + ' mL/feed)<br><strong>Acetaminophen (160mg/5mL) Dose:</strong> <code>' + acetMl + ' mL</code> (every 4–6h, max 5/24h)<br><small style="color:#b91c1c;font-weight:600;">⚠️ Ibuprofen: Strictly CONTRAINDICATED under 6 months of age regardless of weight.</small> &bull; <a href="/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/" style="font-weight:700;color:#0f766e;">Open Complete AAP Dosing Suite &rarr;</a>'
      : '<strong>Weight:</strong> <code>' + w + ' lbs</code> (' + weightKg + ' kg) &bull; <strong>24-Hr Intake:</strong> <code>' + rawDailyOz.toFixed(1) + ' fl oz/day</code> (' + perFeedOz + ' oz / ~' + perFeedMl + ' mL per bottle)<br><strong>Acetaminophen (160mg/5mL) Dose:</strong> <code>' + acetMl + ' mL</code> (every 4–6h, max 5/24h)<br><small style="color:#b91c1c;font-weight:600;">⚠️ Ibuprofen: Strictly CONTRAINDICATED under 6 months of age regardless of weight.</small> &bull; <a href="/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/" style="font-weight:700;color:#0f766e;">Open Complete AAP Dosing Suite &rarr;</a>';
  };

  window.updateBbObstetricWidget = function (pushUrl) {
    const wk = Math.min(41, Math.max(4, parseInt(document.getElementById('bbWidgetGestWeek')?.value || '12', 10)));
    const out = document.getElementById('bbWidgetObOutput');
    if (!out || isNaN(wk)) return;
    localStorage.setItem('bb_saved_preg_week', String(wk));
    if (pushUrl) syncUrlParams({ wk });
    const trimester = wk <= 13 ? 'First Trimester (Organogenesis)' : wk <= 27 ? 'Second Trimester (Fetal Growth & Anatomy)' : 'Third Trimester (Maturation & Delivery Prep)';
    const milestone =
      wk <= 10 ? 'Confirm intrauterine viability scan; initiate 400–800 mcg methylfolate/folic acid & baseline prenatal panel.' :
      wk <= 14 ? 'NIPT cell-free DNA screening window (10w+) & Nuchal Translucency ultrasound (11w–13w6d).' :
      wk <= 22 ? 'Comprehensive 20-week fetal anatomy ultrasound & cervical length assessment.' :
      wk <= 28 ? 'Gestational diabetes screening (24–28w Glucola), CBC/Ferritin re-check & Tdap immunization window (27–36w).' :
      wk <= 36 ? 'Monitor daily fetal kick counts (10 movements in <=2 hours), RSV maternal vaccine discussion (32–36w) & Group B Strep swab (36–37w).' :
      'Full-term readiness: monitor labor contraction periodicity (5-1-1 rule), blood pressure (<140/90 mmHg), and amniotic fluid integrity.';
    out.innerHTML = `<strong>Stage:</strong> <code>Week ${wk} — ${trimester}</code> &bull; <a href="/pregnancy/week-by-week/${wk}-weeks/" style="font-weight:700;color:#0f766e;">Open Week ${wk} Guide &rarr;</a><br><strong>Key Clinical Protocol:</strong> ${milestone}`;
  };

  window.updateBbMaternalWidget = function (pushUrl) {
    const fer = parseFloat(document.getElementById('bbWidgetFerritin')?.value || '28');
    const tsh = parseFloat(document.getElementById('bbWidgetTsh')?.value || '1.8');
    const out = document.getElementById('bbWidgetMatOutput');
    if (!out) return;
    if (pushUrl) syncUrlParams({ fer, tsh });
    const ferStatus = fer < 30 ? 'Depleted Iron Stores (<30 ng/mL — strongly linked to maternal fatigue, hair shedding & mood depletion even if Hemoglobin is normal)' : fer < 50 ? 'Sub-optimal Recovery Reserve (30–49 ng/mL — target >=50 ng/mL postpartum)' : 'Optimal Maternal Ferritin Reserve (>=50 ng/mL)';
    const tshStatus = tsh < 0.45 ? 'Suppressed TSH (<0.45 mIU/L — screen for hyperthyroid phase of Postpartum Thyroiditis)' : tsh > 2.5 ? 'Elevated TSH (>2.5 mIU/L — evaluate Free T4 & TPO antibodies for postpartum/subclinical hypothyroidism)' : 'Optimal Maternal Functional TSH Range (0.45–2.5 mIU/L)';
    out.innerHTML = `<strong>Ferritin Assessment:</strong> ${ferStatus}<br><strong>Thyroid (TSH) Assessment:</strong> ${tshStatus}`;
  };

  window.updateBbParentingWidget = function (pushUrl) {
    const age = document.getElementById('bbWidgetChildAge')?.value || '7-12m';
    const out = document.getElementById('bbWidgetParOutput');
    if (!out) return;
    if (pushUrl) syncUrlParams({ age });
    const map = {
      '0-3m': '<strong>Wake Window:</strong> <code>45–90 mins</code> &bull; <strong>Total Sleep:</strong> <code>14–17 hrs/day</code> &bull; <a href="/calculators/wake-window-matrix/2-months/" style="font-weight:700;color:#0f766e;">2-Month Schedule &rarr;</a>',
      '4-6m': '<strong>Wake Window:</strong> <code>1.75–2.75 hrs</code> &bull; <strong>Total Sleep:</strong> <code>13.5–15 hrs/day (3–4 naps)</code> &bull; <a href="/calculators/wake-window-matrix/5-months/" style="font-weight:700;color:#0f766e;">5-Month Schedule &rarr;</a>',
      '7-12m': '<strong>Wake Window:</strong> <code>2.75–4.0 hrs</code> &bull; <strong>Total Sleep:</strong> <code>13–14 hrs/day (2 naps)</code> &bull; <a href="/calculators/wake-window-matrix/9-months/" style="font-weight:700;color:#0f766e;">9-Month Schedule &rarr;</a>',
      '1-2y': '<strong>Wake Window:</strong> <code>4.5–6.0 hrs</code> &bull; <strong>Total Sleep:</strong> <code>12–13.5 hrs/day (1 midday nap)</code> &bull; <a href="/calculators/wake-window-matrix/18-months/" style="font-weight:700;color:#0f766e;">18-Month Schedule &rarr;</a>',
      '3-5y': '<strong>Wake Window:</strong> <code>Full Day / Quiet Time</code> &bull; <strong>Total Sleep:</strong> <code>10–13 hrs/day</code> &bull; Predictable bedtime routine &amp; <=1 hr co-viewed educational media.'
    };
    out.innerHTML = map[age] || map['7-12m'];
  };

  function injectGlobalUX() {
    injectSpeculationRules();
    registerClinicalServiceWorker();

    const mainEl = document.querySelector('main');
    if (mainEl && !mainEl.id) {
      mainEl.id = 'main-content';
    }
    if (!document.querySelector('.bb-skip-link')) {
      const skip = document.createElement('a');
      skip.href = '#' + (mainEl && mainEl.id ? mainEl.id : 'main-content');
      skip.className = 'bb-skip-link';
      skip.textContent = 'Skip to Clinical Content';
      document.body.insertAdjacentElement('afterbegin', skip);
    }

    document.body.classList.remove('bb-dim-mode');
    try { localStorage.removeItem('bb_dim_mode'); } catch {}
    document.querySelectorAll('.bb-dim-toggle').forEach((el) => el.remove());

    const headerInner = document.querySelector('.header-inner');
    if (headerInner && !headerInner.querySelector('.bb-header-actions')) {
      const actions = document.createElement('div');
      actions.className = 'bb-header-actions';
      actions.innerHTML = `
        <button type="button" class="bb-search-trigger" onclick="openBbSearch()" aria-label="Search Babie Blue clinical guides and calculators">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Search</span>
          <kbd class="bb-search-kbd">⌘K</kbd>
        </button>
      `;
      headerInner.appendChild(actions);
    }

    if (!document.querySelector('.bb-search-modal-backdrop')) {
      const modal = document.createElement('div');
      modal.className = 'bb-search-modal-backdrop';
      modal.id = 'bbSearchModal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Search Babie Blue Clinical Protocols and Calculators');
      modal.innerHTML = `
        <div class="bb-search-modal" onclick="event.stopPropagation()">
          <div class="bb-search-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="bbSearchInput" placeholder="Search Babie Blue clinical guides, fever dosing, wake windows, calculators..." autocomplete="off" />
            <button type="button" class="bb-btn-secondary" onclick="closeBbSearch()">Esc</button>
          </div>
          <div class="bb-search-filters" role="tablist" aria-label="Filter search by clinical category">
            <button type="button" class="bb-search-filter-btn active" onclick="setBbSearchCat('All', this)">All (278)</button>
            <button type="button" class="bb-search-filter-btn" onclick="setBbSearchCat('Baby Care', this)">Baby Care</button>
            <button type="button" class="bb-search-filter-btn" onclick="setBbSearchCat('Pregnancy', this)">Pregnancy</button>
            <button type="button" class="bb-search-filter-btn" onclick="setBbSearchCat('Maternal Health', this)">Maternal Health</button>
            <button type="button" class="bb-search-filter-btn" onclick="setBbSearchCat('Parenting', this)">Parenting</button>
            <button type="button" class="bb-search-filter-btn" onclick="setBbSearchCat('Calculators', this)">Calculators</button>
          </div>
          <div class="bb-search-results" id="bbSearchResults"></div>
        </div>
      `;
      modal.addEventListener('click', closeBbSearch);
      document.body.appendChild(modal);

      const input = document.getElementById('bbSearchInput');
      if (input) {
        input.addEventListener('input', (e) => renderSearchResults(e.target.value));
      }
    }

    // Intercept any direct <a href="/api/calendar.ics..."> or <a href="/api/cite..."> clicks for 100% static Cloudflare Pages support
    document.addEventListener('click', (e) => {
      const link = e.target && e.target.closest ? e.target.closest('a[href^="/api/calendar.ics"], a[href^="/api/cite."]') : null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('/api/calendar.ics')) {
        e.preventDefault();
        const qIdx = href.indexOf('?');
        const params = new URLSearchParams(qIdx !== -1 ? href.slice(qIdx + 1) : '');
        const mode = params.get('mode') || 'pregnancy';
        const wkOrMo = params.get('week') || params.get('months') || '12';
        window.downloadBbIcsCalendar(mode, wkOrMo);
      } else if (href.startsWith('/api/cite.ris')) {
        e.preventDefault();
        window.downloadBbCiteFile('ris');
      } else if (href.startsWith('/api/cite.bib')) {
        e.preventDefault();
        window.downloadBbCiteFile('bib');
      }
    });

    updateUnitButtons();
    injectArticleUtilitiesAndWidgets();
    initInteractiveSvgAnatomyExplorer();
    initInteractiveTablesAndAccordions();
    initClinicalAdSenseSlots();
  }

  // Hybrid Google AdSense Engine (Display Slot 8819104303 + In-Article Fluid Slot 8216469075 + Clinical Zone Protection)
  const BABIEBLUE_ADSENSE_CONFIG = {
    enabled: true,
    client: 'ca-pub-4453876229797223',
    displaySlot: '8819104303',
    inArticleSlot: '8216469075'
  };

  function createAdContainer({ type, slotId, label }) {
    const aside = document.createElement('aside');
    aside.className = `bb-ad-container ${type === 'in-article' ? 'bb-ad-in-article' : type === 'sidebar' ? 'bb-ad-sidebar-sticky' : 'bb-ad-display'}`;
    aside.setAttribute('aria-label', label || 'Sponsored Advertisement');
    aside.setAttribute('data-nosnippet', '');

    const insHtml =
      type === 'in-article'
        ? `<ins class="adsbygoogle"
             style="display:block; text-align:center;"
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="${BABIEBLUE_ADSENSE_CONFIG.client}"
             data-ad-slot="${slotId}"></ins>`
        : `<ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${BABIEBLUE_ADSENSE_CONFIG.client}"
             data-ad-slot="${slotId}"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>`;

    aside.innerHTML = `
      <div class="bb-ad-header">
        <span>Advertisement &bull; Strictly Separated from Clinical Content</span>
        <a href="/affiliate-links/">Ad Policy</a>
      </div>
      <div class="bb-ad-slot-inner">${insHtml}</div>
    `;

    return aside;
  }

  function pushAdSenseUnit() {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }

  function initClinicalAdSenseSlots() {
    if (!BABIEBLUE_ADSENSE_CONFIG.enabled) return;

    const pathName = window.location.pathname || '/';
    // Never mount ads on legal/governance/author/error/embed pages
    const adFreePrefixes = [
      '/privacy-policy',
      '/terms-and-conditions',
      '/affiliate-links',
      '/contact-us',
      '/about-us',
      '/site-map',
      '/dr-mangala-devi',
      '/dr-anagha-nawal',
      '/madhuri-b',
      '/sivanandan-n',
      '/embed/',
      '/404',
      '/410'
    ];
    if (adFreePrefixes.some((p) => pathName.startsWith(p))) return;

    // 1. Mark all YMYL Clinical Safety Zones with data-ad-exclude="true" so Auto Ads never splits calculators or triage
    const protectedSelectors = [
      '.site-header',
      '#clinical-summary',
      '.clinical-summary-box',
      '.bb-bluf-box',
      '#interactive-clinical-tool',
      '#calculator-workbench',
      '#dosing-calculator',
      '.bb-calc-workbench',
      '.bb-interactive-tool',
      '.calc-shell',
      '.tool-card',
      '.bb-tool-card',
      'figure.bb-clinical-infographic',
      '#pediatric-triage',
      '#obstetric-triage',
      '.bb-triage-section',
      '.bb-visit-checklist',
      '.bb-eeat-bar'
    ];
    document.querySelectorAll(protectedSelectors.join(',')).forEach((el) => {
      el.setAttribute('data-ad-exclude', 'true');
    });

    if (document.querySelector('aside.bb-ad-container')) return;

    // Ensure global AdSense library is loaded in <head>
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${BABIEBLUE_ADSENSE_CONFIG.client}`;
      s.crossOrigin = 'anonymous';
      document.head.appendChild(s);
    }

    // 2. Placement A: In-Article Fluid Unit (Slot 8216469075) after Interactive Tool / SVG Anatomy Pathway or 2nd H2 section
    const pathwayFig = document.querySelector('figure.bb-clinical-infographic');
    const interactiveTool = document.querySelector('#interactive-clinical-tool, #calculator-workbench, #dosing-calculator, .bb-calc-workbench, .bb-tool-card, .calc-shell');
    const h2List = Array.from(document.querySelectorAll('.entry-content h2, article h2'));

    let inArticleAnchor = pathwayFig || interactiveTool || (h2List.length >= 2 ? h2List[1] : null);
    if (inArticleAnchor && inArticleAnchor.parentNode) {
      const inArticleAd = createAdContainer({
        type: 'in-article',
        slotId: BABIEBLUE_ADSENSE_CONFIG.inArticleSlot,
        label: 'In-Article Advertisement'
      });
      if (inArticleAnchor.tagName === 'H2') {
        inArticleAnchor.insertAdjacentElement('beforebegin', inArticleAd);
      } else {
        inArticleAnchor.insertAdjacentElement('afterend', inArticleAd);
      }
      pushAdSenseUnit();
    }

    // 3. Placement B: Responsive Display Unit (Slot 8819104303) before Quantitative Clinical Matrix, FAQ, or Footer Directory
    const matrixOrFaq =
      document.querySelector('#clinical-matrix, #clinical-faq, #faq, .bb-next-steps-section') ||
      document.querySelector('.hub-articles-grid, .post-grid, .posts-grid');
    if (matrixOrFaq && matrixOrFaq.parentNode) {
      const displayAd = createAdContainer({
        type: 'display',
        slotId: BABIEBLUE_ADSENSE_CONFIG.displaySlot,
        label: 'Display Advertisement'
      });
      if (matrixOrFaq.classList.contains('hub-articles-grid') || matrixOrFaq.classList.contains('post-grid') || matrixOrFaq.classList.contains('posts-grid')) {
        matrixOrFaq.insertAdjacentElement('afterend', displayAd);
      } else {
        matrixOrFaq.insertAdjacentElement('beforebegin', displayAd);
      }
      pushAdSenseUnit();
    }

    // 4. Placement C: Desktop Sticky Sidebar Rail Display Unit (Slot 8819104303) on viewports >= 1080px
    const sidebarRail = document.querySelector('aside.sidebar, aside.toc-sidebar');
    if (sidebarRail && window.innerWidth >= 1080) {
      const sidebarAd = createAdContainer({
        type: 'sidebar',
        slotId: BABIEBLUE_ADSENSE_CONFIG.displaySlot,
        label: 'Sidebar Advertisement'
      });
      sidebarRail.appendChild(sidebarAd);
      pushAdSenseUnit();
    }
  }

  // Interactive SVG Anatomical & Clinical Stage Explorer (Anatomy + Answer-Me-With-HTML Skill)
  function initInteractiveSvgAnatomyExplorer() {
    const figures = document.querySelectorAll('figure.bb-clinical-infographic');
    figures.forEach((fig, figIdx) => {
      if (fig.querySelector('.bb-svg-explorer')) return;
      const svg = fig.querySelector('svg');
      if (!svg) return;
      const groups = Array.from(svg.querySelectorAll('g[transform^="translate"]'));
      if (groups.length < 2) return;

      const allTexts = Array.from(svg.querySelectorAll('text'));
      let escalationText = '';
      for (const t of allTexts) {
        const raw = (t.textContent || '').trim();
        if (raw.startsWith('Escalation Threshold:')) {
          escalationText = raw.replace(/^Escalation Threshold:\s*/i, '').trim();
          break;
        }
      }

      const stages = groups.map((g, idx) => {
        g.classList.add('bb-svg-stage-node');
        g.setAttribute('tabindex', '0');
        g.setAttribute('role', 'button');
        const texts = Array.from(g.querySelectorAll('text')).map((t) => (t.textContent || '').trim()).filter(Boolean);
        const badge = texts[0] || `STAGE 0${idx + 1}`;
        const titleParts = [];
        const bullets = [];
        for (let i = 1; i < texts.length; i++) {
          if (texts[i].startsWith('•')) {
            bullets.push(texts[i].replace(/^•\s*/, '').trim());
          } else if (bullets.length === 0) {
            titleParts.push(texts[i]);
          } else {
            bullets.push(texts[i]);
          }
        }
        const title = titleParts.join(' ') || `Clinical Phase ${idx + 1}`;
        const combinedBullet = bullets.join(' ').replace(/\s+/g, ' ').trim();
        g.setAttribute('aria-label', `${badge}: ${title}`);
        return {
          idx,
          badge,
          title,
          detail: combinedBullet || 'Evidence-based clinical evaluation and monitoring phase.',
          isEscalation: idx === groups.length - 1
        };
      });

      const explorer = document.createElement('div');
      explorer.className = 'bb-svg-explorer';
      explorer.setAttribute('role', 'region');
      explorer.setAttribute('aria-label', 'Interactive Clinical Pathway Stage Dissector');

      const tabsHtml = stages
        .map(
          (s, i) =>
            `<button type="button" class="bb-svg-stage-btn${i === 0 ? ' active' : ''}" data-stage-idx="${i}"><strong>0${i + 1}:</strong> ${s.title}</button>`
        )
        .join('');

      explorer.innerHTML = `
        <div class="bb-svg-explorer-head">
          <span class="bb-svg-explorer-kicker">Interactive Clinical Stage Dissector &bull; Tap Any SVG Node or Stage Below</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted);">Stage <span class="bb-svg-cur-num">1</span> of ${stages.length}</span>
        </div>
        <div class="bb-svg-explorer-tabs">${tabsHtml}</div>
        <div class="bb-svg-inspector-card" id="bbSvgInspector_${figIdx}"></div>
      `;

      const caption = fig.querySelector('figcaption');
      if (caption) {
        caption.insertAdjacentElement('beforebegin', explorer);
      } else {
        fig.appendChild(explorer);
      }

      const btns = Array.from(explorer.querySelectorAll('.bb-svg-stage-btn'));
      const inspector = explorer.querySelector('.bb-svg-inspector-card');
      const curNumEl = explorer.querySelector('.bb-svg-cur-num');

      function selectStage(activeIdx) {
        const s = stages[activeIdx] || stages[0];
        groups.forEach((g, i) => {
          g.classList.toggle('active', i === activeIdx);
          g.style.opacity = i === activeIdx ? '1' : '0.78';
        });
        btns.forEach((b, i) => b.classList.toggle('active', i === activeIdx));
        if (curNumEl) curNumEl.textContent = String(activeIdx + 1);
        if (inspector) {
          inspector.className = 'bb-svg-inspector-card' + (s.isEscalation ? ' stage-escalation' : '');
          inspector.innerHTML = `
            <div class="bb-svg-inspector-title">
              <span>${s.badge} &mdash; ${s.title}</span>
              <code style="font-size:11px;">${s.isEscalation ? 'ACUTE / ACTION PHASE' : 'PHYSIOLOGICAL CHECKPOINT'}</code>
            </div>
            <p style="margin:4px 0 0 0;font-size:13.5px;color:var(--text-secondary);"><strong>Clinical Mechanism &amp; Target:</strong> ${s.detail}</p>
            ${
              escalationText
                ? `<p style="margin:6px 0 0 0;font-size:12.5px;color:${s.isEscalation ? 'var(--crimson)' : 'var(--primary-hover)'};"><strong>Escalation Rule:</strong> ${escalationText}</p>`
                : ''
            }
          `;
        }
      }

      groups.forEach((g, i) => {
        g.addEventListener('click', () => selectStage(i));
        g.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectStage(i);
          }
        });
      });

      btns.forEach((btn, i) => {
        btn.addEventListener('click', () => selectStage(i));
      });

      selectStage(0);
    });
  }

  function initInteractiveTablesAndAccordions() {
    document.querySelectorAll('table tbody tr').forEach((row) => {
      if (row.children.length >= 2) {
        row.classList.add('bb-row-interactive');
        row.setAttribute('title', 'Tap to pin/highlight this clinical reference row');
        row.addEventListener('click', (e) => {
          if (e.target.closest('a, button, input, select')) return;
          row.classList.toggle('bb-row-pinned');
        });
      }
    });

    document.querySelectorAll('button.accordion-header, .faq-toggle').forEach((btn) => {
      if (btn.dataset.bbWired) return;
      btn.dataset.bbWired = '1';
      btn.addEventListener('click', () => {
        const item = btn.closest('.accordion-item, .faq-item');
        if (!item) return;
        const content = item.querySelector('.accordion-content, .faq-content');
        const icon = btn.querySelector('.accordion-icon');
        const isOpen = item.classList.toggle('open');
        if (content) {
          content.style.display = isOpen ? 'block' : 'none';
        }
        if (icon) {
          icon.textContent = isOpen ? '−' : '+';
        }
      });
    });
  }

  function renderSearchResults(query) {
    const container = document.getElementById('bbSearchResults');
    if (!container) return;
    const q = (query || '').toLowerCase().trim();
    const pool = activeCategoryFilter === 'All'
      ? FULL_SEARCH_INDEX
      : FULL_SEARCH_INDEX.filter((item) => item.cat.toLowerCase().includes(activeCategoryFilter.toLowerCase()));

    const matches = q
      ? pool.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.cat.toLowerCase().includes(q) ||
            (item.desc && item.desc.toLowerCase().includes(q))
        )
      : pool;

    if (matches.length === 0) {
      container.innerHTML = `<div class="bb-search-empty">No matching Babie Blue protocols found. Try "fever", "wake windows", "formula", "preeclampsia", or "due date".</div>`;
      return;
    }

    container.innerHTML = matches
      .slice(0, 18)
      .map(
        (m) => `
      <a href="${m.url}" class="bb-search-item">
        <span class="bb-search-item-kicker">${m.cat}</span>
        <span class="bb-search-item-title">${m.title}</span>
        <span class="bb-search-item-desc">${m.desc || ''}</span>
      </a>
    `
      )
      .join('');
  }

  window.openBbSearch = function () {
    loadFullSearchIndex();
    const modal = document.getElementById('bbSearchModal');
    if (!modal) return;
    modal.classList.add('open');
    const input = document.getElementById('bbSearchInput');
    renderSearchResults(input ? input.value : '');
    setTimeout(() => {
      if (input) input.focus();
    }, 50);
  };

  window.closeBbSearch = function () {
    const modal = document.getElementById('bbSearchModal');
    if (modal) modal.classList.remove('open');
  };

  window.switchBbStage = function (stageId, tabBtn) {
    const parent = tabBtn.closest('.bb-quick-navigator');
    if (!parent) return;
    parent.querySelectorAll('.bb-stage-tab').forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    parent.querySelectorAll('.bb-stage-panel').forEach((p) => p.classList.remove('active'));
    tabBtn.classList.add('active');
    tabBtn.setAttribute('aria-selected', 'true');
    const panel = parent.querySelector('#' + stageId);
    if (panel) panel.classList.add('active');
  };

  // Interactive OB-GYN & Pediatrician Appointment Question Checklist Handlers
  window.updateBbVisitChecklist = function (el) {
    const container = el ? el.closest('.bb-visit-checklist') : document.querySelector('.bb-visit-checklist');
    if (!container) return;
    const boxes = container.querySelectorAll('input[type="checkbox"]');
    const checked = container.querySelectorAll('input[type="checkbox"]:checked');
    const counter = container.querySelector('.bb-visit-counter');
    if (counter) {
      counter.textContent = `${checked.length} / ${boxes.length} selected`;
    }
  };

  window.copyBbVisitQuestions = function (btnEl) {
    const container = btnEl ? btnEl.closest('.bb-visit-checklist') : document.querySelector('.bb-visit-checklist');
    if (!container) return;
    const checked = Array.from(container.querySelectorAll('input[type="checkbox"]:checked'));
    const all = Array.from(container.querySelectorAll('input[type="checkbox"]'));
    const targetBoxes = checked.length > 0 ? checked : all;
    const h1 = (document.querySelector('h1')?.innerText || document.title).trim();
    const lines = targetBoxes.map((cb, idx) => {
      const label = cb.closest('.bb-visit-item')?.querySelector('.bb-visit-q-text, .bb-visit-item-text');
      return `${idx + 1}. ${(label ? label.innerText : '').trim()}`;
    });
    const isPed = window.location.pathname.startsWith('/baby-care/') || window.location.pathname.startsWith('/parenting/');
    const headerLabel = isPed ? 'Pediatrician / Well-Baby Visit Discussion Sheet' : 'OB-GYN / Midwife Appointment Discussion Sheet';
    const text = `${headerLabel} — ${h1}\n` +
      `Source: ${window.location.href}\n\n` +
      lines.join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
      if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Questions Copied to Clipboard';
        setTimeout(() => {
          btnEl.innerHTML = orig;
        }, 2200);
      }
    });
  };

  // Interactive Category Hub Filter & Search (Pregnancy, Baby Care, Parenting, Maternal Health)
  let activeHubCat = 'all';
  window.filterBbPregnancyHub = function (cat, btnEl) {
    activeHubCat = cat || 'all';
    document.querySelectorAll('.bb-hub-filter-btn').forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    if (btnEl) {
      btnEl.classList.add('active');
      btnEl.setAttribute('aria-pressed', 'true');
    }
    const searchInput = document.getElementById('bbHubSearchInput');
    window.applyBbPregnancyHubFilter(searchInput ? searchInput.value : '');
  };
  window.filterBbCategoryHub = window.filterBbPregnancyHub;

  window.searchBbPregnancyHub = function (query) {
    window.applyBbPregnancyHubFilter(query);
  };
  window.searchBbCategoryHub = window.searchBbPregnancyHub;

  window.applyBbPregnancyHubFilter = function (query) {
    const q = (query || '').toLowerCase().trim();
    const cards = document.querySelectorAll('.hub-articles-grid .post-card, .post-grid .post-card, .posts-grid .post-card');
    let visibleCount = 0;
    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-subcat') || 'all';
      const text = (card.innerText || '').toLowerCase();
      const matchesCat = activeHubCat === 'all' || cardCat === activeHubCat;
      const matchesQuery = !q || text.includes(q);
      if (matchesCat && matchesQuery) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    const status = document.getElementById('bbHubCountStatus');
    if (status) {
      status.textContent = `Showing ${visibleCount} of ${cards.length} Peer-Reviewed Clinical Guides`;
    }
  };

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.openBbSearch();
    } else if (e.key === 'Escape') {
      window.closeBbSearch();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGlobalUX);
  } else {
    injectGlobalUX();
  }
})();


