const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c9d869282be3a3cde4297aecd586bc3e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;