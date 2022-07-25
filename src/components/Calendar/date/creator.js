import { WEEK_DAYS } from "./config";
import { getAllMonthDay, getLastMonthRestDays, getNextMonthRestDays, getFormDate } from './utils';
import { getDateInfo, createTrs } from "../utils";

const domPool = {
  weekDays: null,
  controlArea: null
}

// 創建星期(日~六)tr
export function createWeekDaysNode(){
  if(!domPool.weekDays){
    domPool.weekDays = document.createElement('tr');
    domPool.className = 'week-day';

    domPool.weekDays.innerHTML = WEEK_DAYS.map(item => (
      `<th>${ item }</th>`
    )).join('');
  }

  return domPool.weekDays;
}

// 創建月曆tr
export function createDateNode(year, month){
  const last = getLastMonthRestDays(year, month);
  const current = getAllMonthDay(year, month);
  const next = getNextMonthRestDays(year, month);
  const dateTrArr = createTrs(6); 

  const lastTD = createRestDaysTD(last);
  const currentTD = createCurrentDaysTD(current, year, month);
  const nextTD = createRestDaysTD(next);

  const tdArr = [
    ...lastTD,
    ...currentTD,
    ...nextTD
  ];

  let index = 0;

  dateTrArr.forEach(tr => {
    for(let i = 0; i < 7 && tdArr[index]; i++){
      tr.appendChild(tdArr[index ++]);
    }
  });

  return dateTrArr;

}

/**
 * 創建restDays td
 * @param {剩餘天數陣列} restDays 
 */
export function createRestDaysTD(restDays){
  return restDays.map(item => {
    const oTd = document.createElement('td');
    oTd.className = 'day rest-day';
    oTd.innerText = item;

    return oTd;
  });
}

/**
 * 創建當月日期td
 * @param {當月天數} current 
 * @param {年} year 
 * @param {月} month 
 * @returns 
 */
export function createCurrentDaysTD(current, year, month){
  let tdArr = [];

  const [ currentYear, currentMonth, currentDate ] = getDateInfo();

  for(let i = 1; i <= current; i++){
    const oTd = document.createElement('td');
    oTd.className = 'day current-day';

    // 今天加current樣式 
    if(currentYear === year && currentMonth === month && currentDate === i){
      oTd.className += ' current';
    }

    oTd.innerText = i;
    oTd.setAttribute('data-date', getFormDate(year, month, i));
    tdArr.push(oTd);
  }

  return tdArr;
}

/**
 * 控制區
 * @param {年} year 
 * @param {月} month 
 */
export function createControlArea(year, month){
  if(!domPool.controlArea){
    domPool.controlArea = document.createElement('div');
    domPool.controlArea.className = 'control-area';

    // 控制面板模板
    domPool.controlArea.innerHTML = `
      <span class="control-btn btn-year-lt">&lt;&lt;</span>
      <span class="control-btn btn-month-lt">&lt;</span>  
      <span class="control-show">
        <span class="control-title">
          <span class="title-year">${ year }年</span>
        </span>
        <span class="control-title">
          <span class="title-month">${ month }月</span>
        </span>
      </span>
      <span class="control-btn btn-month-gt">&gt;</span> 
      <span class="control-btn btn-year-gt">&gt;&gt;</span>
    `
  }else{
    domPool.controlArea.querySelector('.title-year').innerText = year;
    domPool.controlArea.querySelector('.title-month').innerText = month;
  }

  return domPool.controlArea;
}