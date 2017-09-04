   /*
   Faça uma função que recebe dois números e retorne a média
   */
    function exercicio01(pNumero1,pNUmero2){
    
    var media = (pNumero1+pNUmero2)/2;

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
            media = (pAv1+pAv2)/2;;
            
        if((pAv1 >= 4 && pAv2 >= 4) && media >= 6){          

          resultado = "Não deve fazer a AV3. Media realizada: " + media;

          }else{
          
          resultado = "Deve fazer a AV3. Media realizada: " + media;
          
        }
        
        return console.log(resultado);
     
    }

    /*
    Criar funções para escrever números no console de 1 até determinado valor, utilizando:
    while
    do...while
    for
    */

    function exercicio03(pDe, pAte){

        var i = pDe;

     while (i <= pAte) {

        console.log("Usando while" + i);

        i++;         
    }        
            
        var i = pDe; 

    do {

            console.log("Usando Do..While" + i);

            i++;
            
    } while (i <= pAte);    
    
         
    for (var i =pDe; i <= pAte; i++) {
            
            console.log("Usando For" + i);
            
    }

    }                        

 /*Criar função para exibir os números divisíveis por X considerando o intervalo de X a Y*/

function exercicio04(x,y){

 console.log("Divisiveis por "+ x + "são :");
    
    for (var i = x; 
             i <= y;
             i++ ){
        
        if (i % x == 0){
            console.log(i);               
        }
    }    
}   

/*Criar função para mostrar o maior e menor valor de um vetor de números*/

/*6542,1235,3215,6251,3215,3225,4583,2151,2356,1325,9965,1230,4458,6352*/

function exercicio05(pVetor){

    var maior = Number.MIN_VALUE;
        menor = Number.MAX_VALUE;
    
    for(var i in arguments){
    
       if (arguments[i] > maior) {
            maior = arguments[i];
        }

        if (arguments[i] < menor) {
            menor = arguments[i];
        }
      

   }

    return console.log("Maior: "+maior +"\nMenor: "+menor);
}
/**
 Testes
 */
exercicio01(4,5)
exercicio02(4,3)
exercicio03(1,10)
exercicio04(7,50)
exercicio05(6542,1235,3215,6251,3215,3225,4583,2151,2356,1325,9965,1230,4458,6352)
