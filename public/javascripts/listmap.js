//Donde empieza a existir uno y cuando llega al punto que interesa

function getAllEventsFromTheAPI(geocoder, map) {
  axios.get("/events/api")
    .then(response => 
      geocodeAddress(geocoder, response.data.events, map))
    .catch(error => console.log(error))
}


function geocodeAddress(geocoder, events, resultsMap) {

  console.log(events)
  events.forEach( elm => {
    console.log(elm.address)
    
    if(!elm.address) return
    geocoder.geocode({'address': elm.address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location


          
        });
      } /*else {
        alert('Geocode was not successful for the following reason: ' + status);
      }*/

      var contentString = '<h2>' + elm.name + '</h2>'+'<br>'+'<span>This event is a</span>'+'<span>  '+ elm.type +'</span>'+'<span>!!!</span>'+'<br><br>'+'<p>Check for more details</p>'+'<a href="/events/'+elm._id+'">here</a>'

      var infowindow = new google.maps.InfoWindow({
      content: contentString
      })
  
      marker.addListener('click', function() {
      infowindow.open(map, marker)
      console.log(contentString)
      });
  

    })



  })
  }

var geocoder;
var map;


// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(-34.397, 150.644);
//   var mapOptions = {
//     zoom: 11,
//     center: latlng
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 40.416681, 
    lng: -3.703751}
  });
  var geocoder = new google.maps.Geocoder();

getAllEventsFromTheAPI(geocoder, map)

      



}









