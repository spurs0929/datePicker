import { createTable } from '../creator';
import { createWeekDaysNode, createDateNode, createControlArea } from './creator';
import './index.scss';

/**
 * 渲染日歷
 * @param {容器} container 
 * @param {年} year 
 * @param {月} month 
 */
export function render(container, year, month){
  container.innerHTML = '';
  const oTable = createTable('my-calendar-table');
  const oTHead = document.createElement('thead');
  const oTBody = document.createElement('tbody');
  const weekDayNode = createWeekDaysNode();
  const dateArr = createDateNode(year, month);
  const controlArea = createControlArea(year, month);

  oTBody.className = 'my-calender-body';
  
  oTHead.appendChild(weekDayNode);
  dateArr.forEach(tr => {
    oTBody.appendChild(tr);
  });

  oTable.appendChild(oTHead);
  oTable.appendChild(oTBody);
  container.appendChild(controlArea);
  container.appendChild(oTable);
}

/**
 * 日曆更新
 * @param {*} year 
 * @param {*} month 
 */
export function update(year, month){
  const oTBody = document.querySelector('.my-calender-body');
  const oTitleYear = document.querySelector('.title-year');
  const oTitleMonth = document.querySelector('.title-month');
  const dateArr = createDateNode(year, month);

  oTBody.innerHTML = '';
  oTitleYear.innerText = year;
  oTitleMonth.innerText = month;

  dateArr.forEach(tr => {
    oTBody.appendChild(tr);
  });
}