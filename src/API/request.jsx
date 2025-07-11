const API_KEY ='bf544551478354b0fa4da6648ec1077a'

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}