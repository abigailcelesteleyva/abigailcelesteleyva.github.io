// Restores the hair accessory chosen on the index page.
// Uses sessionStorage so it persists while the tab is open but resets on close.
(function() {
  var name = sessionStorage.getItem('avatar-accessory');
  if (!name || name === 'flower') return;

  var hairGroup = document.getElementById('hair-accessory');
  if (!hairGroup) return;

  var acc = {
    bow: [
      '<ellipse cx="-5.5" cy="-3" rx="6" ry="3.2" fill="#d94040" transform="rotate(-12 -5.5 -3)"/>',
      '<ellipse cx="5.5" cy="-3" rx="6" ry="3.2" fill="#cc3636" transform="rotate(12 5.5 -3)"/>',
      '<path d="M-1.5,0.5 Q-5,6 -7,8" stroke="#d94040" stroke-width="2" fill="none" stroke-linecap="round"/>',
      '<path d="M1.5,0.5 Q5,6 7,8" stroke="#cc3636" stroke-width="2" fill="none" stroke-linecap="round"/>',
      '<circle cx="0" cy="-2" r="3" fill="#b82020"/>',
      '<circle cx="0" cy="-2" r="1.3" fill="#d94040"/>'
    ].join(''),
    star: [
      '<polygon points="0,-8.5 2,-3 7.5,-3 3.2,0.8 5,6 0,3.2 -5,6 -3.2,0.8 -7.5,-3 -2,-3" fill="#f0cc30"/>',
      '<polygon points="0,-5.5 1.2,-2 4.8,-2 2,0.4 3,3.8 0,2 -3,3.8 -2,0.4 -4.8,-2 -1.2,-2" fill="#f8e468" opacity="0.5"/>'
    ].join(''),
    pencil: [
      '<g transform="rotate(20)">',
      '<rect x="-2.5" y="-10" width="5" height="16" rx="1.5" fill="#f0cc40"/>',
      '<rect x="-2.5" y="-10" width="5" height="2" rx="1" fill="#b0b0b8"/>',
      '<rect x="-2.5" y="-8" width="5" height="2" fill="#e87070"/>',
      '<line x1="-1.5" y1="-3" x2="1.5" y2="-3" stroke="#c8a820" stroke-width="0.6" opacity="0.5"/>',
      '<line x1="-1.5" y1="0" x2="1.5" y2="0" stroke="#c8a820" stroke-width="0.6" opacity="0.5"/>',
      '<line x1="-1.5" y1="3" x2="1.5" y2="3" stroke="#c8a820" stroke-width="0.6" opacity="0.5"/>',
      '<polygon points="-2.5,6 2.5,6 0,10.5" fill="#e8d098"/>',
      '<circle cx="0" cy="10.5" r="1.2" fill="#3b2314"/>',
      '</g>'
    ].join('')
  };

  if (name === 'custom') {
    var dataUrl = sessionStorage.getItem('avatar-accessory-custom');
    if (dataUrl) {
      hairGroup.innerHTML = '<image href="' + dataUrl + '" x="-14" y="-16" width="28" height="28"/>';
    }
    return;
  }

  if (acc[name]) hairGroup.innerHTML = acc[name];
})();
