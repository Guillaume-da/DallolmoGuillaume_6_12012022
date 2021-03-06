/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function photographerGalleryFactory(data) {
	const { id, photographerId, title, image, video, likes } = data;
	function getUserGalleryDOM() {
		let count = likes;
		let isLiked = false;
		function imageLike(heartContainer) {
			if(isLiked){
				count = count - 1;
				heartContainer.innerHTML = '';
				heartContainer.innerHTML = `<span class="far fa-heart" role="button" title="Ajouter un like" aria-label="likes" tabindex="0"></span>${count}<span></<pan>`;
				
			} else {
				count = count + 1;
				heartContainer.innerHTML = '';
				heartContainer.innerHTML = `<span class="fas fa-heart" role="button" title="Retirer votre like" aria-label="likes" tabindex="0"></span>${count}<span></<pan>`;
			}
			isLiked = !isLiked;
		}
		if (image) {
			const imgContainer = document.createElement('article');
			imgContainer.classList.add('item-container');
			const img = document.createElement('img');
			img.classList.add('gallery-img');
			img.setAttribute('src', './assets/images/' + image);
			img.setAttribute('alt',`${title}`);
			img.setAttribute('title',`${title}`);
			img.setAttribute('tabindex', '0');
			img.setAttribute('aria-label', `${title}`);
			const descriptionContainer = document.createElement('div');
			descriptionContainer.classList.add('image-description');
			const imageTitle = document.createElement('h2');
			imageTitle.textContent = title;

			// Insert likes
			const heartContainer = document.createElement('div');
			heartContainer.classList.add('heart-container');
			const heartCounter = document.createElement('span');
			heartCounter.setAttribute('aria-label', `${likes} likes`);
			heartCounter.textContent = likes;
			heartContainer.innerHTML = '<span class="far fa-heart" role="button" aria-label="likes" title="Ajouter un like" tabindex="0"></span>';

			// Insert elements
			imgContainer.appendChild(img);
			imgContainer.appendChild(descriptionContainer);
			descriptionContainer.appendChild(imageTitle);
			descriptionContainer.appendChild(heartContainer);
			heartContainer.appendChild(heartCounter);

			// Image Heart counter
			heartContainer.addEventListener('click', () => {
				imageLike(heartContainer);
			});

			// Navigation witk keys
			heartContainer.addEventListener('keydown', (e) => {
				if(e.target.classList.contains('fa-heart') && e.code === 'Enter'){
					imageLike(heartContainer);
				}
			});
			lightbox();
			return imgContainer;
		} else if (video) {
			// Create videos
			const videoContainer = document.createElement('article');
			videoContainer.classList.add('item-container');
			const vid = document.createElement('video');
			vid.setAttribute('src', './assets/images/' + video);
			const descriptionContainer = document.createElement('div');
			descriptionContainer.classList.add('image-description');
			const imageTitle = document.createElement('h2');
			imageTitle.textContent = title;

			// Insert likes
			const heartContainer = document.createElement('div');
			heartContainer.classList.add('heart-container');
			const heartCounter = document.createElement('span');
			heartCounter.setAttribute('aria-label', `${likes} likes`);
			heartCounter.textContent = likes;
			heartContainer.innerHTML = '<span class="far fa-heart" title="Ajouter un like" role="button" aria-label="likes" tabindex="0"></span>';
			vid.setAttribute('tabindex', '0');
			vid.setAttribute('title',`${title}`);
			vid.classList.add('gallery-img');
			vid.setAttribute('aria-label', `${title}`);
			
			videoContainer.appendChild(vid);
			videoContainer.appendChild(descriptionContainer);
			descriptionContainer.appendChild(imageTitle);
			descriptionContainer.appendChild(heartContainer);
			heartContainer.appendChild(heartCounter);

			// Video Heart counter
			heartContainer.addEventListener('click', () => {
				imageLike(heartContainer);
			});

			// Navigation witk keys
			heartContainer.addEventListener('keydown', (e) => {
				if(e.target.classList.contains('fa-heart') && e.code === 'Enter'){
					imageLike(heartContainer);
				}
			});
			lightbox();
			return videoContainer;
		}		
	}
	return { id, photographerId, title, image, video, likes, getUserGalleryDOM};
}