/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getSortedDatas() {
	let data = localStorage.getItem('sortedResult');
	data = JSON.parse(data);

	function getDatas() {
		const gallery = document.querySelectorAll('.item-container');
		const loader = document.querySelector('.gallery-loader');

		// Display loader
		loader.style.display = 'block';
		
		// Remove existing gallery
		gallery.forEach((e) => e.remove());

		// Display a new gallery
		displayMediaData(data);

		// Refresh lightbox
		lightbox();

		// Remove the loader
		setTimeout(() => {
			loader.style.display = 'none';
		}, 1500);
	}

	// Set localstorage
	function setLocalstorage(data) {
		localStorage.clear();
		localStorage.setItem('sortedResult', JSON.stringify(data));
	}

	// Set selection in localstorage
	function getNewDatas(e) {
		const dropdown = document.querySelector('.dropdown-menu');
		const icon = document.querySelector('.icon');
		const button = document.querySelector('.dropdown-toggle');
		button.innerHTML = e.target.innerHTML;
		dropdown.style.display = 'none';
		icon.innerHTML = '<span class="fas fa-chevron-down"></span>';

		if (e.target.innerHTML == 'Titre') {
			let newData = data.sort((a, b) => a.title.localeCompare(b.title));
			setLocalstorage(newData);
			getDatas();
			return newData;
		} else if (e.target.innerHTML == 'Date') {
			let newData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
			setLocalstorage(newData);
			getDatas();
			return newData;
		} else if (e.target.innerHTML == 'Popularité') {
			let newData = data.sort((a, b) => b.likes - a.likes);
			setLocalstorage(newData);
			getDatas();
			return newData;
		} 
	}

	// Select an option by clicking
	const links = document.querySelectorAll('.dropdown-menu-link');
	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			getNewDatas(e);
		});

		// Select an option with Enter key
		link.addEventListener('keydown', (e) => {
			if(e.code === 'Enter'){
				getNewDatas(e);
			}
		});
	});
}

// Open select
const button = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown-menu');
const icon = document.querySelector('.icon');
button.addEventListener('click', ()=>{
	if(dropdown.style.display === 'block'){
		dropdown.style.display = 'none';
	} else {
		dropdown.style.display = 'block';
		icon.innerHTML = '<span class="fas fa-chevron-up"></span>';
		dropdown.setAttribute('aria-expanded', true);
	}
});

// Close select with enter key on arrow
const upIcon = document.querySelector('.fa-chevron-up');
icon.addEventListener('keydown', (e)=>{
	if(dropdown.style.display === 'block'){
		if(e.code === 'Enter'){
			dropdown.style.display = 'none';
			icon.innerHTML = '<span class="fas fa-chevron-down"></span>';
			dropdown.setAttribute('aria-expanded', false);
		}	
	}
});

// Open / close select by clicking on arrow
icon.addEventListener('click', ()=> {
	if(dropdown.style.display === 'block'){
		dropdown.style.display = 'none';
		icon.innerHTML = '<span class="fas fa-chevron-down"></span>';
		dropdown.setAttribute('aria-expanded', false);
	} else {
		dropdown.style.display = 'block';
		icon.innerHTML = '<span class="fas fa-chevron-up" tabindex="0"></span>';
		dropdown.setAttribute('aria-expanded', true);
	}
});

// Close select with escape button
button.addEventListener('keydown', (e)=>{
	if(e.code === 'Escape'){
		dropdown.style.display = 'none';
		icon.innerHTML = '<span class="fas fa-chevron-down"></span>';
		dropdown.setAttribute('aria-expanded', false);
	}
});

// Close select with escape button
dropdown.addEventListener('keydown', (e)=>{
	if(e.code === 'Escape'){
		dropdown.style.display = 'none';
		icon.innerHTML = '<span class="fas fa-chevron-down"></span>';
		dropdown.setAttribute('aria-expanded', false);
	}
});