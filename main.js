const SCREEN_WIDTH = window.parent.screen.width;
const title = document.querySelector('.title');
const log = document.querySelector('#log');
const header = document.querySelector('#header');

function getSpanWidth(str,fsz){;
  if(!isNaN(fsz)){
    title.style.fontSize=fsz;
  };
    title.innerHTML=str;
    return title.offsetWidth;
}

window.onload = function rightMove(){
  let posi = ((SCREEN_WIDTH-getSpanWidth("P B L"))/2-8);
  let datePosi = posi + 200;
  log.style.left=`${datePosi}px`;
  title.style.left=`${posi}px`;
}

function getDisplayDate(){
  const date = new Date();
  const month = date.getMonth()+1;
  const dates = date.getDate();
  const day = date.getDay();
  const dayList = ['日','月','火','水','木','金','土'];
  const la = dayList[day];
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const label = `${month}月${dates}日${la}曜日${hour}時${minutes}分${seconds}秒`;
  document.querySelector('#log').innerHTML = label;
  requestAnimationFrame(getDisplayDate);
};getDisplayDate();



let size = 105;
const bu = document.querySelector('.bu');

function change(){
  bu.style.height=`${size}px`;
  size += 50;

};
