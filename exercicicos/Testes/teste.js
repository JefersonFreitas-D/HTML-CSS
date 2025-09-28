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

let sal = {
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
sal.adicionar(5)
