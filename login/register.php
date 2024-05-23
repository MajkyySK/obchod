<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Cesta k súboru, kam sa údaje uložia
    $filename = 'users.txt';

    // Formát údajov, ktoré sa uložia do súboru
    $userData = "Username: $username, Email: $email, Password: $password" . PHP_EOL;

    // Uloženie údajov do súboru
    file_put_contents($filename, $userData, FILE_APPEND);

    echo "Registration successful. Data saved to $filename";

$file = fopen("users.txt", "a") or die("Unable to open file!");
$data = $_POST['username'] . "," . $_POST['email'] . "," . password_hash($_POST['password'], PASSWORD_DEFAULT) . "\n";
if (fwrite($file, $data) === FALSE) {
    echo "Cannot write to file.";
} else {
    echo "Record saved.";
}
fclose($file);
}
?>