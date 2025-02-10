document.addEventListener('DOMContentLoaded', function() {
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
        x = Math.max(0, Math.min(x, maxX - botonNo.offsetWidth));
        y = Math.max(0, Math.min(y, maxY - botonNo.offsetHeight));
        botonNo.style.left = x + 'px';
        botonNo.style.top = y + 'px';
    }

    document.getElementById('si').onclick = aceptar;
    document.getElementById('no').onclick = moverBoton;
});
