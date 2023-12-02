<?php
$nameErr = $companyErr = $contactErr = $emailErr = $messageErr = $captchaErr = "";
$name = $company = $contact = $email = $message = $captcha = "";
$emailSent = false;
//If the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	
	if (empty($_POST["name"])) {
		$nameErr = "* Name is required";
		$hasError = true;
	} else {
		$name = test_input($_POST["name"]);
		// check if name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
			$nameErr = "* Only letters and white space allowed";
			$hasError = true;			
		}
	}
	
	if (empty($_POST["company"])) {
		$companyErr = "* Company Name is required";
		$hasError = true;
	} else {
		$name = test_input($_POST["company"]);
		// check if name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/", $company)) {
			$companyErr = "* Only letters and white space allowed";
			$hasError = true;			
		}
	}
	
	if (empty($_POST["email"])) {
		$emailErr = "* Email is required";
		$hasError = true;
	} else {
		$email = test_input($_POST["email"]);
		// check if e-mail address is well-formed
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		  $emailErr = "* Invalid email format"; 
		}
	}
	
	if (empty($_POST["contact"])) {
		$contactErr = "* contact no. is required";
		$hasError = true;
	} else {
		$contact = test_input($_POST["contact"]);
		if (!preg_match("/^[0-9()\-+ ]+$/", $contact)) {
			$contactErr = "* contact no. is invalid";
			$hasError = true;			
		}
	}
	
	if (empty($_POST["message"])) {
		$messageErr = "* message is required";
		$hasError = true;
	} else {
		$message = test_input($_POST["message"]);
	}
	
	if(!isset($hasError)) {
		$emailTo = 'info@avajet.in' ; // note the comma
		$body = '<html><body>';
		$body .= '<table rules="all" style="font-family: "Open Sans"; cellpadding="10">';
		$body .= "<tr><td><strong>Name</strong> </td><td><strong>:</strong> </td><td>" . $name . "</td></tr>";
		$body .= "<tr><td><strong>Email</strong> </td><td><strong>:</strong> </td><td>" . $email . "</td></tr>";
		$body .= "<tr><td><strong>Contact</strong> </td><td><strong>:</strong> </td><td>" . $contact . "</td></tr>";
		$body .= "<tr><td><strong>Message</strong> </td><td><strong>:</strong> </td><td>" . $message . "</td></tr>";
		$body .= "</table>";
		$body .= "</body></html>"; 
		//$body = "Name: $name \n\nContact No: $contactnumber \n\nEmail: $email \n\nMessage:\n $message";
		//echo $body;exit;
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: Avajet <info@avajet.in>' . "\r\n";
		$headers .= 'bcc: sanaullah7867@gmail.com' . "\r\n";
		$subject = "Avajet Enquiry";
		if(mail($emailTo, $subject, $body, $headers)) {
			$emailSent = true;
			header('location:thankyou.php');
			//echo "<script>window.open('thankyou.php', '_blank');</script>";
			//echo "<script>window.location.href='thankyou.php';</script>";
			
		}
	}
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

?>