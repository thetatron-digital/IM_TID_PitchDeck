/* IRONMOUSE: Til I Die - Pitch Deck Scripts */

// Guide line scroll tracking
var guideLine = document.getElementById('gl');
window.addEventListener('scroll', function () {
  var scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  guideLine.style.setProperty('--gy', (scrollPercent * 100) + '%');
});

// Scroll-reveal via IntersectionObserver
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('v');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.rv').forEach(function (el) {
  observer.observe(el);
});
