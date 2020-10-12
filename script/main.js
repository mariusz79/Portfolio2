//options for magic mouse cursor
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


//change cursor's appearance when on the right side
const right = document.querySelector(".rightSide");
const cursor = document.querySelector("#magicMouseCursor");
const pointer = document.querySelector("#magicPointer");

var para = document.createElement("span");
var para1 = document.createElement("span");
var para2 = document.createElement("span");
var node = document.createTextNode("^");
var node1 = document.createTextNode("View");
var node2 = document.createTextNode("^");

para.appendChild(node);
para1.appendChild(node1);
para2.appendChild(node2);

right.addEventListener("mouseenter", () => {
	pointer.style.height = "90px";
	pointer.style.width = "90px";
	cursor.classList.add("hide");
	pointer.append(para, para1, para2);
	pointer.classList.add("flex");
});

right.addEventListener("mouseleave", () => {
	pointer.style.height = "5px";
	pointer.style.width = "5px";
	cursor.classList.remove("hide");
	pointer.removeChild(para);
	pointer.removeChild(para1);
	pointer.removeChild(para2);
});


//menu
const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".menuOpen");

var menuOpenClose = false;

function openMenu() {
	if (menuOpenClose == false) {
		menuOpen.classList.remove("fade-out");
		menuOpen.classList.add("scale");
		menuOpenClose = true;
	} else {
		menuOpen.classList.remove("scale");
		menuOpen.classList.add("fade-out");
		menuOpenClose = false;
	}
}
menu.addEventListener("click", openMenu);

