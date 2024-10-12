function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


// async function initMap() {
//     //  needed libraries.
//     const {
//         Map
//     } = await google.maps.importLibrary("maps");
//     const {
//         AdvancedMarkerElement
//     } = await google.maps.importLibrary("marker");

//     // Creating the map.
//     const map = new Map(document.getElementById("map"), {
//         center: {
//             lat: 46.619261,
//             lng: -33.134766
//         },
//         zoom: 3,
//         mapId: "4504f8b37365c3d0",
//     });

//     // Locations 
//     const locations = [{
//             lat: 51.5074,
//             lng: -0.1278
//         },
//         {
//             lat: 45.8150,
//             lng: 15.9819
//         },
//         {
//             lat: 40.7128,
//             lng: -74.0060
//         },
//     ];

//     // Labels 
//     const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     // location markers 
//     const markers = locations.map((location, i) => {

//         return new AdvancedMarkerElement({
//             map,
//             position: location,
//             title: labels[i % labels.length],

//         });
//     });

//     const markerCluster = new markerClusterer.MarkerClusterer({
//         map,
//         markers
//     });
// }

// initMap();



















// async function initMap() {
//     const {
//         Map
//     } = await google.maps.importLibrary("maps");
//     const {
//         AdvancedMarkerElement,
//         PinElement
//     } = await google.maps.importLibrary(
//         "marker"
//     );
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 3,
//         center: {
//             lat: 46.619261,
//             lng: -33.134766,
//         },
//         mapId: "DEMO_MAP_ID",
//     });

//     var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     var locations = [{
//             lat: 40.785091,
//             lng: -73.968285
//         },
//         {
//             lat: 41.084045,
//             lng: -73.874245
//         },
//         {
//             lat: 40.754932,
//             lng: -73.984016
//         },
//     ];

//     const markers = locations.map((position, i) => {
//         const label = labels[i % labels.length];
//         const pinGlyph = new google.maps.marker.PinElement({
//             glyph: label,
//             glyphColor: "white",
//         });
//         const marker = new google.maps.marker.AdvancedMarkerElement({
//             position,
//             content: pinGlyph.element,
//         });

//         // markers can only be keyboard focusable when they have click listeners
//         // open info window when marker is clicked
//         marker.addListener("click", () => {
//             infoWindow.setContent(position.lat + ", " + position.lng);
//             infoWindow.open(map, marker);
//         });
//         return marker;
//     });

//     new markerClusterer.MarkerClusterer({
//         markers,
//         map
//     });
// }

initMap();