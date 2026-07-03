<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name   = htmlspecialchars($_POST['name']);
    $email  = htmlspecialchars($_POST['email']);
    $phone  = htmlspecialchars($_POST['phone']);
    $resume = htmlspecialchars($_POST['resume']);

    $to = "abhijitkaluke3@gmail.com";
    $subject = "New Job Application - Business Development";

    $message = "
    New Candidate Application

    Name : $name
    Email : $email
    Phone : $phone
    Resume : $resume
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)){
        echo "<h2>Application Submitted Successfully!</h2>";
    } else {
        echo "<h2>Failed to send application.</h2>";
    }
}
?>

