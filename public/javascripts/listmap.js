//Donde empieza a existir uno y cuando llega al punto que interesa

function getAllEventsFromTheAPI(geocoder, map) {
  axios.get("/events/api")
    .then(response =>
      geocodeAddress(geocoder, response.data.events, map))
    .catch(error => console.log(error))
}

function geocodeAddress(geocoder, events, resultsMap) {

  console.log(events)
  events.forEach(elm => {
    console.log(elm.address)

    if (!elm.address) return
    geocoder.geocode({
      'address': elm.address
    }, function (results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        
        var image = {
        url: "https://res.cloudinary.com/darzjo72b/image/upload/v1574945951/meat/rojo_gqgjjw.png",
        scaledSize: new google.maps.Size(20, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      }

        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
          icon: image
        });
      }
      var contentString = '<h2 style="color: #e24a00 text-align: center">' + elm.name + '</h2>' + '<br>' + '<p style="text-align:center">This event is a</p>' + '<p style="text-align:center">  ' + elm.type + '</p>' + '<br><br>' + '<p style="text-align:center">Check for more details</p>' + '<p style="text-align:center">' + '<a href="/events/' + elm._id + '">here</a>'

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      marker.addListener('click', function () {
        infowindow.open(map, marker)
        console.log(contentString)
      })
    })
  })
}

var geocoder;
var map;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {
      lat: 40.416665, 
      lng: -3.703677
    },
    styles: mapStyles.orange

  });
  var geocoder = new google.maps.Geocoder();

  getAllEventsFromTheAPI(geocoder, map)

}