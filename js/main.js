function getAPIdata(input) {

	// get random dog image
	fetch('https://www.cleverbot.com/getreply?key=CC8i5DDHGwKbEH8FpWkSLtVXcrA&input=' + input)
	
	// parse to JSON format -> dit is altijd hetzelfde
	.then(function(response) {
		return response.json();
	})
	
	// render dog image
	.then(function(response) {

		// show full JSON object
		console.log(response.output);
		
		document.getElementById('bot').innerHTML += response.output + '\r\n';
		//hide loading image
		//Scroll to bottom of textarea
		
	})
	
	
	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});
}

// init data stream

//Event listener toevoegen voor enter op de input (chatInput) 
//--> $("chatSend").click();

document.getElementById('chatSend').onclick = function(){
	//Show loading image
	//Jouw input moet weg --> moet in tekstbox komen
	var input = document.getElementById('chatInput').value;
	
	getAPIdata(input);	
};