(function(){
  var legacyButton = document.getElementById('menu-icon');
  var legacyNav = document.querySelector('.nav-links');
  if (legacyButton && legacyNav) {
    legacyButton.addEventListener('click', function(){
      legacyNav.classList.toggle('active');
    });
  }

  var btn = document.getElementById('burgerBtn');
  var nav = document.getElementById('mobileNav');
  if(!btn || !nav) return;
  var mobileLayout = window.matchMedia('(max-width: 860px)');
  function setOpen(open, restoreFocus) {
    nav.hidden = !open;
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Luk menu' : '\u00c5bn menu');
    if (restoreFocus) btn.focus();
  }
  btn.hidden = false;
  document.documentElement.classList.add('menu-ready');
  btn.addEventListener('click', function(){
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      setOpen(false, true);
    });
  });
  document.addEventListener('keydown', function(event){
    if (event.key === 'Escape' && !nav.hidden) setOpen(false, true);
  });
  document.addEventListener('click', function(event){
    if (!nav.hidden && !event.target.closest('header')) setOpen(false);
  });
  mobileLayout.addEventListener('change', function(){
    if (!mobileLayout.matches) {
      var restoreFocus = nav.contains(document.activeElement) || document.activeElement === btn;
      setOpen(false);
      if (restoreFocus) document.querySelector('.navlinks a').focus();
    }
  });
})();
