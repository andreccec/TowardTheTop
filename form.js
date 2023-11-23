document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmarPassword').value;
  
    if (nombre === '') {
      alert('Por favor, ingrese su nombre.');
      return;
    }
  
    if (email === '') {
      alert('Por favor, ingrese su email.');
      return;
    }
  
    if (password === '') {
      alert('Por favor, ingrese una contraseña.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    // Redireccionar a un enlace después de las validaciones
    window.location.href = 'carrito.html'; // Cambia la URL por la que desees redireccionar
  });