
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