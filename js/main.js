
  const numeri= document.getElementById('numeri')

  










let resultato = [] ;
let numeriScelti  = [] ;


setTimeout(ritardo, 5000);
setTimeout(nascondinumeri, 4000);



for (i = 0; i < 5; i++) {
    const generaNumerCasuale = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    if (resultato .includes(generaNumerCasuale)) {continue;}
    else { resultato.push(generaNumerCasuale); }
    console.log(resultato);

}
    /* document.write(resultato);*/
    console.log(resultato);
    numeri.innerText = resultato;
    

    
    
          
    
 

   
   
   
   
   
   
   
   
   
   
   
   
   
   /******************Funzioni***********************/
    function nascondinumeri(){
        numeri.style.display = "none";
        document.getElementById("titolo").style.display = "none";
        document.getElementById("hde").classList.remove("hide");

    }
    
    function ritardo(){
       
            numeriScelti = prompt('quali sono i numeri');
        
     const getResult = function (resultato, numeriScelti) {
        let i = resultato.length;
        if (i != numeriScelti.length) return false;
     
        while (i--) {
          if (resultato[i] !== numeriScelti[i]) return false  ;
        }
        return true ;
      };
     
     
     console.log("Comparing a1 and a2", getResult(numeriScelti, resultato));
     console.log(numeriScelti,resultato[i],numeriScelti[i]);
     console.log(typeof resultato);
     console.log(typeof numeriScelti)
     
       
     
    }

 
     
             
      /*  if (resultato.includes (numeriScelti)) {
            console.log(' hai indovinato' +" "+ numeriScelti);
        }
        else {
            console.log('non hai indovinato');
        }

        console.log(numeriScelti)
        console.log(resultato)*/







