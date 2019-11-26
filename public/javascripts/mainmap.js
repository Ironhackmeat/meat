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

