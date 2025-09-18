let anima = document.querySelector('.animacao')
let carega = document.querySelector('.loading')
let botao = document.querySelector('.btn')
let botao2 = document.querySelector('.btn2')


botao.addEventListener('click', function(){
   anima.classList.add('active')
   anima.addEventListener('animationend', function(){
       anima.classList.remove('active')
   })
})

botao2.addEventListener('click', function(){
    carega.classList.remove('load')
})



document.addEventListener('DOMContentLoaded', function(){
    carega.classList.add('load')
})