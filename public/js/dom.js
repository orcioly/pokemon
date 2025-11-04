export function renderPokemon(pokemon, container) {
  container.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card p-3 h-100 text-center">
        <img src="${pokemon.image || 'https://via.placeholder.com/150'}"
             alt="${pokemon.name}"
             class="card-img-top mx-auto mb-3">
        <h5 class="card-title text-capitalize">${pokemon.name}</h5>
        <p class="mb-1"><strong>ID:</strong> ${pokemon.id}</p>
        <p class="mb-1"><strong>Height:</strong> ${pokemon.height}</p>
        <p class="mb-1"><strong>Weight:</strong> ${pokemon.weight}</p>
        <p class="mb-1"><strong>Types:</strong> ${pokemon.types?.join(', ') || '-'}</p>
        <p class="mb-0"><strong>Abilities:</strong> ${pokemon.abilities?.join(', ') || '-'}</p>
      </div>
    </div>
  `;
}

export function renderError(message, errorContainer) {
  errorContainer.textContent = message;
  errorContainer.classList.remove('d-none');
}
