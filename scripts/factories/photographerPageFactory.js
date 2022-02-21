/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function photographerPageFactory(data) {
	const { name, id, city, country, tagline, price, portrait } = data;
	const picture = `assets/images/photographers/${portrait}`;

	function getUserPageDOM() {
		const container = document.querySelector('.photograph-header');
		const titleContainer = document.createElement('div');
		const h1 = document.createElement('h1');
		h1.textContent = name;
		const citySpan = document.createElement('span');
		citySpan.textContent = city + ', ';
		const countrySpan = document.createElement('span');
		countrySpan.textContent = country;
		const description = document.createElement('p');
		description.textContent = tagline;

		const button = document.createElement('button');
		button.classList.add('modal-button');
		button.innerHTML = 'Contactez-moi';
		button.setAttribute('type', 'button');
		button.setAttribute('aria-label', `Contacter ${name}`);
		const img = document.createElement('img');
		img.setAttribute('src', picture);
		img.setAttribute('alt', name);
		const infoContainer = document.createElement('div');
		infoContainer.classList.add('info-container');
		const photographerPrice = document.createElement('div');
		photographerPrice.classList.add('photographer-price');
		photographerPrice.innerHTML = `${price} € / jour`;

		// Insert elements
		container.appendChild(titleContainer);
		titleContainer.appendChild(h1);
		titleContainer.appendChild(citySpan);
		titleContainer.appendChild(countrySpan);
		titleContainer.appendChild(description);
		container.appendChild(button);
		container.appendChild(img);
		main.appendChild(infoContainer);
		infoContainer.appendChild(photographerPrice);
		return container;
	}

	return { name, id, city, country, tagline, picture, price, getUserPageDOM };
}
