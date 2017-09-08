import clipboard  from 'clipboard';
// clipboard.js 모듈 커스텀 함수

export function clipboardFunc(selector) {
  let clipboardVar = new clipboard(`.${selector}`);
  
  clipboardVar.on('success', (e) => {
    alert(`"${document.querySelector(`.${selector}`).getAttribute('data-clipboard-text')}" has been copied in your clipboard!`);
    e.clearSelection();
  });
  
  clipboardVar.on('error', function(e) {
    alert(`Clipboard function's failed..`);
  });
  
  setTimeout(() => {
    clipboardVar.destroy();
  }, 3000);
};