/*
Faça uma função que recebe dois números e retorne a média
*/
function exercicio01(pNumero1,pNUmero2){
    
    media = (pNumero1+pNUmero2)/2;

    return console.log(media);
    
    }

    function exercicio02(pAv1, pAv2){

        var resultado="",
            media = 0;
            

        if(pAv1 >= 4 && pAv2 >= 4){

            media = (pAv1+pAv2)/2;
        }

          if(media < 6){
           
             resultado = "Deve fazer a AV3. Media realizada: " + media;

          }else{

            resultado = "Nao deve fazer a AV3. Media realizada: " + media;
          }
        
        return console.log(resultado);
     
    }
      