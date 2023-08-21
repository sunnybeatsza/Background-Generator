var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setInitialGradient() {
	body.style.background =
	  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
  }

  function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
  
  // Function to set random colors for color inputs
  function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
  }

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
setInitialGradient();

random.addEventListener("click",setRandomColors)