$( "#mostrarTodos" ).click(function() {
    cargarMasComentarios();
});
//Creacion de condicional de si elemento.precio es menor o igual a y mayor o igual a muestreme de lo contrario no haga nada
function insertarComentarios(comentarios){
    $.each(comentarios,function(indice,elemento){
        var insertar = "<div class='card-panel grey lighten-5 z-depth-1' style='width: 100%'>"+
                            "<div class='row valign-wrapper'>"+
                                "<div class='col s2'>"+
                                    "<img src='./img/home.jpg' width='120' height='200'>"+
                                "</div>"+
                                "<div class='col s10'>"+
                                    "<span class='black-text'>"+
                                        "<p> Direccion: "+elemento.Direccion+"</p>"+
                                        "<p> Ciudad: "+elemento.Ciudad+"</p>"+
                                        "<p> Telefono: "+elemento.Telefono+"</p>"+
                                        "<p> Codigo Postal: "+elemento.Codigo_Postal+"</p>"+
                                      "<p> Tipo: "+elemento.Tipo+"</p>"+
                                        "<p> Precio: "+elemento.Precio+"</p>"+
                                    "</span>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $("#comentarios").append(insertar);
    });
}







function  cargarMasComentarios(){

/*Estructura fetch*/

fetch("./data-1.json")
.then(function(respuesta){
    respuesta.json().then(function(datos){
        insertarComentarios(datos);
    });
})
}


$.ajax({
    url:"./ciudades.php",
    method: 'GET',
    data:{},
    success: function (data){
    //En esta seccion se creara el codigo para la gestion de ciudades
    var data= JSON.parse(data);
    i=0;
        $.each(data, function(ind, elemento){
            $("#selectCiudad").append('<option value='+elemento+'>'+elemento+'</option>');
        })
    }
       
})

$.ajax({
    url:"./tipos.php",
    method: 'GET',
    data:{},
    success: function (data){
    //En esta seccion se creara el codigo para la gestion de ciudades
    var data= JSON.parse(data);
    i=0;
        $.each(data, function(ind, elemento){
            $("#selectTipo").append('<option value='+elemento+'>'+elemento+'</option>');
        })
    }
       
})

//Peticion de la informacion de el formulario para buscar por ciudad tipo y precio


$("#submitButton").click(function(event){
    ciudad = $('form').find('select[name="ciudad"]').val();
    tipo = $('form').find('select[name="tipo"]').val();
    precio = $('form').find('input[name="precio"]').val();
    event.preventDefault();

    $.ajax({
        url: "./consulta_valor.php",
        type: 'GET',
        data: {ciudad: ciudad, tipo: tipo, precio: precio},
        success: function (data){
            //En esta seccion se creara el codigo para la gestion de ciudades
            var data= JSON.parse(data);
            i=0;
                $.each(data, function(ind, elemento){
                    fetch("./data-1.json")
                    .then(function(respuesta){
                        respuesta.json().then(function(datos){
                            insertarComentarios2(datos);
                        });
                    })

                    function insertarComentarios2(comentarios){
                        $.each(comentarios,function(indice,numero){
                             
                             if(numero.Id == elemento){
                             var insertar = "<div class='card-panel grey lighten-5 z-depth-1' style='width: 100%'>"+
                                "<div class='row valign-wrapper'>"+
                                    "<div class='col s2'>"+
                                        "<img src='./img/home.jpg' width='120' height='200'>"+
                                    "</div>"+
                                    "<div class='col s10'>"+
                                        "<span class='black-text'>"+
                                            "<p> Direccion: "+numero.Direccion+"</p>"+
                                            "<p> Ciudad: "+numero.Ciudad+"</p>"+
                                            "<p> Telefono: "+numero.Telefono+"</p>"+
                                            "<p> Codigo Postal: "+numero.Codigo_Postal+"</p>"+
                                          "<p> Tipo: "+numero.Tipo+"</p>"+
                                            "<p> Precio: "+numero.Precio+"</p>"+
                                        "</span>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";
                            $("#comentarios").append(insertar);
                             }
                        });
                    }
                })
            }
        
    }).done(function(data){
        console.log(data);
    });

    })  

