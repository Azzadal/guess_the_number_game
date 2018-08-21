var rand;
function randomInteger(min, max) {
	rand = min - 0.5 + Math.random() * (max-min+1)
	rand = Math.round(rand);
	return rand;
	}
	randomInteger(0, 5);


function change() {
	var x = document.getElementById("name");
	var answer = Math.sqrt(rand);
	if(x.value<rand) {
		document.getElementById("a").innerHTML = ("мало");
	} else if(x.value>rand) {
		document.getElementById("a").innerHTML = ("много");
	} else{
		document.getElementById("a").innerHTML = ("норм");
	}	
}