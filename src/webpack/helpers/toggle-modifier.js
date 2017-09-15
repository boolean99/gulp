export default function toggleModifier(target, ...arry) {
  const doc = document,
        modifierSeparator = /[a-z]_[a-z]/g;
  let extractModifier = null;
  
  if(arry.length > 1) {
    // modifier가 다차원배열로 전달됐을땐 여러 modifier를 토글할 의도이므로
    // 모든 modifier를 찾아 새 배열로 반환한다
    extractModifier = target.className.split(' ').filter(elm => elm.includes('--'));
    
    for(let i = 0, len = arry.length; i < len; i++) {
      if(Array.isArray(arry[i])) {
        // arry[i] 요소의 데이터 타입이 배열이다
        // === name-value 형식의 modifier
        let targetModifier = '',
            incompatibleModifier;
        
        for(var j = 0, jlen = arry[i].length; j < jlen; j++) {
          if(target.className.toString().includes(arry[i][j])) {
            targetModifier = arry[i][j];
            break;
          }else {
            continue;
          }
        }
        
        if(j) incompatibleModifier = arry[i][j - 1];
        else incompatibleModifier = arry[i][j + 1];
        
        target.className = target.className.toString().replace(targetModifier, incompatibleModifier);
      }else {
        // arry[i] 요소의 데이터 타입이 문자열이다
        // === boolean 형식의 modifier
        if(target.className.includes(arry[i])) {
          // boolean 형식의 modifier가 존재한다 === true -> false
          target.className = target.className.toString().replace(` ${arry[i]}`, '');
        }else {
          // boolean 형식의 modifier가 없다 === false -> true
          target.className = `${target.className.toString()} ${arry[i]}`;
        }
      }
    }
  }else {
    // modifier가 하나만 전달됐을때.
    if(Array.isArray(arry[0])) {
        // arry의 데이터 타입이 배열이다
        // === name-value 형식의 modifier
        let targetModifier = '',
            incompatibleModifier;
        
        for(var h = 0, hlen = arry[0].length; h < hlen; h++) {
          if(target.className.toString().includes(arry[0][h])) {
            targetModifier = arry[0][h];
            break;
          }else {
            continue;
          }
        }
        
        if(h) incompatibleModifier = arry[0][h - 1];
        else incompatibleModifier = arry[0][h + 1];
        console.log(targetModifier);
        console.log(incompatibleModifier);
        target.className = target.className.toString().replace(targetModifier, incompatibleModifier);
    }else {
        // arry의 데이터 타입이 문자열이다
      extractModifier = target.className.split(' ').find(elm => elm.includes(arry[0]));

      if(extractModifier !== undefined) {
        // modifier가 있다면 제거한다
        target.className = target.className.toString().replace(` ${extractModifier}`, '');
      }else {
        // modifier가 없다면 추가한다
        target.className = `${target.className.toString()} ${arry[0]}`;
      }
    }
  }
}

/*
 * 사용법
 
 첫번째 인자로 이벤트 타겟에 대한 DOM 엘리먼트를 전달하며
 boolean 형식의 modifier는 일반 문자열 형식으로 전달,
 name-value 형식의 modifier는 토글할 두개의 modifier를 배열로서 전달한다.

toggleModifier(
  eventTarget.target,
  'container__element--actived',
  ['container__element--theme-white', 'container__element--theme-black'],
  ['container__element--name-value', 'container__element--name-name']
)

 *
 */