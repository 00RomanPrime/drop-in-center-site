// Shows whether the Drop-In Center is currently open, based on
// Wednesdays and Saturdays, 9am–1pm, America/New_York time.
(function () {
  var pill = document.querySelector('[data-status-pill]');
  if (!pill) return;

  var now = new Date();
  var parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    hour: 'numeric',
    hour12: false
  }).formatToParts(now);

  var weekday, hour;
  parts.forEach(function (p) {
    if (p.type === 'weekday') weekday = p.value;
    if (p.type === 'hour') hour = parseInt(p.value, 10);
  });

  var isOpenDay = weekday === 'Wed' || weekday === 'Sat';
  var isOpenHour = hour >= 9 && hour < 13;
  var isOpen = isOpenDay && isOpenHour;

  pill.textContent = isOpen ? 'Open now · 9am–1pm' : 'Open Wed & Sat · 9am–1pm';
  if (isOpen) pill.classList.add('is-open');
  pill.innerHTML = '<span class="dot" aria-hidden="true"></span>' + pill.textContent;
})();
