// Seleciona os elementos
const createChallengeBtn = document.getElementById('createChallengeBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Evento para abrir o popup
createChallengeBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

// Evento para fechar o popup
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});
