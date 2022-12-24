/**
 * Función que permite la traducción del contenido de una página web
 * utilizando archivos de traducción y JavaScript sin utilizar ninguna
 * API de traducción externa.
 */

document.querySelector('#traducir').addEventListener('click', traducir);

function traducir() {
    // Obtiene el idioma seleccionado por el usuario
    const idioma = document.querySelector('#idioma').value;
    // Carga el archivo de traducción del idioma seleccionado
    fetch(`${idioma}.json`)
        .then((response) => response.json())
        .then((traducciones) => {
            // Utiliza las traducciones para actualizar la página
            traducciones.welcome = "Welcome to GuarderíaCC";
            traducciones.articulo1 = "About us\n" +
                "CuerríaCC is an authorized center for the first cycle of early childhood education by the Education Council of Extremadura in Cáceres that has been serving children and their families for 30 years and has 4 fundamental values:"
            traducciones.articulo2 = "Our great team of professionals in education,\n" +
                "Our adapted spaces (1000 m 2 ) to the development of the educational process,\n" +
                "Our complete package of services,\n" +
                "And our excellent location in the heart of Cáceres.\n" +
                "It works to achieve a comprehensive education, through early stimulation, favoring the maturational development and the personality of children in a harmonious and comprehensive way, through play and from a strong affective component essential for this very important stage in the life of children. And it also has the participation of parents when it comes to managing this center and developing joint center-family activities."
            document.querySelector('#mensaje').textContent = traducciones.welcome;
            document.querySelector('#articulo1').textContent = traducciones.articulo1;
            document.querySelector('#articulo2').textContent = traducciones.articulo2;
        });
}