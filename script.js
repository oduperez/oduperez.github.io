document.addEventListener('DOMContentLoaded', function() {
    function aceptar() {
        alert('¡Gracias por aceptar!');
    }

    function moverBoton() {
        var botonNo = document.getElementById('no');
        var maxX = window.innerWidth - botonNo.offsetWidth;
        var maxY = window.innerHeight - botonNo.offsetHeight;
        var x = Math.floor(Math.random() * maxX);
        var y = Math.floor(Math.random() * maxY);
        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));
        botonNo.style.left = x + 'px';
        botonNo.style.top = y + 'px';
    }

    document.getElementById('si').onclick = aceptar;
    document.getElementById('no').onclick = moverBoton;
});
