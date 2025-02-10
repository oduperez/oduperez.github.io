function aceptar() {
    alert('¡Gracias por aceptar!');
}

function moverBoton() {
    var botonNo = document.getElementById('no');
    var contenedor = document.querySelector('.container');
    var maxX = contenedor.clientWidth - botonNo.offsetWidth;
    var maxY = contenedor.clientHeight - botonNo.offsetHeight;
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    botonNo.style.left = x + 'px';
    botonNo.style.top = y + 'px';
}
