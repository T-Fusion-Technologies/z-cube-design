<?php
$nameErr = $contactErr = $emailErr = $locationErr = $attachmentErr = $messageErr = $captchaErr = "";
$name = $contact = $email = $location = $upload = $message_text = $captcha = "";
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

	if (empty($_POST["email"])) {
		$emailErr = "* Email is required";
		$hasError = true;
	} else {
		$email = test_input($_POST["email"]);
		$email_regex = ' /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/';
		if (!preg_match($email_regex, $email)) {
			$emailErr = "* Invalid email format"; 
			$hasError = true;			
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


	if (empty($_POST["location"])) {
		$locationErr = "* Location is required";
		$hasError = true;
	} else {
		$location = test_input($_POST["location"]);
		/* if (!preg_match("/^[0-9()\-+ ]+$/", $location)) {
			$locationtErr = "* Location is invalid";
			$hasError = true;			
		} */
	}
	if ($_FILES["attachment"]["error"] > 0) {
		$attachmentErr = "* attachment is  required";
		$hasError = true;
	} else {
		$allowed =  array('pdf', 'docx');
		$filename = $_FILES['attachment']['name'];
		$ext = pathinfo($filename, PATHINFO_EXTENSION);
		if(!in_array($ext,$allowed) ) {
			$attachmentErr = "* Please supply a valid file (.docs or pdf)";
			$hasError = true;
		}
	}

	if (empty($_POST["message"])) {
		$messageErr = "* message is required";
		$hasError = true;
	} else {
		$message_text = test_input($_POST["message"]);
	}

	if($hasError != 1) {
		$emailTo = 'info@.com' ; // note the comma
		$subject = " Career Enquiry";
		$body = '<html><body>';
		$body .= '<table rules="all" style="font-family: "Open Sans"; cellpadding="10">';
		$body .= "<tr><td><strong>Name</strong> </td><td><strong>:</strong> </td><td>" . $name . "</td></tr>";
		$body .= "<tr><td><strong>Email</strong> </td><td><strong>:</strong> </td><td>" . $email . "</td></tr>";
		$body .= "<tr><td><strong>Contact</strong> </td><td><strong>:</strong> </td><td>" . $contact . "</td></tr>";
		$body .= "<tr><td><strong>Message</strong> </td><td><strong>:</strong> </td><td>" . $message_text . "</td></tr>";
		$body .= "<tr><td><strong>Location</strong> </td><td><strong>:</strong> </td><td>" . $location . "</td></tr>";
		$body .= "</table>";
		$body .= "</body></html>"; 
		//$body = 'Name : '.$name.'<br /> Phone : '.$phone.'<br /> Qualification : '.$qualification.'<br /> Applying : '.$applying;
		/* GET File Variables */ 
		$tmpName = $_FILES['attachment']['tmp_name']; 
		$fileType = $_FILES['attachment']['type']; 
		$fileName = $_FILES['attachment']['name']; 
		/* Start of headers */ 
		$headers = 'From:  Career Enquiry <info@.com>';
		if (file($tmpName)) {
			/* Reading file ('rb' = read binary)  */
			$file = fopen($tmpName, 'rb'); 
			$data = fread($file,filesize($tmpName)); 
			fclose($file); 
			/* a boundary string */
			$randomVal = md5(time()); 
			$mimeBoundary = "==Multipart_Boundary_x{$randomVal}x"; 
			/* Header for File Attachment */
			$headers .= "\nMIME-Version: 1.0\n"; 
			$headers .= "Content-Type: multipart/mixed;\n" ;
			$headers .= " boundary=\"{$mimeBoundary}\""; 

			/* Multipart Boundary above message */
			$message = "This is a multi-part message in MIME format.\n\n" . 
			"--{$mimeBoundary}\n" . 
			//"Content-Type: text/plain; charset=\"iso-8859-1\"\n" . 
			"Content-type:text/html; charset=iso-8859-1\r\n" . 
			"Content-Transfer-Encoding: 7bit\n\n" . 
			$message . $body . " \n\n"; 

			/* Encoding file data */
			$data = chunk_split(base64_encode($data)); 

			/* Adding attchment-file to message*/
			$message .= "--{$mimeBoundary}\n" . 
			"Content-Type: {$fileType};\n" . 
			" name=\"{$fileName}\"\n" . 
			"Content-Transfer-Encoding: base64\n\n" . 
			$data . "\n\n" . 
			"--{$mimeBoundary}--\n";
		}
		if(mail($emailTo, $subject, $message, $headers)){
			$emailSent = true;
			header('location:thanks.php');
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
<?php
$page = basename($_SERVER['SCRIPT_NAME']);
$page = str_replace('','',$page);
$page = str_replace('.php','',$page);

$page_head = $page;
$page_head = str_replace('_',' ',$page_head);
$page_head =str_replace('.php','',$page_head);
$page_head = ucwords($page_head);
?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en"><!--<![endif]--><head>
	<title> Carrer | ZCube Design - Turnkey Interior Design & Build Firm  </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
	<?php include('header.php');?>
	<script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
	<div class="inner_banner" style="background:url(img/innerbanner/career.jpg) no-repeat">
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<p> WORK WITH US </p>
					<h3> Join Our Team </h3>
				</div>
			</div>
		</div>
		<img src="img/innerbanner/career.jpg" class="img-fluid" />
	</div>
	<div id="breadcrumb">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="/"><i class="fa fa-home"></i> Home</a></li>
						<li class="breadcrumb-item"><a href="#">Work With Us</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	
	<section id="career">
		<div class="controls-switch"></div>
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<h2 class="edgtf-st-title"> Work With Us </h2>
					<!-- <p> Z Cube Design Pvt. Ltd. is a Turnkey Interior Design & Build firm that stands tall on its 20+ years of experience in the industry, having delivered over 50 million sq. ft. through 100+ Projects across 60 cities in India. We have an in-house team comprising the best of Architects, Interior Designers, Project Managers & MEP Consultants.  </p>  -->
					<p>At Z Cube Interior Design, we're on a mission to transform spaces into exceptional environments. We believe in the power of design to enhance lives, and we're looking for talented individuals who share our passion for creating extraordinary interior spaces.</p>
					<br />
				</div>
				<!-- <div class="col-lg-6 job_list">					
					<div class="card">					
						<h4> Project manager </h4>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p> 
						
						<ul>
							<li> <p> LOCATION <span> Andheri </span> </p> </li>
							<li> <p> SALARY <span> 30K/month </span> </p> </li>
							<li> <p> HOW WORK <span> Remote </span> </p> </li>
						</ul>
						<p> Posted: August 7, 2022 </p>
					</div>
				</div>
				<div class="col-lg-6 job_list">					
					<div class="card">					
						<h4> Site Supervisor </h4>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p> 
						
						<ul>
							<li> <p> LOCATION <span> Andheri </span> </p> </li>
							<li> <p> SALARY <span> 30K/month </span> </p> </li>
							<li> <p> HOW WORK <span> Remote </span> </p> </li>
						</ul>
						<p> Posted: August 7, 2022 </p>
					</div>
				</div> -->
			</div>

			<div class="row"> 
				<div class="col-12 col-md-10 col-lg-8">
					<div class="thumbnail">
						<form name="contactform"  method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data" id="contactform">
							<div class="row">
								<div class="col-12 col-lg-6 form-group required">
									<label for="name">Name</label>
									<input type="text" class="form-control" id="name" name="name" placeholder="Name" value="<?php echo $name;?>" required="required">
									<span id="nameErr"  class="error-message"><?php echo $nameErr;?></span>
								</div>
								<div class="col-12 col-lg-6 form-group required">
									<label for="email">Email</label>
									<input type="email" class="form-control" id="email" name="email" placeholder="Email Address" value="<?php echo $email;?>" required="required">
									<span id="emailErr" class="error-message"><?php echo $emailErr;?></span>
								</div>
								<div class="col-12 col-lg-6 form-group required">
									<label for="phone">Contact</label>
									<input type="text" class="form-control" id="contact" name="contact" placeholder="Phone Number" value="<?php echo $contact;?>" required="required">
									<span id="contactErr" class="error-message"><?php echo $contactErr;?></span>									
								</div>
								<div class="col-12 col-lg-6 form-group required">
									<label for="location">Location</label>
									<input type="text" class="form-control" id="location" name="location" placeholder="Location" value="<?php echo $location;?>" required="required">
									<span class="error-message"><?php echo $locationErr;?></span>
								</div>
								<div class="col-12 col-lg-6 form-group required">
									<label for="jobtype">Job Type</label>
									<select class="custom-select form-control">
										<option selected> Please Select Job Type</option>
										<option value="1"> Project manager </option>
										<option value="2"> Site Supervisor </option> 
									</select>
								</div>
								<div class="col-12 col-lg-6 form-group fileUpload required">
									<input name="attachment" type="file" id="attachment" class="inputfile inputfile-3 upload_file"  required="required" />
									<label for="attachment"><img src="img/upload.png" alt="image"><span>Attach Your CV&hellip;</span></label>
									<span class="error-message"><?php echo $attachmentErr;?></span>
								</div>
							</div>
							<div class="form-group required">
								<label> Message : <span class="red">*</span></label>
								<textarea type="textbox" class="form-control" id="message" name="message" placeholder="Message" value="<?php echo $message_text;?>" required/></textarea>
								<span id="messageErr" class="error-message"><?php echo $messageErr;?></span>
							</div>
							<div class="form-group required">
								<div class="g-recaptcha" data-sitekey="6LdyBccUAAAAAJ5wMRUF-6Lzh9Jvhu8BI82l-eQV"></div>
								<span id="captchaErr" class="error-message"><?php echo $captchaErr;?></span>
							</div>
							<div class="submit">
								<input type="submit" name="submit" class="btn block more_about_us dark" value="Submit">
							</div>					
							<div class="clear"> </div>
						</form>	
					</div>
				</div>
			</div> <!-- Row -->
		</div> <!-- Container -->	
    </section>

<?php include('footer.php');?>

	<script>
		/*
			By Osvaldas Valutis, www.osvaldas.info
			Available for use under the MIT License
		*/
		'use strict';
		;( function ( document, window, index )
		{
			var inputs = document.querySelectorAll( '.inputfile' );
			Array.prototype.forEach.call( inputs, function( input )
			{
				var label	 = input.nextElementSibling,
					labelVal = label.innerHTML;

				input.addEventListener( 'change', function( e )
				{
					var fileName = '';
					if( this.files && this.files.length > 1 )
						fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
					else
						fileName = e.target.value.split( '\\' ).pop();

					if( fileName )
						label.querySelector( 'span' ).innerHTML = fileName;
					else
						label.innerHTML = labelVal;
				});

				// Firefox bug fix
				input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
				input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
			});
		}( document, window, 0 ));
	</script>