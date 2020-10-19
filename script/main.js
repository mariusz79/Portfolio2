//after loading center view on second slide
$(document).ready(function () {
	$('.rightSide').scrollTop($(window).height() / 3);
	
});


//wobble effect on windows
var settings = {
	name: "my_window", //name
	depth: 0, //depth for zIndex
	offsetX: 0, //+ or - value the size of the div
	offsetY: 0, //+ or - value the size of the div
	moveTypeIn: "move", //method points follow the mouse
	moveTypeOut: "wobble", //method points go back to init position
	wobbleFactor: 0.01, //control the wobble effect
	wobbleSpeed: 0.1, //control the wobble speed
	moveSpeed: 1, //control the move speed
	lineWidth: 20, //lineWidth
	lineColor: "#fff", //no value = no line. Use hex/rgba values
	bodyColor: "", //no value = no body color. Use hex/rgba values
	numberOfXPoints: 21, //quantity of points horizontal. must be an odd int
	numberOfYPoints: 15, //quantity of points vertical. must be an odd int
	movementLeft: true, //enable/disable movement directions
	movementRight: false, //enable/disable movement directions
	movementTop: true, //enable/disable movement directions
	movementBottom: true, //enable/disable movement directions
	autoResize: false, //if true size will be automatically adjusted
	autoResize: false, //enable/disable automatic size adjustement
	debug: false, //enable/disable debug mode
};

$("#window").wobbleWindow(settings);
$("#window1").wobbleWindow(settings);
$("#window2").wobbleWindow(settings);

var settings1 = {
	name: "my_window", //name
	depth: 5, //depth for zIndex
	offsetX: 0, //+ or - value the size of the div
	offsetY: 0, //+ or - value the size of the div
	moveTypeIn: "move", //method points follow the mouse
	moveTypeOut: "wobble", //method points go back to init position
	wobbleFactor: 0.98, //control the wobble effect
	wobbleSpeed: 0.05, //control the wobble speed
	moveSpeed: 1, //control the move speed
	lineWidth: 0, //lineWidth
	lineColor: "", //no value = no line. Use hex/rgba values
	bodyColor: "#e8e1e1", //no value = no body color. Use hex/rgba values
	numberOfXPoints: 9, //quantity of points horizontal. must be an odd int
	numberOfYPoints: 5, //quantity of points vertical. must be an odd int
	movementLeft: false, //enable/disable movement directions
	movementRight: true, //enable/disable movement directions
	movementTop: false, //enable/disable movement directions
	movementBottom: false, //enable/disable movement directions
	autoResize: true, //if true size will be automatically adjusted
	autoResize: true, //enable/disable automatic size adjustement
	debug: false, //enable/disable debug mode
};

$(".menu").wobbleWindow(settings1);

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
	setTimeout(function () {
		$("#splashscreen").css('display', 'none');
		$(".leftMiddleText").addClass("animateLeftMiddle");
		$(".leftTop").addClass("fadein1animation");
		$(".leftBottom").addClass("fadein1animation");
	}, 3000);
	setTimeout(function () {
		$(".leftTop").addClass("opacity1");
		$(".leftBottom").addClass("opacity1");
	}, 5500);
};

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


//change cursor's appearance when on the right side
$(".rightSide").mouseenter(function () { 
	$("#magicPointer").css({ 'width': '90px', 'height': '90px' }).addClass("flex");
	$("#magicMouseCursor").css('display', 'none');
	$("#magicPointer").append(
		"<span>^</span><span>View</span><span>^</span>"
	);
});

$(".rightSide").mouseleave(function () {
	$("#magicPointer").css({ width: "5px", height: "5px" });
	$("#magicMouseCursor").css("display", "block");
	$("#magicPointer").empty();

});


//menu
var menuOpen = false;
$('.showMenu').click(function () {
	if (menuOpen == false) {
		$('.menuBackground').addClass('showMenuBackground');
		setTimeout(function () {
			$(".menu").removeClass("fade-out").addClass("scale");
			menuOpen = !menuOpen;
		}, 500);
	} else if (menuOpen == true) {
		$(".menu").removeClass("scale").addClass("fade-out");
		$(".menuBackground").removeClass("showMenuBackground");
			menuOpen = !menuOpen;
		}
});

$(".closeMenu").click(function () {
	$(".menu").removeClass("scale").addClass("fade-out");
	$(".menuBackground").removeClass('showMenuBackground');
	menuOpen = !menuOpen;
});

//show project
$(".holder").click(function () {
	var id = this.id;
	$(".menuBackground").addClass("showMenuBackground");
	setTimeout(function () {
		$(id).addClass("scale-vert");
	}, 500);
});

//close project
$(".closeProject").click(function () {
	$(".project").removeClass("scale-vert").addClass("fade-out");
	$(".menuBackground").removeClass("showMenuBackground");
});