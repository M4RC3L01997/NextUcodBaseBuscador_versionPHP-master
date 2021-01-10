<?php 
//Extraccion del archivo .json
$contenido = json_decode(file_get_contents('data-1.json'));

  $tipos = [];
foreach ($contenido as $value) {
  array_push($tipos, $value->Tipo);
  }
  echo json_encode(array_unique($tipos));

?>