// ═══════════════════════════════════════════════
// SHARED COMPONENTS — injected into every page
// ═══════════════════════════════════════════════
(function () {

  var HEADER = `
  <header class="nav-header" id="nav-header">
    <nav class="nav-container">
      <a href="index.html" class="nav-logo">
        <img src="Images/Mainlogo.png" alt="Conexion Insurance Agency" class="nav-logo-img">
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li class="nav-dropdown">
          <button class="nav-link nav-dropdown__toggle" aria-expanded="false">Coverage <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M8 10.5L2.5 5h11L8 10.5z"/></svg></button>
          <ul class="nav-dropdown__menu nav-dropdown__menu--wide">
            <li class="nav-dropdown__label">Auto</li>
            <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener">Auto Insurance Quote</a></li>
            <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener">RV Insurance Quote</a></li>
            <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener">Roadside Assistance Quote</a></li>
            <li class="nav-dropdown__label nav-dropdown__label--section">Property</li>
            <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener">Home Insurance Quote</a></li>
            <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener">Landlords Insurance Quote</a></li>
            <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener">Renters Insurance Quote</a></li>
            <li class="nav-dropdown__label nav-dropdown__label--section">Business</li>
            <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener">Business Insurance Quote</a></li>
            <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener">Business Owners Package (BOP)</a></li>
            <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener">Insurance Bond Quote</a></li>
            <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener">Workers Compensation Quote</a></li>
            <li class="nav-dropdown__label nav-dropdown__label--section">Life &amp; Health</li>
            <li><a href="https://app.back9ins.com/apply/ElisUmana" target="_blank" rel="noopener">Life Insurance Quote</a></li>
            <li><a href="https://app.back9ins.com/apply/ElisUmana" target="_blank" rel="noopener">Term Life Insurance Quote</a></li>
            <li><a href="https://app.back9ins.com/apply/ElisUmana" target="_blank" rel="noopener">Umbrella Insurance Quote</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <button class="nav-link nav-dropdown__toggle" aria-expanded="false">About <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M8 10.5L2.5 5h11L8 10.5z"/></svg></button>
          <ul class="nav-dropdown__menu">
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="our-videos.html">Our Videos</a></li>
            <li><a href="insurance-carriers.html">Insurance Carriers</a></li>
            <li><a href="client-testimonials.html">Client Testimonials</a></li>
            <li><a href="refer-a-friend.html">Refer a Friend</a></li>
            <li><a href="agency-photo-gallery.html">Photo Gallery</a></li>
            <li><a href="accessibility-statement.html">Accessibility Statement</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
          </ul>
        </li>
        <li><a href="index.html#contact" class="nav-link">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="tel:9134909050" class="nav-phone">(913) 490-9050</a>
        <a href="https://conexioninsurance.insuredmine.com/user/login" target="_blank" rel="noopener" class="btn-ghost btn-sm">Client Portal</a>
        <a href="index.html#coverage" class="btn-primary btn-sm">Get a Quote</a>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation"></button>
    </nav>
  </header>

  <div class="mobile-nav" id="mobile-nav">
    <ul>
      <li><a href="index.html" class="mobile-nav-link">Home</a></li>
      <li class="mobile-nav-section-label">Auto</li>
      <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Auto Insurance Quote</a></li>
      <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">RV Insurance Quote</a></li>
      <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Roadside Assistance Quote</a></li>
      <li class="mobile-nav-section-label">Property</li>
      <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Home Insurance Quote</a></li>
      <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Landlords Insurance Quote</a></li>
      <li><a href="https://quote.quotamation.com/direct-quote/conexioninsurance" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Renters Insurance Quote</a></li>
      <li class="mobile-nav-section-label">Business</li>
      <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Business Insurance Quote</a></li>
      <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Business Owners Package (BOP)</a></li>
      <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Insurance Bond Quote</a></li>
      <li><a href="https://form.1fort.com/argsshal" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Workers Compensation Quote</a></li>
      <li class="mobile-nav-section-label">Life &amp; Health</li>
      <li><a href="https://app.back9ins.com/apply/ElisUmana" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Life Insurance Quote</a></li>
      <li><a href="https://app.back9ins.com/apply/ElisUmana" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Term Life Insurance Quote</a></li>
      <li><a href="https://app.back9ins.com/apply/ElisUmana" target="_blank" rel="noopener" class="mobile-nav-link mobile-nav-link--sub">Umbrella Insurance Quote</a></li>
      <li><a href="index.html#about" class="mobile-nav-link">About Us</a></li>
      <li><a href="our-videos.html" class="mobile-nav-link">Our Videos</a></li>
      <li><a href="insurance-carriers.html" class="mobile-nav-link">Insurance Carriers</a></li>
      <li><a href="client-testimonials.html" class="mobile-nav-link">Client Testimonials</a></li>
      <li><a href="refer-a-friend.html" class="mobile-nav-link">Refer a Friend</a></li>
      <li><a href="agency-photo-gallery.html" class="mobile-nav-link">Photo Gallery</a></li>
      <li><a href="index.html#contact" class="mobile-nav-link">Contact</a></li>
    </ul>
    <a href="tel:9134909050" class="mobile-phone">(913) 490-9050</a>
    <a href="https://conexioninsurance.insuredmine.com/user/login" target="_blank" rel="noopener" class="btn-ghost btn-full mobile-nav-link">Client Portal</a>
    <a href="index.html#coverage" class="btn-primary btn-full mobile-nav-link">Get a Quote</a>
  </div>
  <div class="mobile-overlay" id="mobile-overlay"></div>`;

  var FOOTER = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Homepage</a></li>
            <li><a href="index.html#coverage">Insurance Quotes</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="index.html#contact">Contact Us</a></li>
            <li><a href="https://conexioninsurance.insuredmine.com/user/login" target="_blank" rel="noopener">Client Portal</a></li>
            <li><a href="https://insurancesplash.loginportal.site/portal/login.php#login" target="_blank" rel="noopener">Agent Login</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect With Us</h4>
          <div class="footer-social">
            <a href="https://www.facebook.com/ConexionInsurance" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="https://www.instagram.com/conexionins/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://www.linkedin.com/in/elis-umana-a43832a8/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="https://www.youtube.com/@EliseUmana" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <address class="footer-address">
            <strong>Conexion Insurance Agency</strong>
            <span>6000 Leavenworth Rd Ste N</span>
            <span>Kansas City, KS 66104</span>
            <a href="tel:9134909050">(913) 490-9050</a>
            <a href="mailto:contact@conexionins.com">Click Here to Email Us</a>
          </address>
        </div>
        <div class="footer-col">
          <h4>Location</h4>
          <div class="footer-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.3262954709558!2d-94.72101912405131!3d39.144559571672346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8587d4da872c559d%3A0x333f8332c17f7acf!2sConexion%20Insurance%20Agency!5e0!3m2!1sen!2sus!4v1776371894640!5m2!1sen!2sus" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Conexion Insurance Agency location"></iframe>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <a href="https://conexioninsurance.insuredmine.com/download.html" target="_blank" rel="noopener" class="btn-download">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          Download Our App
        </a>
        <p>© 2025 Conexion Insurance Agency. All rights reserved. Licensed Insurance Agency — Kansas City, KS.</p>
      </div>
    </div>
  </footer>`;

  var h = document.getElementById('site-header');
  var f = document.getElementById('site-footer');
  if (h) h.outerHTML = HEADER;
  if (f) f.outerHTML = FOOTER;

})();
