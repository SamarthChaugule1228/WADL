<?php

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

echo "Hi, $name <br>";
echo "Your email is: $email <br>";
echo "Your password is: $password <br>";

?>