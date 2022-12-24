// Manejador de evento para el botón de envío
  document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario y el botón de envío
    const form = document.getElementById('search-form');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', (event) => {
      // Evita que el formulario sea enviado
      event.preventDefault();

      // Obtiene la consulta de búsqueda
      const query = document.getElementById('query').value;
      console.log(query)
      // Envía la petición Ajax al servidor
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `/search?q=${query}`);
      xhr.send();

      // Cuando el servidor responda, muestra los resultados de la búsqueda en la página
      xhr.onload = () => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = xhr.response;
      };
    });
  });