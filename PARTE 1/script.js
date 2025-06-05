const board = document.getElementById('board');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');

let eggPositions = []; // guarda as posições dos ovos escondidos
let firstEgg = null;
let secondEgg = null;
let lock = false; // evita multiplos cliques
let confirmed = false; // marca se o jogador acertou as posições

// Mostra a modal com mensagem por 2 segundos
function showModal(message) {
  modalText.innerHTML = `<p>${message}</p>`;
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
}

// cria o tabuleiro com 12 células 
function createBoard() {
  for (let i = 0; i < 12; i++) {
    const cell = document.createElement('div');
    cell.dataset.index = i;
    cell.addEventListener('click', handleClick);
    board.appendChild(cell);
  }
}

// posiçoes aleatorias dos ovos
function assignEggs() {
  while (eggPositions.length < 2) {
    const pos = Math.floor(Math.random() * 12);
    if (!eggPositions.includes(pos)) eggPositions.push(pos);
  }
}

// cliques nas células do tabuleiro
function handleClick(e) {
  if (lock) return;

  const index = parseInt(e.target.dataset.index);
  const cell = e.target;

  // ao clicar numa  celula com o ovo
  if (eggPositions.includes(index)) {
    cell.style.backgroundImage = "url('img/Ovo.png')";
    lock = true;

    // o ovo desaparece depois de 3 segundos
    setTimeout(() => {
      if (!confirmed || (confirmed && index !== firstEgg)) {
        cell.style.backgroundImage = "url('img/DiscoverEggs.png')";
      }
      lock = false;
    }, 3000);

    // Primeira tentativa
    if (firstEgg === null) {
      firstEgg = index;
    }
    // Segunda tentativa
    else if (secondEgg === null && index !== firstEgg) {
      secondEgg = index;
      showModal('Agora clica novamente onde viste o primeiro ovo!');
    }
    // modal ao acertar
    else if (firstEgg !== null && secondEgg !== null && index === firstEgg) {
      confirmed = true;
      document.querySelector(`[data-index="${firstEgg}"]`).style.backgroundImage = "url('img/Ovo.png')";
      document.querySelector(`[data-index="${secondEgg}"]`).style.backgroundImage = "url('img/Ovo.png')";
      showModal('Parabéns! :-) Encontraste os dois Ovos de Páscoa!');
      board.querySelectorAll('div').forEach(cell => cell.removeEventListener('click', handleClick));
    }
    // modal ao falhar 
    else if (firstEgg !== null && secondEgg !== null && index !== firstEgg) {
      showModal('Que Memória Fraca! Não acertaste na posição do primeiro Ovo!');
      firstEgg = null;
      secondEgg = null;
    }
  }
}

// inicia o jogo 
window.onload = () => {
  createBoard();
  assignEggs();
  showModal('Boa sorte! Procura os dois ovos de Páscoa escondidos!');
};
