function start() {
  var inputRange = document.querySelector("#inputRange");
  var inputCurrentNumber = document.querySelector("#inputCurrentNumber");
  var inputNumberText = document.querySelector("#inputCurrentText");

  inputRange.addEventListener("input", function (event) {
    var currentValue = event.target.value;
    inputCurrentNumber.value = currentValue;

    inputNumberText.value = numberToText(currentValue);
  });

  function numberToText(number) {
    var size = number.toString().length;

    if (size === 1) {
      return sizeOnDescription(number);
    }

    if (size === 2) {
      return sizeTwoDescription(number);
    }

    if (size === 3) {
      return sizeThreeDescription(number);
    }
  }
}

function sizeOnDescription(number) {
  if (number === "0") return "Zero";
  if (number === "1") return "Um";
  if (number === "2") return "Dois";
  if (number === "3") return "Tres";
  if (number === "4") return "Quatro";
  if (number === "5") return "Cinco";
  if (number === "6") return "Seis";
  if (number === "7") return "Sete";
  if (number === "8") return "Oito";
  if (number === "9") return "Nove";
}

function sizeTwoDescription(number) {
  if (number === "10") return "dez";
  if (number === "11") return "onze";
  if (number === "12") return "doze";
  if (number === "13") return "Treze";
  if (number === "14") return "quatorze";
  if (number === "15") return "quinze";
  if (number === "16") return "dezesseis";
  if (number === "17") return "dezessete";
  if (number === "18") return "dezoito";
  if (number === "19") return "dezenove";
  if (number === "20") return "vinte";
  if (number === "30") return "trinta";
  if (number === "40") return "quarenta";
  if (number === "50") return "cinquenta";
  if (number === "60") return "sessenta";
  if (number === "70") return "sessenta";
  if (number === "80") return "oitenta";
  if (number === "90") return "noventa";

  var firstCharacter = number[0];
  var secondCharacter = number[1];
  var prefix = "";

  if (firstCharacter === "2") prefix = "vinte e";
  if (firstCharacter === "3") prefix = "trinta e";
  if (firstCharacter === "4") prefix = "quarenta e";
  if (firstCharacter === "5") prefix = "cinquenta e";
  if (firstCharacter === "6") prefix = "sessenta e";
  if (firstCharacter === "7") prefix = "setenta e";
  if (firstCharacter === "8") prefix = "oitenta e";
  if (firstCharacter === "9") prefix = "noventa e";

  return prefix + sizeOnDescription(secondCharacter);
}

function sizeThreeDescription(number) {
  if (number === "100") return "cem";
  if (number === "200") return "duzentos";
  if (number === "300") return "trezentos";
  if (number === "400") return "quatrocentos";
  if (number === "500") return "quinhentos";
  if (number === "600") return "seisentos";
  if (number === "700") return "setecentos";
  if (number === "800") return "outocentos";
  if (number === "900") return "novecentos";
  
  var firstCharacter = number[0];
  var secondCharacter = number[1];
  var thirdCharacter = number[2];
  var secondAndThirdCharacters = number.substring(1)
  var prefix = "";

  if (firstCharacter === "1") prefix = "cento e ";
  if (firstCharacter === "2") prefix = "duzentos e ";
  if (firstCharacter === "3") prefix = "trezentos e ";
  if (firstCharacter === "4") prefix = "quatozentos e";
  if (firstCharacter === "5") prefix = "quinhentos e";
  if (firstCharacter === "6") prefix = "seisentos e";
  if (firstCharacter === "7") prefix = "setecentos e";
  if (firstCharacter === "8") prefix = "outocentos e";
  if (firstCharacter === "9") prefix = "novecentos e";

  if(secondCharacter === '0') {
    return prefix + sizeOnDescription(thirdCharacter);
  }

  return prefix + sizeTwoDescription(secondAndThirdCharacters);
}

start();
