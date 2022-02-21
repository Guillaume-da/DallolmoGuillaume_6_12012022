// eslint-disable-next-line no-unused-vars
function photographerCardFactory(data) {
	const { name, id, city, country, tagline, price, portrait } = data;
	const picture = `assets/images/photographers/${portrait}`;
	function getUserCardDOM() {
		const article = document.createElement('article');
		const photographerLink = document.createElement('a');
		photographerLink.classList.add('photographer-link');
		// Add link to image with ID in parameter
		photographerLink.href = `./photographer.html?id=${id}`;
		const imgContainer = document.createElement('div');
		imgContainer.classList.add('article-header');
		const img = document.createElement('img');
		img.setAttribute('src', picture);
		img.setAttribute('alt', name);
		const h2 = document.createElement('h2');
		h2.textContent = name;
		const container = document.createElement('div');
		container.classList.add('location');
		const citySpan = document.createElement('span');
		citySpan.textContent = city + ',';
		const countrySpan = document.createElement('span');
		countrySpan.textContent = country;
		const description = document.createElement('p');
		description.textContent = tagline;
		const priceContainer = document.createElement('div');
		priceContainer.classList.add('price');
		const priceTag = document.createElement('span');
		priceTag.textContent = price;
		const priceUnit = document.createElement('span');
		priceUnit.textContent = '€/jour';

		// Insert elements
		article.appendChild(photographerLink);
		photographerLink.appendChild(imgContainer);
		imgContainer.appendChild(img);
		imgContainer.appendChild(h2);
		article.appendChild(container);
		container.appendChild(citySpan);
		container.appendChild(countrySpan);
		article.appendChild(description);
		article.appendChild(priceContainer);
		priceContainer.appendChild(priceTag);
		priceContainer.appendChild(priceUnit);
		return article;
	}
	return { name, id, city, country, tagline, picture, price, getUserCardDOM };
}
