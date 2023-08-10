
const entradas = document.querySelectorAll('.entrada');
const btConfirme = document.querySelector('.botao-confirmar');
const aviso = document.querySelectorAll('.aviso');
const telaComplete = document.querySelector('.complete-state-start');
const cartaoNumeroRender = document.querySelector('.card-number-render');
const cardHolderNameRender = document.querySelector('.card-holder-name-render');
const cardDateRender = document.querySelector('.card-date-render')
const cvcRender = document.querySelector('.cvc-render');


const arrayVerify = []

entradas.forEach((entrada, index) => {

  entrada.addEventListener('change', () => {

    cartaoNumeroRender.innerHTML = `${entradas[1].value}`

    cardHolderNameRender.innerHTML = `${entradas[0].value}`

    cardDateRender.innerHTML = `${entradas[2].value}/${entradas[3].value}`

    cvcRender.innerHTML = `${entradas[4].value}`

    verificarValorDeEntrada(entrada, index)

  })

})


btConfirme.addEventListener('click', () => {


  entradas.forEach((entrada, index) => {


    aviso[index].innerHTML = '';

    if (entrada.value === '') {

      aviso[index].innerHTML = `Can't Be Blank`;
      entrada.classList.add('negative');
      entrada.classList.remove('correct');

    } else {

      aviso[index].innerHTML = ``;
      verificarValorDeEntrada(entrada, index)

    }

  });


});


btConfirme.addEventListener('keydown', (event) => {

  if (event.keyCode === 13) {

    document.querySelector('.botao-confirmar').click();

    entradas.forEach((entrada, index) => {


      aviso[index].innerHTML = '';

      if (entrada.value === '') {

        aviso[index].innerHTML = `Can't Be Blank`;
        entrada.classList.add('negative');
        entrada.classList.remove('correct');

      } else {

        aviso[index].innerHTML = ``;
        verificarValorDeEntrada(entrada, index)

      }

    });
  }

  console.log('apertou')

})


function verificarValorDeEntrada(entrada, index) {



  if (entrada === entradas[0]) {

    if (entrada.classList.contains('correct')) {

      return

    } else if (!isNaN(entrada.value)) {

      aviso[index].innerHTML = `wrong format, letters only`;
      entrada.classList.add('negative');
      entrada.classList.remove('correct');


    } else {

      entrada.classList.remove('negative');
      entrada.classList.add('correct', `${index}`);
      aviso[index].innerHTML = ``;

      arrayVerify.push(entrada)

      verificaSeEntradasCorretas(arrayVerify)
    }

  } else if (entrada === entradas[2]) {

    if (entrada.value > 12) {

      aviso[index].innerHTML = `there are only 12 months a year`;

    } else if (isNaN(entrada.value)) {

      aviso[index].innerHTML = `wrong format, numbers only`;
      entrada.classList.add('negative');
      entrada.classList.remove('correct');

    }else{

       
      aviso[index].innerHTML = ``;
      entrada.classList.remove('negative');
      entrada.classList.add('correct', `${index}`);


      arrayVerify.push(entrada)

      console.log(arrayVerify)

      verificaSeEntradasCorretas(arrayVerify)

    }


  } else {

    if (entrada.classList.contains('correct')) {

      //verifiquei se ja contem essa classe
      return

    } else if (isNaN(entrada.value)) {
      aviso[index].innerHTML = `wrong format, numbers only`;
      entrada.classList.add('negative');
      entrada.classList.remove('correct');


    } else {


      aviso[index].innerHTML = ``;
      entrada.classList.remove('negative');
      entrada.classList.add('correct', `${index}`);


      arrayVerify.push(entrada)

      console.log(arrayVerify)

      verificaSeEntradasCorretas(arrayVerify)

    }

  }

}

function verificaSeEntradasCorretas() {



  if (arrayVerify.length === 5) {

    console.log('entrou no teste')

    telaComplete.classList.add('open');
    document.querySelector('.div-formulario').remove();
  }

}
