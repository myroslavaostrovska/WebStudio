// Select the modal backdrop and close button
const modalBackdrop = document.getElementById('modalBackdrop');
const closeModalButton = document.getElementById('closeModalButton');
const openModalButton = document.getElementById('openModalButton');

// Function to open the modal
function openModal() {
    modalBackdrop.classList.remove('is-hidden');
}

// Function to close the modal
function closeModal() {
    modalBackdrop.classList.add('is-hidden');
}

// Event listener for the open button
openModalButton.addEventListener('click', openModal);

// Event listener for the close button
closeModalButton.addEventListener('click', closeModal);
closeModalButton2.addEventListener('click', closeModal);

