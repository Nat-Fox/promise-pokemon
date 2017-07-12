// // expression
// var llamarAjax = function() {
//     $.ajax({
//         url: 'http://pokeapi.co/api/v2/pokemon',
//         type: 'GET',
//         dataType: 'json',
//         data: { 'limit': '15' },
//         success: function(response) {
//             console.log(response);
//             return response;
//         },
//         error: function(error) {
//             console.log(error);
//             return error;
//         }
//     })
// }

// console.log('Esta es una prueba');
// var respuesta = llamarAjax(); // Queda como undefined por que ajax no ha terminado de correr, es interrumpido

// respuesta.results.forEach(
//     function(el) {
//         console.log(el.name);
//     });

// console.log('Este es el mensaje despues de la llamada del ajax');

$.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon',
    type: 'GET',
    datatype: 'JSON',
    data: { 'limit': '15' },
})

.done(function(respuesta) {
        respuesta.results.forEach(function(el) {
            console.log('name', el.name);
            document.write(el.name + '<br>');
        })
    })
    .done(function() {
        document.write('Este es el mensaje de después de llama ajax');
    })


// imprimir pokemon + habilidad 10pts (una sola habilidad)
// imprimir pokemon + todas las habilidades 15pts
// imprimir pokemon de habilidades y cualquier otra cosa del pokemon 20 pts
// no usar document.write 30 pts
// hacerlo con jquery 35 pts
// agregar css 45 pts
.fail(function() {
        console.log('error')
    })
    .always(function() {
        console.log('complete')
    });