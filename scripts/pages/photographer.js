/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Photographer page
function displayData(photographer) {
	// const header = document.querySelector('.photograph-header');
	const main = document.getElementById('main');
	const photographerCard = photographerPageFactory(photographer);
	// console.log(photographerCard);
	const userPageDOM = photographerCard.getUserPageDOM();
	main.prepend(userPageDOM);
}

function displayMediaData(medias) {
	medias.forEach((media) => {
		const gallery = document.querySelector('.media-gallery');
		const photographerGallery = photographerGalleryFactory(media);
		const userGalleryDOM = photographerGallery.getUserGalleryDOM();
		gallery.appendChild(userGalleryDOM);
	});
}

function displayTotalLikes() {
	let data = localStorage.getItem('sortedResult');
	data = JSON.parse(data);
	let likesArray = [];
	for (let i = 0; i < data.length; i++) {
		// Put likes in array
		likesArray.push(data[i].likes);
	}

	// Find sum of likes
	let totalLikes = likesArray.reduce((sum, a) => sum + a, 0);

	// Insert sum of likes
	setTimeout(() => {
		const infoContainer = document.querySelector('.info-container');
		const heartCount = document.createElement('div');
		heartCount.classList.add('hearts-count');
		heartCount.innerHTML = totalLikes + ' <i class="fa fa-heart"></i>';
		infoContainer.appendChild(heartCount);
	}, 2200);
	return totalLikes;
}

// Get photographer images
async function getMedias() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let actualId = urlParams.get('id');

	// Fetch datas
	let fetchOptions = {
		mode: 'cors',
		cache: 'no-cache',
	};
	let response = await fetch(
		'./data/photographers.json',
		fetchOptions
	);

	// if HTTP-status is 200-299
	if (response.ok) {
		let datas = await response.json();

		// Return the object associated to id in url
		let result = datas.media.filter((x) => x.photographerId == actualId);
		let photographer = datas.photographers.find((x) => x.id == actualId);
		let sortedResult = result.sort((a, b) => b.likes - a.likes);
		
		// Set datas in localStorage
		localStorage.clear();
		localStorage.setItem('photographer', JSON.stringify(photographer));
		localStorage.setItem('sortedResult', JSON.stringify(sortedResult));
		return sortedResult;
	} else {
		alert('L\'API ne renvoit aucune donnée');
	}
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

getMedias();	
setTimeout(function(){
	let photographer = localStorage.getItem('photographer');
	let medias = localStorage.getItem('sortedResult');
	photographer = JSON.parse(photographer);
	medias = JSON.parse(medias);
	
	displayData(photographer);
	getSortedDatas();
	displayMediaData(medias);
	lightboxNavigation();
	displayTotalLikes();
}
, 500);