// npm 모듈 호출
import mobileDetect from 'mobile-detect';

// devTools 호출
import {devTools} from './devtools/dev-tools';
import {mirror} from './devtools/mirror';
import {preview} from './devtools/preview';

// 헬퍼 모듈 호출
import {eventTargetCatch} from './helpers/catch-event-target';
import {clipboardFunc} from './helpers/clipboard-function';
import {cloneObj} from './helpers/clone-obj';
import {colorAdjust} from './helpers/color-adjust';
import {delayEvent} from './helpers/delay-event';
import {destroyEmptyItemInArry} from './helpers/destroy-empty-item-in-arry';
import {findSpecificStringInArry} from './helpers/find-specific-string-in-arry';
import {globalConfig} from './helpers/global-config';
import {index} from './helpers/index';
import {makeSelectorToArray} from './helpers/make-selector-to-arry';
import {parents} from './helpers/parents';
import {readingZero} from './helpers/reading-zero';
import {scrollTop} from './helpers/smooth-scrolling';
import {toggleBoolean} from './helpers/toggle-boolean';
import {toggleModifier} from './helpers/toggle-modifier';
import {splitSearch} from '../../app_helpers/split-search';

// 프로젝트 모듈 호출
import {socketFunc} from './project/socket';
import * as kbs from './project/kbs';

// 전역변수 선언
var socket;

document.addEventListener('DOMContentLoaded', () => {
  // 돔 로드완료 이벤트
  let win = window,
      doc = document,
      md = new mobileDetect(win.navigator.userAgent);
  
  if(md.mobile()) console.log(`Mobile DOM's been loaded`);
  else console.log(`DOM's been loaded`);
  
  doc.addEventListener('click', (e) => {
    // 클릭 이벤트 이벤트 버블링
    let clickedTarget = e.target,
        evtTargetElm = eventTargetCatch(clickedTarget).elm,
        evtTargetSelector = eventTargetCatch(clickedTarget).selector;

    console.log(evtTargetElm, evtTargetSelector);
    
    switch(evtTargetSelector) {
      case 'js-copy-link' :
//        console.log(index(evtTargetElm));
        break;
      default :
        return false;
    }
  }, false);
  
  doc.addEventListener('click', (e) => {
    // 클릭 이벤트 이벤트 캡쳐링
    let clickedTarget = e.target,
        evtTargetElm = eventTargetCatch(clickedTarget).elm,
        evtTargetSelector = eventTargetCatch(clickedTarget).selector;

    switch(evtTargetSelector) {
      case 'js-copy-link' :
//        clipboardFunc(evtTargetSelector);
        break;
      default :
        return false;
    }
  }, true);
  
  win.addEventListener('load', () => {
    // 윈도우 로드완료 이벤트
  if(md.mobile()) console.log(`Mobile WINDOW's been loaded`);
  else console.log(`WINDOW's been loaded`);
//    socket = io();
//    socketFunc(socket);
  });
  
  win.addEventListener('resize', () => {
    // 윈도우 리사이즈 이벤트
//    delayEvent(/*second*/, /*func*/);
  });
  
  win.addEventListener('keypress', (e) => {
    let pressedKeyCode = e.which;
    
    switch(pressedKeyCode) {
      case 0:
        // some Function
        break;
      default :
        return false;
    }
  });
  
  doc.addEventListener('wheel', (e) => {
    let scrolledElement = e.target,
        evtTargetElm = eventTargetCatch(scrolledElement).elm,
        evtTargetSelector = eventTargetCatch(scrolledElement).selector;
    
    switch(evtTargetSelector) {
      case 'js-scroll2':
        console.log(evtTargetElm);
//        goToTop(e, scrolledElement);
        break;
      default :
        return false;
    }
  }, true);
  
  doc.addEventListener('touchstart', (e) => {
    let touchObj = e.changedTouches[0];
  });
  
  doc.addEventListener('touchmove', (e) => {
    let touchObj = e.changedTouches[0];
  });
  
  doc.addEventListener('touchend', (e) => {
    let touchObj = e.changedTouches[0];
  });
});