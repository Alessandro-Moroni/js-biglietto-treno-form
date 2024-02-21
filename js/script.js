const costDistance = 0.21;
const bt1 = document.querySelector('.bt1');
const bt2 = document.querySelector('.bt2');
const ticketContainer = document.querySelector('.ticket-container');
const selectAge = document.querySelector('.select-age')



bt1.addEventListener('click',function(){

  ticketContainer.classList.remove('d-none')
  // nome
  let textName = document.getElementById('textName').value;

  document.getElementById('name').innerHTML = textName
  // chilometri
  let km = parseInt(document.getElementById('km').value);

  document.getElementById('km-tot').innerHTML = km


  // età
  let age = selectAge.value
  console.log(age);
  document.getElementById('sale').innerHTML = age

  let costTicket = km * costDistance;
  if(age === 'under'){
  costTicket = ((costTicket / 100) * 80);
  }else if(age === 'over'){
    costTicket = ((costTicket / 100) * 60);
  }
console.log(costTicket);
document.getElementById('price').innerHTML = costTicket.toFixed(2) + ' €'
  
})


bt2.addEventListener('click', function(){
  ticketContainer.classList.add('d-none')
  textName.value = '';
  km.value = '';
  selectAge.value = '';

})
