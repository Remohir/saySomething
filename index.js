var value = document.getElementById("say");
var show = document.getElementById("show");
var main = document.getElementById("main");
var arr1 = ["Hello", "I", "am", "a", "test"];
var arr2 = [];
var number = arr1.length;
var newNumber;


play();


function play() {
	value.addEventListener("keydown", function(e) {
		if(main.id == "main") {	
			if((e.which == 13 || e.keyCode == 13) && (value.value != "")) {
				e.preventDefault();
				arr1.push(value.value);
				console.log(arr1);
				show.innerHTML = value.value;
				value.value = "";
				console.log(main);
				main.removeAttribute("id");
				main.classList.add("head");
				show.classList.remove("hide");
			}
		} else {
			keepPushing();
		}
	});
	setInterval(display, 1500);
}

function display() {
	newNumber = Math.floor(Math.random() * arr1.length);
	if(newNumber != number) {
		number = newNumber;
	} else {
		if(newNumber != (arr1.length - 1)) {
			number = newNumber + 1;
		} else {
			number = 0;
		}
	}
	show.innerHTML = arr1[number];
}

function keepPushing(e) {
	value.addEventListener("keydown", function(e) {
		if((e.which == 13 || e.keyCode == 13) && (value.value != "")) {
			arr1.push(value.value);
			value.value = "";
			console.log(arr1);
		}
	});
}