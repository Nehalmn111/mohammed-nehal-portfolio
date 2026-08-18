(function(){
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sections = document.querySelectorAll('section');
  if(prefersReduced || !('IntersectionObserver' in window)){
    sections.forEach(function(s){ s.classList.add('in-view'); });
  } else {
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(function(s){ observer.observe(s); });
  }
  // Copy-to-clipboard for email addresses (fallback for when mailto: doesn't
  // open a mail client, e.g. no default mail app configured on the device).
  var toast = document.getElementById('copy-toast');
  var toastTimer;
  function showToast(message){
    if(!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){
      toast.classList.remove('show');
    }, 2000);
  }
  document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      var email = btn.getAttribute('data-email');
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(email).then(function(){
          showToast('Email copied: ' + email);
        }).catch(function(){
          showToast(email);
        });
      } else {
        showToast(email);
      }
    });
  });

  // Expand/collapse the "What made me build this?" story panel on project cards.
  document.querySelectorAll('.story-toggle').forEach(function(btn){
    var panelId = btn.getAttribute('aria-controls');
    var panel = document.getElementById(panelId);
    if(!panel) return;
    btn.addEventListener('click', function(){
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
      var label = btn.querySelector('span');
      if(label){
        label.textContent = isOpen ? 'What made me build this?' : 'Hide the story';
      }
      if(!isOpen){
        panel.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'nearest' });
      }
    });
  });
})();
