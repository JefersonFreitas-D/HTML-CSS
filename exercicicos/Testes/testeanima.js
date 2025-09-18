let anima = document.querySelector('.animacao')
let carega = document.querySelector('.loading')
let botao = document.querySelector('.btn')


botao.addEventListener('click', function(){
   anima.classList.add('active')
   anima.addEventListener('animationend', function(){
       anima.classList.remove('active')
   })
})



document.addEventListener('DOMContentLoaded', function(){
    carega.classList.add('load')
})