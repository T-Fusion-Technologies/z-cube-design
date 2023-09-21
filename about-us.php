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
	<title> About Us | ZCube Design - Turnkey Interior Design & Build Firm   </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
	<?php include('header.php');?>

	<div class="inner_banner" style="background:url(img/innerbanner/about.jpg) no-repeat">
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<p> ABOUT US</p>
					<h3> Our Story </h3>
				</div>
			</div>
		</div>
		<img src="img/innerbanner/about.jpg" class="img-fluid" />
	</div>
	<div id="breadcrumb">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="/"><i class="fa fa-home"></i> Home</a></li>
						<li class="breadcrumb-item"><a href="#">About</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	
	<section id="aboutpage">
		<div class="controls-switch"></div>
		<div class="container">		
			<div class="row">
				<div class="col-lg-5" data-scrollreveal="enter left over 1.5s">
					<img src="img/about_1.jpg" class="img-fluid" />					
				</div>	
				<div class="col-lg-7" data-scrollreveal="enter left over 1.5s">
					<h4>One of the great beauties of architecture is that each time, it is like life starting all over again.</h4>
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. </p>
				</div>	
			</div>	
			
			<div class="row vision_div">
				<div class="col-lg-6" data-scrollreveal="enter bottom over 1.5s">
					<h4> Vision </h4>
					<p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. </p>
				</div>
				<div class="col-lg-6" data-scrollreveal="enter bottom over 1.5s">
					<h4> Mission </h4>
					<p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. </p>
				</div>	
			</div>	
		</div>	
		
		<div id="counter" class="about_counter">				
			<div class="container">
				<div class="row"> 
					<div class="col-md-8">
						<p class="mb-0 white"> QUALITY OF WORK </p>
						<h1 class="white"> Milestones that we proudly accomplished & lead us forward. </h1>
					</div>
					<div class="col-md-4">
						<ul class="d-flex">
							<li>
								<div class="thumb">
									<div class="counter-value" data-count="4">0</div>
									<h4> Projects Completed </h4>
								</div>
							</li>
							<li>
								<div class="thumb">
									<div class="counter-value" data-count="25">0</div>
									<h4> Fresh Ideas  </h4>
								</div>
							</li>
							<li>
								<div class="thumb">	
									<div class="counter-value" data-count="876">0</div>
									<h4> Satisfied Clients </h4>
								</div>
							</li>
							<li>
								<div class="thumb">
									<div class="counter-value" data-count="3426">0</div>
									<h4> Cups of Coffee</h4>
								</div>
							</li>
						</ul>
					</div>					
				</div>
			</div>
		</div>
		<br /> <br /> 
		<div class="container">	
			<div class="row">	
				<div class="col-lg-8" data-scrollreveal="enter right over 1.5s">
					<h4> Director's Speech </h4>
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. </p>
					<p class="mb-0"> We build our dreams on four strong foundations - </p>
					<ol class="listing">
						<li> Health  & Safety - <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span> </li>
						
						<li> Environmental Safety - <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span> </li>
						
						<li> Quality - <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span> </li>
						
						<li> Integrity - <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span> </li>
					</ol>
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>               
				</div>				
				<div class="col-lg-4 quick_inquiry">
					<div class="card">
						<h5> Would You like to discuss a project ? </h5>
						<?php include('quick_inquiry.php');?>
					</div>
				</div>
			</div>
		</div>
		<br /> <br /> 
	</section>

<?php include('footer.php');?>

<script>
var a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});
</script>