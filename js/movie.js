const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
let movies = [];

const fetchMovies = async () =>{
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e041aabfca659c157791cbe754bd968d&language=fr&append_to_response=videos,images&query=${search}`).then((res) => res.json());
    console.log(movies);
}

const mobiesDisplay = async ()=>{
    await fetchMovies();

    //movies.results.length = 12; 

    result.innerHTML = movies.results.map((movie) => 
    `
    <li>
        <h2>${movie.original_title}</h2>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <p>${movie.overview}</p>
        <p>${movie.popularity}</p>
        <p>Date de sortie = ${movie.release_date}</p>
       
    </li>
    <hr>
    `
    ).join("");
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    search = searchInput.value;
    mobiesDisplay();
});


