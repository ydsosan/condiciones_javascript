//Parte 1
const color = document.querySelector("#color");

function borde() {
  if (color.className == "red") {
    //aplica borde y quita clase
    color.className = "";
  } else {
    color.className = "red";
  }
}

//Parte 2

function suma() {
  const n1 = document.querySelector("#n1").value;
  const n2 = document.querySelector("#n2").value;
  const n3 = document.querySelector("#n3").value;

  const total = parseInt(n1) + parseInt(n2) + parseInt(n3);
  if (total < 11) {
    sticker = document.querySelector("#total");
    sticker.innerHTML = total;
    text = document.querySelector("#limite_stickers");
    text.innerHTML = "Paga en el carrito de compras";
  } else {
    sticker = document.querySelector("#total");
    sticker.innerHTML = total;
    text = document.querySelector("#limite_stickers");
    text.innerHTML =
      "Llevas la cantidad máxima de stickers, debe ser menor a 10";
  }
}

//parte 3

function enviar() {
  var c1 = document.querySelector("#v1").value;
  var c2 = document.querySelector("#v2").value;
  var c3 = document.querySelector("#v3").value;
  if (c1 == 9 && c2 == 1 && c3 == 1) {
    a = document.querySelector("#pass");
    a.innerHTML = "password 1 correcto";
  } else if (c1 == 7 && c2 == 1 && c3 == 4) {
    a = document.querySelector("#pass");
    a.innerHTML = "password 2 correcto";
  } else {
    a = document.querySelector("#pass");
    a.innerHTML = "password incorrecto";
  }
}
