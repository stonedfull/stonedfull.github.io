<?php

$fio = $_POST['fio'];
$email = $_POST['email'];
$theme = $_POST['theme'];
$message = $_POST['message'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$theme = htmlspecialchars($theme);
$message = htmlspecialchars($message);

$fio = urldecode($fio);
$email = urldecode($email);
$theme = urldecode($theme);
$message = urldecode($message);

$fio = trim($fio);
$email = trim($email);
$theme = trim($theme);
$message = trim($message);

if (mail("example@gmail.com", "Заявка с сайта:".$theme, "ФИО:".$fio."\n".$message, .$email "\r\n")) {     
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>