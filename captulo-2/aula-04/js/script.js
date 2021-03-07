var a = 5;
var b = 5;

if (a > b) {
  console.log(a + " é maior que " + b);
} else {
  if (a < b) {
    console.log(a + " é menor que " + b);
  } else {
    console.log(a + " é igual a " + b);
  }
}

var dia = 7;

if (dia === 1) {
  console.log("Domingo");
} else if (dia === 2) {
  console.log("Segunda");
} else if (dia === 3) {
  console.log("Terça feira");
} else if (dia === 4) {
  console.log("Quarta feira");
} else if (dia === 5) {
  console.log("Quinta feira");
} else if (dia === 6) {
  console.log("Sexta feira");
} else if (dia === 7) {
  console.log("Sabado");
} else {
  console.log("dia invalido");
}

var r = "";
switch (dia) {
  case 1:
    r = "Domingo";
    break;
  case 2:
    r = "segunda";
    break;
  case 3:
    r = "terça";
    break;
  case 4:
    r = "quarta";
    break;
  case 5:
    r = "quinta";
    break;
  case 6:
    r = "sexta";
    break;
  case 7:
    r = "sábado";
    break;

  default:
    r = "Dia invalido";
}

console.log(r);

// operador ternario

a = 6;
b = 7;

var resposta = a > b ? "Maior" : a < b ? "Menor" : "igual";
console.log(resposta);

var diaSemana =
  dia === 1
    ? "Domingo"
    : dia === 2
    ? "Segunda"
    : dia === 3
    ? "Terça"
    : dia === 4
    ? "Quarta"
    : dia === 5
    ? "Quinta"
    : dia === 6
    ? "sexta"
    : dia === 7
    ? "Sábado"
    : "dia invalido";
console.log(diaSemana)

// somatorio com while

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10){
    //somatorio = somatorio + numeroAtual;
    somatorio += numeroAtual;
    numeroAtual++;
}

console.log('A soma é ' + somatorio)

var numeroAtual = 1;
var somatorio = 0;

do {
    somatorio += numeroAtual;
    numeroAtual++;
} while (numeroAtual <= 10)

console.log('A soma é ' + somatorio)

somatorio = 0
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++){
    somatorio += numeroAtual;
}

console.log('A soma é ' + somatorio)
