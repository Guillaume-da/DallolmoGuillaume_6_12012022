/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getSortedDatas() {
	let data = localStorage.getItem('sortedResult');
	data = JSON.parse(data);

	function getDatas(sort) {
		const gallery = document.querySelectorAll('.item-container');
		const loader = document.querySelector('.gallery-loader');

		// Display loader
		loader.style.display = 'block';

		// Sort datas from parameter
		let newData = sort;
		// Remove existing gallery
		gallery.forEach((e) => e.remove());

		// Display a new gallery
		displayMediaData(data);

		// Refresh lightbox
		lightbox();

		// Remove the loader
		setTimeout(function () {
			loader.style.display = 'none';
		}, 1500);
		return newData;
	}

	// Set localstorage
	function setLocalstorage(data) {
		localStorage.clear();
		localStorage.setItem('sortedResult', JSON.stringify(data));
	}

	// Set selection in localstorage
	function getNewDatas(e) {
		let dropdown = document.querySelector('.dropdown-menu');
		let icon = document.querySelector('.icon');
		let button = document.querySelector('.dropdown-toggle');
		button.innerHTML = e.target.innerHTML;
		dropdown.style.display = 'none';
		icon.innerHTML = '<span class="fas fa-chevron-down"></span>';

		if (e.target.innerHTML == 'Titre') {
			let newData = data.sort((a, b) => a.title.localeCompare(b.title));
			getDatas(newData);
			setLocalstorage(newData);
			return newData;
		} else if (e.target.innerHTML == 'Date') {
			let newData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
			getDatas(newData);
			setLocalstorage(newData);
			return newData;
		} else if (e.target.innerHTML == 'Popularité') {
			let newData = data.sort((a, b) => b.likes - a.likes);
			getDatas(newData);
			setLocalstorage(newData);
			return newData;
		} 
	}

	// Select an option by clicking
	let links = document.querySelectorAll('.dropdown-menu-link');
	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			getNewDatas(e);
		});

		// Select an option with Enter key
		let modal = document.getElementById('contact_modal');
		link.addEventListener('keydown', (e) => {
			if(e.code === 'Enter'){
				getNewDatas(e);
			}
		});
	});
}

// Open / Close select
let button = document.querySelector('.dropdown-toggle');
let dropdown = document.querySelector('.dropdown-menu');
let icon = document.querySelector('.icon');
button.addEventListener('click', ()=>{
	if(dropdown.style.display === 'block'){
		dropdown.style.display = 'none';
	} else {
		dropdown.style.display = 'block';
		icon.innerHTML = '<span class="fas fa-chevron-up"></span>';
		dropdown.setAttribute('aria-expanded', true);
	}
});

// Close select with escape button
button.addEventListener('keydown', (e)=>{
	if(e.code === 'Escape'){
		dropdown.style.display = 'none';
	}
});