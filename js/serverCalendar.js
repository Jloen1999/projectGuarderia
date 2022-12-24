const express = require('express');
const app = express();

// Incluye la función generateCalendar
const generateCalendar = require('./generateCalendar');

// Configura el servidor para permitir el acceso a los archivos estáticos (como el archivo calendar.js)
app.use(express.static('public'));

// Manejador de petición para la ruta "/get-calendar"
app.get('/get-calendar', (req, res) => {
  // Obtiene el mes y el año de la petición
  const month = parseInt(req.query.month);
  const year = parseInt(req.query.year);

  // Genera el calendario en HTML
  const calendarHtml = generateCalendar(month, year);

  // Envía el calendario al cliente
  res.send(calendarHtml);
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
