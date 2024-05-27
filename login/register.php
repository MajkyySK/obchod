<?php
ectract($_REQUEST);
$file=fopen("users.txt","a");

fwrite($file,"name :");
fwrite($file, $username ."\n");
fwrite($file,"Email :");
fwrite($file, $email ."\n");
fwrite($file,"Password :");
fwrite($file, $password ."\n");
fclose($file);
?>