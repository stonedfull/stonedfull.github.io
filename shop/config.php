<?php
    $db = mysqli_connect('localhost','root','systemofadown','school');
    mysqli_set_charset($db, 'utf8');
    if (!$db) {
    	exit(mysqli_error());
    }
?>