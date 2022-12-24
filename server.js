const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // Parsea la consulta de búsqueda de la petición Ajax
  const query = querystring.parse(url.parse(req.url).query);

  // Realiza la búsqueda y obtiene los resultados
  const results = search(query.q);
  console.log(results);
  // Devuelve los resultados al cliente en formato HTML
  let resultsHtml = '<ul>';
  for (const result of results) {
    resultsHtml += `<li><a href="${result.url}">${result.title}</a></li>`;
  }
  resultsHtml += '</ul>';
  res.end(resultsHtml);
});

// Inicia el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

// Función de búsqueda (de ejemplo)
function search(query) {
  // Realiza la búsqueda y obtiene los resultados
  // (de ejemplo)
  return [
    { title: `Resultado 1 para "${query}"`, url: 'https://example.com/result-1' },
    { title: `Resultado 2 para "${query}"`, url: 'https://example.com/result-2' },
    { title: `Resultado 3 para "${query}"`, url: 'https://example.com/result-3' },
  ];
}
