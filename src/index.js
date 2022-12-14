import './index.css';
import postScores from './modules/postScores.js';
import getScores from './modules/getScores.js';
import showScores from './modules/showScores.js';
import showError from './modules/showError.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');
const gameApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8hRoDBBos3wBxkJrnUA9/scores/';
const scoresContainer = document.getElementById('table');

refresh.addEventListener('click', () => {
  scoresContainer.innerHTML = '';
  getScores(gameApi).then((data) => showScores(data.result));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showError();
  postScores(gameApi);
});

window.onload = getScores(gameApi).then((data) => showScores(data.result));