
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
        }, 1500, 'easeInOutExpo');
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
var mapsLink = '<p><a href="' + mapURL + '" target="_blank">Show me on a Map</a></p>';

var mapOptions = {center: { lat: 52.951659, lng: -1.186477}, zoom: 12,
  panControl: false, zoomControl: true, mapTypeControl: true, scaleControl: false, streetViewControl: false, overviewMapControl: false,
  // old map styles // styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]}]
  // styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
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

  var contentString = '<div id="content" style="color:#555;padding:15px;"><div id="container">';
  var endContentString = '</div></div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString + addressTitle + address + mapsLink + endContentString
  });

  infowindow.open(map, marker); // Open on page load

  // Add marker click event so Address popup gets displayed
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

// Set map to be created on load
google.maps.event.addDomListener(window, 'load', mapInit);
