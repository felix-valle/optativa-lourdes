document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    cons    t nombre = document.getElementById('nombreInput').value;
    document.getElementById('salida').textContent = '¡Hola, ' + nombre + '!';
  });
});
