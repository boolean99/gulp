import clipboard  from 'clipboard';
// clipboard.js 모듈 커스텀 함수

export function clipboardFunc(selector) {
  let cb = new clipboard(`.${selector}`);
  
  alert(`"${document.querySelector(`.${selector}`).getAttribute('data-clipboard-text')}" has been copied in your clipboard!`);
};