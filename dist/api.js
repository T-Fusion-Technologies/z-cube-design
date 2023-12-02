"use strict";

document.writeln("<script type='text/javascript' src='js/jquery.mixitup.min.js?ver=20151215'></script>");

// Home Page Slider
$.ajax({
  url: "data.json", //API URL
  type: "GET", // GET OR POST
  beforeSend: function beforeSend() {
    // This function calls before ajax API Hits
    // Here we have to show our loader
    $(".loadr").removeClass("d-none");
  },
  success: function success(response, status) {
    // Once our API call send success
    // this function gets called.
    // console.log(response)

    $(".loadr").addClass("d-none");var html = "";
    var project = response;
    var ind = "";
    for (var i = 0; i < project.length; i++) {
      //for (let i = 0; i < response.length; i++) {
      var _project$i = project[i],
          title = _project$i.title,
          thumbnail = _project$i.thumbnail,
          type = _project$i.type,
          seo_url = _project$i.seo_url;


      html += "\n        <div class=\"item\">\n          <div class=\"projects_item\">\n            <img src=\"" + thumbnail + "\" class=\"img-fluid d-block\">\n            <div class=\"hover\"><a href=\"details.php?work=" + seo_url + "\"><i class=\"ion-android-arrow-forward\"></i></a>\n              <div class=\"project_text\">\n                <h5>" + type + "</h5><a href=\"details.php?work=" + seo_url + "\"><h4><span>" + title + "</span></h4></a></div>\n            </div>\n          </div>\n        </div>\n        ";
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
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option			
      });
      // Custom Navigation Events
      $(".next").click(function () {
        owl.trigger('owl.next');
      });
      $(".prev").click(function () {
        owl.trigger('owl.prev');
      });

      $('#our-client-slide').owlCarousel({
        autoPlay: 3100,
        items: 4,
        pagination: false,
        stopOnHover: true,
        navigation: false,
        itemsDesktop: [1280, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [600, 3], //3 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option	
      });

      $('.testimonial-slidere').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dost: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });

      $('#work_tab li:first').addClass('active');
      $('.works .row div:eq(0)').show();
    });
  },
  error: function error(_error, status) {
    // IF our API get any error
    // this function gets called.
    $(".loadr-row").addClass("d-none");
    var html = "<div class=\"alert alert-danger\"> Error while fetching data </div>";
  }
});

// Project Page
$.ajax({
  url: "data.json", //API URL
  type: "GET", // GET OR POST
  beforeSend: function beforeSend() {
    // This function calls before ajax API Hits
    // Here we have to show our loader
    $(".loadr").removeClass("d-none");
  },
  success: function success(response, status) {
    console.log('response ', response);
    // Once our API call send success
    // this function gets called.
    // console.log(response)

    $(".loadr").addClass("d-none");var html = "";
    var project = response;
    var ind = "";
    for (var i = 0; i < project.length; i++) {
      //for (let i = 0; i < response.length; i++) {
      var _project$i2 = project[i],
          id = _project$i2.id,
          title = _project$i2.title,
          thumbnail = _project$i2.thumbnail,
          categories = _project$i2.categories,
          type = _project$i2.type,
          seo_url = _project$i2.seo_url,
          sub_title = _project$i2.sub_title;

      // Cast Data Fetch        

      var workdata = "";
      for (var e = 0; e < categories.length; e++) {
        var category = categories[e].category;
        //console.log(categories);
        workdata += "<li class=\"filter " + (e == 0 ? 'active' : '') + "\" data-filter=\"." + category + "\"> <span></span>" + category + "</li>";
      }

      html += "\n        <div class=\"portfolio-item col-lg-4 col-sm-4 " + type + " all\">\n          <div class=\"projects_item\">\n            <a href=\"details.php?work=" + seo_url + "\"><img src=\"" + thumbnail + "\" class=\"img-fluid d-block w-100\" alt=\"" + title + "\">\n              <div class=\"hover\"><i class=\"ion-android-arrow-forward\"></i>\n                <div class=\"project_text\">\n                  <span>" + sub_title + "</span>\n                  <h5>" + type + "</h5>\n                  <h4>" + title + "</h4></div>\n              </div>\n            </a>\n          </div>\n        </div>\n        ";
    }

    $("#project_list").append(html);
    setTimeout(function () {
      $(".work_tab li:first").addClass('active');
    }, 1000);
    $("#work_tab").append(workdata);

    //Helper Filtering Data
    jQuery(document).ready(function ($) {

      $(function () {
        var filterList = {
          init: function init() {
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
  error: function error(_error2, status) {
    // IF our API get any error
    // this function gets called.
    $(".loadr-row").addClass("d-none");
    var html = "<div class=\"alert alert-danger\"> Error while fetching data </div>";
  }
});

// Projects Details
$.ajax({
  url: "data.json", //API URL
  type: "GET", // GET OR POST
  beforeSend: function beforeSend() {
    // This function calls before ajax API Hits
    // Here we have to show our loader
    $(".projectloader").removeClass("d-none");
    $(".projdetloader").removeClass("d-none");
  },
  success: function success(response, status) {
    // Once our API call send success
    // this function gets called.
    //console.log(response)

    // For SEO URL
    var work_name = location.search.split('work=')[1];
    //alert(seo_url);

    $(".projectloader").addClass("d-none");var html = "";
    var project_data = response;
    for (var i = 0; i < project_data.length; i++) {
      var _project_data$i = project_data[i],
          id = _project_data$i.id,
          title = _project_data$i.title,
          company = _project_data$i.company,
          areas = _project_data$i.areas,
          thumbnail = _project_data$i.thumbnail,
          duration = _project_data$i.duration,
          gallery = _project_data$i.gallery,
          area = _project_data$i.area,
          _location = _project_data$i.location,
          works = _project_data$i.works,
          type = _project_data$i.type,
          seo_url = _project_data$i.seo_url;

      // SEO URL Condition

      if (seo_url === work_name) {

        // First Banner Data Fetch  
        var dethtml = "";
        var scphtml = "";

        for (var e = 0; e < gallery.length; e++) {
          var gallery_pic = gallery[e].gallery_pic;
          html += "<div class=\"col-lg-4 col-md-4 col-sm-6\"> <div class=\"projects_item\"> <a class=\"d-block\" href=\"" + gallery_pic + "\" data-fancybox=\"gallery\" data-caption=\"" + title + "\"> <div class=\"project_img\" style=\"background:#333 url(" + gallery_pic + ") no-repeat;\"></div> <div class=\"hover_cont\"> <p> View </p> </div></a></div></div>";
        } // End ForLoop

        for (var _e = 0; _e < 1; _e++) {
          dethtml += "<div class=\"col-lg-12\"><article class=\"row\" id=\"project_det\"></article></div> <h3>" + title + "</h3> <hr />  <p> Company Origin : " + company + " <br /> Areas : " + areas + " Sq. Ft. <br /> Duration : " + duration + " <br /> Location : " + _location + " </p><h5> Scope Of Work : </h5> <ul id=\"scope_work\"></ul>";

          for (var _e2 = 0; _e2 < works.length; _e2++) {
            var worktyp = works[_e2].worktyp;
            scphtml += " <li> " + worktyp + " </li>";
          } // End ForLoop 
        } // End ForLoop


        document.title = "" + title + " | ZCube Design - Turnkey Interior Design & Build Firm ";

        jQuery('#projects').addClass("" + seo_url);
      } // End SEO URL
    } // End ForLoop

    $("#project_data").append(html);
    $("#project_det").append(dethtml);
    $("#scope_work").append(scphtml);

    // Fancybox Config
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "close"],
      loop: false,
      protect: true
    });
  },
  error: function error(_error3, status) {
    // IF our API get any error
    // this function gets called.
    $(".projectloader").addClass("d-none");
    $(".projdetloader").addClass("d-none");
    var html = "<div class=\"alert alert-danger\">Error while fetching data</div>";
  }
});