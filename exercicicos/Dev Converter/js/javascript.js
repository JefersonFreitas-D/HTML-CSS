let form = document.getElementById('conver');
form.addEventListener('submit', handleSubmit);

let val = document.getElementById('valor');

let moeda = document.getElementById('moeda');

let res = document.getElementById('result');

function handleSubmit(e) {
e.preventDefault();



};

function converter() {
    if (val.value === '' || moeda.value === '' || val.value <= 0) {

    alert(`O valor ${val.value} é inválido. Por favor, preencha todos os campos corretamente`);
    return;
    }

  if (moeda.value === 'dolar') {
    animation();
    res.innerHTML = `US$ ${val.value} é igual a R$ ${val.value * 5.43}`;
  } else if (moeda.value === 'euro') {
    animation();
    res.innerHTML = `€ ${val.value} é igual a R$ ${val.value * 6.40}`;
  } else if (moeda.value === 'libra') {
    animation();
    res.innerHTML = `£ ${val.value} é igual a R$ ${val.value * 7.40}`;
  } else if (moeda.value === 'iene') {
    animation();
    res.innerHTML = `¥ ${val.value} é igual a R$ ${val.value * 0.038}`;
  }

val.value = '';
moeda.value = '';


};

function animation() {
    return res.animate([{transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'}
    ], {duration : 600, fill: 'forwards'});
}





