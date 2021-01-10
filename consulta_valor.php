
<?php

//Capturar la informacion
$ciudad = $_GET['ciudad'];
$tipo = $_GET['tipo'];
$precio = $_GET['precio'];
//Dividiendo los valores
list($min, $max) = explode(';', $precio);

if(($tipo =="tipo") && ($ciudad == "Ciudad")){
    //Traer la informacion del json
    $contenido = json_decode(file_get_contents('data-1.json'));
    $id = [];
    foreach ($contenido as $value) {
        //Limpiar variable
        //Limpiando la informacion y dividiendola
        list($valor, $ceros) = explode(',', $value->Precio);
        $valor;
        list($eliminado, $contenidoLimpio) = explode('$', $valor);
        $contenidoLimpio;
        $total = $contenidoLimpio.$ceros;
        if(($total >= $min) &&($total <= $max)){
            array_push($id, $value->Id);
        }else{}
    }
    echo json_encode($id);
    
}else if(($tipo == "tipo") && ($ciudad != "Ciudad")){
    $contenido = json_decode(file_get_contents('data-1.json'));
    $id = [];
    foreach($contenido as $value){
        if($ciudad == $value->Ciudad){
            list($valor, $ceros) = explode(',', $value->Precio);
            $valor;
            list($eliminado, $contenidoLimpio) = explode('$', $valor);
            $contenidoLimpio;
            $total = $contenidoLimpio.$ceros;
            if(($total >= $min) &&($total <= $max)){
                array_push($id, $value->Id);
            }
        }else{

        }
    }
    echo json_encode($id);
}else if(($tipo != "tipo") && ($ciudad == "Ciudad")){
    $contenido = json_decode(file_get_contents('data-1.json'));
    $id = [];
    foreach($contenido as $value){
        if($tipo == $value->Tipo){
            list($valor, $ceros) = explode(',', $value->Precio);
            $valor;
            list($eliminado, $contenidoLimpio) = explode('$', $valor);
            $contenidoLimpio;
            $total = $contenidoLimpio.$ceros;
            if(($total >= $min) &&($total <= $max)){
                array_push($id, $value->Id);
            }
        }else{

        }
    }
    echo json_encode($id);
}
else if(($tipo != "tipo") && ($ciudad != "Ciudad")){
    $contenido = json_decode(file_get_contents('data-1.json'));
    $id = [];
    foreach($contenido as $value){
        if(($tipo == $value->Tipo) && ($ciudad == $value->Ciudad)){
            list($valor, $ceros) = explode(',', $value->Precio);
            $valor;
            list($eliminado, $contenidoLimpio) = explode('$', $valor);
            $contenidoLimpio;
            $total = $contenidoLimpio.$ceros;
            if(($total >= $min) &&($total <= $max)){
                array_push($id, $value->Id);
            }
        }else{

        }
    }
    echo json_encode($id);
}

?> 