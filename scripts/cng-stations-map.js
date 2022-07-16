var map;
var info = [];
var visbility = false;
window.onload = function() {
  var center = new L.latLng(28.949948, 77.268241); /*  default location */
  var pt1 = new L.latLng(28.989948, 76.188241); 
  var pt2 = new L.latLng(28.862232, 78.328941);  
  var pt3 = new L.latLng(28.791748, 77.919022);  
  var pt4 = new L.latLng(28.611738, 77.130164); 
  var pt5 = new L.latLng(28.508602, 76.921546);
  var pt6 = new L.latLng(28.414603, 77.118305);  
  var pt7 = new L.latLng(28.304603, 78.208305); 
  map = new MapmyIndia.Map('map', {
    center: center,
    zoomControl: true,
    hybrid: true,
    search: true,
    location:true,
    zoom:9
  });
  var mk1 = addMarker(pt1, '', "Address 1").addTo(map);
  var mk2 = addMarker(pt2, '', "Address 2").addTo(map);
  var mk3 = addMarker(pt3, '', "Address 3").addTo(map);
  var mk4 = addMarker(pt4, '', "Address 4").addTo(map);
  var mk5 = addMarker(pt5, '', "Address 5").addTo(map);
  var mk6 = addMarker(pt6, '', "Address 6").addTo(map);
  var mk7 = addMarker(pt7, '', "Address 7").addTo(map);

  var position = mk1.getLatLng();
  mk1.bindPopup("<div class='mapinfo'><h5>Title 1</h5><h6>Description 1</h6><div>");
  mk2.bindPopup("<div class='mapinfo'><h5>Title 2</h5><h6>Description 2</h6><div>");
  mk3.bindPopup("<div class='mapinfo'><h5>Title 3</h5><h6>Description 3</h6><div>");
  mk4.bindPopup("<div class='mapinfo'><h5>Title 4</h5><h6>Description 4</h6><div>");
  mk5.bindPopup("<div class='mapinfo'><h5>Title 5</h5><h6>Description 5</h6><div>");
  mk6.bindPopup("<div class='mapinfo'><h5>Title 6</h5><h6>Description 6</h6><div>");
  mk7.bindPopup("<div class='mapinfo'><h5>Title 7</h5><h6>Description 7</h6><div>");
};
function addMarker(position, icon, title) 
{
  if (icon == '')
  {
    var mk = new L.Marker(position, {
      draggable: false,
      title: title
    });
  } 
  else 
  {
    var mk = new L.Marker(position, {
      icon: icon,
      draggable: false,
      title: title
    });
  }
  map.addLayer(mk);
  return mk;
}
