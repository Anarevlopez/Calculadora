function saludar(){
    alert("Hola...Ana")
}

function sumar() {
let n1 = parseFloat(document.getElementById("num1").value);
let n2 = parseFloat(document.getElementById("num2").value);
let resultado = n1 + n2;

document.getElementById("resultado").innerText = "Resultado: " + resultado;
}  