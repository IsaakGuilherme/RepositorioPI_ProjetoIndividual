function mostrarTexto(id) {
    var texto = id.value;
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}