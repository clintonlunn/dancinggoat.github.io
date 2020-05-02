var map = L.map('map', {
    scrollWheelZoom: false,
    center: [28.044970, -82.634900],
    zoom: 13
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

var farmMarker = L.marker([28.040, -82.634800]).addTo(map);
farmMarker.bindPopup(('<a href="https://www.google.com/maps/place/The+Dancing+Goat/@28.0449674,-82.6367955,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2eb9a8aba3cf7:0x993f9906e5054e3c!8m2!3d28.0449627!4d-82.6346068"><span>12502 Maverick Court<br>Tampa, FL, 33626</span></a>')).openPopup();

var stpeteMarker = L.marker([27.778140, -82.637380]).addTo(map);
stpeteMarker.bindPopup(('<a href="https://www.google.com/maps/place/532+3rd+St+N,+St.+Petersburg,+FL+33701/@27.7781237,-82.6395918,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2e1778703086f:0x6afa5780fb6e18b!8m2!3d27.778119!4d-82.6374031"><span>532 3rd Street North,<br>St. Pete, FL 33701</span></a>'));


const farmPickup = document.getElementById("farmPickupBtn");
const stPetePickup = document.getElementById("stPetePickupBtn");

farmPickup.addEventListener('click', function (e) {
    map.flyTo([28.040, -82.634800], 15);
    farmMarker.openPopup();
});

stPetePickup.addEventListener('click', function () {
    map.flyTo([27.778140, -82.637380], 15);
    stpeteMarker.openPopup();
});