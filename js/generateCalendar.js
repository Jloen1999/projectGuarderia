function generateCalendar(month, year) {
  // Obtiene el primer día del mes
  const firstDay = new Date(year, month - 1, 1);

  // Obtiene el último día del mes
  const lastDay = new Date(year, month, 0);

  // Obtiene el nombre del mes
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthName = monthNames[month - 1];

  // Crea el calendario en HTML
  let calendarHtml = `
    <table>
      <tr>
        <th colspan="7">${monthName} ${year}</th>
      </tr>
      <tr>
        <th>L</th>
        <th>M</th>
        <th>M</th>
        <th>J</th>
        <th>V</th>
        <th>S</th>
        <th>D</th>
      </tr>
  `;

  // Crea una fila por cada semana del mes
  let currentDay = new Date(firstDay);
  while (currentDay <= lastDay) {
    calendarHtml += '<tr>';

    // Crea una celda por cada día de la semana
    for (let i = 0; i < 7; i++) {
      let className = '';

      // Marca los días del mes actual y los días de otro mes con clases CSS diferentes
      if (currentDay.getMonth() < month - 1 || currentDay.getFullYear() < year) {
        className = 'other-month';
      } else if (currentDay.getMonth() > month - 1 || currentDay.getFullYear() > year) {
        className = 'other-month';
      } else if (currentDay.getDate() === new Date().getDate() && currentDay.getMonth() === new Date().getMonth() && currentDay.getFullYear() === new Date().getFullYear()) {
        className = 'today';
      }

      // Agrega el día al calendario
      calendarHtml += `<td class="${className}">${currentDay.getDate()}</td>`;

      // Incrementa el día en uno
      currentDay.setDate(currentDay.getDate() + 1);
    }
    calendarHtml += '</tr>';
  }

  calendarHtml += '</table>';

  // Devuelve el calendario en HTML
  return calendarHtml;
}

module.exports = generateCalendar;
