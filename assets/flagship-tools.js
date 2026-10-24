// BabieBlue — Global Clinical Search (⌘K) & 2 AM Dim Mode (Zero Sticky Overlays)
(function () {
  const SEARCH_INDEX = [
    { title: "Wake Windows by Age & Nap Transitions (0–24 Months)", url: "/baby-care/wake-windows-nap-transitions-by-age/", cat: "Infant Sleep Protocol", desc: "Interactive 24-hour wake window schedule generator, cortisol science & nap transition quiz." },
    { title: "Paced Bottle Feeding & Combo Feeding Schedule Guide", url: "/baby-care/paced-bottle-feeding-combo-feeding-schedule/", cat: "Lactation & Feeding", desc: "Weight-based daily breastmilk & formula volume calculator, horizontal bottle angle & nipple flow matrix." },
    { title: "Postpartum Diastasis Recti Self-Test & 12-Week Core Rehab", url: "/maternal-health/postpartum-diastasis-recti-self-test-rehab-protocol/", cat: "Postpartum Pelvic PT", desc: "3-zone finger-width IRD & linea alba tension scorer with 360° piston rehab progression." },
    { title: "Newborn Poop Color & Texture Chart: Visual Stool Triage", url: "/baby-care/newborn-poop-color-texture-chart/", cat: "Newborn GI Triage", desc: "9-color stool swatch decoder (meconium to CMPA mucus & biliary atresia alert) + Day 1–7 diaper tracker." },
    { title: "Infant Fever Guide & Exact Tylenol / Motrin Dosing Chart", url: "/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/", cat: "Acute Pediatric Dosing", desc: "Weight-based mL syringe visualizer (160mg/5mL, 50mg/1.25mL, 100mg/5mL) & AAP under-60-day fever triage." },
    { title: "Cord Blood & Cord Tissue Banking (2026): Public vs. Private Costs", url: "/pregnancy/cord-blood-cord-tissue-banking-costs-public-vs-private/", cat: "Third-Trimester Decision", desc: "18–25 year private banking true cost calculator, delayed cord clamping blood volume & medical odds." },
    { title: "NICU Preemie Discharge Checklist & Corrected Age Guide", url: "/baby-care/nicu-preemie-discharge-checklist-corrected-age-guide/", cat: "Neonatology & Preemie", desc: "Adjusted vs. chronological age milestone calculator, 22-calorie fortification recipes & NICU readiness." },
    { title: "Silent Reflux (LPR) vs. Colic in Newborns: Clinical Protocol", url: "/baby-care/silent-reflux-lpr-vs-colic-newborns-protocol/", cat: "Pediatric GI & Airway", desc: "4-way symptom differentiator (Silent LPR vs. GERD vs. Colic vs. CMPA) & 14-day conservative plan." },
    { title: "Hypoallergenic vs. Extensively Hydrolyzed vs. Goat Milk Formula", url: "/baby-care/hypoallergenic-vs-extensively-hydrolyzed-vs-goat-milk-formula/", cat: "Allergy & CMPA Formula", desc: "Dalton protein hydrolysis ladder, corn-free Alimentum RTF vs. powder & HCPCS B4161 insurance calculator." },
    { title: "Interactive Hospital Bag Checklist (Mom, Partner & Baby Tracker)", url: "/pregnancy/hospital-bag-checklist-mom-partner-baby-tracker/", cat: "Labor & Delivery Prep", desc: "Customize by Vaginal, Scheduled C-Section, VBAC, or Induction with auto-saved packing progress bars." },
    { title: "The Ultimate Postpartum Blood Work Panel: Ferritin & Thyroiditis", url: "/maternal-health/postpartum-blood-work-panel-ferritin-thyroiditis-vitamin-d/", cat: "Maternal Endocrinology", desc: "Compare standard lab vs. optimal postpartum ranges (Ferritin >=50 ng/mL, TSH, Free T4, TPOAb, Vitamin D)." },
    { title: "Daycare Illness Survival Guide: RSV, Croup, HFM & Ear Infections", url: "/parenting/daycare-illness-survival-guide-rsv-croup-hfm-ear-infections/", cat: "Pediatric Infectious Disease", desc: "Cough & rash differential matcher, AAP return-to-daycare clearance calculator & Beyfortus RSV guide." },
    { title: "Best Organic Baby Formulas (2026): US vs. European Standards", url: "/baby-care/best-organic-baby-formulas-us-vs-european-standards/", cat: "Regulatory Toxicology", desc: "US vs. EU organic formula matcher (Bobbie, Kendamil, ByHeart, HiPP, Holle) & 2025 heavy metal audit." },
    { title: "How to Get a Free Breast Pump Through Insurance (2026 ACA Guide)", url: "/pregnancy/breast-pump-insurance-coverage-how-to-get-free/", cat: "ACA Benefits & Lactation", desc: "Compare Aeroflow, Babylist Health & Byram copays + 90-day free replacement parts (HCPCS A4281–A4286)." },
    { title: "Early Gender DNA Blood Test: SneakPeek vs. Clinical NIPT Accuracy", url: "/pregnancy/early-gender-dna-blood-test-sneakpeek-vs-nipt-accuracy/", cat: "Prenatal Genetics", desc: "Fetal fraction readiness calculator by gestational age & BMI + Y-chromosome contamination risk scorer." },
    { title: "Safest Non-Toxic Crib Mattresses & Breathable Cribs (2026 CPSC)", url: "/baby-care/safest-non-toxic-nursery-mattresses-breathable-cribs/", cat: "Safe Sleep & Toxicology", desc: "Decode GOTS, GOLS & Greenguard Gold certifications + Newton vs. Naturepedic vs. Avocado comparison." },
    { title: "Pregnancy Due Date & Gestational Milestone Calculator", url: "/calculators/due-date-calculator/", cat: "Clinical Calculator", desc: "Calculate estimated delivery date from LMP, conception, or IVF transfer with trimester milestones." },
    { title: "Ovulation & 6-Day Fertile Window Calculator", url: "/calculators/ovulation-calculator/", cat: "Clinical Calculator", desc: "Track your peak LH surge, 6-day fertile window, and earliest sensitive hCG testing dates." },
    { title: "Beta hCG Doubling Time & Viability Calculator", url: "/calculators/hcg-calculator/", cat: "Clinical Calculator", desc: "Calculate 48-hour hCG percentage rise, doubling hours, and ultrasound discriminatory zones." },
    { title: "Baby Name Shortlist & Origin Finder Engine", url: "/calculators/baby-name-generator/", cat: "Interactive Tool", desc: "Filter 300+ baby names by origin, gender, and style with persistent nursery shortlist." },
    { title: "Dr. Mangala Devi K.R., MBBS, MS (OBG), MBA — Senior Medical Reviewer", url: "/dr-mangala-devi/", cat: "Medical Review Board", desc: "Secretary (IFS Karnataka), Immediate Past President (BSOG), Consultant at Manipal Hospitals (MHEL) & CREST Singapore." },
    { title: "Dr. Anagha Nawal, MBBS, DGO, MD, MCE, FRM — Senior Medical Reviewer", url: "/dr-anagha-nawal/", cat: "Medical Review Board", desc: "20+ yrs Consultant OB-GYN & Clinical Embryologist (Monash University Australia & Kiel University Germany)." },
    { title: "Sivanandan N — Founder & Publisher", url: "/sivanandan-n/", cat: "Executive Leadership", desc: "Founder of BabieBlue & Shaynly, former Healthcare Project Head at Ferticare." },
    { title: "Madhuri B — Lead Healthcare Content Specialist", url: "/madhuri-b/", cat: "Editorial Leadership", desc: "12+ yrs in Healthcare Leadership & Medical Billing (CPT/ICD-10/HCPCS)." },
    { title: "About Babie Blue — Leadership & Medical Review Board", url: "/about-us/", cat: "Institutional Overview", desc: "Meet our Medical Review Board, editorial verification standards, and leadership team." }
  ];

  function initDimMode() {
    const saved = localStorage.getItem('bb_dim_mode');
    if (saved === '1') {
      document.body.classList.add('bb-dim-mode');
    }
    updateDimButtons();
  }

  function updateDimButtons() {
    const isDim = document.body.classList.contains('bb-dim-mode');
    document.querySelectorAll('.bb-dim-toggle').forEach((btn) => {
      btn.innerHTML = isDim ? '☀️ Day Mode' : '🌙 Dim Mode';
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
    const target = document.getElementById(elementId);
    if (!target) return;
    const text = target.innerText || target.textContent;
    navigator.clipboard.writeText(text).then(() => {
      if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Copied to Clipboard';
        setTimeout(() => {
          btnEl.innerHTML = orig;
        }, 2200);
      }
    });
  };

  window.printBbSheet = function () {
    window.print();
  };

  function injectGlobalUX() {
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
        <button type="button" class="bb-dim-toggle" onclick="toggleBbDimMode()">🌙 Dim Mode</button>
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
            <input type="text" id="bbSearchInput" placeholder="Search calculators, fever dosing, wake windows, poop chart, NIPT..." autocomplete="off" />
            <button type="button" class="bb-btn-secondary" onclick="closeBbSearch()">Esc</button>
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
  }

  function renderSearchResults(query) {
    const container = document.getElementById('bbSearchResults');
    if (!container) return;
    const q = (query || '').toLowerCase().trim();
    const matches = q
      ? SEARCH_INDEX.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.cat.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q)
        )
      : SEARCH_INDEX;

    if (matches.length === 0) {
      container.innerHTML = `<div class="bb-search-empty">No matching clinical protocols found. Try "fever", "wake windows", "formula", or "due date".</div>`;
      return;
    }

    container.innerHTML = matches
      .slice(0, 12)
      .map(
        (m) => `
      <a href="${m.url}" class="bb-search-item">
        <span class="bb-search-item-kicker">${m.cat}</span>
        <span class="bb-search-item-title">${m.title}</span>
        <span class="bb-search-item-desc">${m.desc}</span>
      </a>
    `
      )
      .join('');
  }

  window.openBbSearch = function () {
    const modal = document.getElementById('bbSearchModal');
    if (!modal) return;
    modal.classList.add('open');
    renderSearchResults('');
    setTimeout(() => {
      const input = document.getElementById('bbSearchInput');
      if (input) input.focus();
    }, 50);
  };

  window.closeBbSearch = function () {
    const modal = document.getElementById('bbSearchModal');
    if (modal) modal.classList.remove('open');
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
