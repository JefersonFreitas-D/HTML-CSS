/*let nome1 = "Gustavo"
let sobrenome1 = "Silva"


let ola = function(nome, sobrenome){
   if(nome === undefined || sobrenome === undefined){
   ola = nome1 + " " + sobrenome1
   console.log(`Olá, ${ola} tudo bem?!`)
   } else{
    console.log(`Olá, ${nome} ${sobrenome} tudo bem?!`)
   }
    return `Olá, ${nome} ${sobrenome} tudo bem?!`
}

ola("João", "Pereira")*/

/*let sal = {
    nome: "sal",
    quantidade: 20,
    preço: 2,
     comprar: function (comprou) {
        total = this.quantidade * this.preço
        estoque = this.quantidade - comprou 

         console.log(total)
        console.log(estoque)

        if(estoque < this.quantidade){

            console.log('O produto não está mais disponível na loja')
        }
        
    },
        
        
    adicionar: function (adc){
      total = this.quantidade * this.preço
      estoque = this.quantidade + adc
      console.log(estoque)

    

      if( estoque >= 20 ){

    console.log(`Estoque renovado, sua quantidade de ${sal.nome} é de ${this.quantidade} pacotes`)

      }
    }
        
       

    }

    

sal.comprar(26)
sal.adicionar(5)*/




/*function mult(cb){
console.log('Função Callback')
cb(2,3)

}

mult(function (num1, num2){

  resu = num1 * num2
  console.log(resu)

  if(resu < 10){
    alert(`Sua multiplicação é inferior á 10, seu resultado final é: ${resu}`)
  }

})*/

let time ={
  esporte: 'Vôlei',
  jogadores: 6,
  posicoes: [1, 2, 3, 4, 5, 6]
};

for (let i = 0; i < time.posicoes.length; i++) {
  /*alert(`O número de jogadores em quadra é ${time.jogadores}`);*/

  console.log(`Os ${time.jogadores} jogadores estão em sua posições ${time.posicoes}`)
}




