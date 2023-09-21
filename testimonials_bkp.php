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
	<title> Testimonials | ZCube Design - Turnkey Interior Design & Build Firm  </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
	<?php include('header.php');?>

</head>
<body>
	<div class="inner_banner" style="background:url(img/innerbanner/contact.jpg) no-repeat">
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<p> Clients Feedbacks </p>
					<h3> Testimonials </h3>
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
						<li class="breadcrumb-item"><a href="#">Testimonials</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	
	<section class="projects_listing" id="testimonials"> 	
		<div class="container">
  
			<div class="row justify-content-md-center">
				<div class="col-lg-11">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<a class="d-block" href="img/testimonial/t1.jpg" data-fancybox="gallery" data-caption="Al-Amal Diagnostics">
									<img src="img/testimonial/t1.jpg" class="img-fluid d-block w-100" />
									<div class="hover">
										<i class="ion-android-arrow-forward"></i>
										<div class="project_text"> <h4> Al-Amal Diagnostics  <span> </span></h4> </div>
									</div> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<a class="d-block" href="img/testimonial/t2.jpg" data-fancybox="gallery" data-caption="Architects">
									<img src="img/testimonial/t2.jpg" class="img-fluid d-block w-100" />
									<div class="hover">
										<i class="ion-android-arrow-forward"></i>
										<div class="project_text"> <h4> Architects <span> </span></h4> </div>
									</div> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<a class="d-block" href="img/testimonial/t3.jpg" data-fancybox="gallery" data-caption="Fortune Developer ">
									<img src="img/testimonial/t3.jpg" class="img-fluid d-block w-100" />
									<div class="hover">
										<i class="ion-android-arrow-forward"></i>
										<div class="project_text"> <h4> Fortune Developer <span> </span></h4> </div>
									</div> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<a class="d-block" href="img/testimonial/t4.jpg" data-fancybox="gallery" data-caption="Fortune Developer ">
									<img src="img/testimonial/t4.jpg" class="img-fluid d-block w-100" />
									<div class="hover">
										<i class="ion-android-arrow-forward"></i>
										<div class="project_text"> <h4> Fortune Developer  <span> </span></h4> </div>
									</div> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="projects_item">
								<a class="d-block" href="img/testimonial/t5.jpg" data-fancybox="gallery" data-caption="Fortune Developer ">
									<img src="img/testimonial/t5.jpg" class="img-fluid d-block w-100" />
									<div class="hover">
										<i class="ion-android-arrow-forward"></i>
										<div class="project_text"> <h4> Fortune Developer   <span> </span></h4> </div>
									</div> 
								</a>
							</div>
						</div> <!-- -->
					</div>  
				</div>  
			</div>  
		</div> <!-- Container -->		
	</section> <!--  -->
	
	
<?php include('footer.php');?>
 