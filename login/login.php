<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    $users = file('users.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($users as $user) {
        list($storedUsername, $storedEmail, $storedPassword) = explode(',', $user);

        if ($email == $storedEmail && password_verify($password, $storedPassword)) {
            echo "Login successful! Welcome, " . $storedUsername;
            exit;
        }
    }

    

    echo "Login failed! Incorrect email or password.";
}
?>