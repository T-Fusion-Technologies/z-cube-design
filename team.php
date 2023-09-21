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
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#mohammed_hashim">
									<img src="img/team/mohammed_hashim.png" class="img-fluid d-block w-100" />
									<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="card">
								<a class="d-block" data-toggle="modal" data-target="#sumit_jaiswal">
									<img src="img/team/sumit_jaiswal.png" class="img-fluid d-block w-100" />
									<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
								</a>
							</div>
						</div> <!-- -->
					</div>  
				</div>  
			</div>  
		</div> <!-- Container -->		
	</section> <!--  -->
	
	
<?php include('footer.php');?>
 
 
 <!-- Modal -->
<div class="modal fade" id="mohammed_hashim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Mohammed Hashim  </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
			<div class="col-lg-4 col-md-3 col-sm-4 col-xs-6">
				<div class="card">
					<img src="img/team/mohammed_hashim.jpg" class="img-fluid d-block w-100" />
				</div>
			</div>
			<div class="col-lg-8">
				<h5> Mohammed Hashim  <small class="d-block"> DIRECTOR </small> </h5> 
				<p> <a href="mailto:hashim@zcubedesign.com"> hashim@zcubedesign.com </a> / <a href="mailto:info@zcubedesign.com"> info@zcubedesign.com </a> <br />
				Mohammed Hashim started his career soon after receiving a degree in Interior Design from St. Francis, Borivali in 2000. In the dozen years that followed he’s gone from strength to strength rising swiftly from the position of junior designer to Director of Zcube Design Private Limited. In his career Mohammed Hashim has handled a wide array of projects that range from commercial, high-end residential to hospitality and retail. He’s had the pleasure and privilege to work with and learn immensely from stalwarts of the interior design. He is known for his passionate approach to the business, and the ability to deliver quality projects often before deadlines and attention to detail.</p>
				<p> <strong class="d-block"> Address </strong> Office No - 13, B-Wing New Sangam Society, Juhu Versova Link Road, Andheri(West) Mumbai - 400053 </p>
			</div> 
		</div>
      </div> 
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="sumit_jaiswal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sumit Jaiswal  </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
			<div class="col-lg-4 col-md-3 col-sm-4 col-xs-6">
				<div class="card">
					<img src="img/team/sumit_jaiswal.jpg" class="img-fluid d-block w-100" />
				</div>
			</div>
			<div class="col-lg-8">
				<h5> Sumit Jaiswal  <small class="d-block"> ASSOCIATE DIRECTOR ( MEP ) </small> </h5> 
				<p> <a href="mailto:sumit@zcubedesign.com"> sumit@zcubedesign.com </a> <br />
				Mr. Sumit Jaiswal started his career in 2006, 11 years of experience in MEP. He deals his work with higher strength . The role of Mr. Sumit Jaiswal in Z Cube Design Pvt. Ltd. is to - "Review Contract Documents, making suggestions, modifications as they relate to the MEP trades.Manage and lead MEP subcontractors throughout duration of the project, Review and approve material and equipment for MEP systems prior to installation. </p>
				<p> <strong class="d-block"> Address </strong> Office No - 13, B-Wing New Sangam Society, Juhu Versova Link Road, Andheri(West) Mumbai - 400053 </p>
			</div> 
		</div>
      </div> 
    </div>
  </div>
</div>