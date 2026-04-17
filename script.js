// ═══════════════════════════════════════════════
// NAV — scroll shadow + mobile toggle
// ═══════════════════════════════════════════════
const navHeader   = document.getElementById('nav-header');
const navToggle   = document.getElementById('nav-toggle');
const mobileNav   = document.getElementById('mobile-nav');
const mobileOverlay = document.getElementById('mobile-overlay');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navHeader.classList.toggle('scrolled', scrollY > 10);
  if (scrollY < 80) {
    navHeader.classList.remove('nav-hidden');
  } else if (scrollY > lastScrollY) {
    navHeader.classList.add('nav-hidden');
  } else {
    navHeader.classList.remove('nav-hidden');
  }
  lastScrollY = scrollY;
}, { passive: true });

function closeMobileNav() {
  navToggle.classList.remove('open');
  mobileNav.classList.remove('open');
  mobileOverlay.classList.remove('open');
}

navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  mobileOverlay.classList.toggle('open', isOpen);
});

mobileOverlay.addEventListener('click', closeMobileNav);

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});


// ═══════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.quote-card, .stat-card, .about-feature, .contact-item, .preview-card'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});


// ═══════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════

// TODO: Replace this URL with your CRM's webhook/form endpoint.
// Examples:
//   GoHighLevel:  https://services.leadconnectorhq.com/hooks/...
//   HubSpot:      https://api.hsforms.com/submissions/v3/integration/submit/.../...
//   Zapier:       https://hooks.zapier.com/hooks/catch/...
const CRM_WEBHOOK_URL = 'YOUR_CRM_WEBHOOK_URL_HERE';

const form       = document.getElementById('contact-form');
const submitBtn  = document.getElementById('form-submit');
const btnText    = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');
const successMsg = document.getElementById('form-success');
const errorMsg   = document.getElementById('form-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Basic validation
  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = '#dc2626';
      valid = false;
      field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
    }
  });
  if (!valid) return;

  // Loading state
  submitBtn.disabled = true;
  btnText.hidden = true;
  btnLoading.hidden = false;
  successMsg.hidden = true;
  errorMsg.hidden = true;

  const payload = {
    firstName:     form.firstName.value.trim(),
    lastName:      form.lastName.value.trim(),
    email:         form.email.value.trim(),
    phone:         form.phone.value.trim(),
    insuranceType: form.insuranceType.value,
    message:       form.message.value.trim(),
    source:        'Website Contact Form',
    submittedAt:   new Date().toISOString(),
  };

  // If no webhook is configured yet, show a friendly fallback
  if (!CRM_WEBHOOK_URL || CRM_WEBHOOK_URL === 'YOUR_CRM_WEBHOOK_URL_HERE') {
    console.warn('CRM_WEBHOOK_URL not configured. Form data:', payload);
    setTimeout(() => {
      btnText.hidden = false;
      btnLoading.hidden = true;
      submitBtn.disabled = false;
      successMsg.hidden = false;
      form.reset();
    }, 800);
    return;
  }

  try {
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    successMsg.hidden = false;
    form.reset();
  } catch (err) {
    console.error('Form submission error:', err);
    errorMsg.hidden = false;
  } finally {
    btnText.hidden = false;
    btnLoading.hidden = true;
    submitBtn.disabled = false;
  }
});
