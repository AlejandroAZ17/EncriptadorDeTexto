function encriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let tituloEncriptado = document.getElementById("titulo-encriptado");
    let textoEncriptado = document.getElementById("parrafoTextoEncriptado");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let botonCopiar = document.getElementById("copiar");
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        textoEncriptado.textContent = textoCifrado;
        tituloMensaje.textContent = "";
        tituloEncriptado.textContent = "Texto Encriptado";
        parrafo.textContent = "";
        botonCopiar.style.display = "flex";
        muñeco.src = "img/transparente.png";
    } else {
        textoEncriptado.textContent = "";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        tituloEncriptado.textContent = "";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "img/Muñeco.png";
        botonCopiar.style.display = "none";
        alert("Debes ingresar un texto");
    }
}

function desencriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let tituloEncriptado = document.getElementById("titulo-encriptado");
    let textoEncriptado = document.getElementById("parrafoTextoEncriptado");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let botonCopiar = document.getElementById("copiar");
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        textoEncriptado.textContent = textoCifrado;
        tituloMensaje.textContent = "";
        tituloEncriptado.textContent = "Texto Desencriptado";
        parrafo.textContent = "";
        botonCopiar.style.display = "flex";
        muñeco.src = "img/transparente.png";
    } else {
        textoEncriptado.textContent = "";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        tituloEncriptado.textContent = "";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "img/Muñeco.png";
        botonCopiar.style.display = "none";
        alert("Debes ingresar un texto");
    }
}

function copiar() {

    let textoCifrado = document.getElementById("parrafoTextoEncriptado");
    let tituloEncriptado = document.getElementById("titulo-encriptado");
    navigator.clipboard.writeText(parrafoTextoEncriptado.textContent);
    tituloEncriptado.textContent = "Texto Copiado";

}