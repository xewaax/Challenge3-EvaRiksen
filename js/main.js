function getAPIdata(input) {

	// get random dog image
	fetch('https://www.cleverbot.com/getreply?key=CC8i5DDHGwKbEH8FpWkSLtVXcrA&input=' + input)
	
	// parse to JSON format -> dit is altijd hetzelfde
	.then(function(response) {
		return response.json();
	})
	
	
	.then(function(response) {

		
		document.getElementById('bot').innerHTML += 'Jarvis: ' + response.output + '\r\n';
		
		scrollDown();
				
		
	})	
		
	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});
}

function scrollDown(){
	
	//Scrollbar always to bottom
		var elem = document.getElementById('bot');
		elem.scrollTop = elem.scrollHeight;	
}

// init data stream

//Event listener toevoegen voor enter op de input (chatInput) 
//--> $("chatSend").click();
document.getElementById('chatInput').onkeydown = function(e){
   if(e.keyCode == 13){
     document.getElementById("chatSend").click();
   }
};

document.getElementById('chatSend').onclick = function(){
	//Show loading image
	//Jouw input moet weg --> moet in tekstbox komen
	var input = document.getElementById('chatInput').value;

	document.getElementById('bot').innerHTML += 'You: ' + input + '\r\n';
	
	scrollDown();
	
	document.getElementById('chatInput').value='';
	
	//icon match met string
	var sleepArray = ['hotel', 'sleep', 'bed'];
	var etenArray = ['food', 'hungry', 'thirsty'];
	var funArray = ['bored', 'fun', 'POI'];
	
	var sleepSearch = false;
	var etenSearch = false;
	var funSearch = false;
	
	//Hotels search
	for (i = 0; i < sleepArray.length; i++) {
	   if (input.toLowerCase().indexOf(sleepArray[i]) != -1){
		sleepSearch = true;
		}
	}
	//Eten search
	for (i = 0; i < etenArray.length; i++) {
	   if (input.toLowerCase().indexOf(etenArray[i]) != -1){
		etenSearch = true;
		}
	}
	
	//activiteiten search
	for (i = 0; i < funArray.length; i++) {
	   if (input.toLowerCase().indexOf(funArray[i]) != -1){
		funSearch = true;
		}
	}
	if (sleepSearch) {
		document.getElementById('bot').innerHTML += 'Jarvis: Here are a few hotels nearby where you can get some rest. \r\n';
		
		addMarker(new google.maps.LatLng(28.399725, -80.613980),'images/hotel2.png');
		
		addMarker(new google.maps.LatLng(28.398592, -80.615777),'images/hotel2.png');
		
		addMarker(new google.maps.LatLng(28.394938, -80.612977),'images/hotel2.png');
		
		map.setCenter(new google.maps.LatLng(28.399725, -80.613980));
		map.setZoom(15);
		
	}else if (etenSearch){
		document.getElementById('bot').innerHTML += 'Jarvis: Go and grab a bite at one of these places! \r\n';	
		
		addMarker(new google.maps.LatLng(28.615117, -80.820408),'images/restaurant.png');
		
		addMarker(new google.maps.LatLng(28.614910, -80.807126),'images/restaurant.png');
		
		addMarker(new google.maps.LatLng(28.615665, -80.815873),'images/restaurant.png');
		
		map.setCenter(new google.maps.LatLng(28.615665, -80.815873));
		map.setZoom(15);
		
	}else if (funSearch){
		document.getElementById('bot').innerHTML += 'Jarvis: Here are some fun places for you to visit. \r\n';	
		
		addMarker(new google.maps.LatLng(28.610427, -80.808799),'images/point.png');
		
		addMarker(new google.maps.LatLng(28.614665, -80.694237),'images/point.png');	

		addMarker(new google.maps.LatLng(28.573065, -80.649261),'images/point.png');
		
		
		map.setCenter(new google.maps.LatLng(28.614665, -80.694237));
		map.setZoom(11);
		

	} else{
		getAPIdata(input);
	}			
	
	
};