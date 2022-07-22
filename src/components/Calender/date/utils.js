/**
 * 根據輸入年月獲得當月第一天為星期幾
 * @param {年} year 
 * @param {月} month 
 */
export function getFirstWeekDay(year, month){
  const date = new Date(year, month - 1, 1); // 1: 當月第一天
  return date.getDay();
}

/**
 * 根據輸入年月獲得當月總天數
 * @param {年} year 
 * @param {月} month 
 */
export function getAllMonthDay(year, month){
  const date = new Date(year, month, 0); // 0: 上個月最後一天
  return date.getDate();
}

/**
 * 根據輸入的年月獲得上個月在當月日曆上的日期陣列
 * @param {年} year 
 * @param {月} month 
 */
export function getLastMonthRestDays(year, month){
  let days = getFirstWeekDay(year, month);
  let count = getAllMonthDay(year, month - 1);
  let res = [];

  while(days){
    res.push(count);
    days--;
    count--;
  }

  return res.reverse();
}

/**
 * 根據輸入的年月獲得下個月在當月日曆上的日期陣列
 * @param {年} year 
 * @param {月} month 
 */
export function getNextMonthRestDays(year, month){
  const lastMonthRestDayCount = getFirstWeekDay(year, month);
  const currentMonthDayCount = getAllMonthDay(year, month);
  const nextMonthRestDayCount = 42 - (lastMonthRestDayCount + currentMonthDayCount);
  let restDays = [];

  for(let i = 1; i <= nextMonthRestDayCount; i++){
    restDays.push(i);
  }

  return restDays;
}
/**
 * 格式化年月日
 * @param {年} year 
 * @param {月} month 
 * @param {日} date 
 * @returns 20xx-0x-0x
 */
export function getFormDate(year, month, date){
  const dateArr = [ year, month, date ];
  dateArr.forEach((item, index) => {
    dateArr[index] < 10 && (dateArr[index] = '0' + dateArr[index]);
  });

  return dateArr.join('-');
}