// Comandos para el registro y la creación de cuenta de OndaXplorer
// Selección de elementos
const loginCard = document.querySelector('.card-login');
const registerCard = document.querySelector('.card-register');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Mostrar la tarjeta de registro
showRegister.addEventListener('click', () => {
  loginCard.classList.remove('active');
  registerCard.classList.add('active');
});

// Mostrar la tarjeta de login
showLogin.addEventListener('click', () => {
  registerCard.classList.remove('active');
  loginCard.classList.add('active');
});

// PÁGINAS
document.addEventListener('DOMContentLoaded', () => {
  const paginaregistro = document.querySelector('.paginaregistro');
  const paginaprincipal = document.querySelector('.paginaprincipal');

  function showMainContent() {
    paginaregistro.classList.add('hide');
    paginaprincipal.classList.add('show');
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      showMainContent();
    }
  });
});

// Funcionalidad de tarjetas
document.addEventListener('DOMContentLoaded', () => {
  const mainCard = document.querySelector('.main-card');
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const contentCards = document.querySelectorAll('.content-card');
  let isCardsVisible = false;

  // Función para mostrar las tarjetas
  function showCards() {
    if (!isCardsVisible) {
      cardsWrapper.classList.remove('hide');
      cardsWrapper.classList.add('show');
      isCardsVisible = true;
    }
  }

  // Función para ocultar las tarjetas y el contenido
  function hideCards() {
    if (isCardsVisible) {
      cardsWrapper.classList.remove('show');
      cardsWrapper.classList.add('hide');
      isCardsVisible = false;

      // Ocultar todo el contenido también
      contentCards.forEach(card => {
        card.style.display = 'none';
      });
    }
  }

  // Función para alternar la visibilidad de las tarjetas con clic
  function toggleCards() {
    if (isCardsVisible) {
      hideCards();
    } else {
      showCards();
    }
  }

  // Mostrar el contenido correspondiente
  function showContent(type) {
    // Ocultar todo el contenido primero
    contentCards.forEach(card => {
      card.style.display = 'none';
    });
    // Mostrar el contenido correspondiente
    document.getElementById(`content-${type}`).style.display = 'block';
  }

  // Asignar el evento de clic al ícono de inicio
  mainCard.addEventListener('click', toggleCards);

  // Asignar eventos de clic a las tarjetas
  document.getElementById('card-temas').addEventListener('click', () => showContent('temas'));
  document.getElementById('card-ejercicios').addEventListener('click', () => showContent('ejercicios'));
  document.getElementById('card-laboratorio').addEventListener('click', () => showContent('laboratorio'));
  document.getElementById('card-mas-info').addEventListener('click', () => showContent('mas-info'));

  // Evita que el clic en las tarjetas cierre las tarjetas
  cardsWrapper.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Ocultar tarjetas si se hace clic fuera del ícono de inicio y de las tarjetas
  document.addEventListener('click', (event) => {
    if (!mainCard.contains(event.target) && !cardsWrapper.contains(event.target)) {
      hideCards();
    }
  });
});
