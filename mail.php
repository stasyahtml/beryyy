<?php

$recepient = "n.shatna.kvk@gmail.com";
$sitename = "Название сайта";

$email = trim($_POST["email"]);
$message = "Мой имейл: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");