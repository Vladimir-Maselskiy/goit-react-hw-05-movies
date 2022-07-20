const KEY = '834c76b3089fde7a8eb63b29983db356';

export async function fetchDayPopularMovies() {
  return await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

export async function fetchMoviesByQuery(query) {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

export async function fetchMovieByID(movieID) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${KEY}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

export async function fetchCast(movieID) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${KEY}&page=1`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

export async function fetchReviews(movieID) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${KEY}&page=1`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
