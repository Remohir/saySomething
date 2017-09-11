var value = document.getElementById("say");
var show = document.getElementById("show");
var arr1 = [];
var arr2 = [];

function play() {
	value.addEventListener("keydown", function(e) {	
		if(e.which == 13 || e.keyCode == 13) {
			e.preventDefault();
			arr1.push(value.value);
			console.log(arr1);
			show.innerHTML = value.value;
			value.value = "";
		}
	});
}

play();