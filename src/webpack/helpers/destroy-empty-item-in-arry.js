// 전달받은 배열중 빈문자열이 있다면 제외한 나머지를 새 배열로 만들어 반환한다
export function destroyEmptyItemInArray(arry) {
  let makeFilteredValueToNewArray = arry.filter((item) => {
    return item.length > 0;
  });
  
  return makeFilteredValueToNewArray;
}