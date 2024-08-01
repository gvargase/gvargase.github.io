<?php
    $name = $_POST['formNombre'];
    $mail = $_POST['formCorreo'];
    $message = $_POST['formMensaje'];

    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Este mensaje fue enviado por: " . $name . " \r\n";
    $message .= "Su e-mail es: " . $mail . " \r\n";
    $message .= "Mensaje: " . $_POST['formMensaje'] . " \r\n";
    $message .= "Enviado el: " . date('d/m/Y', time());

    $para = 'gabrielavargas735@gmail.com';
    $asunto = 'Mensaje del usuario';

    mail($para, $asunto, utf8_decode($message), $header);

    header("Location:../agradecimiento.html");
?>