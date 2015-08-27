
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 400, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//
// Google Map!
//
// Config values
var LOCATION = {lat: 52.951659, lng: -1.186477};

var addressTitle = '<h3>Business School South</h3>';
var address = '<p><b>Address:</b> Jubilee Campus, Wollaton Rd, Nottingham NG8 1BB</p>';
var mapURL = 'https://www.google.co.uk/maps/place/Business+School+(South)/@52.951659,-1.186477,15z/data=!4m2!3m1!1s0x0:0x4da28c4722953e75?sa=X&ei=ci5dVKiyO6Kv7AbAw4GQAQ&ved=0CI0BEPwSMAs';
var mapsLink = '<p><a href="' + mapURL + '" target="_blank">Open in Google Maps</a></p>';

var mapOptions = {center: { lat: 52.951659, lng: -1.186477}, zoom: 12,
  panControl: false, zoomControl: true, mapTypeControl: true, scaleControl: false, streetViewControl: false, overviewMapControl: false,
  styles: [{"stylers":[{"saturation":-100}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#0099dd"}]},{"elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#aadd55"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{}]
};


function mapInit() {
  var map = new google.maps.Map(document.getElementById('map'),mapOptions);
  map.setOptions({'scrollwheel': false}); // Disable zoom on scroll

  // var marker = new google.maps.Marker({
  //   position: LOCATION,
  //   map: map,
  //   title: 'HackNotts 2015'
  // });

  // var contentString = '<div id="content"><div id="container">';
  // var endContentString = '</div></div>';
  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString + addressTitle + address + mapsLink + endContentString
  // });

  // infowindow.open(map, marker); // Open on page load

  // // Add marker click event so Address popup gets displayed
  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.open(map,marker);
  // });
}

// Set map to be created on load
google.maps.event.addDomListener(window, 'load', mapInit);


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
