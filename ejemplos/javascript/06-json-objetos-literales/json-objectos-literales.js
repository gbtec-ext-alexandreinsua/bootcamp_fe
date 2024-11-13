// const circulo = {
//   radio: 5,
//   calcularArea: function () {
//     return Math.PI * Math.pow(this.radio, 2);
//   },
// };

// pido el dato al usuario
function pedirRadio() {
  // valido la cadena
  // que no sea una cadena vacia .trim()
  let radio = window.prompt("Introduce el radio del circulo").trim();
  if (!radio) {
    alert("La cadena no es válida");
  } else {
    radio = Number(radio);
    // y que NO sea un NaN o menor que cero
    if (Number.isNaN(radio) || 0 >= radio) {
      alert("La cadena no un número válido");
    } else {
      const circulo = crearCirculo(radio);
      alert(`El área del círculo es ${circulo.calcularArea()}`);
    }
  }
}

// función factoria
// construye objectos (literales)
function crearCirculo(radio) {
  return {
    radio: radio,
    calcularArea: function () {
      return Math.PI * Math.pow(this.radio, 2);
    },
  };
}

// pedirRadio();

const c1 = {
  radio: 5,
  calcularArea: function () {
    return Math.PI * Math.pow(this.radio, 2);
  },
};

const c2 = {
  radio: 5,
  calcularArea: function () {
    return Math.PI * Math.pow(this.radio, 2);
  },
};

const a1 = [1, 2, 3];
const a2 = [1, 2, 3];

console.log("comparación de objetos");
//  con objectos, arrays y con funciones
// === compara referencia a memoria no su valor
console.log(c1 === c2); // false
console.log(a1 === a2); // false

// convertir un JSON a una cadena
// si se aplica a un objecto literal ignora los métodos
const c1Strng = JSON.stringify(c1);
console.log(c1Strng);
const c2Strng = JSON.stringify(c2);
console.log(c2Strng);

console.log(c1Strng === c2Strng); // true -> compara string

// convierte una string a un JSON si puede, sino da un error
const c1parsed = JSON.parse(c1Strng);
const c2parsed = JSON.parse(c2Strng);

console.log(c1parsed);
console.log(c2parsed);
