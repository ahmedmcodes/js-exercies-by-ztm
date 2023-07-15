var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let button  = document.querySelector('.randomcolor')

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Solution to Questions:
//Write code so that the colour inputs match the background generated on the first page load. 
//Ans: Added the initial colors into html value attribute


//Display the initial CSS linear gradient property on page load.
//ANS
window.addEventListener("load", setGradient)

//Add a random button which generates two random numbers for the colour inputs.

function generateRandomColor(){
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	randomColor = '#' + randomColor
	color1.value = randomColor;
	let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	randomColor2 = '#' + randomColor2
	color2.value = randomColor2;
	console.log(color1.value)
	console.log(color2.value)

	setGradient()

}


button.addEventListener('click', generateRandomColor)