/* eslint-disable no-undef */
// document.getElementById("theme-switch").addEventListener("change", () => {
// 	window.appPreferences.colorScheme.toggle();
// });

document.addEventListener("DOMContentLoaded", () => {
	const headerElement = document.getElementById("header");
	let scrollY = window.scrollY;

	const checkHeader = () => {
		if (scrollY > 0) headerElement.dataset.scrolled = "";
		else delete headerElement.dataset.scrolled;
	};

	document.addEventListener("scroll", () => {
		scrollY = window.scrollY;
		checkHeader();
	});

	checkHeader();
});
