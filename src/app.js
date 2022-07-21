import MyCalender from './components/Calender';

(() => {
  MyCalender('#app', (date) => {
    console.log(date);
  });
})();