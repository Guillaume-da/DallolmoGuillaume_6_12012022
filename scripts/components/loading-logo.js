/* eslint-disable no-unused-vars */
const loader = {
	init: () => {
		const container = document.querySelector('.loader-container');
		const loader = document.createElement( 'div' );
		loader.classList.add('loader');
		const img = document.createElement('img');
		img.classList.add('loader-img');
		img.setAttribute('src', './assets/images/logo.png');
		container.appendChild(loader);
		loader.appendChild(img);

		setTimeout(function(){
			container.style.display = 'none';
			img.style.display = 'none';
		}
		, 1800);
	}
};


document.addEventListener('DOMContentLoaded', loader.init);
