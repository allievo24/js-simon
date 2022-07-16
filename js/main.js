
const  resultato =[];
let numeriScelti = [];
  



for(i=1; i<=5; i++){
 const generaNumerCasuale = Math.floor(Math.random()*(100 - 1 + 1)) + 1
 if(resultato.includes (generaNumerCasuale) ){continue;}
 else{ resultato .push (generaNumerCasuale);}
 console.log(resultato)


}
 

numeriScelti = prompt('quali sono i numeri');



    if(resultato .includes (numeriScelti) ){console.log('non hai indovinato');}
    else{console.log(' hai indovinato'+ numeriScelti );} 





  
 console.log(resultato);

 console.log(numeriScelti);

