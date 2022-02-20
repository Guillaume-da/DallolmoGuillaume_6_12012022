/* eslint-disable no-unused-vars */

// Retrieve photographer name
let photographerName = document.querySelector('.photographer-name');
setTimeout(() => {
	let photographer = localStorage.getItem('photographer');
	photographer = JSON.parse(photographer);
	photographerName.textContent = photographer.name;
}
, 2000);

// Open contact modal
setTimeout(function(){
	const modalButton = document.querySelector('.modal-button');
	modalButton.addEventListener('click', function () {
		// console.log('clic');
		const modal = document.getElementById('contact_modal');
		const formInput = document.getElementById('first-name-input');
		modal.style.display = 'block';
		formInput.focus();
	});
}
, 1500);

// Form validation
document.getElementById('contact-form').addEventListener('click', function (e) {
	e.preventDefault();
	const firstName = document.getElementById('first-name-input');
	const firstNameValue = firstName.value;
	const firstNameErrorMessage = document.getElementById('firstname-error');
	if(firstNameValue.length === 0){
		firstNameErrorMessage.classList.remove('hidden');
	} else {
		firstNameErrorMessage.classList.add('hidden');
	}

	const lastName = document.getElementById('last-name-input');
	const lastNameValue = lastName.value;
	const lastNameErrorMessage = document.getElementById('lastname-error');
	if(lastNameValue.length === 0){
		lastNameErrorMessage.classList.remove('hidden');
	} else {
		lastNameErrorMessage.classList.add('hidden');
	}

	const email = document.getElementById('email-input');
	const emailValue = email.value;
	const emailErrorMessage = document.getElementById('email-error');
	if(emailValue.length === 0){
		emailErrorMessage.classList.remove('hidden');
	} else {
		emailErrorMessage.classList.add('hidden');
	}

	const message = document.getElementById('message');
	const messageValue = message.value;
	const messageErrorMessage = document.getElementById('message-error');
	if(messageValue.length === 0){
		messageErrorMessage.classList.remove('hidden');
	} else {
		messageErrorMessage.classList.add('hidden');
	}
	
	if (firstNameValue.length > 0 && lastNameValue.length > 0 && emailValue.length > 0 && messageValue.length > 0) {
		let message = document.querySelector('.successfull-message-container');
		message.style.display = 'flex';
		message.focus();
		console.log('Prénom: ', firstNameValue);
		console.log('Nom: ', lastNameValue);
		console.log('Email: ', emailValue);
		console.log('Message: ', messageValue);
	} 
});

// Close contact modal
function closeModal() {
	const modal = document.getElementById('contact_modal');
	modal.style.display = 'none';
}

// Close modal with enter key on img
let modal = document.getElementById('contact_modal');
document.querySelector('.modal-close-button').addEventListener('keydown', (e) => {
	if(e.code === 'Enter'){
		modal.style.display = 'none';
	}
});

// Close modal with escape key
document.addEventListener('keydown', (e) => {
	if(e.code === 'Escape'){
		let modal = document.getElementById('contact_modal');
		modal.style.display = 'none';
	}
});

// Close successfull message by clicking
let closeButton = document.querySelector('.message-close-button');
closeButton.addEventListener('click', function () {
	let modal = document.getElementById('contact_modal');
	modal.style.display = 'none';
});

// Close successfull message with enter key on img
closeButton.addEventListener('keydown', (e) => {
	if(e.code === 'Enter'){
		let modal = document.getElementById('contact_modal');
		modal.style.display = 'none';
	}
});