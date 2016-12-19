






function initialize() {
    
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(52.3702, 4.8952),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var mapCanvas = document.createElement("div");
    mapCanvas.id = "canvas";
    mapCanvas.style.width = "100%";
    mapCanvas.style.height = "300px";
    document.getElementById("map").appendChild(mapCanvas);
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

