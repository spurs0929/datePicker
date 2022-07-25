import { createMonthNodes, createMonthControlArea } from './creator';
import { createTable } from '../creator';
import './index.scss';

// 月組件渲染
export function render(container, year, month){
  container.innerHTML = '';
  const oTable = createTable('my-month-calendar-table');
  const controlArea = createMonthControlArea(year);
  const monthNode = createMonthNodes(month);

  monthNode.forEach(tr => {
    oTable.appendChild(tr);    
  });

  container.appendChild(controlArea);
  container.appendChild(oTable);
}

// 更新月組件
export function update(year){
  const oYear = document.querySelector('.title-year');
  oYear.innerText = year;
}