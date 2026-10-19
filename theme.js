// Theme toggle (dark / light) - event delegation so it works
// even when the header is loaded later from headers/header.html
// Button shows the mode you will switch TO (like the reference design).
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('#themeToggle');
    if (!btn) return;
    var body = document.body;
    var isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.innerHTML = isDark
      ? '<span class="tt-icon">\uD83C\uDF19</span><span class="tt-text">Dark mode</span>'
      : '<span class="tt-icon">\u2600\uFE0F</span><span class="tt-text">Light mode</span>';
  });
})();