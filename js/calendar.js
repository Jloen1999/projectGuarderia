document.addEventListener('DOMContentLoaded', () => {
  // Obtiene los elementos del formulario
  const form = document.getElementById('form');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const showCalendarButton = document.getElementById('show-calendar');
  const calendar = document.getElementById('calendar');

  // Manejador de evento para el botón "Mostrar calendario"
  showCalendarButton.addEventListener('click', (event) => {
    // Evita que el formulario sea enviado
    event.preventDefault();

    // Obtiene el mes y el año seleccionados
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Envía la petición Ajax al servidor para obtener el calendario
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/get-calendar?month=${month}&year=${year}`);
    xhr.send();
    xhr.onload = () => {
      // Muestra el calendario en la página
      calendar.innerHTML = xhr.response;
    };
  });
});
