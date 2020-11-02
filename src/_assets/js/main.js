// Footer Date
document.getElementById('year').innerHTML = new Date().getFullYear();

// Menu
document.addEventListener('DOMContentLoaded', () => {
	// let navBar = document.getElementById('navbar');
	let hamBurger = document.querySelector('.hamburger');
	let menuCont = document.querySelector('.menu_container');
	// let navItem = document.querySelector('.nav_item');

	// On click
	hamBurger.addEventListener('click', function() {

		// Toggle class 'is-active'
		// navBar.classList.toggle('isOpen');
		hamBurger.classList.toggle('isOpen');
    menuCont.classList.toggle('isOpen');

		// disable body scroll
		document.body.classList.toggle('noScroll');
	});
});

import 'lazysizes';
import './partials/_browser-update';
