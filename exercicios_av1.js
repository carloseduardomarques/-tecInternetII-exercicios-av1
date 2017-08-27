   /*
   Faça uma função que recebe dois números e retorne a média
   */
    function exercicio01(pNumero1,pNUmero2){
    
    media = (pNumero1+pNUmero2)/2;

    return console.log(media);
    
    }

    /*    
    Faça uma função que receba dois valores (AV1 e AV2) e avise o aluno se é necessário fazer a AV3
    Regra 01: notas de AV1 e AV2 >= 4.0
    Regra 02: Média >= 6.0
    Dica: operadores lógicos => && (E) => || (OU)
    */

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

    function exercicio03(pDe, pAte){

        var i = pDe;

     while (i <= pAte) {

        console.log(i);

        i++;         
      }
    }
     
    function exercicio03(pDe, pAte){
        
        var i = pDe; 

        do {

            console.log(i);

            i++;
            
        } while (i <= pAte);


            }
    
    function exercicio03(pDe, pAte){
        
         
        for (var i =pDe; i <= pAte; i++) {
            
            console.log(i);
            
        }

            }
              