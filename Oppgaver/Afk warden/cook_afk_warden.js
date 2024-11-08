if (window.alt1) {
	alt1.overLayClear();
	alt1.setTitle("AFK Warden: Cooking");
} else {
	console.error(
		"Alt1 is not detected. Make sure you are running this within the Alt1 environment."
	);
}

const cookInterface = {
	x: 0,
	y: 0,
	width: 400,
	height: 200,
};

const COOKING_THRESHOLD_TIME = 30000;

let lastCookingTime = Date.now();

function checkCooking() {
	const img = a1lib.captureHoldFullRs();
	const pixelColor = img.toData(
		cookInterface.x,
		cookInterface.y,
		cookInterface.width,
		cookInterface.height
	);

	if (pixelColor) {
		lastCookingTime = Date.now();
	}

	const currentTime = Date.now();
	const timeSinceLastCook = currentTime - lastCookingTime;

	if (timeSinceLastCook > COOKING_THRESHOLD_TIME) {
		notifyUser();
	}
}

function notifyUser() {
	alt1.sound.play("alert");
	alt1.overLayText(
		"Attention Required!",
		a1lib.mixColor(255, 0, 0),
		true,
		"48px Arial"
	);
}

setInterval(checkCooking, 5000);
