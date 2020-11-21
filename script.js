let timerNumber = Math.floor(Math.random()*200);
setInterval(()=>{
  document.getElementsByClassName('tim');
  if(Math.random()>0.5) timerNumber++;
  else timerNumber--;
  const timer3 = document.getElementsByClassName('timer3')[0];
  const timer2 = document.getElementsByClassName('timer2')[0];
  const timer1 = document.getElementsByClassName('timer1')[0];
  if(!timer1) return;
  timer3.innerHTML=Math.floor(timerNumber/100);
  timer2.innerHTML=Math.floor(timerNumber%100/10);
  timer1.innerHTML=Math.floor(timerNumber%10);
},5000);