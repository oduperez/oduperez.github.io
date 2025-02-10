function aceptar() {
    alert('¡Gracias por aceptar!');
}

function moverBoton() {
    var botonNo = document.getElementById('no');
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    botonNo.style.left = x + 'px';
    botonNo.style.top = y + 'px';
}
