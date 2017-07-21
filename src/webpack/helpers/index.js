// 형제노드 위치상의 순서를 반환하는 함수

export function index(target = null) {
  let explorationCount = 0,
      _prevElement = target.previousElementSibling,
      firstTargetTagName = target.tagName;
  
  while(_prevElement !== null) {
    if(_prevElement.tagName !== firstTargetTagName) break;
    explorationCount++;
    _prevElement = _prevElement.previousElementSibling;
  }
  
  return explorationCount;
}
