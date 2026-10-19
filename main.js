// Main site scripts: header loader, typewriters, code animation, contact form, scroll reveal
(function () {

  // Load shared header (needs Live Server / hosting). Inline nav in index.html is the fallback.
  var headerSlot = document.getElementById('site-header');
  if (headerSlot && window.location.protocol !== 'file:') {
    fetch('headers/header.html')
      .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
      .then(function (html) { headerSlot.innerHTML = html; })
      .catch(function () { /* keep inline fallback */ });
  }

  // Small typewriter tag next to the photo (computer-themed accent)
  const heroPhrases = ["Full-Stack Developer", "UI/UX Designer", "Hamna Asif", "AI Specialist"];
  const heroTypingEl = document.getElementById('hero-typing');
  let hpIndex = 0, hpChar = 0, hpDeleting = false;

  function heroTypeLoop(){
    const phrase = heroPhrases[hpIndex];
    if(!hpDeleting){
      hpChar++;
      heroTypingEl.textContent = phrase.slice(0, hpChar);
      if(hpChar === phrase.length){
        hpDeleting = true;
        setTimeout(heroTypeLoop, 1400);
        return;
      }
    } else {
      hpChar--;
      heroTypingEl.textContent = phrase.slice(0, hpChar);
      if(hpChar === 0){
        hpDeleting = false;
        hpIndex = (hpIndex + 1) % heroPhrases.length;
      }
    }
    setTimeout(heroTypeLoop, hpDeleting ? 40 : 80);
  }
  heroTypeLoop();

  // Typewriter animation for the main subtitle
  const roles = ["Full-Stack Developer", "UI/UX Designer", "AI Specialist"];
  let roleIndex = 0, charIndex = 0, deleting = false;
  const twEl = document.getElementById('typewriter');

  function typeRoleLoop(){
    const current = roles[roleIndex];
    if(!deleting){
      twEl.textContent = current.slice(0, charIndex+1);
      charIndex++;
      if(charIndex === current.length){ deleting = true; setTimeout(typeRoleLoop, 1400); return; }
    } else {
      twEl.textContent = current.slice(0, charIndex-1);
      charIndex--;
      if(charIndex === 0){ deleting = false; roleIndex = (roleIndex+1) % roles.length; }
    }
    setTimeout(typeRoleLoop, deleting ? 40 : 80);
  }
  typeRoleLoop();

  // Typing code animation for the "Code in Progress" laptop section
  const codeLines = [
    "function buildFuture() {",
    "  const skills = ['HTML','CSS','JS','Python'];",
    "  return skills.map(s => create(s));",
    "}",
    "",
    "buildFuture();",
    "// coding by Hamna Asif 👩🏻‍💻"
  ];
  const typingEl = document.getElementById('typing-code');
  let lineIndex = 0, codeCharIndex = 0;
  let displayed = "";

  function typeLoop(){
    if(lineIndex < codeLines.length){
      const line = codeLines[lineIndex];
      if(codeCharIndex < line.length){
        displayed += line[codeCharIndex];
        codeCharIndex++;
      } else {
        displayed += "\n";
        lineIndex++;
        codeCharIndex = 0;
      }
      typingEl.innerHTML = displayed;
      setTimeout(typeLoop, 32);
    } else {
      setTimeout(() => {
        displayed = ""; lineIndex = 0; codeCharIndex = 0;
        typeLoop();
      }, 1800);
    }
  }
  typeLoop();

  // WhatsApp: on desktop open WhatsApp Web chat directly (skips the wa.me landing page).
  // On phones the normal wa.me link opens the WhatsApp app directly.
  var waLink = document.getElementById('waLink');
  if (waLink && !/Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent)) {
    var waText = 'Hi Hamna, I saw your portfolio and would like to connect.';
    waLink.href = 'https://web.whatsapp.com/send?phone=923036801457&text=' + encodeURIComponent(waText);
  }

  // Generic Formspree handler (contact form + CV request form)
  // If the form ID is not set yet, it falls back to opening the email app.
  function setupForm(form, opts) {
    if (!form) return;
    var btn = form.querySelector('button[type="submit"]');
    var label = btn.querySelector('.btn-label');
    var statusEl = form.querySelector('.form-status');
    var original = label.textContent;

    function showStatus(type, msg) {
      statusEl.className = 'form-status show ' + type;
      statusEl.textContent = msg;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action') || '';

      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        window.location.href = opts.mailto(form.elements);
        return;
      }

      btn.classList.add('is-loading');
      label.textContent = 'Sending...';
      statusEl.className = 'form-status';

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          showStatus('success', opts.success);
          form.reset();
          if (opts.onSuccess) opts.onSuccess();
        } else {
          showStatus('error', 'Oops! Something went wrong. Please try again or email me directly.');
        }
      }).catch(function () {
        showStatus('error', 'Network error. Please try again or email me directly.');
      }).finally(function () {
        btn.classList.remove('is-loading');
        label.textContent = original;
      });
    });
  }

  // CV request modal
  var cvModal = document.getElementById('cvModal');
  var cvOpenBtn = document.getElementById('requestCvBtn');

  function openCvModal() {
    cvModal.classList.add('open');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var st = cvModal.querySelector('.form-status');
    if (st) st.className = 'form-status';
    var first = cvModal.querySelector('input');
    if (first) setTimeout(function () { first.focus(); }, 50);
  }
  function closeCvModal() {
    cvModal.classList.remove('open');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (cvOpenBtn) cvOpenBtn.focus();
  }

  if (cvModal && cvOpenBtn) {
    cvOpenBtn.addEventListener('click', openCvModal);
    cvModal.addEventListener('click', function (e) {
      if (e.target === cvModal || e.target.closest('[data-close]')) closeCvModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cvModal.classList.contains('open')) closeCvModal();
    });
  }

  setupForm(document.getElementById('contactForm'), {
    success: 'Thanks! Your message has been sent. I will reply soon.',
    mailto: function (el) {
      var subject = encodeURIComponent('Portfolio message from ' + el['name'].value);
      var body = encodeURIComponent('Name: ' + el['name'].value + '\nEmail: ' + el['email'].value +
        '\nTopic: ' + el['topic'].value + '\n\nMessage:\n' + el['message'].value);
      return 'mailto:hamnaasif623@gmail.com?subject=' + subject + '&body=' + body;
    }
  });

  setupForm(document.getElementById('cvForm'), {
    success: "Thanks! I'll email you my CV soon.",
    onSuccess: function () { setTimeout(closeCvModal, 2500); },
    mailto: function (el) {
      var subject = encodeURIComponent('CV request from ' + el['name'].value);
      var body = encodeURIComponent('Name: ' + el['name'].value + '\nEmail: ' + el['email'].value +
        '\nPurpose: ' + el['purpose'].value + '\n\nPlease send me your CV.');
      return 'mailto:hamnaasif623@gmail.com?subject=' + subject + '&body=' + body;
    }
  });

  // Scroll-reveal animation for every section from top to footer
  var revealTargets = document.querySelectorAll('section:not(.hero), footer');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(function (el) { io.observe(el); });

})();