import {findSpecificStringInArry} from './find-specific-string-in-arry';

export function parents(thisTarget, parentClassName) {
  let _thisTarget = thisTarget,
      catchTarget = findSpecificStringInArry(_thisTarget.className.split(' '), parentClassName);
  
  while(catchTarget === null) {
    _thisTarget = _thisTarget.parentElement;
    catchTarget = findSpecificStringInArry(_thisTarget.className.split(' '), parentClassName);
  }
  
  return _thisTarget;
}