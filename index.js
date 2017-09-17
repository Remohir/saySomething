var value = document.getElementById("say");
var show = document.getElementById("show");
var main = document.getElementById("main");
var counter = document.getElementById("counter");
var count = 500;
var arr1 = ["Hello", "I", "am", "a", "test"];
var arr2 = [];
var number = arr1.length;
var newNumber;
counter.innerHTML = count;


play();
remaining();


function play() {
	value.addEventListener("keydown", function(e) {
		if(main.id == "main") {	
			if((e.which == 13 || e.keyCode == 13) && (value.value != "")) {
				counter.innerHTML = count;
				e.preventDefault();
				arr1.push(value.value);
				console.log(arr1);
				show.innerHTML = value.value;
				value.value = "";
				console.log(main);
				main.removeAttribute("id");
				main.classList.add("head");
				setInterval(display, 1500);
			}
		} else {
			keepPushing();
		}
	});
}

function display() {
	temp = arr1.length
	if(temp == 0) {
		arr1 = arr2;
		arr2 = [];
		temp = arr1.length;
	}

	newNumber = Math.floor(Math.random() * temp);
	show.innerHTML = arr1[newNumber];
	arr2.push(arr1[newNumber]);
	arr1.splice(newNumber, 1);	
}

function keepPushing(e) {
	value.addEventListener("keyup", function(e) {
		if((e.which == 13 || e.keyCode == 13) && (value.value != "")) {
			arr1.push(value.value);
			value.value = "";
			console.log(arr1);
		}
	});
}

function remaining() {
	value.addEventListener("keyup", function(e) {
		if((e.which != 13 || e.keyCode != 13) && (value.value.length != 0) && (e.which !=  8 ||  e.keyCode != 8 ) && (e.which !=  46 ||  e.keyCode != 46 )) {
			count = 500 - value.value.length;
		} else if ((e.which ==  8 ||  e.keyCode == 8 ) || (e.which ==  46 ||  e.keyCode == 46 ) && (value.value != "")) {
			count = 500 - value.value.length;
		} else if((e.which == 13 || e.keyCode == 13) && (value.value != "")) {
			count = 500;
		}
		counter.innerHTML = count;
	});
}