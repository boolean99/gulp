// 전달받은 배열에서 특정 문자열이 있다면 해당 값을 반환한다

export function findSpecificStringInArry(arry, stringTofind = 'js-') {
  for(let i = 0; i < arry.length; i++) {
    if(arry[i].indexOf(stringTofind) < 0) {
      continue;
    }else {
      return arry[i];
    }
  }
  
  return null;
}