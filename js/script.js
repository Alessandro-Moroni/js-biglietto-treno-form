let distance = parseInt('Quanti chilometri devi percorrere?');
console.log(distance);
let age = parseInt('Quanti anni hai?')
console.log(age);
const costDistance = 0.21;

let costTicket = distance + costDistance;

const bt1 = document.querySelector('.bt1');

if(age < 18){
  costTicket = ((costTicket / 100) * 80);
}else if(age > 65){
  costTicket = ((costTicket / 100) * 60);
}

textName.innerHTML = textName

bt1.addEventListener('click',function(){

  
})