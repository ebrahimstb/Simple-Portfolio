//Dropdown for the sidebar menu for mobile.
function expandMenu () {
	let sidebarMenu = document.getElementById('sidebarMenu');
	
	if (sidebarMenu.classList.contains('open')) {
		sidebarMenu.classList.remove('open');
	} else {
		sidebarMenu.classList.add('open');
	}
}

//Hamburger button toggle effect.
function navToggle () {
	let navIcon = document.getElementById('nav-icon');

	if (navIcon.classList.contains('open')) {
		navIcon.classList.remove('open');
	} else {
		navIcon.classList.add('open');
	}
}

//Add overlay when clicking menu button. BROKEN
function overlayToggle () {
	let overlay = document.getElementById('overlay');

	if (overlay.classList.contains('active')) {
		overlay.classList.remove('active');
	} else {
		overlay.classList.add('active');
	}
}



//Assiging dropdown and button toggle effect to hamburger button.
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", expandMenu);
menuButton.addEventListener("click", navToggle);
menuButton.addEventListener("click", overlayToggle);


//Accordion Buttons for menu.
const accordionButtons = document.querySelectorAll(".accordionButton");

accordionButtons.forEach((accordionButton) => {
	accordionButton.addEventListener("click", () => {
		if (accordionButton.classList.contains("accordion-open")) {
			accordionButton.classList.remove("accordion-open");
		} else {
			const openAccordionButtons = document.querySelectorAll(".accordion-open");

			openAccordionButtons.forEach((openAccordionButton) => {
				openAccordionButton.classList.remove("accordion-open");
			});
			accordionButton.classList.add("accordion-open");
		}
	});
});