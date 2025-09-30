

  
    let anima = document.querySelector('.animacao')

    let botao = document.querySelector('.btn')
    let carega = document.querySelector('.loading')

    let botao2 = document.querySelector('.btn2')
  

   botao.addEventListener('click', function(){
   anima.classList.add('active')
   anima.addEventListener('animationend', function(){
       anima.classList.remove('active')
   })
})


 let subir = document.querySelector('sobe')
   
      let image = document.querySelector('.imagem ')

document.addEventListener('DOMContentLoaded', function(){

   

     
        image.classList.add('sobe')
        carega.classList.add('load')
    
      botao2.addEventListener('click', function(){
      carega.classList.remove('load')

})


})


