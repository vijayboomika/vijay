<?php
error_reporting(0);

session_start();

$servername = "localhost";
$username = "root";
$password ="";
$dbname ="company_crud";




try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected Successfully";
    }
catch(PDOException $e)
{
    echo "Connection faield: " . $e->getMessage();exit;
}



?>