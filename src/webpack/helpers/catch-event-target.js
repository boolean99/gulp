import {findSpecificStringInArry} from './find-specific-string-in-arry';
// 이벤트 버블링 캐치 함수

export function eventTargetCatch(target) {
  let _target = target,
      _targetClassNameArray = findSpecificStringInArry((_target.className.split(' ')), 'js-');
  
  while(_targetClassNameArray === null) {
    _target = _target.parentElement;
    
    if(_target === null) break;
    
    _targetClassNameArray = findSpecificStringInArry((_target.className.split(' ')), 'js-');
  }
  
  let returnObj = {
    elm : _target,
    selector : _targetClassNameArray
  };
  
  return returnObj;
}