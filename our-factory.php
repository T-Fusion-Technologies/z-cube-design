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
</head>
<body>

	<div class="inner_banner" style="background:url(img/innerbanner/contact.jpg) no-repeat">
		<div class="container">		
			<div class="row">
				<div class="col-lg-12">
					<p> Our Works </p>
					<h3> Our Factory </h3>
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
						<li class="breadcrumb-item"><a href="#">Our Factory</a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>

    <section class="our-factory">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="content">
                        <h5 class="sub_title orange"></h5>
                        <h2>Manufacturing</h2>
                        <p>
                            <b>Manufacturing</b> at <b>Z Cube Design</b>, we believe in the power of innovation and precision. Our dedicated team is thrilled to welcome you to 
                            the forefront of cutting-edge cube design and manufacturing. Here, creativity meets craftsmanship, and every project is 
                            a testament to our commitment to excellence.
                        </p>
                        <p>
                            Z Cube Design is not just a workspace; it's a hub of creativity and technical expertise. We specialize 
                            in bringing your ideas to life, whether it's a custom-designed puzzle cube or a revolutionary new concept. Our 
                            state-of-the-art facilities and experienced team ensure that every project is executed with unparalleled quality and attention to detail.
                        </p>
                    </div>
                </div>

                <div class="col-12 col-lg-7">
                    <div class="our-machinery">
                        <div class="items-detail">
                            <div class="mac-image">
                                <img src="" alt="">
                            </div>  
                            <div class="content">
                                <h4>Porduct 1</h4>
                                <p>Z Cube Design is not just a workspace; it's a hub of creativity</p>
                            </div>                      
                        </div>
                        <!----------->
                        <div class="items-detail">
                            <div class="mac-image">
                                <img src="" alt="">
                            </div>  
                            <div class="content">
                                <h4>Porduct 1</h4>
                                <p>Z Cube Design is not just a workspace; it's a hub of creativity</p>
                            </div>                      
                        </div>
                        <!----------->
                        <div class="items-detail">
                            <div class="mac-image">
                                <img src="" alt="">
                            </div>  
                            <div class="content">
                                <h4>Porduct 1</h4>
                                <p>Z Cube Design is not just a workspace; it's a hub of creativity</p>
                            </div>                      
                        </div>
                        <!----------->
                        <div class="items-detail">
                            <div class="mac-image">
                                <img src="" alt="">
                            </div>  
                            <div class="content">
                                <h4>Porduct 1</h4>
                                <p>Z Cube Design is not just a workspace; it's a hub of creativity</p>
                            </div>                      
                        </div>
                        <!----------->
                    </div>
                </div>

            </div>
        </div>
    </section>
	

	
<?php include('footer.php'); ?>

  