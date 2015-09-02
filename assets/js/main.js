
$(function() {

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 400, 'easeInOutExpo');
      event.preventDefault();
  });


  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  //
  // Google Map!
  //
  // Config values
  var LOCATION = {lat: 52.953357, lng: -1.18736};

  var addressTitle = '<h3>School of Computer Science</h3>';
  var address = '<p><b>Address</b><br>Jubilee Campus, Wollaton Road,<br>Nottingham, NG8 1BB</p>';
  var mapURL = 'https://www.google.co.uk/maps/place/School+of+Computer+Science/@52.953357,-1.18736,15z/data=!4m2!3m1!1s0x0:0xaf426646771a25ac';
  var mapsLink = '<p><br><a href="' + mapURL + '" target="_blank">Open in Google Maps</a></p>';

  var centered_location = {lat: LOCATION.lat + 0.01, lng: LOCATION.lng}; // Move map down to counteract the marker popup

  var mapOptions = {center: centered_location, zoom: 12,
    panControl: false, zoomControl: true, mapTypeControl: true, scaleControl: false, streetViewControl: false, overviewMapControl: false,
    styles: [{"stylers":[{"saturation":-100}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#0099dd"}]},{"elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#aadd55"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{}]
  };


  function mapInit() {
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    map.setOptions({'scrollwheel': false}); // Disable zoom on scroll

    var marker = new google.maps.Marker({
      position: LOCATION,
      map: map,
      title: 'HackNotts 2015'
    });

    var contentString = '<div id="content"><div id="container">';
    var endContentString = '</div></div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString + addressTitle + address + mapsLink + endContentString
    });


    // If the user isn't on a mobile
    if(!IsMobile()) {
      infowindow.open(map, marker); // Open on page load
    }

    // Add marker click event so Address popup gets displayed
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  // Set map to be created on load
  google.maps.event.addDomListener(window, 'load', mapInit);


  //
  // Utility function to see if the user is on a mobile or not
  //
  function IsMobile() {
   return ( navigator.userAgent.match(/Android/i) ||
       navigator.userAgent.match(/webOS/i) ||
       navigator.userAgent.match(/iPhone/i) ||
       navigator.userAgent.match(/iPad/i) ||
       navigator.userAgent.match(/iPod/i) ||
       navigator.userAgent.match(/BlackBerry/i) ||
       navigator.userAgent.match(/Windows Phone/i)
   );
  }


  // Typeform code
  (function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()

  // Photo gallery
  $('.photoset-grid-custom').photosetGrid({
    // Set the gutter between columns and rows
    gutter: '5px',
    // Manually set the grid layout
    layout: '212', // 3 images on first row, 2 images on second row etc
    // Wrap the images in links
    highresLinks: true,
    // Asign a common rel attribute
    rel: 'print-gallery',

    onInit: function(){},
    onComplete: function(){
      // Show the grid after it renders
      $('.photoset-grid-custom').attr('style', '');
    }
  });

  // MLH signup code
  // See https://my.mlh.io/docs for details
  var app_id = '64443453892783e1412443a33a121326a570a9cc67d87cc2d0dd50ff82077463';
  var app_redirect_url = 'http://www.hacknotts.com';
  var url = encodeURI('//my.mlh.io/oauth/authorize?client_id=' + app_id + '&redirect_uri=' + app_redirect_url + '&response_type=token');
  $('#js-mlh-signup').attr('href', url);


  // MLH signup code show success message after signup
  // http://hacknotts.com/#access_token=...&token_type=bearer
 if(window.location.hash) { // Hash found
    if(getHashValue('access_token') == -1) { // No access token found, assume failure

      var error_message = getHashValue('error');
      var error_description = getHashValue('error_description');

      if(error_message != -1 && error_description != -1) {
        console.log(error_description);
        mlhDisplayError(error_message + '<br>' + error_description.replace(/\+/g, ' '));
      }

    } else { // Success
      // Assume they are validated as they have an access token.
      mlhDisplaySuccess();
    }
  }

  function getHashValue(hash_target) {
    var hashes = window.location.hash.substring(1).split('&'); // Puts hash in
    for (var h = 0; h < hashes.length; h++) {
      var hash_name = hashes[h].split('=')[0];
      var hash_value = hashes[h].split('=')[1];
      if (hash_name == hash_target) {
        return hash_value;
      }
    }
    return -1;
  }

  // MLH signup code show failure message after signup
  // Returns this if you click no I dont wanna. http://hacknotts.com/#error=access_denied&error_description=The+resource+owner+or+authorization+server+denied+the+request.
  function mlhDisplayError(message) {
    location.hash = '#register'; // Scroll to register

    // Show error message
    $('#js-mlh-signup-users-info').text('You need to validate with MLH to register your ticket.').append(
      $('<p>').html(message).css('color', '#555')
    );
  }

  // MLH signup display success message
  function mlhDisplaySuccess() {
    location.hash = '#register'; // Scroll to register

    // Set registered button to be disabled
    $('#js-mlh-signup').text('Registered').attr('disabled', 'true');

    // Show success message
    $('#js-mlh-signup-users-info').text('Thank you for registering!');
  }
});

// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-67086343-1', 'auto');
ga('send', 'pageview');
