const crearCalculadora = () => {
  const calculadora = document.createElement('div');
  calculadora.id = 'calculadora';

  const ventana = document.createElement('input');
  ventana.id = 'display';
  ventana.readOnly = true;
  ventana.value = '0';
  calculadora.appendChild(ventana);

  const contenedorBotones = document.createElement('div');
  contenedorBotones.id = 'contenedorBotones';
  contenedorBotones.style.width = '100%';
  calculadora.appendChild(contenedorBotones);

  const buttons = ['CE', '←', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'x', '1', '2', '3', '÷', '0', '±', ',', '='];
  buttons.forEach(function (value) {
    const boton = document.createElement('button');
    if (value == 'CE') {
      boton.classList.add('botonRojo');
    }
    boton.textContent = value;

    boton.addEventListener("click", function () {
      switch (value) {
        case 'CE':
          ventana.value = '0';
          break;
        case '←':
          ventana.value = ventana.value.length <= 1 ? '0' : ventana.value.slice(0, -1);
          break;
        case '%':
          if (ventana.value != '0') {
            ventana.value = ventana.value.replace(',', '.');
            ventana.value = ventana.value.includes('+') || ventana.value.includes('-') || ventana.value.includes('x') || ventana.value.includes('÷') ? eval(ventana.value.replace('x', '*').replace('÷', '/').replace(',', '.')) / 100 : ventana.value / 100;
            if (ventana.value.includes('.')) {
              ventana.value = ventana.value.replace('.', ',');
            }
          }
          break;
        case '+':
          if (ventana.value != '0' && !ventana.value.includes('+')) {
            ventana.value = ventana.value + '+';
          }
          break;
        case '-':
          if (ventana.value != '0' && !ventana.value.includes('-')) {
            ventana.value = ventana.value + '-';
          }
          break;
        case 'x':
          if (ventana.value != '0' && !ventana.value.includes('x')) {
            ventana.value = ventana.value + 'x';
          }
          break;
        case '÷':
          if (ventana.value != '0' && !ventana.value.includes('÷')) {
            ventana.value = ventana.value + '÷';
          }
          break;
        case ',':

        break;
        case '=':

          break;
        case '±':
          ventana.value = ventana.value != '0' ? (ventana.value.includes('-') ? ventana.value.slice(1) : '-' + ventana.value) : ventana.value;
          break;
        default:
          ventana.value = ventana.value == '0' ? value : ventana.value + value;
          break;
      }
    });

    contenedorBotones.appendChild(boton);
  });

  document.body.appendChild(calculadora);
}

crearCalculadora();
