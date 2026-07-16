function sumar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function restar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function dividir(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 / n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function potencia() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultado = n1 ** n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function raizCuadrada() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let resultado = Math.sqrt(n1);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}