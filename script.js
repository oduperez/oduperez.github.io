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
        botonNo.style.left = x + 'px';
        botonNo.style.top = y + 'px';
    }

    document.getElementById('si').onclick = aceptar;
    document.getElementById('no').onclick = moverBoton;
});
