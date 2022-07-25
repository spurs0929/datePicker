import { createYearControlArea, createYearTD, createYearNode } from './creator';
import { getStartAndEndYear } from './utils';
import { createTable } from '../creator';
import './index.scss';

// 年組件渲染
export function render(container, year){
  container.innerHTML = '';
  const oTable = createTable('my-year-calendar-table');

  const controlArea = createYearControlArea(year);
  const yearNode = createYearNode(year);

  yearNode.forEach(tr => {
    oTable.appendChild(tr);
  });

  container.appendChild(controlArea);
  container.appendChild(oTable);
}
// 年組件更新
export function update(year){
  const oTable = document.querySelector('.my-year-calendar-table');
  const oStartYear = document.querySelector('.start-year');
  const oEndYear = document.querySelector('.end-year');

  const yearNode = createYearNode(year);
  const [ startYear, endYear ] = getStartAndEndYear(year);

  oStartYear.innerText = startYear;
  oEndYear.innerText = endYear;
  oTable.innerHTML = '';

  yearNode.forEach(tr => {
    oTable.appendChild(tr);
  });
}