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
	<title id="pagetitle"> Projects   </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
	<?php include('header.php');?>
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
 
	<section id="projects" class="">	
		<div class="container">
			<div class="row">
				<div class="col-lg-9 col-md-9">
					<div class="d-none projectloader text-center"> <img src="img/loading_1.gif" width="60px" class="img-fluid" /> </div>					
					<div class="row" id="project_data"> </div>
				</div>
				<div class="col-lg-3 col-md-3 project_det">
					<div class="card"> 				
						<div id="project_det"> </div>
					</div>
				</div>
			</div> 
		</div>
	</section> <!--  -->
	
<?php include('footer.php'); ?>

