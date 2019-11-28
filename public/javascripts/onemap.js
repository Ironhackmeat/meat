function initMap() {
  var map = new google.maps.Map(document.getElementById('onemap'), {

    zoom: 11,
    center: {
      lat: 40.416681,
      lng: -3.703751,
    },
    styles: mapStyles.orange
  })
  var geocoder = new google.maps.Geocoder();
  getEvent(geocoder, map)
}

function getEvent(geocoder, map) {
  let eventId = document.getElementById('eventWrapper').getAttribute('eventId')
  axios.get(`/events/api/${eventId}`)
    .then(response =>
      geocodeAddress(geocoder, response.data.event, map))
    .catch(error => console.log(error))
}

function geocodeAddress(geocoder, event, resultsMap) {

  if (!event.address) return
  geocoder.geocode({
    'address': event.address
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
  })
}