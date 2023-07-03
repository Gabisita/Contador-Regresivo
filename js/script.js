function cuentaRegresiva() {
  const numerosElementos = document.getElementsByClassName("numero");

  const ahora = new Date();
  const fechaObjetivo = new Date(ahora.getFullYear() + 1, 0, 1);

  const diferencia = fechaObjetivo - ahora;

  let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  let minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  let segundos = Math.floor((diferencia / 1000) % 60);

  for (let i = 0; i < numerosElementos.length; i++) {
    numerosElementos[i].textContent = (i === 0) ? dias : (i === 1) ? horas : (i === 2) ? minutos : segundos;
  }

  setTimeout(cuentaRegresiva, 1000);
}

cuentaRegresiva();
