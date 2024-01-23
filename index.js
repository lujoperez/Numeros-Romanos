function convertToRoman(num) {
  let ingreso = num;
  //converidor de romano a decimal
  let string = num.toString(num);
  let redex = /[0-9]/g;
  //VERIFICA QUE NO TENGA NUMERO Y SEA SOLO LETRAS
  let test = redex.test(string);
  let redex2 = /[0-9][a-z]/gi;
  let redex3 = /[a-z][0-9]/gi;
  let test2 = redex2.test(string);
  let test3 = redex3.test(string);

  if (num == 0) {
    return (document.getElementById("decimalX").innerHTML =
      "<span>" + "Ingrese  numero mayor a 0" + "</span>");
  }

  if (test2 === true || test3 === true) {
    return (document.getElementById("decimalX").innerHTML =
      "<span>" + "Ingrese numero o letras no ambos" + "</span>");
  }
  //romano a decimal
  if (typeof num == "string" && test == 0) {
    num = num.toUpperCase().split("");
    let decimal = 0;
    let romanosObj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      V: 5,
      I: 1,
    };

    // IV  ==  4
    let ii = 0;
    let iteracion = 0;
    let nAnterior = 0;
    for (let i = 0; i < num.length; i++) {
      //let nAnterior = 0;
      for (let key in romanosObj) {
        if (key == num[i]) {
          if (romanosObj[key] > nAnterior && i > 0) {
            decimal += romanosObj[key] - nAnterior;
            decimal -= nAnterior;
            nAnterior = romanosObj[key];
          } else {
            nAnterior = romanosObj[key];
            decimal += romanosObj[key];
          }
        }
      }
    }
    return (document.getElementById("decimalX").innerHTML =
      "<span>" + string + " EN DECIMAL ES: " + decimal + "</span>");
  }

  //CONVERTIDR DE DECIMAL A ROMANO
  //la variable resultlado guarda el resultado
  let resultado = "";
  //objeto romanos tiene la informacion de los valores en decimal para hacer la conversion
  let romanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  //iteramos sobre el objeto
  for (let letra in romanos) {
    //dentro hacemos un bucle para verificar que
    //el numero ingresado sea mayor o igual al valor de la letra en la que estamos
    //de ser asi agrega letra
    while (num >= romanos[letra]) {
      resultado += letra;
      num -= romanos[letra];
    }
  }

  return (document.getElementById("decimalX").innerHTML =
    "<span>" + ingreso + " en ROMANO ES: " + resultado + "</span>");
}
