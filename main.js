//Countdown main script

//importing data modules
import {calculaTempoRestante, domElementCreate} from './utility.js'
//getting DOM elements
const dateData = document.getElementById('ipt_data'),
      eventName = document.getElementById('nome'),
      btnAdd = document.getElementById('add'),
      father = document.getElementById('father'),
      outDays = document.getElementById('out_days'),
      outHours = document.getElementById('out_hours'),
      outMinutes = document.getElementById('out_minutes'),
      outSeconds = document.getElementById('out_seconds');
let   intervalID;
//DOM manipulation for hidding numbers
function attDom(day, hor, min, sec){
  outDays.textContent = day;
  outHours.textContent = hor;
  outMinutes.textContent = min;
  outSeconds.textContent = sec;
}
//chama o módulo de calculo
const countDown = ()=>{
  if(!intervalID){
  }else{
    let eventDate = dateData.value;
    //chama o calculo
    let result = calculaTempoRestante(eventDate);
    result[1] += 3;
    if(result[3] === 0){
      result[3] = '00';
    }
    attDom(result[0],result[1],result[2],result[3]);
  }
}
//Setting eventListeners
//chama a contagem
btnAdd.
addEventListener('click',function(){
  if(eventName.value === '' || dateData.value === ''){
    alert('choose a name and a date to your event, please!')
  } else{
    hideDom();
    teste()
  }
  });
//esconde o dom, chama hideDom()
attDom()

function hideDom(){
  let nome = document.getElementById('nome');
  let ipt = document.getElementById('ipt_data');
  let btn = document.getElementById('add');
  nome.style.display = "none"
  ipt.style.display = "none"
  btn.style.display = "none"
}

function teste(){
    domElementCreate('div','nameLabel','newEl',eventName.value,father);
    //hideDom;
    intervalID = setInterval(countDown, 1000);
}