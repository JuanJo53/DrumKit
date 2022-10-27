var btnList = document.querySelectorAll(".drum").length;
for (var i = 0; i < btnList; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var btnInnerHTML = this.innerHTML;
		makeSound(btnInnerHTML);
		btnAnimation(btnInnerHTML);
	});
}
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
	btnAnimation(event.key);
});

function makeSound(key) {
	var sound = "sounds/";
	switch (key) {
		case "w":
			var playing = new Audio(sound + "tom-1.mp3");
			playing.play();
			break;
		case "a":
			var playing = new Audio(sound + "tom-2.mp3");
			playing.play();
			break;
		case "s":
			var playing = new Audio(sound + "tom-3.mp3");
			playing.play();
			break;
		case "d":
			var playing = new Audio(sound + "tom-4.mp3");
			playing.play();
			break;
		case "j":
			var playing = new Audio(sound + "snare.mp3");
			playing.play();
			break;
		case "k":
			var playing = new Audio(sound + "crash.mp3");
			playing.play();
			break;
		case "l":
			var playing = new Audio(sound + "kick-bass.mp3");
			playing.play();
			break;
		default:
			console.log(key);
	}
}
function btnAnimation(key) {
	var activeBtn = document.querySelector("." + key);
	activeBtn.classList.add("pressed");
	setTimeout(function () {
		activeBtn.classList.remove("pressed");
	}, 1000);
}
