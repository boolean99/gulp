export function toggleModifier(arry) {
  let doc = document,
      modifierSeparator = /[a-z]_[a-z]/g;
  
  for(let i = 0; i < arry.length; i++) {
    let thisTarget = doc.querySelector(arry[i].t),
        thisClassList = thisTarget.classList,
        thisClassArry = [],
        hasModifierName = arry[i].m.slice(0, arry[i].m.indexOf('--')),
        modifier = arry[i].m.slice(arry[i].m.indexOf('--') + 2),
        modifierName = modifier.search(modifierSeparator) > -1 ? modifier.slice(0, modifier.search(modifierSeparator) + 1) : modifier,
        modifierValue = modifier.search(modifierSeparator) > -1 ? modifier.slice(modifier.search(modifierSeparator) + 2) : null,
        secondModifierValue = arry[i].m2 !== undefined ? arry[i].m2.slice(arry[i].m2.lastIndexOf('_') + 1) : null,
        hasIdenticalModifier = false;
    
    for(let j = 0; j < thisClassList.length; j++) {
      if(thisClassList[j].indexOf(`--${modifierName}`) > -1) {
        // 해당 순회에서 modifier를 찾았음
        hasIdenticalModifier = true;
        
        if(modifierValue === null) {
          // boolean 형식의 modifier임
          continue;
        }else {
          // name_value 형식의 modifier임
          if(secondModifierValue !== null) {
            // modifier의 value만 교체하고자 m2를 전달했다면 서로다른값으로 toggle 시켜준다
            if(thisClassList[j] === `${hasModifierName}--${modifierName}_${modifierValue}`) {
              thisClassArry.push(`${hasModifierName}--${modifierName}_${secondModifierValue}`);
            }else {
              thisClassArry.push(`${hasModifierName}--${modifierName}_${modifierValue}`);
            }
            
          }else {
            // m2를 제공하지않았으므로 단순 토글 기능을 한다
            if(thisClassList[j] === arry[i].m) {
              continue;
            }else {
              thisClassArry.push(`${hasModifierName}--${modifierName}_${modifierValue}`);
            }
          }
        }
      }else {
        // 해당 순회에서 modifier를 찾지 못했음
        thisClassArry.push(thisClassList[j]);
        
        if(!(j < (thisClassList.length - 1)) && !hasIdenticalModifier) {
          // 마지막 순회를 돌았음에도 불구하고 전달받은 modifier를 한번도 찾지 못했다면
          // modifier가 애초에 없었다고 판단후 toggle 방식으로 추가하도록 한다
          thisClassArry.push(arry[i].m);
        }
      }
    }
    thisTarget.className = thisClassArry.toString().replace(/,/g, ' ');
  }
}

/*
 * // 사용설명
    전체 변수를 배열의 형태로 각각의 아이템을 객체로 전달한다
    t: DOM 요소
    m: 토글 시키려는 modifier
    m2: 서로다른 value를 토글시키려는 두번째 modifier
 
        toggleModifier([
          {
            t: '.js-list__item:last-of-type',
            m: 'list__item--this-theme_dark',
            m2: 'list__item--this-theme_light'
          },
          {
            t: '.js-list__item:last-of-type',
            m: 'list__item--focused'
          },
          {
            t: '.js-list__item:nth-of-type(2)',
            m: 'list__item--this-theme_dark'
          },
          {
            t: '.js-list__item:nth-of-type(1)',
            m: 'list__item--focused'
          }
        ]);
 *
 */