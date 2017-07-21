export function splitSearch(url) {
  if(url.indexOf('?') === -1) return false;
  
  let splitArry = url.slice(1).split('?'),
      splitedObj = {};
  
  for(let i = 0; i < splitArry.length; i++) {
    let tempProperty = splitArry[i].slice(0, splitArry[i].indexOf('=')),
        tempValue = splitArry[i].slice(splitArry[i].indexOf('=') + 1);

    splitedObj[tempProperty] = tempValue;
  }
  
  return splitedObj;
}