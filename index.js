const time = document.querySelector('.time');
const veigar = document.querySelector('.veigar');
const title= document.querySelector('.title');
const a = document.querySelector('.a');
veigar.style.bottom = '0px';
veigar.style.left = '10px';
const deadline = new Date('6.1.2021').getTime();
//const deadline = new Date('5.27.2021 22:29').getTime();
function addZeros(n, l) {
  return (
    Array(l - ('' + n).length)
      .fill('0')
      .join('') + n
  );
}
const timerInterval = setInterval(() => {
  const d = deadline - Date.now();
  if(d<0) {
    time.textContent = 'Ваня го катку!!!1!1'
    title.textContent='';
    return clearInterval(timerInterval);
  }
  const days = addZeros(Math.floor(d / 86400000), 3);
  const hours = Math.floor((d % 86400000) / 3600000);
  const min = addZeros(Math.floor((d % 3600000) / 60000), 2);
  const sec = addZeros(Math.floor((d % 60000) / 1000), 2);
  const ms = addZeros(Math.floor(d % 1000), 3);
  time.textContent = `${days} д. ${hours}:${min}:${sec}.${ms}`;
}, 1);

// veigar
let x = 2;
let y = 5;
setInterval(() => {
  const bottom = parseFloat(veigar.style.bottom);
  if (bottom <= 0) y = 5;
  else y -= 0.1;
  veigar.style.bottom = bottom + y + 'px';
  const left = parseFloat(veigar.style.left);
  if (left >= window.innerWidth - veigar.width) {
    x = -2;
    veigar.style.transform = 'rotateY(0)';
  } else if (left <= 0) {
    x = 2;
    veigar.style.transform = 'rotateY(180deg)';
  }
  veigar.style.left = left + x + 'px';
}, 10);
