import { fetchPokemon } from './api.js';
import { renderPokemon, renderError } from './dom.js';

const searchForm = document.getElementById('searchForm');
const pokemonNameInput = document.getElementById('pokemonName');
const pokemonResult = document.getElementById('pokemonResult');
const errorMsg = document.getElementById('errorMsg');

async function loadPokemon(name = '') {
  pokemonResult.innerHTML = '';
  errorMsg.textContent = '';
  errorMsg.classList.add('d-none');

  try {
    const data = await fetchPokemon(name);

    if (!data || (Array.isArray(data) && data.length === 0)) {
      renderError('Pokémon não encontrado.', errorMsg);
      return;
    }

    const pokemons = Array.isArray(data) ? data : [data];
    pokemons.forEach(p => renderPokemon(p, pokemonResult));
  } catch (err) {
    renderError(err.message || 'Erro desconhecido.', errorMsg);
  }
}

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = pokemonNameInput.value.trim();
  loadPokemon(name);
});

loadPokemon();
