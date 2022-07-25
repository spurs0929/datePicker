import { createTrs, getDateInfo } from "../utils";
import { createTenYears, getStartAndEndYear } from './utils';

const domPool = {
  controlArea: null
}

/**
 * 年控制面板
 * @param {年} year 
 * @returns 
 */
export function createYearControlArea(year){
  const [ startYear, endYear ] = getStartAndEndYear(year);

  if(!domPool.controlArea){
    domPool.controlArea = document.createElement('div');
    domPool.controlArea.className = 'year-control-area';

    domPool.controlArea.innerHTML = `
      <span class="year-control-btn btn-year-lt">&lt;&lt;</span>
      <span class="control-show">
        <span class="control-title">
          <span class="start-year">${ startYear }</span>
          -
          <span class="end-year">${ endYear }</span>
        </span>
      </span>
      <span class="year-control-btn btn-year-gt">&gt;&gt;</span>
    `
  }else{
    domPool.controlArea.querySelector('.start-year').innerText = startYear;
    domPool.controlArea.querySelector('.end-year').innerText = endYear;
  }

  return domPool.controlArea;
}

/**
 * 創建year td
 * @param {年} year 
 * @returns 
 */
export function createYearTD(year){
  const tenYearArr = createTenYears(year);
  const [ currentYear ] = getDateInfo();
  const tdArr = [];

  tenYearArr.forEach(year => {
    const oTd = document.createElement('td');
    oTd.className = 'year ten-year';

    if(year === currentYear){
      oTd.className += ' current';
    }

    oTd.innerText = year;
    oTd.setAttribute('data-year', year);
    tdArr.push(oTd);
  });

  return tdArr;
}

/**
 * 創建年節點
 * @param {年} year 
 * @returns 
 */
export function createYearNode(year){
  const yearTrArr = createTrs(3);
  const yearTds = createYearTD(year);

  let index = 0;
  yearTrArr.forEach(tr => {
    for(let i = 0; i < 4 && yearTds[index]; i++){
      tr.appendChild(yearTds[index ++]);
    }
  });

  return yearTrArr;
}