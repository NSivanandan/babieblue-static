/*!
 * Babie Blue Embeddable Clinical Calculator Web Component v2026.4
 * Free for OB-GYN clinics, pediatric practices, doulas, and health publishers.
 * Canonical Documentation: https://babieblue.com/datasets/
 */
(function () {
  function mountWidget(host) {
    if (host.getAttribute('data-bb-mounted') === '1') return;
    host.setAttribute('data-bb-mounted', '1');
    var tool = host.getAttribute('data-tool') || 'fever';

    var toolMeta = {
      fever: {
        title: 'Infant Fever Weight-Based Dosing Calculator (AAP Protocol)',
        url: 'https://babieblue.com/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/',
        anchor: 'Infant Fever Acetaminophen & Ibuprofen Dosing Chart — Babie Blue'
      },
      edd: {
        title: 'Pregnancy Due Date & Gestational Milestone Calculator',
        url: 'https://babieblue.com/calculators/due-date-calculator/',
        anchor: 'Pregnancy Due Date & Trimester Calculator — Babie Blue'
      },
      wake: {
        title: 'Pediatric Wake Windows & Nap Schedule Calculator (0–24m)',
        url: 'https://babieblue.com/baby-care/wake-windows-nap-transitions-by-age/',
        anchor: 'Wake Windows & Nap Transitions Guide — Babie Blue'
      },
      hcg: {
        title: 'Beta-hCG 48-Hour Doubling Time & Viability Calculator',
        url: 'https://babieblue.com/calculators/hcg-calculator/',
        anchor: 'Beta-hCG Doubling Time Calculator — Babie Blue'
      }
    };

    var meta = toolMeta[tool] || toolMeta.fever;
    host.style.cssText = 'border:1.5px solid #0f766e;border-radius:12px;padding:18px;background:#ffffff;font-family:system-ui,-apple-system,sans-serif;color:#0f172a;max-width:560px;margin:16px 0;box-shadow:0 4px 14px rgba(15,118,110,0.08);';

    if (tool === 'fever') {
      host.innerHTML =
        '<div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#0f766e;margin-bottom:4px;">BABIE BLUE CLINICAL PROTOCOL ENGINE</div>' +
        '<h4 style="margin:0 0 10px 0;font-size:17px;">' + meta.title + '</h4>' +
        '<label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;">Enter Infant Weight (lbs):</label>' +
        '<input type="number" min="6" max="36" step="0.5" value="14" style="width:100%;padding:8px 10px;border:1px solid #cbd5e1;border-radius:6px;font-size:14px;box-sizing:border-box;" oninput="this.nextElementSibling.innerHTML=\'<strong>Acetaminophen (160mg/5mL):</strong> \' + ((this.value/2.20462*12.5)/32).toFixed(2) + \' mL q4–6h &bull; <strong>Ibuprofen (100mg/5mL, &ge;6m only):</strong> \' + (this.value>=12?((this.value/2.20462*10)/20).toFixed(2)+\' mL q6–8h\':\'Consult MD (<12 lbs)\')">' +
        '<div style="margin-top:10px;padding:10px;background:#f0fdfa;border:1px solid #99f6e4;border-radius:6px;font-size:13.5px;"><strong>Acetaminophen (160mg/5mL):</strong> 2.48 mL q4–6h &bull; <strong>Ibuprofen (100mg/5mL, &ge;6m only):</strong> 3.18 mL q6–8h</div>' +
        '<div style="margin-top:10px;font-size:11.5px;color:#475569;">Medically verified by Dr. Mangala Devi K.R., MS (OBG) &bull; <a href="' + meta.url + '" rel="dofollow" style="color:#0f766e;font-weight:700;">' + meta.anchor + '</a></div>';
    } else {
      host.innerHTML =
        '<div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#0f766e;margin-bottom:4px;">BABIE BLUE CLINICAL PROTOCOL ENGINE</div>' +
        '<h4 style="margin:0 0 10px 0;font-size:17px;">' + meta.title + '</h4>' +
        '<p style="font-size:13.5px;color:#334155;margin:0 0 12px 0;">Interactive ACOG / AAP verified clinical calculator with downloadable .ics calendar milestones.</p>' +
        '<a href="' + meta.url + '" rel="dofollow" style="display:inline-block;padding:9px 16px;background:#0f766e;color:#ffffff;text-decoration:none;border-radius:6px;font-size:13px;font-weight:700;">Open ' + meta.anchor + ' &rarr;</a>';
    }
  }

  function init() {
    var nodes = document.querySelectorAll('.babieblue-clinical-widget');
    for (var i = 0; i < nodes.length; i++) mountWidget(nodes[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
