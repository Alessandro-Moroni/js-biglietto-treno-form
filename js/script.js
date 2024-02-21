let distance = parseInt('Quanti chilometri devi percorrere?');
console.log(distance);
let age = parseInt('Quanti anni hai?')
console.log(age);
const costDistance = 0.21;

let costTicket = distance + costDistance;


const bt1 = document.querySelector('.bt1');
const ticketContainer = document.querySelector('.ticket-container');
const selectAge = document.querySelector('.select-age')
const sale = document.getElementById('sale')


if(age < 18){
  costTicket = ((costTicket / 100) * 80);
}else if(age > 65){
  costTicket = ((costTicket / 100) * 60);
}



bt1.addEventListener('click',function(){

  ticketContainer.classList.remove('d-none')
  // nome
  let textName = document.getElementById('textName').value;

  document.getElementById('name').innerHTML = textName
  // chilometri
  let km = document.getElementById('km').value;

  document.getElementById('km-tot').innerHTML = km

  // età
  selectAge.addEventListener('change',function()){
    sale.innerHTML = 'sei nella fascia ' + selectAge.value;
    console.log(sale);
  }
  
})



