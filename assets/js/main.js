function firstMayus(str) {
    return str[0].toUpperCase() + str.substring(1, str.length);
}

$.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon',
        type: 'GET',
        datatype: 'JSON',
        data: { 'limit': '12' },
    })
    // Ocurre despues de llamar al ajax
    .done(function(respuesta) {
        respuesta.results.forEach(function(data, indice) {
            //console.log('data', data);
            $('#nombre-pokemones').append(
                `<div class="row center">
                    <div class="col s3"><span class="card-content">${firstMayus(data.name)}</span></div>
                    <div class="col s3"><span id="first-ability-${indice}" class="card-content"></span></div>
                    <div class="col s3"><span id="total-abilities-${indice}" class="card-content"></span></div>
                    <div class="col s3"><span id="types-${indice}" class="card-content"></span></div>
                </div>`
            );

        })
    })
    //Llamo a la segunda api
    .done(function(secondApi) {
        secondApi.results.forEach(function(data, indice) {
            console.log(data);
            // llamada a la nueva api
            $.ajax({
                url: data.url,
                type: 'GET',
                datatype: 'JSON',
                data: { 'limit': '1' },
            })

            .done(function(respuesta) {
                console.log('data url', data.url);
                console.log('respuesta', respuesta.types)
                    // primera habilidad
                $(`#first-ability-${indice}`).append(respuesta.abilities[0].ability.name);
                // todas las habilidades
                respuesta.abilities.forEach(function(ability) {
                    console.log('ability', ability.ability.name);
                    $(`#total-abilities-${indice}`).append(`<span>${ability.ability.name}<span><br>`);
                });

                respuesta.types.forEach(function(type) {
                    console.log('type', type);
                    $(`#types-${indice}`).append(`<span>${type.type.name}<span><br>`);
                })

            }).fail(function() {
                console.log('error en la segunda llamada de la api')
            })
        });

        //     .done(function(data) {
        //         Array.from(data.abilities).forEach(function(e) {
        //             console.log(e.ability.name)
        //         })

        //     })

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