document.writeln("<script type='text/javascript' src='js/jquery.mixitup.min.js?ver=20151215'></script>");

  // Home Page Slider
  $.ajax({
    url: "data.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".loadr").removeClass("d-none");
    },
    success: function(response, status)  {
      // Once our API call send success
      // this function gets called.
      // console.log(response)

      $(".loadr").addClass("d-none");let html = "";
      var project = response;
      let ind = "";
      for (let i = 0; i < project.length; i++) {
      //for (let i = 0; i < response.length; i++) {
        const { title, thumbnail, type, seo_url } = project[i];

        html += `<div class="item"> <div class="projects_item"> <img src="${thumbnail}" class="img-fluid d-block" /> <div class="hover"> <a href="details.php?work=${seo_url}"><i class="ion-android-arrow-forward"></i></a> <div class="project_text"> <h5>${type}</h5>  <a href="details.php?work=${seo_url}"> <h4> <span> ${title}  </span></h4> </a></div></div></div></div> `;
      }
     
      $("#owlroot").append(html);

  		//Helper Filtering Data
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

    },
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".loadr-row").addClass("d-none");
      let html = `<div class="alert alert-danger"> Error while fetching data </div>`;
    },
});

 

  // Project Page
  $.ajax({
    url: "data.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".loadr").removeClass("d-none");
    },
    success: function(response, status)  {
      // Once our API call send success
      // this function gets called.
      // console.log(response)

      $(".loadr").addClass("d-none");let html = "";
      var project = response;
      let ind = "";
      for (let i = 0; i < project.length; i++) {
      //for (let i = 0; i < response.length; i++) {
        const { id, title, thumbnail, categories, type, seo_url } = project[i];

        // Cast Data Fetch        
        var workdata = "";
        for (let e = 0; e < categories.length; e++) {
            var category = categories[e].category;
            //console.log(categories);
            workdata += `<li class="filter ${ i == 0 ? 'active' : ''}" data-filter=".${category}"> <span></span>${category}</li>`;
        }

        html += `<div class="portfolio-item col-lg-4 col-sm-4 ${type} all"> <div class="projects_item"> <a href="details.php?work=${seo_url}"> <img src="${thumbnail}" class="img-fluid d-block w-100" alt="${title}" /> <div class="hover"> <i class="ion-android-arrow-forward"></i><div class="project_text"> <h5>${type}</h5>  <h4> ${title} </h4> </div> </div></div> </a>  </div>
        `;
      }
     
      $("#project_list").append(html);
      $("#work_tab").append(workdata);

  		//Helper Filtering Data
      jQuery(document).ready(function ($) {
  			$(function () {
  				var filterList = {
  					init: function () {
  						$('.portfolio-list').mixItUp({
  							selectors: {
  								target: '.portfolio-item',
  								filter: '.filter'
  							},
  							load: {
  								filter: '*'
  							}
  						});
  					}
  				}; 
  				filterList.init();
  			});
  		}); // Main document ready END

    },
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".loadr-row").addClass("d-none");
      let html = `<div class="alert alert-danger"> Error while fetching data </div>`;
    },
});

  
  
// Projects Details
  $.ajax({
    url: "data.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".projectloader").removeClass("d-none");
      $(".projdetloader").removeClass("d-none");
    },
    success: function(response, status)  {
		// Once our API call send success
		// this function gets called.
		//console.log(response)

		// For SEO URL
		var work_name = location.search.split('work=')[1];
		//alert(seo_url);

		$(".projectloader").addClass("d-none");let html = "";
		var project_data = response;
		for (let i = 0; i < project_data.length; i++) {
          const {id, title, company, areas, thumbnail, duration, gallery, area, location, works, type, seo_url} = project_data[i];
         
			// SEO URL Condition
			if(seo_url===work_name){

        // First Banner Data Fetch  
        var dethtml = ""; 
        var scphtml = ""; 
				 
				for (let e = 0; e < gallery.length; e++) {
					var gallery_pic = gallery[e].gallery_pic;
					html += `<div class="col-lg-4 col-md-4 col-sm-6"> <div class="projects_item"> <a class="d-block" href="${gallery_pic}" data-fancybox="gallery" data-caption="${title}"> <div class="project_img" style="background:#333 url(${gallery_pic}) no-repeat;"></div> <div class="hover_cont"> <p> View </p> </div></a></div></div>`;
        } // End ForLoop

        for (let e = 0; e < 1; e++) {
            dethtml += `<div class="col-lg-12"><article class="row" id="project_det"></article></div> <h3>${title}</h3> <hr />  <p> Company Origin : ${company} <br /> Areas : ${areas} Sq. Ft. <br /> Duration : ${duration} days <br /> Location : ${location} </p><h5> Scope Of Work : </h5> <ul id="scope_work"></ul>`;
            
            for (let e = 0; e < works.length; e++) {
                var worktyp = works[e].worktyp;
                scphtml += ` <li> ${worktyp} </li>`;

            } // End ForLoop 
        } // End ForLoop

			
			  document.title = `${title}` +" | ZCube Design - Turnkey Interior Design & Build Firm ";

			  jQuery('#projects').addClass(`${seo_url}`)

			} // End SEO URL
		} // End ForLoop
	  
		$("#project_data").append(html);
    $("#project_det").append(dethtml);
    $("#scope_work").append(scphtml);

      // Fancybox Config
      $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "close"
        ],
          loop: false,
          protect: true
      });
    },  
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".projectloader").addClass("d-none");
      $(".projdetloader").addClass("d-none");
      let html = `<div class="alert alert-danger">Error while fetching data</div>`;
    },
});
