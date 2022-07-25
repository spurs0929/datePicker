/**
 * 創建十年
 * @param {年} year 
 * @returns  
 */
export function createTenYears(year){
  const str = year.toString().slice(0, 3);
  const yearArr = [];

  for(let i = 0; i < 10; i++){
    yearArr.push(Number(str + i));
  }

  return yearArr;
}

/**
 * 取得開始與結束年
 * @param {年} year 
 * @returns [ startYear, endYear ]
 */
export function getStartAndEndYear(year){
  const str = year.toString().slice(0, 3);
  return [ Number(str + '0'), Number(str + '9') ];
}