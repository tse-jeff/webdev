document.addEventListener('DOMContentLoaded', getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  } else {
    alert('geolocation is not supported by this browser');
  }
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  console.log(latitude);
  console.log(longitude);

  let loc = document.getElementById('location');
  loc.innerHTML = 'Latitude: ' + latitude + ' Longitude: ' + longitude;
}

