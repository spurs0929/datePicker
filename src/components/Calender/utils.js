// 創建tr元素
export function createTrs(count){
  const trArr = [];

  for(let i = 0; i < count; i++){
    const oTr = document.createElement('tr');
    trArr.push(oTr);
  }

  return trArr;
}

export function getDateInfo(timeStamp){
  var date = timeStamp ? new Date(timeStamp) : new Date();

  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ]
}

