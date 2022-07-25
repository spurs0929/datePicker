import { createTrs } from "../utils";
import { MONTHS } from "./config";

const domPool = {
  monthNode: null,
  controlArea: null
}

/**
 * 月控制面板
 * @param {年} year 
 * @returns 
 */
export function createMonthControlArea(year){
  if(!domPool.controlArea){
    domPool.controlArea = document.createElement('div');
    domPool.controlArea.className = 'month-control-area';
    
    // 控制面板模板
    domPool.controlArea.innerHTML = `
      <span class="month-control-btn btn-year-lt">&lt;&lt;</span>
      <span class="control-show">
        <span class="control-title">
          <span class="title-year">${ year }年</span>
        </span>
      </span>
      <span class="month-control-btn btn-year-gt">&gt;&gt;</span>
    `
  }else{
    domPool.controlArea.querySelector('.title-year').innerText = year;
  }

  return domPool.controlArea;
}

/**
 * 創建月份元素節點
 * @param {月} month 
 * @returns 月份元素節點
 */
export function createMonthNodes(month){
  if(!domPool.monthNode){
    domPool.monthNode = createTrs(4);

    let index = 0;
    domPool.monthNode.forEach(tr => {
      for(let i = 0; i < 3; i++){
        const oTd = document.createElement('td');
        oTd.className = 'static-month';
        oTd.setAttribute('data-month', index + 1);

        // 當月加current樣式
        if(index + 1 === month){
          oTd.className += ' current'
        }

        oTd.innerText = MONTHS[index ++];
        tr.appendChild(oTd);
      }    
    });
  }

  return domPool.monthNode;
}