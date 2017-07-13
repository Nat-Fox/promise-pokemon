function firstMayus(str) {
    return str[0].toUpperCase() + str.substring(1, str.length);
}

$.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon',
    type: 'GET',
    datatype: 'JSON',
    data: { 'limit': '12' },
})

.done(function(respuesta) {
        respuesta.results.forEach(function(data) {
            console.log('data', data);
            $('#nombre-pokemones').append(
                `<div class="row center">
                    <div class="col s3"><span class="card-content">${firstMayus(data.name)}</span></div>
                    <div class="col s3"><span class="card-content">2.</span></div>
                    <div class="col s3"><span class="card-content">2.</span></div>
                    <div class="col s3"><span class="card-content">2.</span></div>
                </div>`
            );

        })
    })
    .done(function() {

        console.log('Este es el mensaje de después de llama ajax');
    })
    //Llamo a la segunda api
    .done(function(secondApi) {
        $.ajax({
                url: 'http://pokeapi.co/api/v2/pokemon/1/',
                type: 'GET',
                datatype: 'JSON',
                data: { 'limit': '15' },
            })
            .done(function(data) {
                Array.from(data.abilities).forEach(function(e) {
                    console.log(e.ability.name)
                })

            })
    })


// imprimir pokemon + habilidad 10pts (una sola habilidad)
// imprimir pokemon + todas las habilidades 15pts
// imprimir pokemon de habilidades y cualquier otra cosa del pokemon 20 pts



.fail(function() {
        console.log('error')
    })
    .always(function() {
        console.log('complete')
    });