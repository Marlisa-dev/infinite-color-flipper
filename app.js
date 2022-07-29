const btn = document.querySelector(".button");
const color = document.querySelector(".color");

function randomColor(){
	let colorCode =[];
	for (let i = 0; i < 6; i++) {
		let hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f" ];
		let randomCode = hexCodes[Math.floor(Math.random() * hexCodes.length) + 1];
		colorCode.push(randomCode);
	}
	return "#" + colorCode.join("")
}

// This code affects the body (top) and not the main content area
//function colorChange () {
//	document.body.style.background = randomColor();
//}

function colorChange () {
	document.getElementById("main").style.backgroundColor = randomColor();
}

btn.addEventListener("click", function() {
	colorChange();	
	color.innerHTML = randomColor();
})

