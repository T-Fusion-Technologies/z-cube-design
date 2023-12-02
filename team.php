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
	<title> Team | ZCube Design - Turnkey Interior Design & Build Firm  </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
	<?php include('header.php');?>

</head>
<body>

	<div class="inner_banner" style="background:url(img/innerbanner/contact.jpg) no-repeat">
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<p> Team </p>
					<h3> Meet Our Team </h3>
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
						<li class="breadcrumb-item"><a href="#">Team</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	
	<section class="" id="team"> 	
		<div class="container">

			<div class="entry-title">
				<h2>"Your Interior Design Dream Team"</h2>
				<p>
					At Z Cube Design, we take immense pride in the dedicated and talented individuals who make up our dynamic team. Each member 
					of our team brings a unique set of skills, a passion for creativity, and a commitment to excellence in the field of interior design. 
					Allow us to introduce you to the faces behind our inspiring projects:
					Our team's collective passion is to create spaces that exceed your expectations, whether it's a cozy home, a productive workspace, or 
					a unique commercial environment. We look forward to collaborating with you and turning your interior design dreams into a reality. 
					Discover the Z Cube Design difference today!
				</p>
				<a href="#" class="btn">  </a>
			</div>

			<div class="card-details">

				<div class="team-wrap text-center box-1" data-toggle="modal" data-target="#mohammed_hashim">
					<div class="picture">
						<a href="javascript:void(0)">
							<figure>
								<img src="./assets/images/team-photo/hashim-Hebsur.jpg" class="img-fluid d-block w-100" alt="team image" />
							</figure>
						</a>
					</div>
					<div class="p-details">
						<h6>Director</h6>
						<h4>Hashim Hebsur</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
						<a href="mailto:info@zcubedesign.com">info@zcubedesign.com</a>
					</div>
				</div>

				<div class="team-wrap text-center box-2" data-toggle="modal" data-target="#mohammed_sajid">
					<div class="picture">
						<a href="javascript:void(0)">
						<figure>
								<img src="./assets/images/team-photo/sajid-Hebsur.jpg" class="img-fluid d-block w-100" alt="team image" />
							</figure>
						</a>
					</div>
					<div class="p-details">
						<h6>Associate Director</h6>
						<h4>Sajid Hebsur</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

						<a href="mailto:info@zcubedesign.com">info@zcubedesign.com</a>
					</div>
				</div>

				<div class="team-wrap text-center box-4" data-toggle="modal" data-target="#poonam">
					<div class="picture">
						<a href="javascript:void(0)">
							<figure>
								<img src="./assets/images/team-photo/poonam.jpg" class="img-fluid d-block w-100" alt="team image" />
							</figure>
						</a>
					</div>
					<div class="p-details">
						<h6>Finance & Documentation</h6>
						<h4>Poonam Gupta</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

						<a href="mailto:info@zcubedesign.com">info@zcubedesign.com</a>
					</div>
				</div>

				<div class="team-wrap text-center box-3" data-toggle="modal" data-target="#sharuk">
					<div class="picture">
						<a href="javascript:void(0)">
							<figure>
								<img src="./assets/images/team-photo/saharukh.jpg" class="img-fluid d-block w-100" alt="team image" />
							</figure>
						</a>
					</div>
					<div class="p-details">
						<h6>Project Head</h6>
						<h4>Shahrukh Patel</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

						<a href="mailto:info@zcubedesign.com">info@zcubedesign.com</a>
					</div>
				</div>

			</div>

			<!--
			<div class="row justify-content-md-center">
				<div class="col-lg-11">
					<div class="row justify-content-md-center">
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div>
					</div>  
				</div>  
			</div>  
			-->
			
		</div> <!-- Container -->		
	</section> <!--  -->
	
	
<?php include('footer.php');?>
 
 
<!-- Modal -->
<div class="modal fade" id="mohammed_hashim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center justify-content-between">
		<div class="side-left">
			<div class="card">
				<figure>
					<img src="./assets/images/team-photo/hashim-Hebsur.jpg" class="img-fluid d-block w-100" alt="team image" />
				</figure>
			</div>
		</div>
		<div class="side-right">
			<div class="content">
				<h4>Sumit Jaiswal</h4>
				<h6>ASSOCIATE DIRECTOR ( MEP )</h6>
				<ul class="social d-flex"> 
					<li><a href="mailto:info@zcubedesign.com"><i class="fa fa-envelope" aria-hidden="true"></i>info@zcubedesign.com</a></li>
				</ul>
				<p>
					Mr. Sumit Jaiswal started his career in 2006, 11 years of experience in MEP. He deals his work with higher strength . 
					The role of Mr. Sumit Jaiswal in Z Cube Design Pvt. Ltd. is to - "Review Contract Documents, making suggestions, 
					modifications as they relate to the MEP trades.Manage and lead MEP subcontractors throughout duration of the project, 
					Review and approve material and equipment for MEP systems prior to installation.
				</p>
			</div>
		</div>
      </div> 
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="mohammed_sajid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center justify-content-between">
		<div class="side-left">
			<div class="card">
				<figure>
					<img src="./assets/images/team-photo/sajid-Hebsur.jpg" class="img-fluid d-block w-100" alt="team image" />
				</figure>
			</div>
		</div>
		<div class="side-right">
			<div class="content">
				<h4>Sajid Hebsur</h4>
				<h6>ASSOCIATE DIRECTOR ( MEP )</h6>
				<ul class="social d-flex"> 
					<li><a href="mailto:info@zcubedesign.com"><i class="fa fa-envelope" aria-hidden="true"></i>info@zcubedesign.com</a></li>
				</ul>
				<p>
					Mr. Sajid Hebsur started his career in 2006, 11 years of experience in MEP. He deals his work with higher strength . 
					The role of Mr. Sajid Hebsur in Z Cube Design Pvt. Ltd. is to - "Review Contract Documents, making suggestions, 
					modifications as they relate to the MEP trades.Manage and lead MEP subcontractors throughout duration of the project, 
					Review and approve material and equipment for MEP systems prior to installation.
				</p>
			</div>
		</div>
      </div> 
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="sharuk" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center justify-content-between">
		<div class="side-left">
			<div class="card">
				<figure>
					<img src="./assets/images/team-photo/saharukh.jpg" class="img-fluid d-block w-100" alt="team image" />
				</figure>
			</div>
		</div>
		<div class="side-right">
			<div class="content">
				<h4>Shahruk Patel</h4>
				<h6>ASSOCIATE DIRECTOR ( MEP )</h6>
				<ul class="social d-flex"> 
					<li><a href="mailto:info@zcubedesign.com"><i class="fa fa-envelope" aria-hidden="true"></i>info@zcubedesign.com</a></li>
				</ul>
				<p>
					Mr. Sharuk Patel started his career in 2006, 11 years of experience in MEP. He deals his work with higher strength . 
					The role of Mr. Sharuk Patel in Z Cube Design Pvt. Ltd. is to - "Review Contract Documents, making suggestions, 
					modifications as they relate to the MEP trades.Manage and lead MEP subcontractors throughout duration of the project, 
					Review and approve material and equipment for MEP systems prior to installation.
				</p>
			</div>
		</div>
      </div> 
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="poonam" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center justify-content-between">
		<div class="side-left">
			<div class="card">
				<figure>
					<img src="./assets/images/team-photo/poonam.jpg" class="img-fluid d-block w-100" alt="team image" />
				</figure>
			</div>
		</div>
		<div class="side-right">
			<div class="content">
				<h4>Poonam Gupta</h4>
				<h6>ASSOCIATE DIRECTOR ( MEP )</h6>
				<ul class="social d-flex"> 
					<li><a href="mailto:info@zcubedesign.com"><i class="fa fa-envelope" aria-hidden="true"></i>info@zcubedesign.com</a></li>
				</ul>
				<p>
					Mr. Poonam Gupta started his career in 2006, 11 years of experience in MEP. He deals his work with higher strength . 
					The role of Mr. Poonam Gupta in Z Cube Design Pvt. Ltd. is to - "Review Contract Documents, making suggestions, 
					modifications as they relate to the MEP trades.Manage and lead MEP subcontractors throughout duration of the project, 
					Review and approve material and equipment for MEP systems prior to installation.
				</p>
			</div>
		</div>
      </div> 
    </div>
  </div>
</div>