(function() {
  let mirrorIcon = document.createElement('ASIDE');
  
  mirrorIcon.id = 'mirror';
  mirrorIcon.className = 'js-mirror-hide';
  
  document.body.appendChild(mirrorIcon);
  mirrorIcon.addEventListener('click', toggleMirror);

  function toggleMirror() {
    if(mirrorIcon.className === "js-mirror-show") {
      this.className = "js-mirror-hide";
      document.documentElement.dir = 'ltr';
    }else {
      this.className = "js-mirror-show";
      document.documentElement.dir = 'rtl';
    }
  }
})();