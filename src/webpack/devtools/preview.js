(function() {
  let previewIcon = document.createElement('ASIDE');
  previewIcon.id = 'preview';
  previewIcon.className = 'js-preview-hide';

  document.body.appendChild(previewIcon);
  document.body.appendChild(document.createElement('img'));
  previewIcon.addEventListener('click', preview);

  function preview() {
    if(previewIcon.className === "js-preview-show") {
      this.className = "js-preview-hide";
    }else {
      this.className = "js-preview-show";
    }
  }
})();