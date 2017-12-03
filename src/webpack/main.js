// ES2015 사용을 위한 babel 모듈 호출
import 'babel-polyfill';

// 전역 변수 객체 호출
import globalConfig from './helpers/global-config';

// npm 모듈 호출
import mobileDetect from 'mobile-detect';
//import scroll from 'scroll';
//import ease from 'ease-component';
import detectScrollPageObj from 'scroll-doc';

// devTools 호출
import devTools from './devtools/dev-tools';
import mirror from './devtools/mirror';
import preview from './devtools/preview';

// 헬퍼 모듈 호출
import catchEventTarget from './helpers/catch-event-target';
//import clipboardFunc from './helpers/clipboard-function';
//import cloneObj from './helpers/clone-obj';
//import colorAdjust from './helpers/color-adjust';
//import delayEvent from './helpers/delay-event';
import index from './helpers/index';
//import parents from './helpers/parents';
//import readingZero from './helpers/reading-zero';
//import toggleBoolean from './helpers/toggle-boolean';
import modifier from './helpers/modifier';
//import splitSearch from '../../app_helpers/split-search';

// 프로젝트 모듈 호출
//import {socketFunc} from './project/socket';
//import * as kbs from './project/kbs';

// 전역변수 선언
let socket;

document.addEventListener('DOMContentLoaded', () => {
  // 돔 로드완료 이벤트
  const WIN = window,
        DOC = document,
        MD = new mobileDetect(WIN.navigator.userAgent),
        detectScrollPage = detectScrollPageObj();
  
  if(MD.mobile()) console.log(`mobile DOM's been loaded`);
  else console.log(`DOM's been loaded`);
  
  DOC.addEventListener('click', (e) => {
    // 클릭 이벤트 버블링
    const eventTarget = catchEventTarget(e.target || e.srcElement);
    
    console.log(eventTarget.target, eventTarget.findJsString);
    
    switch(eventTarget.findJsString) {
      case 'js-copy-link' :
        console.log(index(eventTarget.target));
        scroll.top(
          detectScrollPage,
          1000,
          {
            duration: 1000,
            ease: ease.inQuint
          },
          function (error, scrollLeft) {
          }
        );
        modifier(
          'toggle',
          eventTarget.target,
          'paging__elm--actived'
        );
        break;
      default :
        return false;
    }
  }, false);
  
  WIN.addEventListener('load', () => {
    // 윈도우 로드완료 이벤트
  if(MD.mobile()) console.log(`mobile WINDOW's been loaded`);
  else console.log(`WINDOW's been loaded`);
//    socket = io();
//    socketFunc(socket);
  });
  
  WIN.addEventListener('resize', () => {
    // 윈도우 리사이즈 이벤트
//    delayEvent(/*second*/, /*func*/);
  });
  
  WIN.addEventListener('keypress', (e) => {
    const pressedKeyCode = e.which;
    
    switch(pressedKeyCode) {
      case 0:
        // some Function
        break;
      default :
        return false;
    }
  });
  
  DOC.addEventListener('wheel', (e) => {
    const eventTarget = catchEventTarget(e.target || e.srcElement);
    
    switch(eventTarget.findJsString) {
      case 'js-test':
        console.log(eventTarget.target);
        break;
      default :
        return false;
    }
  }, true);
  
  DOC.addEventListener('touchstart', (e) => {
    let touchObj = e.changedTouches[0];
  });
  
  DOC.addEventListener('touchmove', (e) => {
    let touchObj = e.changedTouches[0];
  });
  
  DOC.addEventListener('touchend', (e) => {
    let touchObj = e.changedTouches[0];
  });
});