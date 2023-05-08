function initMap() {
    var input = document.getElementById('search-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
  
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 43.653226, lng: -79.3831843 },
      zoom: 12
    });
  
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("No location data available for input: " + place.name);
        return;
      }
  
      // Set the map center to the selected place
      map.setCenter(place.geometry.location);
  
      // Add a marker at the selected place
      new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    });
  }

