<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Cesta k súboru, kde sú uložené údaje
    $filename = 'users.txt';

    if (file_exists($filename)) {
        // Načítanie všetkých riadkov zo súboru
        $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        $loginSuccessful = false;

        foreach ($lines as $line) {
            // Rozdelenie riadku na jednotlivé údaje
            list($storedUsername, $storedEmail, $storedPasswordHash) = explode(',', str_replace(['Username: ', ' Email: ', ' Password: '], '', $line));

            // Overenie emailu a hesla
            if ($email === trim($storedEmail) && password_verify($password, trim($storedPasswordHash))) {
                $loginSuccessful = true;
                break;
            }
        }

        if ($loginSuccessful) {
            echo "Login successful!";
        } else {
            echo "Invalid email or password.";
        }
    } else {
        echo "No users registered yet.";
    }

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