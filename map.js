    
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lseWRlZSIsImEiOiJjbDkya2h3aTkwMTRxM29vNTVzZThtbnVmIn0.918NVdFZNpe7s34xlzlsEQ';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
    });