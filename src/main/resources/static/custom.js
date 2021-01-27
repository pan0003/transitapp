var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: parseFloat(busLocations[0].LATITUDE),
      lng: parseFloat(busLocations[0].LONGITUDE),
    },
    zoom: 15,
    mapTypeId: "hybrid",
    scrollwheel: false,
  });

  let imageBus = {
    url: "/bus-48.ico",
    scaledSize: new google.maps.Size(50, 50),
  };

  let imageMe = {
    url: "/custom_marker.png",
    scaledSize: new google.maps.Size(50, 50),
  };

  for (i = 0; i < busLocations.length; i++) {
    let contentString = "<h3>Bus #" + busLocations[i].VEHICLE + "</h3>";
    let infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    let marker = new google.maps.Marker({
      position: {
        lat: parseFloat(busLocations[i].LATITUDE),
        lng: parseFloat(busLocations[i].LONGITUDE),
      },
      icon: imageBus,
      map: map,
    });
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }

  let myLocation = {
    lat: parseFloat(personLocation.lat),
    lng: parseFloat(personLocation.lng),
  };

  let myMarker = new google.maps.Marker({
    position: myLocation,
    map: map,
    icon: imageMe,
    animation: google.maps.Animation.BOUNCE,
  });
}