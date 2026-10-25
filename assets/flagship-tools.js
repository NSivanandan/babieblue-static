// BabieBlue — Top 1% Clinical UX, Speculation Rules, Dual-Unit Switcher, URL Deep-Links, .ics Export & AdSense Active-View Engine
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
    { title: "Dr. Mangala Devi K.R., MBBS, MS (OBG), MBA — Senior Medical Reviewer", url: "/dr-mangala-devi/", cat: "Medical Board", desc: "Secretary (IFS Karnataka), Immediate Past President (BSOG), Consultant at Manipal Hospitals (MHEL)." },
    { title: "Dr. Anagha Nawal, MBBS, DGO, MD, MCE, FRM — Senior Medical Reviewer", url: "/dr-anagha-nawal/", cat: "Medical Board", desc: "20+ yrs Consultant OB-GYN & Clinical Embryologist (Monash University Australia & Kiel University Germany)." },
    { title: "Sivanandan N — Founder & Publisher", url: "/sivanandan-n/", cat: "Medical Board", desc: "Founder of BabieBlue & Shaynly, former Healthcare Project Head at Ferticare." },
    { title: "Madhuri B — Lead Healthcare Content Specialist", url: "/madhuri-b/", cat: "Medical Board", desc: "12+ yrs in Healthcare Leadership & Medical Billing (CPT/ICD-10/HCPCS)." },
    { title: "About Babie Blue — Leadership & Medical Review Board", url: "/about-us/", cat: "Medical Board", desc: "Meet our Medical Review Board, editorial verification standards, and leadership team." }
  ];

  let FULL_SEARCH_INDEX = [...CORE_SEARCH_INDEX];
  let fullIndexLoaded = false;
  let activeCategoryFilter = 'All';

  // 1. Speculation Rules API (Prefetch on Hover for <50ms Page Transitions + Full AdSense Pageview Auctions)
  function injectSpeculationRules() {
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
                { not: { href_matches: '/wp-content/*' } }
              ]
            },
            eagerness: 'moderate'
          }
        ]
      });
      document.head.appendChild(specScript);
    }
  }

  // 2. Register Offline-Ready Clinical Service Worker
  function registerClinicalServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }
  }

  // 3. AdSense Active-View IntersectionObserver Engine (Maximizes Viewability % & Smart-Bidding eCPM)
  function initAdSenseViewabilityEngine() {
    // Inject a mid-article high-viewability slot on long articles (>3 H2s) if only 1 in-article slot exists
    const entryContent = document.querySelector('.entry-content, .bb-article-shell');
    if (entryContent) {
      const h2s = entryContent.querySelectorAll('h2');
      const existingInArticle = entryContent.querySelectorAll('.in-article-ad');
      if (h2s.length >= 4 && existingInArticle.length <= 1) {
        const targetH2 = h2s[Math.floor(h2s.length / 2)];
        if (targetH2) {
          const midSlot = document.createElement('div');
          midSlot.className = 'ad-slot-wrapper in-article-ad';
          midSlot.innerHTML = `<div class="ad-label">Advertisement</div>`;
          targetH2.insertAdjacentElement('beforebegin', midSlot);
        }
      }
    }

    const adContainers = document.querySelectorAll('.ad-slot-wrapper, .in-article-ad, .bottom-post-ad');
    adContainers.forEach((slot) => {
      if (!slot.querySelector('ins.adsbygoogle')) {
        const isBottom = slot.classList.contains('bottom-post-ad');
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        ins.style.width = '100%';
        ins.style.minHeight = '250px';
        ins.setAttribute('data-ad-client', 'ca-pub-4453876229797223');
        ins.setAttribute('data-ad-format', isBottom ? 'autorelaxed' : 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');
        slot.appendChild(ins);
      }
    });

    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const ins = entry.target;
          obs.unobserve(ins);
          if (ins.getAttribute('data-bb-ad-pushed') === '1' || ins.hasAttribute('data-adsbygoogle-status')) {
            return;
          }
          ins.setAttribute('data-bb-ad-pushed', '1');
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch {}
        });
      },
      { rootMargin: '320px 0px' }
    );

    document.querySelectorAll('ins.adsbygoogle').forEach((ins) => {
      if (!ins.hasAttribute('data-adsbygoogle-status') && ins.getAttribute('data-bb-ad-pushed') !== '1') {
        observer.observe(ins);
      }
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
      btn.innerHTML = isMetric ? '🌍 Units: kg / mL / °C' : '🇺🇸 Units: lbs / oz / °F';
      btn.setAttribute('aria-pressed', isMetric ? 'true' : 'false');
    });
  }

  window.toggleBbUnitSystem = function () {
    const next = getUnitSystem() === 'metric' ? 'imperial' : 'metric';
    localStorage.setItem('bb_unit_system', next);
    updateUnitButtons();
    if (typeof window.updateBbPediatricWidget === 'function') window.updateBbPediatricWidget();
  };

  function initDimMode() {
    const saved = localStorage.getItem('bb_dim_mode');
    if (saved === '1') {
      document.body.classList.add('bb-dim-mode');
    }
    updateDimButtons();
    updateUnitButtons();
  }

  function updateDimButtons() {
    const isDim = document.body.classList.contains('bb-dim-mode');
    document.querySelectorAll('.bb-dim-toggle').forEach((btn) => {
      btn.innerHTML = isDim ? '☀️ Day Mode' : '🌙 2 AM Dim Mode';
      btn.setAttribute('aria-pressed', isDim ? 'true' : 'false');
    });
  }

  window.toggleBbDimMode = function () {
    document.body.classList.toggle('bb-dim-mode');
    const isDim = document.body.classList.contains('bb-dim-mode');
    localStorage.setItem('bb_dim_mode', isDim ? '1' : '0');
    updateDimButtons();
  };

  window.copyBbText = function (elementId, btnEl) {
    const target = document.getElementById(elementId) || document.querySelector('.clinical-summary-box, .bb-subtitle');
    if (!target) return;
    const text = (target.innerText || target.textContent || '').trim();
    navigator.clipboard.writeText(text + '\n— Clinical Source: ' + window.location.href).then(() => {
      if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Summary Copied';
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
        btnEl.innerHTML = '✓ Shareable Link Copied!';
        setTimeout(() => {
          btnEl.innerHTML = orig;
        }, 2200);
      }
    });
  };

  // 5. .ics Calendar Milestone Generator for Obstetric & Pediatric Protocols
  window.downloadBbIcsCalendar = function (mode) {
    const now = new Date();
    const fmtDate = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const events = [];

    if (mode === 'obstetric') {
      const wkInput = parseInt(document.getElementById('bbWidgetGestWeek')?.value || '12', 10);
      const daysRemaining = Math.max(7, (40 - wkInput) * 7);
      const edd = new Date(now.getTime() + daysRemaining * 86400000);
      const anatomyDate = new Date(edd.getTime() - 20 * 7 * 86400000);
      const gdmDate = new Date(edd.getTime() - 14 * 7 * 86400000);
      const gbsDate = new Date(edd.getTime() - 4 * 7 * 86400000);

      events.push(
        { date: anatomyDate, title: 'BabieBlue Clinical Milestone: 20-Week Fetal Anatomy Scan Window', desc: 'Comprehensive 20-week fetal anatomy ultrasound & cervical length check (ACOG Guideline).' },
        { date: gdmDate, title: 'BabieBlue Clinical Milestone: 26-Week Gestational Diabetes & Ferritin Lab Check', desc: 'Glucola screening, CBC + Serum Ferritin check & Tdap vaccine window.' },
        { date: gbsDate, title: 'BabieBlue Clinical Milestone: 36-Week Group B Strep (GBS) Screening', desc: '36–37 week GBS swab & hospital bag readiness check (https://babieblue.com/pregnancy/hospital-bag-checklist-mom-partner-baby-tracker/).' },
        { date: edd, title: 'Estimated Due Date (40w0d) — Babie Blue', desc: 'Estimated delivery date calculated via Babie Blue Clinical Protocol (https://babieblue.com/calculators/due-date-calculator/).' }
      );
    } else {
      const check1 = new Date(now.getTime() + 14 * 86400000);
      const check2 = new Date(now.getTime() + 60 * 86400000);
      events.push(
        { date: check1, title: 'BabieBlue Clinical Check-In: 2-Week Weight & Feeding / Lab Follow-Up', desc: 'Recalculate weight-based intake and developmental wake windows at https://babieblue.com/' },
        { date: check2, title: 'BabieBlue Clinical Check-In: 60-Day Developmental & Wellness Milestone', desc: 'Review next-stage wake windows, immunization schedule, or postpartum thyroid/ferritin panel at https://babieblue.com/' }
      );
    }

    const icsLines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Babie Blue Clinical Protocols//EN',
      'CALSCALE:GREGORIAN'
    ];

    events.forEach((ev, idx) => {
      const end = new Date(ev.date.getTime() + 3600000);
      icsLines.push(
        'BEGIN:VEVENT',
        `UID:babieblue-${Date.now()}-${idx}@babieblue.com`,
        `DTSTAMP:${fmtDate(now)}`,
        `DTSTART:${fmtDate(ev.date)}`,
        `DTEND:${fmtDate(end)}`,
        `SUMMARY:${ev.title}`,
        `DESCRIPTION:${ev.desc}`,
        'END:VEVENT'
      );
    });
    icsLines.push('END:VCALENDAR');

    const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'babieblue-clinical-milestones.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

  // 6. Inject Cryptographic-Style Clinical Audit Trail, Utility Bar, Micro-Widgets & Contextual Next-Step Cards
  function injectArticleUtilitiesAndWidgets() {
    const article = document.querySelector('article.single-post, main.bb-article-shell');
    if (!article) return;

    // A. Inject Cryptographic-Style Clinical Audit Trail Drawer inside .bb-eeat-bar or .bb-trust-strip
    const eeatHost = article.querySelector('.bb-eeat-bar, .bb-trust-strip');
    if (eeatHost && !article.querySelector('.bb-audit-drawer')) {
      const auditDrawer = document.createElement('details');
      auditDrawer.className = 'bb-audit-drawer';
      auditDrawer.innerHTML = `
        <summary>
          <span>🛡️ Verified Clinical Audit Trail &amp; Guideline Provenance (Protocol v2026.4)</span>
          <span style="font-size:11.5px;opacity:0.85;">View Verification Log &darr;</span>
        </summary>
        <div class="bb-audit-grid">
          <div>
            <strong>Primary Medical Reviewers:</strong><br>
            <a href="/dr-mangala-devi/">Dr. Mangala Devi K.R., MS (OBG)</a> (KMC #58341) &amp; <a href="/dr-anagha-nawal/">Dr. Anagha Nawal, MD, MCE, FRM</a>
          </div>
          <div>
            <strong>Coding &amp; Ontology Audit:</strong><br>
            <a href="/madhuri-b/">Madhuri B</a> (ICD-10-CM / HCPCS / MeSH Clinical Indexing)
          </div>
          <div>
            <strong>Clinical Guideline Alignment:</strong><br>
            ACOG Practice Bulletins, AAP 2025–2026 Clinical Reports &amp; WHO Standards
          </div>
          <div>
            <strong>Machine-Readable Formats:</strong><br>
            <a href="${window.location.pathname.endsWith('/') ? window.location.pathname + 'index.md' : window.location.pathname}">Markdown Mirror (.md)</a> &bull; <a href="/llms-full.txt">LLM Corpus</a>
          </div>
        </div>
      `;
      eeatHost.appendChild(auditDrawer);
    }

    // B. Inject Clinical Utility Bar (Unit Toggle, Copy Summary, Print Fridge Sheet, 2 AM Dim Mode)
    const targetAnchor = article.querySelector('.clinical-summary-box, .bb-trust-strip');
    if (targetAnchor && !article.querySelector('.bb-article-utility-bar')) {
      const bar = document.createElement('div');
      bar.className = 'bb-article-utility-bar';
      bar.innerHTML = `
        <span><strong>Clinical Protocol Tools:</strong> Switch units, share calculations, or print a 1-page fridge sheet</span>
        <div class="bb-utility-actions">
          <button type="button" class="bb-utility-btn bb-unit-toggle" onclick="toggleBbUnitSystem()">🇺🇸 Units: lbs / oz / °F</button>
          <button type="button" class="bb-utility-btn" onclick="copyBbText('', this)">📋 Copy Summary</button>
          <button type="button" class="bb-utility-btn" onclick="printBbSheet()">🖨️ Print Fridge Sheet</button>
          <button type="button" class="bb-utility-btn bb-dim-toggle" onclick="toggleBbDimMode()">🌙 2 AM Dim Mode</button>
        </div>
      `;
      targetAnchor.insertAdjacentElement('afterend', bar);
      updateUnitButtons();
    }

    // C. Inject Context-Aware Interactive Clinical Micro-Widget with URL Deep-Link State & .ics Export
    if (article.classList.contains('single-post') && !article.querySelector('.bb-micro-widget')) {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const contentArea = article.querySelector('.entry-content');
      const firstH2 = contentArea ? contentArea.querySelector('h2') : null;
      if (contentArea && firstH2) {
        const widget = document.createElement('section');
        widget.className = 'bb-micro-widget';
        widget.setAttribute('aria-label', 'Interactive Clinical Calculator');

        if (path.startsWith('/baby-care/')) {
          const initW = params.get('w') || '10';
          const initF = params.get('feeds') || '8';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Interactive Pediatric Calculator • AAP Protocol</span>
              <a href="/baby-care/paced-bottle-feeding-combo-feeding-schedule/" style="font-size:12.5px;font-weight:700;">Full Feeding &amp; Dosing Suite &rarr;</a>
            </div>
            <h3>Instant Weight-Based Daily Intake &amp; Paced Bottle Estimator</h3>
            <p style="font-size:13.5px;margin:0;">Enter your baby's weight and daily feeding frequency (auto-converts between <code>lbs / fl oz</code> and <code>kg / mL</code>):</p>
            <div class="bb-micro-widget-controls">
              <div>
                <label for="bbWidgetWeight" id="bbWidgetWeightLabel">Infant Weight (lbs)</label>
                <input type="number" id="bbWidgetWeight" min="2" max="35" step="0.5" value="${initW}" oninput="updateBbPediatricWidget(true)" />
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
            <div class="bb-widget-action-row">
              <button type="button" class="bb-utility-btn" onclick="copyBbShareLink(this)">🔗 Copy Shareable Result Link</button>
              <button type="button" class="bb-utility-btn" onclick="downloadBbIcsCalendar('pediatric')">📅 Add Pediatric Check-Ins (.ics)</button>
              <button type="button" class="bb-utility-btn bb-unit-toggle" onclick="toggleBbUnitSystem()">🇺🇸 Units: lbs / oz / °F</button>
            </div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbPediatricWidget(false);
        } else if (path.startsWith('/pregnancy/')) {
          const initWk = params.get('wk') || '12';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Interactive Obstetric Tool • ACOG Trimester Milestones</span>
              <a href="/calculators/due-date-calculator/" style="font-size:12.5px;font-weight:700;">Full Due Date Calculator &rarr;</a>
            </div>
            <h3>Gestational Week &amp; Trimester Clinical Checkpoint Lookup</h3>
            <div class="bb-micro-widget-controls">
              <div>
                <label for="bbWidgetGestWeek">Current Gestational Week (4–41 wks)</label>
                <input type="number" id="bbWidgetGestWeek" min="4" max="41" step="1" value="${initWk}" oninput="updateBbObstetricWidget(true)" />
              </div>
            </div>
            <div class="bb-micro-widget-output" id="bbWidgetObOutput"></div>
            <div class="bb-widget-action-row">
              <button type="button" class="bb-utility-btn" onclick="copyBbShareLink(this)">🔗 Copy Shareable Week Link</button>
              <button type="button" class="bb-utility-btn" onclick="downloadBbIcsCalendar('obstetric')">📅 Export Prenatal Milestones (.ics)</button>
            </div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbObstetricWidget(false);
        } else if (path.startsWith('/maternal-health/')) {
          const initFer = params.get('fer') || '28';
          const initTsh = params.get('tsh') || '1.8';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Interactive Maternal Biomarker Check • Postpartum &amp; Women's Health</span>
              <a href="/maternal-health/postpartum-blood-work-panel-ferritin-thyroiditis-vitamin-d/" style="font-size:12.5px;font-weight:700;">Full Lab Panel Guide &rarr;</a>
            </div>
            <h3>Quick Serum Ferritin &amp; TSH Clinical Target Evaluator</h3>
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
            <div class="bb-widget-action-row">
              <button type="button" class="bb-utility-btn" onclick="copyBbShareLink(this)">🔗 Copy Shareable Lab Link</button>
              <button type="button" class="bb-utility-btn" onclick="downloadBbIcsCalendar('pediatric')">📅 Add 6-Week Lab Reminder (.ics)</button>
            </div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbMaternalWidget(false);
        } else if (path.startsWith('/parenting/')) {
          const initAge = params.get('age') || '7-12m';
          widget.innerHTML = `
            <div class="bb-micro-widget-header">
              <span class="bb-micro-widget-kicker">Interactive Pediatric Sleep &amp; Routine Finder • AAP Guidelines</span>
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
            <div class="bb-widget-action-row">
              <button type="button" class="bb-utility-btn" onclick="copyBbShareLink(this)">🔗 Copy Shareable Schedule Link</button>
              <button type="button" class="bb-utility-btn" onclick="downloadBbIcsCalendar('pediatric')">📅 Export Routine Reminder (.ics)</button>
            </div>
          `;
          firstH2.insertAdjacentElement('beforebegin', widget);
          window.updateBbParentingWidget(false);
        }
        updateUnitButtons();
      }
    }

    // D. Inject Contextual "Recommended Next Clinical Steps & High-RPM Interactive Tools" 3-Card Grid before Bottom Ad Slot
    if (!article.querySelector('.bb-next-steps-section')) {
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
      nextSec.setAttribute('aria-label', 'Recommended Next Clinical Steps and Calculators');
      nextSec.innerHTML = `
        <div class="bb-next-steps-header">
          <div>
            <span class="bb-next-steps-kicker">Next Clinical Steps &amp; Interactive Tools</span>
            <h3 style="margin:4px 0 0 0;font-size:19px;">Continue Your Personalized Care Protocol</h3>
          </div>
          <a href="/calculators/" style="font-size:13px;font-weight:700;">All 10 Clinical Calculators &rarr;</a>
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
              <span class="bb-next-step-cta">Open Interactive Protocol &rarr;</span>
            </a>
          `
            )
            .join('')}
        </div>
      `;

      const bottomAd = article.querySelector('.bottom-post-ad, .bb-references-block');
      if (bottomAd) {
        bottomAd.insertAdjacentElement('beforebegin', nextSec);
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
    const w = parseFloat(wInput?.value || '10');
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
    const feverThreshold = isMetric ? '38.0°C (100.4°F)' : '100.4°F (38.0°C)';

    if (pushUrl) syncUrlParams({ w, feeds: f });
    out.innerHTML = isMetric
      ? `<strong>Weight:</strong> <code>${weightKg} kg</code> (${w} lbs) &bull; <strong>Target 24-Hr Volume:</strong> <code>${rawDailyMl} mL/day</code> (${rawDailyOz.toFixed(1)} fl oz)<br><strong>Per Paced Bottle:</strong> <code>${perFeedMl} mL</code> (${perFeedOz} fl oz) over 15–20 mins &bull; <strong>Rectal Fever Escalation:</strong> <code>&ge; ${feverThreshold}</code>`
      : `<strong>Weight:</strong> <code>${w} lbs</code> (${weightKg} kg) &bull; <strong>Target 24-Hr Volume:</strong> <code>${rawDailyOz.toFixed(1)} fl oz/day</code> (${rawDailyMl} mL)<br><strong>Per Paced Bottle:</strong> <code>${perFeedOz} fl oz</code> (~${perFeedMl} mL) over 15–20 mins &bull; <strong>Rectal Fever Escalation:</strong> <code>&ge; ${feverThreshold}</code>`;
  };

  window.updateBbObstetricWidget = function (pushUrl) {
    const wk = parseInt(document.getElementById('bbWidgetGestWeek')?.value || '12', 10);
    const out = document.getElementById('bbWidgetObOutput');
    if (!out || isNaN(wk)) return;
    if (pushUrl) syncUrlParams({ wk });
    const trimester = wk <= 13 ? 'First Trimester (Organogenesis)' : wk <= 27 ? 'Second Trimester (Fetal Growth & Anatomy)' : 'Third Trimester (Maturation & Delivery Prep)';
    const milestone =
      wk <= 10 ? 'Confirm intrauterine viability scan; initiate 400–800 mcg methylfolate/folic acid & baseline prenatal panel.' :
      wk <= 14 ? 'NIPT cell-free DNA screening window (10w+) & Nuchal Translucency ultrasound (11w–13w6d).' :
      wk <= 22 ? 'Comprehensive 20-week fetal anatomy ultrasound & cervical length assessment.' :
      wk <= 28 ? 'Gestational diabetes screening (24–28w Glucola), CBC/Ferritin re-check & Tdap immunization window (27–36w).' :
      wk <= 36 ? 'Monitor daily fetal kick counts (10 movements in <=2 hours), RSV maternal vaccine discussion (32–36w) & Group B Strep swab (36–37w).' :
      'Full-term readiness: monitor labor contraction periodicity (5-1-1 rule), blood pressure (<140/90 mmHg), and amniotic fluid integrity.';
    out.innerHTML = `<strong>Stage:</strong> <code>Week ${wk} — ${trimester}</code><br><strong>Key Clinical Protocol:</strong> ${milestone}`;
  };

  window.updateBbMaternalWidget = function (pushUrl) {
    const fer = parseFloat(document.getElementById('bbWidgetFerritin')?.value || '28');
    const tsh = parseFloat(document.getElementById('bbWidgetTsh')?.value || '1.8');
    const out = document.getElementById('bbWidgetMatOutput');
    if (!out) return;
    if (pushUrl) syncUrlParams({ fer, tsh });
    const ferStatus = fer < 30 ? '⚠️ Depleted Iron Stores (<30 ng/mL — strongly linked to maternal fatigue, hair shedding & mood depletion even if Hemoglobin is normal)' : fer < 50 ? 'Sub-optimal Recovery Reserve (30–49 ng/mL — target >=50 ng/mL postpartum)' : '✓ Optimal Maternal Ferritin Reserve (>=50 ng/mL)';
    const tshStatus = tsh < 0.45 ? '⚠️ Suppressed TSH (<0.45 mIU/L — screen for hyperthyroid phase of Postpartum Thyroiditis)' : tsh > 2.5 ? '⚠️ Elevated TSH (>2.5 mIU/L — evaluate Free T4 & TPO antibodies for postpartum/subclinical hypothyroidism)' : '✓ Optimal Maternal Functional TSH Range (0.45–2.5 mIU/L)';
    out.innerHTML = `<strong>Ferritin Assessment:</strong> ${ferStatus}<br><strong>Thyroid (TSH) Assessment:</strong> ${tshStatus}`;
  };

  window.updateBbParentingWidget = function (pushUrl) {
    const age = document.getElementById('bbWidgetChildAge')?.value || '7-12m';
    const out = document.getElementById('bbWidgetParOutput');
    if (!out) return;
    if (pushUrl) syncUrlParams({ age });
    const map = {
      '0-3m': '<strong>Wake Window:</strong> <code>45–90 mins</code> &bull; <strong>Total Sleep:</strong> <code>14–17 hrs/day</code> &bull; <strong>Focus:</strong> Responsive cue-based feeds (8–12x/day), supine safe sleep, and early circadian daylight exposure.',
      '4-6m': '<strong>Wake Window:</strong> <code>1.75–2.75 hrs</code> &bull; <strong>Total Sleep:</strong> <code>13.5–15 hrs/day (3–4 naps)</code> &bull; <strong>Focus:</strong> High-iron solid readiness check at ~6m and consistent 20-minute wind-down routine.',
      '7-12m': '<strong>Wake Window:</strong> <code>2.75–4.0 hrs</code> &bull; <strong>Total Sleep:</strong> <code>13–14 hrs/day (2 naps)</code> &bull; <strong>Focus:</strong> Early allergen maintenance (peanut/egg 2–3x/wk), iron-rich finger foods, and 3-to-2 nap transition.',
      '1-2y': '<strong>Wake Window:</strong> <code>4.5–6.0 hrs</code> &bull; <strong>Total Sleep:</strong> <code>12–13.5 hrs/day (1 midday nap)</code> &bull; <strong>Focus:</strong> Whole milk/water cup transition (wean bottle by 12–15m), co-regulated boundaries, and zero screen time <18m.',
      '3-5y': '<strong>Wake Window:</strong> <code>Full Day / Quiet Time</code> &bull; <strong>Total Sleep:</strong> <code>10–13 hrs/day</code> &bull; <strong>Focus:</strong> Predictable visual bedtime chart, balanced division-of-responsibility meals, and <=1 hr co-viewed educational media.'
    };
    out.innerHTML = map[age] || map['7-12m'];
  };

  function injectGlobalUX() {
    injectSpeculationRules();
    registerClinicalServiceWorker();

    const headerInner = document.querySelector('.header-inner');
    if (headerInner && !headerInner.querySelector('.bb-header-actions')) {
      const actions = document.createElement('div');
      actions.className = 'bb-header-actions';
      actions.innerHTML = `
        <button type="button" class="bb-search-trigger" onclick="openBbSearch()" aria-label="Search clinical guides and calculators">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Search</span>
          <kbd class="bb-search-kbd">⌘K</kbd>
        </button>
        <button type="button" class="bb-dim-toggle" onclick="toggleBbDimMode()">🌙 2 AM Dim Mode</button>
      `;
      headerInner.appendChild(actions);
    }

    if (!document.querySelector('.bb-search-modal-backdrop')) {
      const modal = document.createElement('div');
      modal.className = 'bb-search-modal-backdrop';
      modal.id = 'bbSearchModal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Search Clinical Protocols and Calculators');
      modal.innerHTML = `
        <div class="bb-search-modal" onclick="event.stopPropagation()">
          <div class="bb-search-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="bbSearchInput" placeholder="Search 175+ clinical guides, fever dosing, wake windows, calculators..." autocomplete="off" />
            <button type="button" class="bb-btn-secondary" onclick="closeBbSearch()">Esc</button>
          </div>
          <div class="bb-search-filters" role="tablist" aria-label="Filter search by clinical category">
            <button type="button" class="bb-search-filter-btn active" onclick="setBbSearchCat('All', this)">All (175+)</button>
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

    initDimMode();
    injectArticleUtilitiesAndWidgets();
    initAdSenseViewabilityEngine();
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
      container.innerHTML = `<div class="bb-search-empty">No matching clinical protocols found. Try "fever", "wake windows", "formula", "preeclampsia", or "due date".</div>`;
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
