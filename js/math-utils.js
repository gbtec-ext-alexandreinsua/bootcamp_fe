export function esPrimo(numero) {
  let esPrimo = true;

  if (numero != 2 && numero % 2 === 0) {
    esPrimo = false;
  } else {
    for (let i = 3; i < numero / 2; i += 2) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  }
  return esPrimo;
}

export function calculoComplejo(a) {
  return a * calculoInterno(a);
}

function calculoInterno(a) {
  return a;
}
