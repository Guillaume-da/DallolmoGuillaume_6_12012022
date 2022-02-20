/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Gallery images
function photographerGalleryFactory(data) {
	const { id, photographerId, title, image, video, likes } = data;
	function getUserGalleryDOM() {
		if (image) {
			// eslint-disable-next-line no-inner-declarations
			function imageLike() {
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
			const imgContainer = document.createElement('figure');
			imgContainer.classList.add('item-container');
			const img = document.createElement('img');
			img.classList.add('gallery-img');
			img.setAttribute('src', './assets/images/' + image);
			img.setAttribute('alt',`${title}`);
			img.setAttribute('title',`${title}`);
			img.setAttribute('tabindex', '0');
			img.setAttribute('aria-label', `${title}`);
			const descriptionContainer = document.createElement('figcaption');
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
			let count = likes;
			let isLiked = false;
			heartContainer.addEventListener('click', () => {
				imageLike();
			});

			// Navigation witk keys
			heartContainer.addEventListener('keydown', (e) => {
				if(e.target.classList.contains('fa-heart') && e.code === 'Enter'){
					imageLike();
				}
			});
			lightbox();
			return imgContainer;
		} else if (video) {
			// eslint-disable-next-line no-inner-declarations
			function videoLike() {
				if(isLiked){
					count = count - 1;
					heartContainer.innerHTML = '';
					heartContainer.innerHTML = `<span class="far fa-heart" role="button" title="Ajouter un like à cette video" aria-label="likes"  tabindex="0"></span>${count}<span></<pan>`;
					
				} else {
					count = count + 1;
					heartContainer.innerHTML = '';
					heartContainer.innerHTML = `<span class="fas fa-heart" role="button" title="Retirer votre like" aria-label="likes" tabindex="0"></span>${count}<span></<pan>`;
				}
				isLiked = !isLiked;
			}
			// Create videos
			const videoContainer = document.createElement('div');
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
			heartContainer.innerHTML = '<span class="far fa-heart" title="Ajouter un like à cette video" role="button" aria-label="likes" tabindex="0"></span>';
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
			let count = likes;
			let isLiked = false;
			heartContainer.addEventListener('click', () => {
				videoLike();
			});

			// Navigation witk keys
			heartContainer.addEventListener('keydown', (e) => {
				if(e.target.classList.contains('fa-heart') && e.code === 'Enter'){
					videoLike();
				}
			});
			return videoContainer;
		}		
	}
	return { id, photographerId, title, image, video, likes, getUserGalleryDOM};
	
}