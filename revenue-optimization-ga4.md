# Babie Blue — Revenue Optimization Plan (GA4 + Manual Review)
# Setup Data Collection for AdSense & Affiliate Performance

## Google Analytics 4 (GA4) Setup

### 1. GA4 Property Creation
- Go to: https://analytics.google.com
- Create new property: babieblue.com
- Set reporting time zone: GMT+5:30 (Bangalore)
- Add a data stream: babieblue.com (Web)

### 2. Critical GA4 Events to Track
```
page_view {
  page_title: "Bottle Refusal Fixes"
  page_location: "/bottle-refusal-fixes/"
}

ad_impression {
  ad_slot: "top-banner"
  ad_format: "leaderboard"
}

affiliate_click {
  affiliate_url: "https://www.babieblue.com/go/1234"
  affiliate_text: "Amazon Baby Registry"
}

engagement_time {
  seconds: 45.2
  scroll_depth: 75
}
```

### 3. GA4 Custom Dimensions
- `ad_slot_type` (Session)
- `affiliate_source` (Session)
- `pregnancy_niche` (Page) — filter by content category
- `time_of_day` (Session)

### 4. Recommended GA4 Reports

#### Key Metrics
- **Pages per Session** (target: >2.5)
- **Session Duration** (target: >180 seconds)
- **New Session Rate** (target: >30%)
- **Ad Slot Revenue** (estimate from AdSense -> GA)

#### Event-Specific Reports
- **Ad Impression Count** by slot
- **Affiliate Click-through Rate** by partner
- **Page Views by Topic** (cluster analysis)
- **Cross-Direction Movement** (cluster navigation)

### 5. Google AdSense to GA4 Integration

```
Google AdSense (ca-pub-4453876229797223)
    ↓
Google Ad Manager (if using)
    ↓
Google Analytics 4 (GAD + Google Analytics)
    ↓
Revenue Dashboard + ROI Analysis
```

### 6. Dashboard Setup (Google Data Studio)

**Pages 1-2: Revenue Dashboard**
- Overview: Total ad revenue, affiliate revenue
- Top 10 ad slots by eCPM
- Traffic to key clusters
- Month-over-month revenue trend

**Pages 3-4: Performance & Optimization**
- Revenue by content category
- Affiliate ROI by partner
- Bounce rate by ad slot
- New user acquisition cost

### 7. Manual Review Cycles

#### Weekly (Mon):
- Compare last 7 days vs. 30-day baseline
- Check high-performing ad slots
- Review affiliate CTR trends

#### Monthly (1st):
- Full revenue audit
- Revenue per cluster comparison
- Affiliate contract negotiations (if needed)

#### Quarterly (Jan/Apr/Jul/Oct):
- Complete optimization report
- Revenue forecasts for next quarter
- Affiliate + AdSense strategy adjustment

### 8. Key Integration Points

#### AdSense + GA4
- Turn on AdSense integration in GA4
- Track estimated earnings (if AdSense linked to GA4)
- Note: GA4 may not capture all ad types (some are in AdSense dashboard)

#### Affiliate + GA4
- Use `affiliate_click` event on all affiliate links
- Create UTM parameters for all affiliate URLs:
  `https://babieblue.com/go/<affiliatelink>?utm_source=ga4&utm_medium=affiliate&utm_campaign=baby-registry`
- Track conversion paths

### 9. Integration Script

```javascript
// GA4 + AdSense Affiliate Tracking

(function() {
  'use strict';

  // GA4 tracking for affiliate links
  function trackAffiliate(url, partner, slot) {
    if (typeof gtag === 'function') {
      gtag('event', 'affiliate_click', {
        'event_category': 'revenue',
        'event_label': partner,
        'custom_parameter_1': slot,
        'custom_parameter_2': url
      });
    }
  }

  // AdSense performance monitoring
  function trackAdImpression(slot, format) {
    if (typeof gtag === 'function') {
      gtag('event', 'ad_impression', {
        'event_category': 'adsense',
        'event_label': slot + '_' + format,
        'custom_parameter_3': window.innerWidth
      });
    }
  }

  // Initialize affiliate tracking
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href]');
    if (target && target.hostname !== window.location.hostname) {
      // Affiliate link detected
      const url = target.href;
      const text = target.textContent || target.innerText;
      const partner = getAffiliatePartner(url); // Your partner matching function
      trackAffiliate(url, partner, 'side-panel');
    }
  });

  // AdSense impression tracking
  if (typeof window.adsbygoogle !== 'undefined') {
    window.adsbygoogle = window.adsbygoogle || [];
    setTimeout(function() {
      window.adsbygoogle.push({
        onLoad: function() {
          const slot = this.getAttribute('data-ad-slot') || 'unknown';
          const format = this.getAttribute('data-ad-format') || 'auto';
          trackAdImpression(slot, format);
        }
      });
    }, 2000); // Allow ad to render
  }

  // Helper function to determine affiliate partner
  function getAffiliatePartner(url) {
    if (url.includes('amazon.')) return 'Amazon Baby Registry';
    if (url.includes('betterhelp.')) return 'BetterHelp Therapy';
    if (url.includes('notion.so')) return 'Notion Productivity';
    if (url.includes('make.com')) return 'Make Automation';
    return 'Other Affiliate';
  }
})();
```

### 10. Expected Revenue Tracking

#### AdSense Revenue Estimate
```
# Based on current traffic projections:
# 159 pages × 3 ad slots × 12.5k monthly users × 2.5 pages per user = 12.5M ad impressions
# At $15 RPM (realistic for health/niche): $187,500 annually
# Add mobile optimization: +30% -> $244K annually
```

#### Affiliate Revenue Estimate
```
# Amazon Baby Registry (4%): $10 per purchase → 500 purchases = $20K
# BetterHelp (affiliate ~20%): $50k MRR ($600K annually)
# Notion (affiliate 8%): $30/month × 5K users = $1.8K/month
# Total affiliate potential: $50K–100K+ monthly
```

### 11. Technical Integration

#### Cloudflare Pages Setup
- **Env var:** GA_MEASUREMENT_ID (your GA4 Measurement ID)
- **Custom code:** ga4-integration.js in static assets

#### Local Development
```bash
# Use ngrok for local testing
ngrok http 3000

# Update URLs in local HTML to:
<!-- Test GA4 with local ngrok -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 12. Next Steps

1. Set up Google Analytics 4 property
2. Implement GA4 integration script on all pages
3. Set up Data Studio dashboard
4. Configure GA4 + AdSense integration
5. Schedule weekly review cycles

### 13. Key Metrics Dashboard (Google Data Studio)

| Metric | Target | Source |
|--------|--------|--------|
| Pages per Session | >2.5 | GA4 |
| Avg. Session Duration | >180 seconds | GA4 |
| Revenue per Ad Slot | $15+ RPM | Estimated |
| Affiliate Conversion | >2% | GA4 |
| Bounce Rate | <50% | GA4 |

**Note:** Manual revenue tracking still needed for exact AdSense data - GA4 estimates are less precise.
