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
  falta:"",
  tenho: 0,
}




const pessoa = {
  Nome: "Karen",
  Idade:16,

    }
  

 /*function multp(n1, n2){
 const n3 = 10

  let res = n1 * n2 + 5 * n3

  if(res <= 10){
    console.log('Foi menor que 10')
  }try{
    console.log('Passou pelo try')
  }catch (e){
    console.log('Deu erro no catch')
  }

  console.log(res)

 } 

   multp(3, 5)*/






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

 /*(function(n1, n2){
m = n1 * n2
console.log(m)

function mostrar () {
console.log(`Function declaration dentro de funcão auto-invocável mostrando o valor ${m} que multiplica ${n1} e ${n2}`)
}

mostrar()

 }) (2, 4)*/         


                    //ARGUMENTS

   /*function mult(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++){
      result += array[i]
    }

    return result
   }              

   console.log(mult([1, 2, 3, 4, 5, 6, 7, 8]))*/

/*-------------------------------------------------*/


   /*function multiplicar() {

    console.log(arguments)

    let result = 0;
    for (let i = 0; i < arguments.length; i++){
      result += arguments[i]
    }

    return result
   }              

   console.log(multiplicar(1, 2, 3, 4, 5, 6, 7, 8))*/


   /*---------------------------------------------*/

                //ARROW-FUNCTION

 /*let somar = (n1, n2, n3) =>{
  s = n1 + n2 + n3
  console.log(s)

 
 }              

   somar(1, 2, 3)*/


  /*---------------------------------------------*/

                //ASSYNC / AWAIT

/*const arrayTeste = ["Array", 10, "Teste", 20]

  async function buscaGoogle(){

    console.log("Começou a busca")

    console.log(...[arrayTeste])

    if(arrayTeste){
      console.log(arrayTeste.indexOf(10))
    }
   
    try{
  //throw Error("Erro na requisição")

   const resposta = await fetch("./resultado.json")
  if(!resposta.ok){
    throw Error("Erro na requisição")
    }

    const resultado = await resposta.json()
  console.log(resultado)
   console.log("Terminou a busca")

  } catch(e) {
    console.error("Error:", e.message )
  } finally{
    console.log("Terminou de qualquer jeito")
  }


   }
             

buscaGoogle()*/


//------------------------------------------------


                //CONSTRUCTOR FUNCTION

function Data(dia){
  let _dia = dia
  this.mes = "10"
  this.ano = "2025"
  this.criacao = new Date()
  this.diaAtt = null
  this.mudarDia = function(novoDia){
  _dia = novoDia
  this.diaAtt = new Data()
  }
}

const novaData = new Data()
if(this.dia === "" || this.dia === undefined){
  this.dia = "30"
}
console.log(novaData)
console.log(this.diaAtt)


