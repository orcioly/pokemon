export async function fetchPokemon(name = '') {
  const url = name ? `/api/data?name=${encodeURIComponent(name)}` : `/api/data`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      if (res.status === 404) {
        throw { message: 'Pokémon não encontrado.', status: 404 };
      }
      const errorData = await res.json();
      throw {
        message: errorData.message || 'Erro desconhecido.',
        status: res.status,
      };
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
}
