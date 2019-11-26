function getAllEventsFromTheAPI(map) {
  axios.get("/event/api")
    .then(event => placeEvents(event.data.places, map))
    .catch(error => console.log(error))
}

function placeEvents(events, map) {

  events.forEach(elm => {

    console.log(elm.location.coordinates[1])

    const center = { lat: 7.9343, lng: -3.8574 }
      
      
      // elm.location.coordinates[1], lng: elm.location.coordinates[0] }

    new google.maps.Marker({
      position: center,
      map: map,
      title: elm.name
    });

  })
}


function initMap() {

  const map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 14,
      center: {
        lat: 40.416681, 
        lng: -3.703751
      }
    }
  )

  getAllEventsFromTheAPI(map)
}



// var geocoder;
// var map;

// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(-34.397, 150.644);
//   var mapOptions = {
//     zoom: 8,
//     center: latlng
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// function codeAddress() {
//   var address = document.getElementById('address').value;
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == 'OK') {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }

// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: -34.397, lng: 150.644}
//   });
//   var geocoder = new google.maps.Geocoder();

//   document.getElementById('submit').addEventListener('click', function() {
//     geocodeAddress(geocoder, map);
//   });
// }

// function geocodeAddress(geocoder, resultsMap) {
//   var address = document.getElementById('address').value;
//   geocoder.geocode({'address': address}, function(results, status) {
//     if (status === 'OK') {
//       resultsMap.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }







