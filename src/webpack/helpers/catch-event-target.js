import {destroyEmptyItemInArray} from './destroy-empty-item-in-arry';
import {findSpecificStringInArry} from './find-specific-string-in-arry';
// 이벤트 버블링 캐치 함수

export function eventTargetCatch(target) {
  let _target = target,
      _targetClassNameArray = findSpecificStringInArry(destroyEmptyItemInArray(_target.className.split(' ')), 'js-'),
      returnObj = {};
  
  while(_targetClassNameArray === null) {
    _target = _target.parentElement;
    
    if(_target === null) break;
    
    _targetClassNameArray = findSpecificStringInArry(destroyEmptyItemInArray(_target.className.split(' ')), 'js-');
  }
  
  returnObj.elm = _target;
  returnObj.selector = _targetClassNameArray;
  
  return returnObj;
}