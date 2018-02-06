function initialize() {
	var myLatlng = new google.maps.LatLng(1.320405, 103.659459);
	var myOptions = {
	  zoom: 16,
	  center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  styles: [
            {
              featureType: 'all',
              stylers: [
                { saturation: -80 }
              ]
            },{
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                { hue: '#00ffee' },
                { saturation: 50 }
              ]
            },{
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ]
	}
	
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	var contentString = '<div id="content">'+
		'<h1>Twin Disc (Far East) Pte Ltd</h1>'+
		'<div>'+
		'<p>6, Tuas Avenue 1, Singapore 639491</p>'+
		'</div>'+
		'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 400
	});
	
	var companyImage = new google.maps.MarkerImage('img/pin.png',
		new google.maps.Size(34,50),
		new google.maps.Point(0,0)
	);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: companyImage,
		title: 'Twin Disc (Far East) Pte Ltd'
	});
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});

  }
	
 initialize();     