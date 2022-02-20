// Get photographers list
async function getPhotographers() {
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
		return datas;
	} else {
		alert('L\'API ne renvoit aucune donnée');
	}
}

async function displayData(photographers) {
	const photographersSection = document.querySelector('.photographer-section');
	photographers.forEach((photographer) => {
		// eslint-disable-next-line no-undef
		const photographerModel = photographerCardFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// eslint-disable-next-line no-undef
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

init();

    