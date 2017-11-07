<?php

$message = "Message:<br>\r\n";
foreach ($_POST as $key => $value) {
	$message .= "$key = $value<br>\r\n";
}

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$send_result = mail("email", "Site Message", $message, $headers);

$response = new class {
	public $error = "";
	public $message = "";
};

if ($send_result) {
	$response->message = "The message was sent.";
} else {
	$response->error = "Message not sent. Fix the errors and try again.";
}
/*
{
message: "";
error: "";
}

 */
echo json_encode($response);

