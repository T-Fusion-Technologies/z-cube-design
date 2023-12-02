<?php include('mailer.php');?>
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
<html class="no-js" lang="en"><!--<![endif]-->
<head>
	<title> Contact Us | ZCube Design - Turnkey Interior Design & Build Firm  </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
	<?php include('header.php');?>
	<script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
	<div class="inner_banner" style="background:url(img/innerbanner/contact.jpg) no-repeat">
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<p> CONTACT US</p>
					<h3> Have Some Questions? </h3>
				</div>
			</div>
		</div>
		<img src="img/innerbanner/contact.jpg" class="img-fluid" />
	</div>
	<div id="breadcrumb">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="/"><i class="fa fa-home"></i> Home</a></li>
						<li class="breadcrumb-item"><a href="#">Contact Us</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	
	<section id="contact_page">
		<div class="controls-switch"></div>		
		<div class="container">
			<div class="row">
				<div class="col-md-12" data-scrollreveal="enter top over 1.5s">
					<h4> Contact Us </h4>
					<p> Partnerships and Customer Relations are important to us. We keep communication lines open for our clients and customers to get in touch with us and give us an opportunity to offer our customised services. </p>
					<br />
				</div>
			</div>
			<div class="row contact_content">
				<!-- <div class="col-12  mb-70">
					
				</div> -->
				<div class="col-md-5 col-sm-5 contact_form" data-scrollreveal="enter left over 1.5s">
					<?php include('quick_inquiry.php');?>
				</div>
				<div class="col-md-1 col-sm-1"></div>
				<div class="col-md-6 col-sm-6" data-scrollreveal="enter right over 1.5s">
					<h4 class="col-md-12"> Get In Touch </h4>
					<p class="col-md-12 text-justify"> Please fill out the information below. Alternatively, you may call or send us an email using our contact details. <br />
					Asterisks (*) indicate fields to complete this transaction. </p>

					<h5> Office : </h5>
					<p> Office No - 13, B-Wing, New Sangam Society <br /> Juhu Versova Link Road, Andheri (WEST) <br /> Mumbai-400053 (Maharastra) </p>
					<p> 
						<strong> Email :</strong> <a href="mailto:info@zcubedesign.com" class="golden"> info@zcubedesign.com </a> <br />				
					  	<strong> Contact :</strong> <a href="tel:02226391313" class="golden"> 022 - 26391313 </a> /<a href="tel:02226392323" class="golden"> 2323 </a> 
					</p>
				</div>
			</div> <!-- Row -->
		</div> <!-- Container -->		
	</section> <!--  -->

	<section class="location-map p-0">
	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.7162971308317!2d72.827491!3d19.120098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9250c21b0dbf2ce0!2sZ%20Cube%20Design%20Private%20Limited!5e0!3m2!1sen!2sin!4v1662489006325!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</section>
	
	
<?php include('footer.php');?>
 