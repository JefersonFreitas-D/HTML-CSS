                   /*FUNCTIONS*/

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


                /*CALLBACK*/

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

const aumentar = {
  meta: 10,
  falta:0,
}



let pessoa = {
  Nome: "Karen",
  Idade:16,
  Maioridade: function ficardemaior(Idade, aniversario){
    let ficardemaior = Idade + aniversario;
    if(ficardemaior < 18){
console.log(`${pessoa.Nome} é menor de idade`)
    }
  }

}

pessoa.ficardemaior(this.Idade, 1)



/*function qualquer(call){
  console.log('Function callback')
}


function callback(){
  console.log('Texto passado na callback')
}
callback()


const objct = {
callback,
qualquer
}

objct.callback()
objct.qualquer()*/

/*------------------------------------------------*/

/*function dividir(n1){

  return function (n2) {
    return n1 / n2
  }
}

const dividiu = dividir(20)
const resultado = dividiu(2)

console.log(resultado)*/




                 /*OBJETOS*/

/*let time ={
  esporte: 'Vôlei',
  jogadores: 6,
  posicoes: [1, 2, 3, 4, 5, 6]
};

for (let i = 0; i < time.posicoes.length; i++) {
  /*alert(`O número de jogadores em quadra é ${time.jogadores}`);

  console.log(`Os ${time.jogadores} jogadores estão em sua posições ${time.posicoes}`)
}*/





            //FUNCÃO AUTO-INVOCÁVEL

 (function(n1, n2){
m = n1 * n2
console.log(m)

function mostrar () {
console.log(`Function declaration dentro de funcão auto-invocável mostrando o valor ${m} que multiplica ${n1} e ${n2}`)
}

mostrar()

 }) (2, 4)         


                    //ARGUMENTS

   function mult(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++){
      result += array[i]
    }

    return result
   }              

   console.log(mult([1, 2, 3, 4, 5, 6, 7, 8]))

/*-------------------------------------------------*/


   function multiplicar() {

    console.log(arguments)

    let result = 0;
    for (let i = 0; i < arguments.length; i++){
      result += arguments[i]
    }

    return result
   }              

   console.log(multiplicar(1, 2, 3, 4, 5, 6, 7, 8))


   /*---------------------------------------------*/

                //ARROW-FUNCTION

 let somar = (n1, n2, n3) =>{
  s = n1 + n2 + n3
  console.log(s)

 
 }              

   somar(1, 2, 3)