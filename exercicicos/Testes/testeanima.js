let anima = document.querySelector('.animacao')
let carega = document.querySelector('.loading')
let botao = document.querySelector('.btn')
let botao2 = document.querySelector('.btn2')
let image = document.querySelector('.imagem ')


botao.addEventListener('click', function(){
   anima.classList.add('active')
   anima.addEventListener('animationend', function(){
       anima.classList.remove('active')
   })
})





document.addEventListener('DOMContentLoaded', function(){
    carega.classList.add('load')
      image.classList.add('sobe')

      botao2.addEventListener('click'), function(){ carega.classList.remove('load')

}
})


