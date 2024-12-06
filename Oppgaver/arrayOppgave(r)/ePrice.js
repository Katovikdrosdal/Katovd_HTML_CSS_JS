let strom = [
	1.3, 2.3, 9.0, 10.0, 11.0, 17.0, 18.0, 19.0, 25.0, 26.0, 27.0, 33.0, 34.0,
	35.0, 41.0, 42.0, 43.0, 49.0, 50.0, 51.0, 57.0, 58.0, 59.0, 65.0, 66.0, 67.0,
	73.0, 74.0, 75.0, 81.0, 82.0,
];

const totalPrice = strom.reduce((sum, price) => sum + price, 0);
const averagePrice = (totalPrice / strom.length).toFixed(2);
const overTwo = strom.filter((price) => price > 2);
const sortedPrices = strom.toSorted((a, b) => a - b);

document.getElementById("show-average").addEventListener("click", () => {
	const section = document.getElementById("average-price-section");
	document.getElementById("average-price").innerText = `NOK ${averagePrice}`;
	toggleVisibility(section);
});

document.getElementById("show-over-two").addEventListener("click", () => {
	const section = document.getElementById("over-two-section");
	document.getElementById("over-two-count").innerText = overTwo.length;
	document.getElementById("over-two-list").innerHTML = overTwo
		.map((price) => `<li>NOK ${price.toFixed(2)}</li>`)
		.join("");
	toggleVisibility(section);
});

document.getElementById("show-sorted").addEventListener("click", () => {
	const section = document.getElementById("sorted-prices-section");
	document.getElementById("sorted-prices-list").innerHTML = sortedPrices
		.map((price) => `<li>NOK ${price.toFixed(2)}</li>`)
		.join("");
	toggleVisibility(section);
});

function toggleVisibility(section) {
	const sections = document.querySelectorAll(".section");
	sections.forEach((s) => {
		if (s !== section) s.classList.add("hidden");
	});
	section.classList.toggle("hidden");
}
