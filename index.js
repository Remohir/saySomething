var value = document.getElementById("say");
var show = document.getElementById("show");

function play() {
	value.addEventListener("keydown", function(e) {	
		if(e.which == 13 || e.keyCode == 13) {
			e.preventDefault();
			show.innerHTML = value.value;
			value.value = "";
		}
	});
}

play();