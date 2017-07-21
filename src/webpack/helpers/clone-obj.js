// 객체를 복사한다

export function cloneObj(obj) {
  if (obj === null || typeof(obj) !== 'object') {
    return obj;
  }

  var copyObj = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copyObj[attr] = obj[attr];
    }
  }

  return copyObj;
}
