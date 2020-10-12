//option for magic mouse cursor
options = {
	cursorOuter: "circle-basic",
	hoverEffect: "circle-move",
	hoverItemMove: false,
	defaultCursor: false,
	outerWidth: 30,
	outerHeight: 30,
	color: "black",
};
magicMouse(options);

//welcome screen, reveal after website is loaded
function splashScreen() {
	var splashScreen = document.getElementById("splashscreen");
	setTimeout(function () {
		splashScreen.style.display = "none";
	}, 2000);
};

