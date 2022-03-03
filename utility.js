function calculaTempoRestante(eventDate){
  const today = new Date();
  const futureDay = new Date(eventDate);
  const milisegundos = futureDay - today;
  let tempo = miliparaData(milisegundos);
  return tempo;
}

function miliparaData(mili){
  let dias = Math.floor(mili/(1000 * 60 * 60 * 24)),
      horas = Math.floor((mili % (1000 * 60 * 60 * 24))/
      (1000 * 60 * 60)),
      minutos = Math.floor((mili % (1000 *60*60))/(1000*60)),
      segundos = Math.floor((mili %(1000*60))/1000);
  const tempoRestante = [dias, horas, minutos, segundos];
  return tempoRestante
}

//cria elemento DOM, tipo de elemento, classe css, id, conteúdo e elemento Pai para inserir
const domElementCreate = (element, cssClass, id, content, father)=> {
  let el = document.createElement(`${element}`);
  el.classList.add(`${cssClass}`);
  el.setAttribute("id", `${id}`);
  el.textContent = content;
  father.append(el);
}

export {calculaTempoRestante, domElementCreate};