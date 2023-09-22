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
<html class="no-js" lang="en"><!--<![endif]--> <!-- -->
<head>
	<title> ZCube Design - Turnkey Interior Design & Build Firm </title>
	<?php include('header.php');?>
	<!--
	<div id="preloader">
		<div id="status">&nbsp;</div>
	</div>
	-->
<style>
.nav_height { display:none; } 
.navbar .logo_light { display:block; }
.navbar .logo_dark { display:none; }
.navbar-shrink .jewels_light { display:none; }
.navbar-shrink .jewels_dark { display:block; }
.navbar-shrink .navbar-nav>li>a, .navbar-shrink .navbar-nav>li>p a, .navbar-shrink .navbar-nav>li>p, .navbar-shrink  .account > .dropdown > a   { color:#666 !important;  }

.navbar-nav>li>a { color:#fff; }

@media (max-width: 992px) {
.navbar { background:#fff; margin-top:-2px; position:fixed; padding:5px 0; min-height:70px; display:block;
-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25); -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25); box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25); }
.navbar .navbar-nav { margin-top:8px; }
.navbar .logo_light { display:none; }
.navbar .logo_dark { display:block; }
.navbar .navbar-nav>li>a { color:#666 !important; }
}
</style>
	<section id="home">
		<?php include('banner.php');?>
	</section> <!--  -->

	<section id="about">
		<div class="dots"></div>		
		<div class="container">		
			<div class="row">
				<div class="col-lg-6 col-md-12 about_text" data-scrollreveal="enter left over 1.5s">
					<h5 class="sub_title orange"> WHO WE ARE </h1>
					<h1> We Are Expert In Space Utilisation.  </h1>
					<p> Z cube Design Pvt. Ltd. is a Turnkey Interior Design & Build firm based in Mumbai. We work with a single minded goal – to create aesthetics spaces that are a joy to live & work in ergonomically. And we do this, by establishing a precise collaboration between design team, execution team and the client. Z cube Design are team of Artisans. Designers. Architects. Interior designers. <br />
					Project management consultants, Planners. Strategists. Experience designers. We are Innovators. Ideators. Creators. Happy to solve on-site problems. And with every project, every client, we seek results. Results that support the Hallmark of our Firm that Is On-Time Completion of Projects.</p>
					<br />
					<a href="#" class="btn btn-theme"> Continue Reading <img src="img/icon/arrow-right.svg" class="img-fluid" /> </a>
				</div>
				<div class="col-lg-5 col-md-5 about_img">
					<img src="img/about.jpg" class="img-fluid" /> 
				</div>
			</div>	
		</div>	
	</section>
 
	<section class="services">	 
		<div class="container">	
			<div class="row justify-content-md-center">
				<div class="col-lg-4 col-md-4 col-sm-4" data-scrollreveal="enter bottom over 1.5s">
					<div> <img src="img/icon/price.png" class="img-fluid d-block" alt="" /> </div>
					<div>
						<h4> Reasonable Prices </h4>
						<p> We produce furniture to fulfill needs of all people and offer it at affordable and fair prices.</p>
					</div>
				</div> 
				<div class="col-lg-4 col-md-4 col-sm-4" data-scrollreveal="enter bottom over 1.5s">
					<div> <img src="img/icon/design.png" class="img-fluid d-block" alt="" /> </div>
					<div>
						<h4> Exclusive Design </h4>
						<p> We produce furniture to fulfill needs of all people and offer it at affordable and fair prices.</p>
					</div>
				</div> 
				<div class="col-lg-4 col-md-4 col-sm-4" data-scrollreveal="enter bottom over 1.5s">
					<div> <img src="img/icon/team.png" class="img-fluid d-block" alt="" /> </div> 
					<div>
						<h4> Professional Team </h4>
						<p> We produce furniture to fulfill needs of all people and offer it at affordable and fair prices.</p>
					</div>
				</div> 
			</div>
		</div> 
	</section>

 
	<section class="projects"> 
		<div class="container-fluid">
			<div class="row justify-content-md-center">
				<div class="col-lg-7 col-md-7 text-center" data-scrollreveal="enter bottom over 1.5s">
					<h1> Featured Projects  <span> </span> </h1>
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
				</div>
				<div class="col-lg-12" data-scrollreveal="enter top over 1.5s">
					<div class="owl-carousel" id="owlroot"> 
					<!--
						<div class="item">
							<div class="projects_item">
								<img src="img/projects/slide_1.jpg" class="img-fluid d-block" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> Office Space  <span> </span></h4> </a>
									</div>
								</div>
							</div>
						</div>  
						<div class="item">
							<div class="projects_item">
								<img src="img/projects/slide_6.jpg" class="img-fluid d-block" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> Office Space  <span> </span></h4> </a>
									</div>
								</div>
							</div>
						</div>  
						<div class="item">
							<div class="projects_item">
								<img src="img/projects/slide_2.jpg" class="img-fluid d-block" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> Office Space  <span> </span></h4> </a>
									</div>
								</div>
							</div>
						</div> 
						<div class="item">
							<div class="projects_item">
								<img src="img/projects/slide_3.jpg" class="img-fluid d-block" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> Office Space  <span> </span></h4> </a>
									</div>
								</div>
							</div>
						</div>  
						<div class="item">
							<div class="projects_item">
								<img src="img/projects/slide_4.jpg" class="img-fluid d-block" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> Office Space  <span> </span></h4> </a>
									</div>
								</div>
							</div>
						</div>  
						<div class="item">
							<div class="projects_item">
								<img src="img/projects/slide_5.jpg" class="img-fluid d-block" />
								<div class="hover">
									<a href="#"><i class="ion-android-arrow-forward"></i></a>
									<div class="project_text">
										<h5>Commercial</h5>
										<a href="#"> <h4> Office Space  <span> </span></h4> </a>
									</div>
								</div>
							</div>
						</div>
						-->
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section id="how_we_work">
		<div class="dots"></div>		
		<div class="container">		
			<div class="row justify-content-md-center">
				<div class="col-lg-3 col-md-3" data-scrollreveal="enter left over 1.5s">
					<h5 class="sub_title orange"> HOW WE WORK </h1>
					<h1> 3 Easy steps to get interior design </h1>
					
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
				</div> 
				<div class="col-lg-3 col-md-3">
					<div class="thumb"> 
						<h1> 01 </h1>
						<h3> We Visit <br /> You At Home </h3>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
					</div> 
				</div> 
				<div class="col-lg-3 col-md-3">
					<div class="thumb"> 
						<h1> 02 </h1>
						<h3> We Visit <br /> You At Home </h3>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
					</div> 
				</div> 
				<div class="col-lg-3 col-md-3">
					<div class="thumb"> 
						<h1> 03 </h1>
						<h3> We Visit <br /> You At Home </h3>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
					</div> 
				</div> 
			</div>	
		</div>	
	</section>
	
	<section id="about">
		<div class="dots"></div>		
		<div class="container">		
			<div class="row justify-content-md-center">
				<div class="col-lg-6 col-md-7 text-center" data-scrollreveal="enter left over 1.5s">
					<h5 class="sub_title orange"> YOU DREAM IT, WE DESIGN IT</h1>
					<h1> We can build you the kitchen of your dreams  </h1>
					<br />
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<br />
					<a href="/contact-us.php" class="btn btn-theme"> SCHEDULE A CHAT <img src="img/icon/arrow-right.svg" class="img-fluid" /> </a>
				</div> 
			</div>	
		</div>	
	</section>
	<br />	
 

<?php include('footer.php');?>
 
<!--
<script>
    $(document).ready(function () {
        var owl = $("#owlroot");
        owl.owlCarousel({
            autoPlay: 3000,
            items: 4,
            pagination: true,
            stopOnHover: true,
            navigation: false,
            itemsDesktop: [1280, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [600, 3], //3 items between 600 and 0
            itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option			
        });
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    });
</script>
-->