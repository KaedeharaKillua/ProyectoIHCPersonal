function validarLogin(event) {
  event.preventDefault();

  const CLAVE_SECRETA = "22062007";
  const passwordInput = document.getElementById("password").value;

  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");

    window.location.href = "LP.html";
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}
