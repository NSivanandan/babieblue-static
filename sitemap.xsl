<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap - Babie Blue</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
          body { background: #f8fafc; color: #1e293b; padding: 32px 16px; line-height: 1.5; }
          .container { max-width: 1100px; margin: 0 auto; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.08); overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; padding: 36px 32px; }
          .header h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 8px; }
          .header p { font-size: 15px; color: #e0f2fe; max-width: 700px; }
          .header-nav { margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap; }
          .header-nav a { display: inline-flex; align-items: center; background: rgba(255, 255, 255, 0.18); color: #ffffff; text-decoration: none; padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 600; transition: background 0.2s; backdrop-filter: blur(4px); }
          .header-nav a:hover { background: rgba(255, 255, 255, 0.3); }
          .stats-bar { padding: 18px 32px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
          .stat-badge { font-size: 14px; color: #475569; font-weight: 600; }
          .stat-badge span { color: #0284c7; font-weight: 800; font-size: 16px; }
          .search-box { padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 14px; width: 280px; outline: none; }
          .search-box:focus { border-color: #0284c7; box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15); }
          .table-wrapper { overflow-x: auto; padding: 8px 0; }
          table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
          th { background: #f8fafc; padding: 12px 24px; color: #64748b; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; }
          td { padding: 14px 24px; border-bottom: 1px solid #f1f5f9; color: #334155; }
          tr:hover td { background: #f8fafc; }
          td.url a { color: #0284c7; text-decoration: none; font-weight: 600; word-break: break-all; }
          td.url a:hover { text-decoration: underline; color: #0369a1; }
          .priority-pill { display: inline-block; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 11px; background: #e0f2fe; color: #0369a1; }
          .footer { padding: 24px 32px; text-align: center; font-size: 13px; color: #64748b; background: #ffffff; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Babie Blue XML Sitemap</h1>
            <p>Physician-reviewed maternal wellness, pediatric sleep architecture, infant health charts, and clinical calculators for modern parents.</p>
            <div class="header-nav">
              <a href="/">← Return to Homepage</a>
              <a href="/site-map/">Browse Visual HTML Directory</a>
              <a href="/llms.txt">AI &amp; LLM Context (llms.txt)</a>
            </div>
          </div>
          <div class="stats-bar">
            <div class="stat-badge">Total Indexed URLs: <span id="urlCount"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span></div>
            <input type="text" id="filterInput" class="search-box" placeholder="Filter URLs by keyword..." onkeyup="filterSitemap()"/>
          </div>
          <div class="table-wrapper">
            <table id="sitemapTable">
              <thead>
                <tr>
                  <th style="width: 55%;">URL</th>
                  <th style="width: 12%;">Priority</th>
                  <th style="width: 15%;">Change Frequency</th>
                  <th style="width: 18%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="url">
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <span class="priority-pill"><xsl:value-of select="sitemap:priority"/></span>
                    </td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <div class="footer">
            Generated for Google Search Console, Bing Webmaster, and AI Retrieval Bots • © 2026 Babie Blue. All rights reserved.
          </div>
        </div>
        <script>
          function filterSitemap() {
            var input = document.getElementById("filterInput");
            var filter = input.value.toLowerCase();
            var table = document.getElementById("sitemapTable");
            var tr = table.getElementsByTagName("tr");
            var visible = 0;
            for (var i = 1; i &lt; tr.length; i++) {
              var td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                var txt = td.textContent || td.innerText;
                if (txt.toLowerCase().indexOf(filter) &gt; -1) {
                  tr[i].style.display = "";
                  visible++;
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
            document.getElementById("urlCount").textContent = visible;
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
