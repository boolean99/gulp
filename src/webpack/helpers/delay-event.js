// 이벤트 지연 함수

export function delayEvent(delay, func) {
  clearTimeout(func.tId);
  
  func.tId = setTimeout(() => {
    func();
  }, delay);
}