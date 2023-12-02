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
	<title> Projects | ZCube Design - Turnkey Interior Design & Build Firm  </title>
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
					<p> Our Works </p>
					<h3> Projects </h3>
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
						<li class="breadcrumb-item"><a href="#">Projects</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	
	<section class="projects_listing"> 	
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center" data-scrollreveal="enter top over 1.5s">
					<ul class="project_filter">
						<li class="active"> <a href="#"> Hospitality </a> </li>
						<li> <a href="#"> Healthcare </a> </li>
						<li> <a href="#"> Commercial </a> </li>
						<li> <a href="#"> Residential </a> </li>				   						
					</ul>
				</div>
				<div class="col-md-12" data-scrollreveal="enter top over 1.5s">
					<div class="main_title white text-center">
						<h2 class="orange"> HOSPITALITY </h2> <br />
					</div>
				</div>
			</div>  
			<div class="row justify-content-md-center">
				<div class="col-lg-11">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<img src="img/projects/slide_5.jpg" class="img-fluid d-block w-100" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> TAJ Connemara, Chennai  <span> </span></h4> </a>
									</div>
								</div> 
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<img src="img/projects/slide_6.jpg" class="img-fluid d-block w-100" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> TAJ Connemara, Chennai  <span> </span></h4> </a>
									</div>
								</div> 
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<img src="img/projects/slide_1.jpg" class="img-fluid d-block w-100" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> TAJ Connemara, Chennai  <span> </span></h4> </a>
									</div>
								</div> 
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<img src="img/projects/slide_2.jpg" class="img-fluid d-block w-100" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> TAJ Connemara, Chennai  <span> </span></h4> </a>
									</div>
								</div> 
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<img src="img/projects/slide_3.jpg" class="img-fluid d-block w-100" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> TAJ Connemara, Chennai  <span> </span></h4> </a>
									</div>
								</div> 
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<img src="img/projects/slide_4.jpg" class="img-fluid d-block w-100" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> TAJ Connemara, Chennai  <span> </span></h4> </a>
									</div>
								</div> 
							</div>
						</div> <!-- -->
					</div>  
				</div>  
			</div>  
		</div> <!-- Container -->		
	</section> <!--  -->
	
	
<?php include('footer.php');?>
 