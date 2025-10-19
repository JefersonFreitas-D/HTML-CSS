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
  console.log(resultado.conteúdo)
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

/*function Data(dia){
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
console.log(this.diaAtt)*/




/*let p1 = {
  nome: "Karen",
  idade: 16,
  falou: async function(marcelo, daniel, jeferson){
   await console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou a mais mais`)
  }
}

if (p1.falou) {
  p1.falou();
}

else {
  p2.falou()
}

let p2 = {
  nome: "Marcelo",
  idade:27,
  falou: function(){
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e a ${p1.nome} é panema, bora meu amigo ${p3.nome}`)
  }


}

let p3 ={
  nome:"Daniel",
  idade: 23,
  falou: function(){
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ano que vem meu Polo sai, cuida ${p4.nome}`)
  }
}

let p4 ={
  nome:"Jeferson",
  idade: 23,
  falou: function(){
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ano que vem meu Polo sai mesmo, cuida ${p2.nome} e ${p3.nome}`)
  }

}*/


/*let func = function(name1){
  //name1 = ""
  let name2 = "João"
  console.log(`Olá, meu nome é ${name1} e sou amigo do ${name2}`)
  
}


func()*/

/*---------------------------------------------*/

               //RECURSION

               
 /*function recursiva(n){
  let n2 = 2
  let num = 0

  if(n % n2 === 0){
    console.log(`O resultado de ${n} e ${n2} é 0`)
  } else {
    num = (n + 1) / n2
    //return num
  }

  for( let i= 0; i < num;  i++){
    console.log("Hello World")
  }

  console.log(num)
  console.log(n)
  console.log(n2)
 }   
 
 recursiva(5)*/

/*------------------------------------------------*/

                  //ASSIGN E KEYS

let obj1 = {
  nome: "Jeferson",
  idade: 23,
  sobrenome: "Freitas"
} 

let obj2 = {
  altura: 1.76,
  peso: 90
}

Object.assign(obj1, obj2)
Object.keys(obj1).forEach( key => {
  //console.log(key)
}) // Mostra as chaves do objeto sem os valores

//console.log(obj1)
//console.log(Object.keys(obj1)) // Mostra as chaves do objeto em array


let arr = ["Pão", 25, true, obj1]
/*for(let i = 0; i <= arr.length - 1; i++){
  //console.log(arr[i]) // Motra os valores dos índices do array

  let metShift = arr.shift()

  console.log(metShift)
}*/

  let metShift = arr.shift() // Remove um elemento no inicio do array

  arr.unshift("Lata") // ADD um elemento no inicio do array

  //console.log(metShift)
  //console.log(arr)

  if(arr.indexOf("Pai") === -1){

    arr.push("pai")
     console.log(arr)
    //console.log("Elemento não encontrado ou não existe")
  }

  //-------------------------------------------------

                    //SLICE
 let arraySlice = ["ovo", "leite", "farinha", "café"]

 let novoArray = arraySlice.slice(0, 3) // Cria um novo array a partir do array original

 console.log(arraySlice)
 console.log(novoArray)


 //------------------------------------------------

                  //FOR EACH

 let arrayForEach = ["Banana", "Maçã", "Uva", arraySlice]

 arrayForEach.forEach(item => {
   console.log(`${item}`)
 });


 //--------------------------------------------------

                //INCLUDES

 let arrayIncludes = [1, 2, 4, 6, 8, 10]  

 if(arrayIncludes.includes(4) === true){

  console.log("Elemento encontrado")
  //console.log(arrayIncludes.indexOf(4))
 }

 
